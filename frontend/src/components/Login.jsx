import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import avatar from '../assets/avatar.jpg';
import loginSchema from '../utils/validationSchema';

const Login = () => {
  const { t } = useTranslation();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Formik
      validationSchema={loginSchema}
      onSubmit={() => {
      }}
      initialValues={{
        name: '',
        password: '',
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
                      <img className="rounded-circle" src={avatar} alt={t('join')} />
                    </div>
                  </Col>
                  <Col xs={{ span: 6 }} sm={{ span: 6 }}>
                    <h1 className="my-3" style={{ textAlign: 'center' }}>{t('join')}</h1>
                    <Form.Group controlId="validationFormik01" className="formGroup mb-3">
                      <Form.Control
                        ref={inputRef}
                        type="text"
                        placeholder={t('your nickname')}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && !!errors.name}
                      />
                    </Form.Group>
                    <Form.Group controlId="validationFormik03" className="formGroup mb-3">
                      <Form.Control
                        type="password"
                        placeholder={t('password')}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && !!errors.password}
                      />
                    </Form.Group>
                    <button type="submit" className="btn btn-outline-primary btn-block w-100">
                      {t('join')}
                    </button>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="p-4">
                <div style={{ textAlign: 'center' }}>
                  <span className="m-1">{t('doesnt hava account?')}</span>
                  <a href="/">
                    {t('registration')}
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

export default Login;