import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';

export default (props) => {
  const [fields, setFields] = useState({
    name: '',
    birth_place: '',
    birth_date: '',
    sex: 'L',
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
    console.log(fields);
    if (props?.changeListener) {
      console.log('ccchange');
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
        <Form.Label>NAMA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="Nama"
          value={fields?.name}
          onChange={(e) => {
            onChangeField(e, 'name');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TEMPAT LAHIR</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="..."
          value={fields?.birth_place}
          onChange={(e) => {
            onChangeField(e, 'birth_place');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TANGGAL LAHIR</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="..."
          value={fields?.birth_date}
          onChange={(e) => {
            onChangeField(e, 'birth_date');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>JENIS KELAMIN</Form.Label>
        <SelectSex
          value={fields?.sex}
          onChange={(e) => {
            onChangeField(e, 'sex');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>PEKERJAAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="..."
          value={fields?.pekerjaan}
          onChange={(e) => {
            onChangeField(e, 'pekerjaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ALAMAT</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as="textarea"
          placeholder="ALAMAT"
          value={fields?.alamat}
          onChange={(e) => {
            onChangeField(e, 'alamat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TELEPON</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
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
