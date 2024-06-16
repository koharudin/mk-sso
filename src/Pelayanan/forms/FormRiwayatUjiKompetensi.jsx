import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useEffect } from 'react';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectKategoriPemetaan from '../components/SelectKategoriPemetaan';
import SelectMetodeUjiKompetensi from '../components/SelectMetodeUjiKompetensi';
import SelectKotakTalenta from '../components/SelectKotakTalenta';

export default (props) => {
  const [fields, setFields] = useState({
    tipe_jabatan_id: 1,
    jabatan_id: '',
    jabatan_text: '',
    satuan_kerja_id: '',
    satuan_kerja_text: '',
    kategori_pemetaan_id: '',
    metode: '',
    kotak_talenta: '',
    tanggal: null
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
    if (key == 'jabatan_id') {
      fields[key] = e?.id;
      fields['jabatan_text'] = e?.name;
      fields['tipe_jabatan_id'] = e.tipe_jabatan_id;
    } else if (key == 'satuan_kerja_id') {
      fields[key] = e?.id;
      fields['satuan_kerja_text'] = e?.name;
    } else if (key == 'kategori_pemetaan_id') {
      fields[key] = e?.id;
      fields['kategori_pemetaan_text'] = e?.name;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
    {JSON.stringify(fields)}
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JABATAN</Form.Label>
        <SelectJabatan tipe_jabatan={fields?.tipe_jabatan_id}
          readOnly={props?.disabledAll}
          placeholder="JABATAN"
          value={fields?.jabatan_id}
          onChange={(e) => {
            onChangeField(e, 'jabatan_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>SATUAN KERJA</Form.Label>
        <SelectUnitKerja
          readOnly={props?.disabledAll}
          placeholder="SATUAN KERJA"
          value={fields?.satuan_kerja_id}
          onChange={(e) => {
            onChangeField(e, 'satuan_kerja_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KATEGORI PEMETAAN</Form.Label>
        <SelectKategoriPemetaan
          readOnly={props?.disabledAll}
          placeholder="KATEGORI PEMETAAN"
          value={fields?.kategori_pemetaan_id}
          onChange={(e) => {
            onChangeField(e, 'kategori_pemetaan_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>METODE</Form.Label>
        <SelectMetodeUjiKompetensi
          readOnly={props?.disabledAll}
          placeholder="KATEGORI PEMETAAN"
          value={fields?.metode}
          onChange={(e) => {
            onChangeField(e, 'metode');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KOTAK TALENTA</Form.Label>
        <SelectKotakTalenta
          readOnly={props?.disabledAll}
          placeholder="KOTAK TALENTA"
          value={fields?.kotak_talenta}
          onChange={(e) => {
            onChangeField(e, 'kotak_talenta');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL"
          value={fields?.tanggal}
          onChange={(e) => {
            onChangeField(e, 'tanggal');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
