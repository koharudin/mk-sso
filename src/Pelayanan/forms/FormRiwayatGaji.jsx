import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';
import SelectJenisKenaikanGaji from '../components/SelectJenisKenaikanGaji';
import { NumericFormat } from 'react-number-format';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';

export default (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: null,
    tmt_sk: '',
    pejabat_penetap_id: '',
    pejabat_penetap_nama: '',
    pejabat_penetap_jabatan: '',
    pejabat_penetap_nip: '',
    masakerja_tahun: '',
    masakerja_bulan: '',
    jenis_kenaikan: '',
    pangkat_id: '',
    pangkat_text : '',
    gaji_pokok: ''
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
    }
    else if (key == 'pejabat_penetap_id') {
      fields[key] = e;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
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
        <Form.Label>MASA KERJA TAHUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA KERJA TAHUN"
          value={fields?.masakerja_tahun}
          onChange={(e) => {
            onChangeField(e, 'masakerja_tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA BULAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA KERJA BULAN"
          value={fields?.masakerja_bulan}
          onChange={(e) => {
            onChangeField(e, 'masakerja_bulan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS KENAIKAN {fields?.jenis_kenaikan}</Form.Label>
        <SelectJenisKenaikanGaji
          placeholder="JENIS KENAIKAN"
          readOnly={props?.disabledAll}
          value={fields?.jenis_kenaikan}
          onChange={(e) => {
            onChangeField(e, 'jenis_kenaikan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          placeholder="PANGKAT"
          readOnly={props?.disabledAll}
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>GAJI POKOK</Form.Label>
        <NumericFormat
          prefix={'Rp. '}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          className="form-control"
          valueIsNumericString={true}
          value={fields?.gaji_pokok}
          onValueChange={(e) => {
            onChangeField(e, 'gaji_pokok');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEJABAT PENETAP</Form.Label>
        <SelectPejabatPenetap
          placeholder="PEJABAT PENETAP"
          readOnly={props?.disabledAll}
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
