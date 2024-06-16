import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

export default (props) => {
  const [fields, setFields] = useState({
    nama: '',
    jabatan: '',
    awal: null,
    akhir: null,
    pimpinan: '',
    tempat: ''
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
        <Form.Label>NAMA ORGANISASI</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA ORGANISASI"
          value={fields?.nama}
          onChange={(e) => {
            onChangeField(e, 'nama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JABATAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="JABATAN"
          value={fields?.jabatan}
          onChange={(e) => {
            onChangeField(e, 'jabatan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AWAL</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="AWAL"
          value={fields?.awal}
          onChange={(e) => {
            onChangeField(e, 'awal');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AKHIR</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="AKHIR"
          value={fields?.akhir}
          onChange={(e) => {
            onChangeField(e, 'akhir');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PIMPINAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="PIMPINAN"
          value={fields?.pimpinan}
          onChange={(e) => {
            onChangeField(e, 'pimpinan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TEMPAT"
          value={fields?.tempat}
          onChange={(e) => {
            onChangeField(e, 'tempat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
