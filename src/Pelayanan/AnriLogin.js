import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Row, Col, Button, Alert, FormControl, InputGroup } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ApiCall } from '../Api/api';
import { isSubmitting } from 'redux-form';
import { useNavigate } from 'react-router-dom';

export default ({ className, ...rest }) => {
  const navigate = useNavigate();
  const refPassword = useRef();
  const [inputTypePassword, setInputTypePassword] = useState('password');
  const switchPasswordText = () => {
    setInputTypePassword(inputTypePassword=="password"?"text":"password")
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: '',
          password: '',
          submit: null
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append('username', values.username);
          formData.append('password', values.password);
          ApiCall.post('/login-token', formData)
            .then((res) => {
              if (res?.data) {
                localStorage.setItem('app_data', JSON.stringify({ token: res.data.token, user: res.data.user }));
                window.location = './dashboard';
              }
            })
            .catch((err) => {
              if (err?.response?.data) {
                alert(err.response.data);
              }
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required('Username is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
            <div className="form-group mb-3">
              <FormControl
                  type={inputTypePassword}
                  name='username' placeholder='Username'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                />
              {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
            </div>
            <div className="form-group mb-4">
              <InputGroup>
                <FormControl
                  type={inputTypePassword} placeholder='Kata Sandi'
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <Button onClick={switchPasswordText}>{inputTypePassword=="password"?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}</Button>
              </InputGroup>
              {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
            </div>

            {errors.submit && (
              <Col sm={12}>
                <Alert variant="danger">{errors.submit}</Alert>
              </Col>
            )}

            <div className="custom-control custom-checkbox  text-start mb-4 mt-2">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                Save credentials.
              </label>
            </div>

            <Row>
              <Col mt={2}>
                <Button className="btn-block" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                  Signin
                </Button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>

      <hr />
    </React.Fragment>
  );
};
