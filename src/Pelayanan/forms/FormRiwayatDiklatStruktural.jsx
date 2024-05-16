import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';
import SelectJenisDiklatStruktural from '../components/SelectJenisDiklatStruktural';

const FormRiwayatDiklatStruktural = (props) => {
  const [fields, setFields] = useState({
    jenis_diklat : "",
    nama_diklat :"",
    penyelenggara : "",
    tempat :"",
    angkatan : "",
    no_sttpp: "",
    tgl_sttpp : "",
    tahun : "",
    tgl_mulai : "",
    tgl_selesai : ""
  });
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
    <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS DIKLAT</Form.Label>
        <SelectJenisDiklatStruktural
          type="date"
          placeholder="JENIS DIKLAT"
          value={fields?.jenis_diklat}
          onChange={(e) => {
            onChangeField(e, 'jenis_diklat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA DIKLAT</Form.Label>
        <Form.Control
          type="text"
          placeholder="NAMA DIKLAT"
          value={fields?.nama_diklat}
          onChange={(e) => {
            onChangeField(e, 'nama_diklat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PENYELENGGARA</Form.Label>
        <Form.Control
          type="text"
          placeholder="PENYELENGGARA"
          value={fields?.penyelenggara}
          onChange={(e) => {
            onChangeField(e, 'penyelenggara');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT</Form.Label>
        <Form.Control
          type="text"
          placeholder="TEMPAT"
          value={fields?.tempat}
          onChange={(e) => {
            onChangeField(e, 'tempat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>ANGKATAN</Form.Label>
        <Form.Control
          type="text"
          placeholder="ANGKATAN"
          value={fields?.angkatan}
          onChange={(e) => {
            onChangeField(e, 'angkatan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SERTIFIKAT</Form.Label>
        <Form.Control
          type="text"
          placeholder="NO SERTIFIKAT"
          value={fields?.no_sttpp}
          onChange={(e) => {
            onChangeField(e, 'no_sttpp');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SERTIFIKAT</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL SERTIFIKAT"
          value={fields?.tgl_sttpp}
          onChange={(e) => {
            onChangeField(e, 'tgl_sttpp');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TAHUN</Form.Label>
        <Form.Control
          type="text"
          placeholder="TAHUN"
          value={fields?.tahun}
          onChange={(e) => {
            onChangeField(e, 'tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL MULAI</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL MULAI"
          value={fields?.tgl_mulai}
          onChange={(e) => {
            onChangeField(e, 'tgl_mulai');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SELESAI</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL SELESAI"
          value={fields?.tgl_selesai}
          onChange={(e) => {
            onChangeField(e, 'tgl_selesai');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
export default FormRiwayatDiklatStruktural;
