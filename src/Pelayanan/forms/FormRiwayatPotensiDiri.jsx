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
    tanggung_jawab: '',
    motivasi: '',
    minat: ''
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
        <Form.Label>TAHUN</Form.Label>
        <Form.Control
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
        <Form.Label>TANGGUNG JAWAB</Form.Label>
        <Form.Control
          type="text"
          placeholder="TANGGUNG JAWAB"
          value={fields?.tanggung_jawab}
          onChange={(e) => {
            onChangeField(e, 'tanggung_jawab');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MOTIVASI</Form.Label>
        <Form.Control
          type="text"
          placeholder="MOTIVASI"
          value={fields?.motivasi}
          onChange={(e) => {
            onChangeField(e, 'motivasi');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>MINAT</Form.Label>
        <Form.Control
          type="text"
          placeholder="MINAT"
          value={fields?.minat}
          onChange={(e) => {
            onChangeField(e, 'minat');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};
