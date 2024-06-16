import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectJenisDiklatSIASN from '../components/SelectJenisDiklatSIASN';
export default (props) => {
  const [fields, setFields] = useState({
    nama: '',
    tempat: '',
    penyelenggara: '',
    angkatan: '',
    tahun: '',
    tgl_mulai: null,
    tgl_selesai: null,
    no_sttpp: '',
    tgl_sttpp: null,
    lama_jam: '',
    jenis_diklat_siasn: ''
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
    if (key == 'jenis_diklat_siasn') {
      fields[key] = e;
    } else {
      fields[key] = e?.target?.value;
    }

    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS DIKLAT</Form.Label>
        <SelectJenisDiklatSIASN
          name="jenis_diklat_siasn"
          placeholder="JENIS DIKLAT"
          value={fields?.jenis_diklat_siasn}
          onChange={(e) => {
            onChangeField(e, 'jenis_diklat_siasn');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA KURSUS</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA KURSUS"
          value={fields?.nama}
          onChange={(e) => {
            onChangeField(e, 'nama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PENYELENGGARA</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SELESAI"
          value={fields?.tgl_selesai}
          onChange={(e) => {
            onChangeField(e, 'tgl_selesai');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JUMLAH JAM</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="JUMLAH JAM"
          value={fields?.lama_jam}
          onChange={(e) => {
            onChangeField(e, 'lama_jam');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
