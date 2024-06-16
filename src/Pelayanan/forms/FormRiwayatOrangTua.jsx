import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectOrangTua from '../components/SelectOrangTua';

export default (props) => {
  const [fields, setFields] = useState({
    name: '',
    status: '',
    birth_place: '',
    birth_date: null,
    pekerjaan: '',
    alamat: '',
    telepon: ''
  });
  useEffect(() => {
    if (props?.refData) {
      setFields({ ...props?.refData });
    }
  }, [props?.refData]);

  useEffect(() => {
    if (props?.recordData) {
      setFields({ ...props?.recordData });
    }
  }, [props?.recordData]);

  useEffect(() => {
    if (props?.changeListener) {
      props?.changeListener({ ...fields });
    }
  }, [fields]);
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>STATUS</Form.Label>
        <SelectOrangTua
          type="orangtua"
          readOnly={props?.disabledAll}
          placeholder="STATUS"
          value={fields?.status}
          onChange={(e) => {
            onChangeField(e, 'status');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA"
          value={fields?.name}
          onChange={(e) => {
            onChangeField(e, 'name');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT LAHIR</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="TEMPAT LAHIR"
          value={fields?.birth_place}
          onChange={(e) => {
            onChangeField(e, 'birth_place');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL LAHIR</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL LAHIR"
          value={fields?.birth_date}
          onChange={(e) => {
            onChangeField(e, 'birth_date');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEKERJAAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="PEKERJAAN"
          value={fields?.pekerjaan}
          onChange={(e) => {
            onChangeField(e, 'pekerjaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>ALAMAT</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          as="textarea"
          placeholder="ALAMAT"
          value={fields?.alamat}
          onChange={(e) => {
            onChangeField(e, 'alamat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TELEPON</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="TELEPON"
          value={fields?.telepon}
          onChange={(e) => {
            onChangeField(e, 'telepon');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
