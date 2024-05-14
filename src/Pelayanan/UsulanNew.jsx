import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormUsulanRiwayatPendidikan from './FormUsulanRiwayatPendidikan';

const GridRecord = ()=>{

}
const Init = ()=>{

}
const Form = ()=>{

}
const Detail = ()=>{

}
const FormUsulan = (props) => {
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
            <Card.Body>
               <FormUsulanRiwayatPendidikan/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormUsulan;
