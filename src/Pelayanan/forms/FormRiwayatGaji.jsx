import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';
import SelectJenisKenaikanGaji from '../components/SelectJenisKenaikanGaji';
import { NumericFormat } from 'react-number-format';

const FormRiwayatGaji = (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: '',
    tmt_sk: '',
    pejabat_penetap_id: '',
    pejabat_penetap_nama: '',
    pejabat_penetap_jabatan: '',
    pejabat_penetap_nip: '',
    masakerja_tahun: '',
    masakerja_bulan: '',
    jenis_kenaikan: '',
    pangkat_id: '',
    gaji_pokok: ''
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
        <Form.Label>MASA KERJA TAHUN</Form.Label>
        <Form.Control
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
        <Form.Label>JENIS KENAIKAN</Form.Label>
        <SelectJenisKenaikanGaji
          type="date"
          placeholder="JENIS KENAIKAN"
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
    </>
  );
};
export default FormRiwayatGaji;