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
    no_bkn: '',
    tgl_bkn: '',
    no_sk: '',
    tgl_pensiun : '',
    tmt_pensiun : '',
    pangkat_id : '',
    masa_kerja_tahun : '',
    masa_kerja_bulan : '',
    unitkerja_id : '',
    unitkerja:''
  });
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO BKN</Form.Label>
        <Form.Control
          type="text"
          placeholder="NO BKN"
          value={fields?.no_bkn}
          onChange={(e) => {
            onChangeField(e, 'no_sumpah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL BKN</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL BKN"
          value={fields?.tgl_bkn}
          onChange={(e) => {
            onChangeField(e, 'tgl_bkn');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK PENSIUN</Form.Label>
        <Form.Control
          type="text"
          placeholder="NO SK PENSIUN"
          value={fields?.no_sk}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TANGGAL PENSIUN</Form.Label>
        <Form.Control
          type="text"
          placeholder="TANGGAL PENSIUN"
          value={fields?.tgl_pensiun}
          onChange={(e) => {
            onChangeField(e, 'no_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT PENSIUN</Form.Label>
        <Form.Control
          type="text"
          placeholder="TMT PENSIUN"
          value={fields?.tmt_pensiun}
          onChange={(e) => {
            onChangeField(e, 'tmt_pensiun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          placeholder="PANGKAT"
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MASA KERJA TAHUN</Form.Label>
        <Form.Control
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
        <Form.Label>UNIT KERJA</Form.Label>
        <SelectUnitKerja
          placeholder="UNIT KERJA"
          value={fields?.unitkerja_id}
          onChange={(e) => {
            onChangeField(e, 'unitkerja_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};