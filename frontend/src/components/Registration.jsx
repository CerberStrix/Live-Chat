import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import avatar from '../assets/avatar_1.jpg';
import { registrationSchema } from '../utils/validation';
import fetchReg from '../utils/fetchReg';
import useAuth from '../hooks/useAuth.jsx';
import authMapping from '../utils/mapping';

const Registration = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const inputRef = useRef(null);
  const auth = useAuth();
  const { logIn } = auth;
  const [feedbackState, setFeedback] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const renderFeedback = () => {
    if (!feedbackState) {
      return null;
    }
    return (
      <Alert className="my-2" style={{ textAlign: 'center' }} variant="danger">
        {t('account_exist')}
      </Alert>
    );
  };

  return (
    <Formik
      validationSchema={registrationSchema}
      onSubmit={async ({ username, password }) => {
        const response = await fetchReg({ username, password });
        authMapping[response.status](response, logIn, setFeedback, navigate);
      }}
      initialValues={{
        username: '',
        password: '',
        changepassword: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
      }) => (
        <Form onSubmit={handleSubmit} className="formLogin">
          <Container>
            <Card className="m-5 shadow-sm">
              <Card.Body className="p-5">
                <Row>
                  <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                    <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <img className="rounded-circle" src={avatar} alt={t('registration')} />
                    </div>
                  </Col>
                  <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                    <h1 className="my-3" style={{ textAlign: 'center' }}>{t('registration')}</h1>
                    <Form.Group controlId="validationFormik01" className="formGroup mb-3">
                      <Form.Control
                        ref={inputRef}
                        type="text"
                        placeholder={t('user_name')}
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={touched.username && !!errors.username}
                      />
                      {errors.username && touched.username ? (
                        <div className="invalid-feedback">{t(errors.username)}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group controlId="validationFormik02" className="formGroup mb-3">
                      <Form.Control
                        type="password"
                        placeholder={t('password')}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && !!errors.password}
                      />
                      {errors.password && touched.password ? (
                        <div className="invalid-feedback">{t(errors.password)}</div>
                      ) : null}
                    </Form.Group>
                    <Form.Group controlId="validationFormik03" className="formGroup mb-3">
                      <Form.Control
                        type="password"
                        placeholder={t('password')}
                        name="changepassword"
                        value={values.changepassword}
                        onChange={handleChange}
                        isInvalid={touched.changepassword && !!errors.changepassword}
                      />
                      {errors.changepassword && touched.changepassword ? (
                        <div className="invalid-feedback">{t(errors.changepassword)}</div>
                      ) : null}
                      {renderFeedback()}
                    </Form.Group>

                    <button type="submit" className="btn btn-outline-primary btn-block w-100">
                      {t('join')}
                    </button>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-4">
                <div style={{ textAlign: 'center' }}>
                  <span className="m-1">{t('have_an_account')}</span>
                  <a href="/login">
                    {t('join')}
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Registration;
