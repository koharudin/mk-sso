import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import { useEffect } from 'react';

const FormRiwayatAnak = (props) => {
  const [fields, setFields] = useState({
    name: '',
    birth_place: '',
    birth_date: '',
    sex: 'L',
    pekerjaan: '',
    status_keluarga: '',
    status_tunjangan: '',
    bln_dibayar: '',
    bln_akhir_dibayar: ''
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


  useEffect(()=>{
    console.log(fields)
    if(props?.changeListener){
      console.log("ccchange")
      props?.changeListener({...fields})
    }
    
  },[fields])
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA</Form.Label>
        <Form.Control
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
        <Form.Control
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
        <Form.Control
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
        <Form.Label>STATUS KELUARGA</Form.Label>
        <SelectStatusKeluarga
          value={fields?.status_keluarga}
          onChange={(e) => {
            onChangeField(e, 'status_keluarga');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>{' '}
      <Form.Group className="mb-3">
        <Form.Label>STATUS TUNJANGAN</Form.Label>
        <SelectDapatTunjangan
          value={fields?.status_tunjangan}
          onChange={(e) => {
            onChangeField(e, 'status_tunjangan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>{' '}
      <Form.Group className="mb-3">
        <Form.Label>BLN DIBAYAR</Form.Label>
        <Form.Control
          type="date"
          placeholder="..."
          value={fields?.bln_dibayar}
          onChange={(e) => {
            onChangeField(e, 'bln_dibayar');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>BLN AKHIR DIBAYAR</Form.Label>
        <Form.Control
          type="date"
          placeholder="..."
          value={fields?.bln_akhir_dibayar}
          onChange={(e) => {
            onChangeField(e, 'bln_akhir_dibayar');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
export default FormRiwayatAnak;
