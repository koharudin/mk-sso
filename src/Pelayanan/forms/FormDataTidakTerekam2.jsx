import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';

export default (props) => {
  const [fields, setFields] = useState({
    tgl: '',
    waktu: '',
    alasan: '',
    file: ''
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
    if(e?.target?.files){
      fields[key] = e?.target?.files;
    }
    else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL"
          value={fields?.tgl}
          onChange={(e) => {
            onChangeField(e, 'tgl');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PENGAJUAN JAM ABSEN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="time"
          value={fields?.time}
          onChange={(e) => {
            onChangeField(e, 'time');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ALASAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as={'textarea'}
          placeholder="..."
          value={fields?.alasan}
          onChange={(e) => {
            onChangeField(e, 'alasan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>DOKUMEN PENDUKUNG</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type='file'
          placeholder="DOKUMEN PENDUKUNG"
          onChange={(e) => {
            onChangeField(e, 'file');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
