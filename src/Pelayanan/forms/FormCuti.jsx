import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectCuti from '../components/SelectCuti';
import SelectDetailJenisCuti from '../components/SelectDetailJenisCuti';

export default (props) => {
  const [fields, setFields] = useState({
    tgl_mulai: null,
    tgl_selesai: null,
    jenis_cuti: '',
    detail_jenis_cuti: '',
    alasan: '',
    dokumen_pendukung: '',
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
    if(key =="jenis_cuti"){
      fields[key] = e?.id
    }
    else  if(key =="detail_jenis_cuti"){
      fields[key] = e?.id
    }
    else if (key == 'dokumen_pendukung') {
      fields[key] = e?.target?.files;
    } 
    else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>{JSON.stringify(fields)}
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS CUTI</Form.Label>
        <SelectCuti name="jenis_cuti"
          value={fields?.jenis_cuti}
          onChange={(e) => {
            onChangeField(e, 'jenis_cuti');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>DETAIL JENIS CUTI</Form.Label>
        <SelectDetailJenisCuti parent_id={fields?.jenis_cuti}
          value={fields?.detail_jenis_cuti}  name="detail_jenis_cuti"
          onChange={(e) => { 
            onChangeField(e, 'jenis_cuti');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL MULAI</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL MULAI"
          value={fields?.tgl_mulai}
          onChange={(e) => {
            onChangeField(e, 'tgl_mulai');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL SELESAI</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL SELESAI"
          value={fields?.tgl_selesai}
          onChange={(e) => {
            onChangeField(e, 'tgl_selesai');
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
        <Form.Label>DOKUMEN</Form.Label>
        <UploadFile
          readOnly={props?.disabledAll}
          type="file" name="dokumen_pendukung"
          value={fields.dokumen_pendukung}
          onChangeField={(e) => {
            onChangeField(e, 'dokumen_pendukung');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
