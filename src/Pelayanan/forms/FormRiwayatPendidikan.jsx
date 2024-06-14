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

export default (props) => {
  const [fields, setFields] = useState({
    pendidikan_id: '',
    jurusan: '',
    nama_sekolah: '',
    tempat_sekolah: '',
    no_sttb: '',
    tgl_sttb: null,
    tahun: '',
    kepala_sekolah: '',
    akreditasi: '',
    ipk: ''
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
        <Form.Label>PENDIDIKAN</Form.Label>
        <SelectPendidikan
          placeholder="PENDIDIKAN"
          value={fields?.pendidikan_id}
          onChange={(e) => {
            onChangeField(e, 'pendidikan_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JURUSAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="JURUSAN"
          value={fields?.jurusan}
          onChange={(e) => {
            onChangeField(e, 'jurusan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA SEKOLAH</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA SEKOLAH"
          value={fields?.nama_sekolah}
          onChange={(e) => {
            onChangeField(e, 'nama_sekolah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT SEKOLAH</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="TEMPAT SEKOLAH"
          value={fields?.tempat_sekolah}
          onChange={(e) => {
            onChangeField(e, 'tempat_sekolah');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO STTB</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="NO STTB"
          value={fields?.no_sttb}
          onChange={(e) => {
            onChangeField(e, 'no_sttb');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL STTB</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL STTB"
          value={fields?.tgl_sttb}
          onChange={(e) => {
            onChangeField(e, 'tgl_sttb');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TAHUN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="TAHUN"
          value={fields?.tahun}
          onChange={(e) => {
            onChangeField(e, 'tahun');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AKREDITASI</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="AKREDITASI"
          value={fields?.akreditasi}
          onChange={(e) => {
            onChangeField(e, 'akreditasi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>IPK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          type="text"
          placeholder="IPK"
          value={fields?.ipk}
          onChange={(e) => {
            onChangeField(e, 'ipk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
