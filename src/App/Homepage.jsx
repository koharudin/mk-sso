import React, { useEffect } from 'react';
import AppApi from '../Api/app_api';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Breadcrumb from '../layouts/AdminLayout/Breadcrumb';
import { FaCheck, FaKey } from 'react-icons/fa';

export default (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };
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
          <Card>
            <Card.Header>
              <Card.Title as={'h5'}>Aplikasi Single Sign On</Card.Title>
            </Card.Header>
            <Card.Body>
              sebuah mekanisme yang memungkinkan pengguna untuk mengakses beberapa aplikasi atau sistem dengan satu set kredensial login
              (seperti username dan password) sekali saja. <hr></hr>
              <center>
                <b>
                  <FaCheck></FaCheck> MUDAH
                </b>{' '}
                dan{' '}
                <b>
                  <FaKey></FaKey> AMAN
                </b>
              </center>
            </Card.Body>
            <Card.Footer>
              <center>
                <Button onClick={onClick}>Login</Button>
              </center>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
