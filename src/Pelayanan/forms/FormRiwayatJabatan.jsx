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
    console.log(fields);
    if (props?.changeListener) {
      console.log('ccchange');
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
        <Form.Label>TINGKAT HUKUMAN </Form.Label>
        <SelectTingkatHukuman
          type="date"
          placeholder="TINGKAT HUKUMAN"
          value={fields?.tingkat_hukuman}
          onChange={(e) => {
            onChangeField(e, 'tingkat_hukuman');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS HUKUMAN </Form.Label>
        <SelectJenisHukuman
          type="date"
          placeholder="JENIS HUKUMAN"
          value={fields?.jenis_hukuman}
          onChange={(e) => {
            onChangeField(e, 'jenis_hukuman');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PELANGGARAN </Form.Label>
        <SelectPelanggaran
          type="date"
          placeholder="PELANGGARAN"
          value={fields?.pelanggaran}
          onChange={(e) => {
            onChangeField(e, 'pelanggaran');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO PERATURAN </Form.Label>
        <SelectPeraturanHukuman
          type="date"
          placeholder="NO PERATURAN"
          value={fields?.nomor_pp}
          onChange={(e) => {
            onChangeField(e, 'nomor_pp');
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
        <Form.Label>TMT HUKUMAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TMT HUKUMAN"
          value={fields?.tmt_sk}
          onChange={(e) => {
            onChangeField(e, 'tmt_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT AKHIR</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="TMT AKHIR"
          value={fields?.tmt_akhir}
          onChange={(e) => {
            onChangeField(e, 'tmt_akhir');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA TAHUN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA TAHUN"
          value={fields?.masa_tahun}
          onChange={(e) => {
            onChangeField(e, 'masa_tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA BULAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="MASA BULAN"
          value={fields?.masa_bulan}
          onChange={(e) => {
            onChangeField(e, 'masa_bulan');
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
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEJABAT PENETAP NAMA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="PEJABAT PENETAP NAMA"
          value={fields?.pejabat_penetap_nama}
          onChange={(e) => {
            onChangeField(e, 'pejabat_penetap_nama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEJABAT PENETAP JABATAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="PEJABAT PENETAP JABATAN"
          value={fields?.pejabat_penetap_jabatan}
          onChange={(e) => {
            onChangeField(e, 'pejabat_penetap_jabatan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
