import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../../components/SelectSex';
import SelectStatusKeluarga from '../../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../../components/SelectStatusKeluarga';

export default (props) => {
  const [fields, setFields] = useState({
    tgl: '',
    tap: '',
    alasan: '',
    file: ''
  });
  const onChangeField = (e, key) => {
    fields[key] = e.target?.value;
    setFields({ ...fields });
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Tanggal</Form.Label>
        <Form.Control
          type="date"
          placeholder="Nama"
          value={fields?.tgl}
          onChange={(e) => {
            onChangeField(e, 'tgl');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Pengajuan Jam Absen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nama"
          value={fields?.tap}
          onChange={(e) => {
            onChangeField(e, 'tap');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ALASAN</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="ALASAN"
          value={fields?.alasan}
          onChange={(e) => {
            onChangeField(e, 'alasan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
