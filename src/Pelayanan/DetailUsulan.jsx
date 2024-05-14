import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormUsulanRiwayatPendidikan from './FormUsulanRiwayatPendidikan';


const DetailUsulan = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onSave = () => {
    alert("Save...")
  };
  const onReload = () => {};
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>Detail Usulan</Card.Header>
            <Card.Body>
               
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DetailUsulan;
