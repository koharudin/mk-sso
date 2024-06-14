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
import SelectJenisBahasa from '../components/SelectJenisBahasa';
import SelectKemampuanBicara from '../components/SelectKemampuanBicara';

export default (props) => {
  const [fields, setFields] = useState({
    jenis_bahasa: '',
    nama_bahasa: '',
    kemampuan_bicara: '',
    jenis_sertifikasi: '',
    lembaga_sertifikasi: '',
    skor: '',
    tgl_expired: null
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
        <Form.Label>JENIS BAHASA</Form.Label>
        <SelectJenisBahasa
          placeholder="JENIS BAHASA"
          value={fields?.jenis_bahasa}
          onChange={(e) => {
            onChangeField(e, 'jenis_bahasa');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA BAHASA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="NAMA BAHASA"
          value={fields?.nama_bahasa}
          onChange={(e) => {
            onChangeField(e, 'nama_bahasa');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KEMAMPUAN BICARA</Form.Label>
        <SelectKemampuanBicara
          type="text"
          placeholder="KEMAMPUAN BICARA"
          value={fields?.kemampuan_bicara}
          onChange={(e) => {
            onChangeField(e, 'kemampuan_bicara');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS SERTIFIKASI</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="JENIS SERTIFIKASI"
          value={fields?.jenis_sertifikasi}
          onChange={(e) => {
            onChangeField(e, 'jenis_sertifikasi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>LEMBAGA SERTIFIKASI</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="LEMBAGA SERTIFIKASI"
          value={fields?.lembaga_sertifikasi}
          onChange={(e) => {
            onChangeField(e, 'lembaga_sertifikasi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>SKOR</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="SKOR"
          value={fields?.skor}
          onChange={(e) => {
            onChangeField(e, 'skor');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL KADALUARSA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL KADALUARSA"
          value={fields?.tgl_expired}
          onChange={(e) => {
            onChangeField(e, 'tgl_expired');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
