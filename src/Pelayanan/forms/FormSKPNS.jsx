import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectPangkat from '../components/SelectPangkat';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';

export default (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: null,
    tmt_pns: null,
    pejabat_penetap_id: '',
    pejabat_penetap_jabatan: '',
    pejabat_penetap_nip: '',
    pejabat_penetap_nama: '',
    pangkat_id: '',
    pangkat_text: '',
    sumpah: '',
    no_ujikes: '',
    tgl_ujikes: null,
    no_prajab: '',
    tgl_prajab: null,
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
    if (key == 'pangkat_id') {
      fields[key] = e?.id;
      fields['pangkat_text'] = e?.name;
    } else if (key == 'pejabat_penetap_id') {
      fields[key] = e?.id;
      fields['pejabat_penetap_nip'] = e?.nip;
      fields['pejabat_penetap_nama'] = e?.nama;
      fields['pejabat_penetap_jabatan'] = e?.jabatan;
    } else if (key == 'pejabat_penetap_id_sk_penyesuaian_mk') {
      fields[key] = e?.id;
      fields['pejabat_penetap_sk_penyesuaian_mk_nip'] = e?.nip;
      fields['pejabat_penetap_sk_penyesuaian_mk_nama'] = e?.nama;
      fields['pejabat_penetap_sk_penyesuaian_mk_jabatan'] = e?.jabatan;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
    //setFields(fields);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SURAT KEPUTUSAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SURAT KEPUTUSAN"
          value={fields?.no_sk}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SURAT KEPUTUSAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SURAT KEPUTUSAN"
          value={fields?.tgl_sk}
          onChange={(e) => {
            onChangeField(e, 'tgl_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT PNS</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TMT PNS"
          value={fields?.tmt_pns}
          onChange={(e) => {
            onChangeField(e, 'tmt_pns');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO DIKLAT PRAJABATAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO DIKLAT PRAJABATAN
          "
          value={fields?.no_prajab}
          onChange={(e) => {
            onChangeField(e, 'no_prajab');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL DIKLAT PRAJABATAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL DIKLAT PRAJABATAN
          "
          value={fields?.tgl_prajab}
          onChange={(e) => {
            onChangeField(e, 'tgl_prajab');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SURAT UJI KESEHATAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO SURAT UJI KESEHATAN
          "
          value={fields?.no_ujikes}
          onChange={(e) => {
            onChangeField(e, 'no_ujikes');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL TGL SURAT UJI KESEHATAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL SURAT UJI KESEHATAN
          "
          value={fields?.tgl_ujikes}
          onChange={(e) => {
            onChangeField(e, 'tgl_ujikes');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          readOnly={props?.disabledAll}
          placeholder="PANGKAT"
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
