import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import SelectJabatan from '../components/SelectJabatan';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectPangkat from '../components/SelectPangkat';
import { useEffect } from 'react';

export default (props) => {
  const [fields, setFields] = useState({
    no_sk: '',
    tgl_sk: null,
    dt_awal_penilaian: null,
    dt_akhir_penilaian: null,
    jabatan: '',
    unit_kerja_id: '',
    pangkat_id: '',
    ak_lama: '',
    ak_baru: '',
    keterangan: '',
    tmt_pak: null
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
    if (key == 'unit_kerja_id') {
      fields[key] = e;
    } else fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NO SK</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
          type="date"
          placeholder="TGL SK"
          value={fields?.tgl_sk}
          onChange={(e) => {
            onChangeField(e, 'tgl_sk');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL AWAL PENILAIAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
        <Form.Label>TGL AKHIR PENILAIAN</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
        <Form.Control
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
        <Form.Label>UNIT KERJA</Form.Label>
        <SelectUnitKerja
          isDisabled={props?.disabledAll}
          placeholder="UNIT KERJA"
          value={{ value: fields?.unit_kerja_id }}
          onChange={(e) => {
            onChangeField(e, 'unit_kerja_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PANGKAT {fields?.pangkat_id}</Form.Label>
        <SelectPangkat
          isDisabled={props?.disabledAll}
          placeholder="PANGKAT"
          value={{ value: fields?.pangkat_id }}
          onChange={(e) => {
            onChangeField(e, 'pangkat_id');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>AK LAMA</Form.Label>
        <Form.Control
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
          readOnly={props?.disabledAll}
          disabled={props?.disabledAll}
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
