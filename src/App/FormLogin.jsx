import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Row, Col, Button, Alert, FormControl, InputGroup } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { ApiCall } from '../Api/api';
import { isSubmitting } from 'redux-form';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import CustomTextPassword from './components/CustomTextPassword';

export default ({ className, ...rest }) => {
  const navigate = useNavigate();
  const params = useParams();
  const refPassword = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
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
          let params_authorize = searchParams.get('params_authorize');
          formData.append('username', values.username);
          formData.append('password', values.password);
          if (params_authorize) {
            formData.append('params_authorize', params_authorize);
          }

          ApiCall.post('/login', formData)
            .then((res) => {
              if (res?.data) {
                let data = {
                  user: { username: res?.data?.user?.username, id: res?.data?.user?.id }
                };
                localStorage.setItem('app_data', JSON.stringify(data));
                if (res?.data?.params_authorize ) {
                  navigate('/authorisasi?params_authorize='+res?.data?.params_authorize);
                } else {
                  window.location  = "/dashboard"
                }
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
                type="text"
                name="username"
                placeholder="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
              />
              {touched.username && errors.username && <small className="text-danger form-text">{errors.username}</small>}
            </div>
            <div className="form-group mb-4">
              <CustomTextPassword placeholder="Kata Sandi" onBlur={handleBlur} onChange={handleChange} value={values.password} />
              {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
            </div>

            {errors.submit && (
              <Col sm={12}>
                <Alert variant="danger">{errors.submit}</Alert>
              </Col>
            )}

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
