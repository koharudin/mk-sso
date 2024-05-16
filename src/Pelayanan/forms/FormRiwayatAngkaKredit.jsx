import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectSex from '../components/SelectSex';
import SelectStatusKeluarga from '../components/SelectDapatTunjangan';
import SelectDapatTunjangan from '../components/SelectStatusKeluarga';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';

const FormRiwayatAngkaKredit = (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: '',
    dt_awal_penilaian: '',
    dt_akhir_penilaian: '',
    jabatan: '',
    unit_kerja_id: '',
    pangkat_id: '21',
    ak_lama: '',
    ak_baru: '',
    keterangan: '',
    tmt_pak: '21'
  });
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK</Form.Label>
        <Form.Control
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
        <Form.Label>TGL SK</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL AWAL PENILAIAN"
          value={fields?.dt_awal_penilaian}
          onChange={(e) => {
            onChangeField(e, 'dt_awal_penilaian');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL SK</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL AKHIR PENILAIAN"
          value={fields?.dt_akhir_penilaian}
          onChange={(e) => {
            onChangeField(e, 'dt_akhir_penilaian');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JABATAN</Form.Label>
        <SelectJabatan
          type="date"
          placeholder="JABATAN"
          value={fields?.dt_akhir_penilaian}
          onChange={(e) => {
            onChangeField(e, 'dt_akhir_penilaian');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>UNIT KERJA</Form.Label>
        <SelectUnitKerja
          type="date"
          placeholder="UNIT KERJA"
          value={fields?.unit_kerja_id}
          onChange={(e) => {
            onChangeField(e, 'unit_kerja_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT</Form.Label>
        <SelectPangkat
          type="date"
          placeholder="PANGKAT"
          value={fields?.pangkat_id}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AK LAMA</Form.Label>
        <Form.Control
          type="text"
          placeholder="AK LAMA"
          value={fields?.ak_lama}
          onChange={(e) => {
            onChangeField(e, 'ak_lama');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AK BARU</Form.Label>
        <Form.Control
          type="text"
          placeholder="AK BARU"
          value={fields?.ak_baru}
          onChange={(e) => {
            onChangeField(e, 'ak_baru');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KETERANGAN</Form.Label>
        <Form.Control
          type="textarea"
          placeholder="KETERANGAN"
          value={fields?.keterangan}
          onChange={(e) => {
            onChangeField(e, 'keterangan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TMT PAK</Form.Label>
        <Form.Control
          type="date"
          placeholder="TMT PAK"
          value={fields?.tmt_pak}
          onChange={(e) => {
            onChangeField(e, 'tmt_pak');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
export default FormRiwayatAngkaKredit;
