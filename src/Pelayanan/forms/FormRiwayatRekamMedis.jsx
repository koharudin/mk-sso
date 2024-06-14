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
    tgl_periksa: null,
    keluhan: '',
    diagnosa: '',
    jenis_pemeriksaan: '',
    tindakan: '',
    dokter: '',
    keterangan: ''
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
        <Form.Label>TGL PERIKSA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="date"
          placeholder="TGL PERIKSA"
          value={fields?.tgl_periksa}
          onChange={(e) => {
            onChangeField(e, 'tgl_periksa');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KELUHAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as="textarea"
          placeholder="KELUHAN"
          value={fields?.keluhan}
          onChange={(e) => {
            onChangeField(e, 'keluhan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>DIAGNOSA</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as="textarea"
          placeholder="DIAGNOSA"
          value={fields?.diagnosa}
          onChange={(e) => {
            onChangeField(e, 'diagnosa');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS PEMERIKSAAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="JENIS PEMERIKSAAN"
          value={fields?.jenis_pemeriksaan}
          onChange={(e) => {
            onChangeField(e, 'jenis_pemeriksaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TINDAKAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as="textarea"
          placeholder="TINDAKAN"
          value={fields?.tindakan}
          onChange={(e) => {
            onChangeField(e, 'tindakan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>DOKTER</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          type="text"
          placeholder="DOKTER"
          value={fields?.dokter}
          onChange={(e) => {
            onChangeField(e, 'dokter');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>KETERANGAN</Form.Label>
        <Form.Control readOnly={props?.disabledAll}
          as="textarea"
          placeholder="KETERANGAN"
          value={fields?.keterangan}
          onChange={(e) => {
            onChangeField(e, 'keterangan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
