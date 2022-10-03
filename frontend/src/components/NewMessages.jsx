import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewMessages = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const btnClass = cn('btn btn-group-vertical', {
    disabled: message.length <= 0,
  });

  return (
    <div className="mt-auto px-5 py-2">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder={t('enter_message')}
          aria-label={t('enter_message')}
          aria-describedby="basic-addon2"
          value={message}
          onChange={handleChange}
          ref={inputRef}
        />
        <Button variant="outline-secondary" id="button-addon2" className={btnClass} type="submit" style={{ alignItems: 'center', outline: 'none' }}>
          <ion-icon size="small" name="arrow-forward-outline" />
        </Button>
      </InputGroup>
    </div>
  );
};

export default NewMessages;
