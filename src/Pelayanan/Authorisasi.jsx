import React from 'react';
import { Card, Form, FormControl } from 'react-bootstrap';
import Breadcrumb from '../layouts/AdminLayout/Breadcrumb';
import { Formik } from 'formik';
import Button from './components/Button';
import * as Yup from 'yup';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ApiCall } from '../Api/api';
export default ({ className, ...rest }) => {
  const [agreeText, setAgreeText] = useState('Saya menolak permintaan akses ini');

  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless text-center">
            <Card.Body>
              <div className="mb-4">
                <i className="feather icon-unlock auth-icon" /> Single Sign On
              </div>
              <hr></hr>
              <>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, { setSubmitting }) => {
                    const formData = new FormData();
                    formData.append('check', values.check);
                    let p = searchParams.get('params_authorize');
                    let j = atob(p);
                    let aj = JSON.parse(j);
                    formData.append('params_authorize', p);
                    ApiCall.post('/oauth/authorize', { ...aj, ...{ authorized: values.check ? true : false } })
                      .then((res) => {
                        if (res?.data) {
                          window.location = res?.data?.redirect_url;
                        }
                      })
                      .catch((err) => {
                        if (err?.response?.data) {
                          alert(err.response.data);
                        }
                      })
                      .finally(() => {
                        setSubmitting(false);
                        alert(2);
                      });
                  }}
                >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
                      <div className="form-group mb-3">
                        <Form.Check
                          type="checkbox"
                          name="check"
                          placeholder="Menyetujui"
                          onBlur={handleBlur}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAgreeText('Saya MENYETUJUI permintaan akses ini');
                            } else if (!e.target.checked) {
                              setAgreeText('Saya MENOLAK permintaan akses ini');
                            }
                            handleChange(e);
                          }}
                          value={values.check}
                          label={agreeText}
                        />
                        {touched.check && errors.check && <small className="text-danger form-text">{errors.check}</small>}
                      </div>
                      <Button className="btn-block" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                        Konfirmasi
                      </Button>
                    </form>
                  )}
                </Formik>
              </>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
