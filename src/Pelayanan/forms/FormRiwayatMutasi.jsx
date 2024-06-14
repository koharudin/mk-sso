import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';
import SelectJenisKenaikanGaji from '../components/SelectJenisKenaikanGaji';
import { NumericFormat } from 'react-number-format';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';
import SelectTingkatHukuman from '../components/SelectTingkatHukuman';
import SelectJenisHukuman from '../components/SelectJenisHukuman';
import SelectPelanggaran from '../components/SelectPelanggaran';
import SelectPeraturanHukuman from '../components/SelectPeraturanHukuman';

export default (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: '',
    pelanggaran: '',
    tmt_sk: '',
    pejabat_penetap_id: '',
    pejabat_penetap_jabatan: '',
    pejabat_penetap_nip: '',
    pejabat_penetap_nama: '',
    tmt_akhir: '',
    masa_bulan: '',
    masa_tahun: '',
    nomor_pp: '',
    tingkat_hukuman: ''
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
        <Form.Label>SATKER LAMA </Form.Label>
        <SelectUnitKerja
          placeholder="SATUAN KERJA LAMA"
          value={fields?.satker_lama}
          onChange={(e) => {
            onChangeField(e, 'satker_lama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>SATKER BARU </Form.Label>
        <SelectUnitKerja
          placeholder="SATUAN KERJA BARU"
          value={fields?.satker_baru}
          onChange={(e) => {
            onChangeField(e, 'satker_baru');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
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
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TGL SK"
          value={fields?.tgl_sk}
          onChange={(e) => {
            onChangeField(e, 'tgl_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT SK</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TMT SK"
          value={fields?.tmt_sk}
          onChange={(e) => {
            onChangeField(e, 'tmt_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEJABAT PENETAP</Form.Label>
        <SelectPejabatPenetap
          placeholder="PEJABAT PENETAP"
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
