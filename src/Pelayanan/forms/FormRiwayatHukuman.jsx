import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectPejabatPenetap from '../components/SelectPejabatPenetap';
import SelectTingkatHukuman from '../components/SelectTingkatHukuman';
import SelectJenisHukuman from '../components/SelectJenisHukuman';
import SelectPelanggaran from '../components/SelectPelanggaran';
import SelectPeraturanHukuman from '../components/SelectPeraturanHukuman';

export default (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: null,
    pelanggaran: '',
    tmt_sk: null,
    pejabat_penetap_id: '',
    pejabat_penetap_jabatan: '',
    pejabat_penetap_nip: '',
    pejabat_penetap_nama: '',
    tmt_akhir: null,
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
    if (key == 'pejabat_penetap_id') {
      fields[key] = e.id;
      fields['pejabat_penetap_jabatan'] = e.jabatan;
      fields['pejabat_penetap_nip'] = e.nip;
      fields['pejabat_penetap_nama'] = e.nama;
    } else if (key == 'tingkat_hukuman') {
      fields[key] = e;
    } else if (key == 'jenis_hukuman') {
      fields[key] = e;
    } else if (key == 'pelanggaran') {
      fields[key] = e;
    } else if (key == 'nomor_pp') {
      fields[key] = e;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TINGKAT HUKUMAN </Form.Label>
        <SelectTingkatHukuman
          placeholder="TINGKAT HUKUMAN"
          readOnly={props?.disabledAll}
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
          placeholder="JENIS HUKUMAN"
          readOnly={props?.disabledAll}
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
          placeholder="PELANGGARAN"
          readOnly={props?.disabledAll}
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
          placeholder="NO PERATURAN"
          readOnly={props?.disabledAll}
          value={fields?.nomor_pp}
          onChange={(e) => {
            onChangeField(e, 'nomor_pp');
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
        <Form.Label>TMT HUKUMAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
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
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
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
        <Form.Control
          readOnly={props?.disabledAll}
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
        <Form.Control
          readOnly={props?.disabledAll}
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
          readOnly={props?.disabledAll}
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
