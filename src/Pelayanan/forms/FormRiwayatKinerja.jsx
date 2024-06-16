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
    tahun: '',
    nilai: '',
    tgl_penilaian: '',
    satuan_kerja: '',
    jabatan: '',
    nilai_skp: '',
    nilai_perilaku: '',
    satuan_kerja_id: ''
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
    if (key == 'satuan_kerja_id') {
      fields[key] = e.id;
      fields['satuan_kerja_name'] = e.name;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TAHUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="TAHUN"
          value={fields?.tahun}
          onChange={(e) => {
            onChangeField(e, 'tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NILAI</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="NILAI"
          value={fields?.nilai}
          onChange={(e) => {
            onChangeField(e, 'nilai');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL PENILAIAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL PENILAIAN"
          value={fields?.tgl_penilaian}
          onChange={(e) => {
            onChangeField(e, 'tgl_penilaian');
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
        <Form.Label>NILAI SKP</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="NILAI SKP"
          value={fields?.nilai_skp}
          onChange={(e) => {
            onChangeField(e, 'nilai_skp');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NILAI PERILAKU</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="number"
          placeholder="NILAI PERILAKU"
          value={fields?.nilai_perilaku}
          onChange={(e) => {
            onChangeField(e, 'nilai_perilaku');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
