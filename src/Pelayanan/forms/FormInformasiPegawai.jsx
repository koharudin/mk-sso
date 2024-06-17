import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import { useEffect } from 'react';

export default (props) => {
  const [fields, setFields] = useState({
    first_name: '',
    last_name: '',
    agama_id: '',
    nip_baru: '',
    gelar_depan: '',
    gelar_belakang: '',
    birth_place: '',
    birth_date: null,
    sex: '',
    status_kawin: '',
    golongan_darah: '',
    email_kantor: '',
    email: '',
    foto: '',
    alamat: '',
    karpeg: '',
    taspen: '',
    npwp: '',
    askes: '',
    nik: '',
    no_hp: ''
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
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>FIRST NAME</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="Nama"
          value={fields?.first_name}
          onChange={(e) => {
            onChangeField(e, 'first_name');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TEMPAT LAHIR</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
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
        <Form.Control
          readOnly={props?.disabledAll}
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
    </>
  );
};
