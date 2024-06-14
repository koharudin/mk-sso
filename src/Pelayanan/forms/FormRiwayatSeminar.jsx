import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';

export default (props) => {
  const [fields, setFields] = useState({
    nama: '',
    tempat: '',
    penyelenggara: '',
    no_piagam: '',
    tgl_piagam: null,
    tahun: '',
    tgl_mulai: null,
    tgl_selesai: null,
    jumlah_jam: '',
    status: '',
    peran: ''
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
        <Form.Label>NAMA SEMINAR</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA SEMINAR"
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
        <Form.Label>NO PIAGAM</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO PIAGAM"
          value={fields?.no_piagam}
          onChange={(e) => {
            onChangeField(e, 'no_piagam');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL PIAGAM</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL PIAGAM"
          value={fields?.tgl_piagam}
          onChange={(e) => {
            onChangeField(e, 'tgl_piagam');
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
          value={fields?.jumlah_jam}
          onChange={(e) => {
            onChangeField(e, 'jumlah_jam');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>STATUS</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="STATUS"
          value={fields?.status}
          onChange={(e) => {
            onChangeField(e, 'status');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PERAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="PERAN"
          value={fields?.peran}
          onChange={(e) => {
            onChangeField(e, 'peran');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
