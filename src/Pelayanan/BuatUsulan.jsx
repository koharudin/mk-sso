import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const BuatUsulan = (props) => {
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
            <Card.Header>Buat Usulan</Card.Header>
            <Card.Body>
               
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BuatUsulan;