import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';
import SelectJenisPenghargaan from '../components/SelectJenisPenghargaan';

export default (props) => {
  const [fields, setFields] = useState({
    nama_penghargaan: '',
    no_sk: '',
    tgl_sk: null,
    pejabat_penetap_jabatan: '',
    tahun: '',
    jenis_penghargaan: '',
    pejabat_penetap_id: '',
    pejabat_penetap_nip: '',
    pejabat_penetap_nama: '',
    jenis_penghargaan_id: ''
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
    if (key == 'jenis_penghargaan_id') {
      fields[key] = e?.id;
    } else if (key == 'pejabat_penetap_id') {
      fields[key] = e?.id;
      fields['pejabat_penetap_nip'] = e?.nip;
      fields['pejabat_penetap_nama'] = e?.nama;
      fields['pejabat_penetap_jabatan'] = e?.jabatan;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      {JSON.stringify(fields)}
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS PENGHARGAAN</Form.Label>
        <SelectJenisPenghargaan
          placeholder="JENIS PENGHARGAAN"
          readOnly={props?.disabledAll}
          value={fields?.jenis_penghargaan_id}
          onChange={(e) => {
            onChangeField(e, 'jenis_penghargaan_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SK"
          value={fields?.no_sk}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SK"
          value={fields?.tgl_sk}
          onChange={(e) => {
            onChangeField(e, 'tgl_sk');
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
        <Form.Label>PEJABAT PENETAP</Form.Label>
        <SelectPejabatPenetap
          value={fields?.pejabat_penetap_id}
          onChange={(e) => {
            onChangeField(e, 'pejabat_penetap_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
