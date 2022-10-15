import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, FormControl, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { validateName } from '../../utils/validation.js';
import { actions as UIActions } from '../../slices/UISlice.js';
import { selectors as channelsSelectors } from '../../slices/channelsSlice.js';
import useChatApi from '../../hooks/useChatApi';

const RenameChannel = () => {
  const { t } = useTranslation();
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.currentUI.showModal);
  const channelsState = useSelector(channelsSelectors.selectAll);
  const existChannel = channelsState.map(({ name }) => name);
  const schema = validateName(existChannel);
  const { renameChannel } = useChatApi();
  const targetChannel = useSelector((state) => state.currentUI.targetChannel);

  useEffect(() => {
    inputEl.current.focus();
    inputEl.current.select();
  });

  const hideHandle = () => {
    dispatch(UIActions.hideModal());
  };

  return (
    <Modal
      show={modalStatus}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={hideHandle}>
        <Modal.Title>{t('rename_channel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          validationSchema={schema}
          initialValues={{
            name: targetChannel.name,
          }}
          onSubmit={(values) => {
            renameChannel(targetChannel, values);
            dispatch(UIActions.hideModal());
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                ref={inputEl}
                isInvalid={touched.name && !!errors.name}
                className="mb-2"
              />
              {errors.name && touched.name ? (
                <div className="invalid-feedback">{t(errors.name)}</div>
              ) : null}
              <div className="text-end">
                <button type="button" className="btn btn-secondary btn-block mx-1" onClick={() => hideHandle()}>{t('cancel')}</button>
                <button type="submit" className="btn btn-primary btn-block">{t('send')}</button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannel;
