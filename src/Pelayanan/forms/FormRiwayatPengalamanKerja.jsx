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
import SelectPendidikan from '../components/SelectPendidikan';
import SelectJenisDiklatSIASN from '../components/SelectJenisDiklatSIASN';

export default (props) => {
  const [fields, setFields] = useState({
    instansi: '',
    jabatan: '',
    masa_kerja_tahun: '',
    masa_kerja_bulan: '',
    tgl_kerja: null
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
        <Form.Label>INSTANSI</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="INSTANSI"
          value={fields?.instansi}
          onChange={(e) => {
            onChangeField(e, 'instansi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JABATAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="JABATAN"
          value={fields?.jabatan}
          onChange={(e) => {
            onChangeField(e, 'jabatan');
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
          value={fields?.masa_kerja_tahun}
          onChange={(e) => {
            onChangeField(e, 'masa_kerja_tahun');
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
          value={fields?.masa_kerja_bulan}
          onChange={(e) => {
            onChangeField(e, 'masa_kerja_bulan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL KERJA</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TANGGAL KERJA"
          value={fields?.tgl_kerja}
          onChange={(e) => {
            onChangeField(e, 'tgl_kerja');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
