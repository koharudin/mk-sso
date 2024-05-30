import { useState } from 'react';
import { Breadcrumb, Card, Form } from 'react-bootstrap';
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
import SelectOrangTua from '../components/SelectOrangTua';
import SelectJenisPekerjaan from '../components/SelectJenisPekerjaan';
import SelectStatusPernikahan from '../components/SelectStatusPernikahan';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default (props) => {
  const [fields, setFields] = useState({
    name: '',
    birth_place: '',
    birth_date: '',
    buku_nikah: '',
    no_karis: '',
    tgl_kawin: '',
    jenis_pekerjaan: '',
    nip: '',
    urutan_nikah: '',
    urutan_pasangan: '',
    tempat_pekerjaan: '',
    status: '',
    no_sk_cerai: '',
    tmt_sk_cerai: '',
    tgl_sk_cerai: '',
    sdh_dibayar: '',
    status_tunjangan: '',
    pekerjaan: '',
    bulan_dibayar: ''
  });
  const onChangeField = (e, key) => {
    fields[key] = e?.target?.value;
    setFields({ ...fields });
  };
  useEffect(() => {}, []);
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>JENIS PEKERJAAN</Form.Label>
        <SelectJenisPekerjaan
          placeholder="JENIS PEKERJAAN"
          value={fields?.jenis_pekerjaan}
          onChange={(e) => {
            onChangeField(e, 'jenis_pekerjaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NIP</Form.Label>
        <Form.Control
          type="text"
          placeholder="NIP"
          value={fields?.nip}
          onChange={(e) => {
            onChangeField(e, 'nip');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>NAMA SUAMI/ISTRI</Form.Label>
        <Form.Control
          type="text"
          placeholder="NAMA SUAMI/ISTRI"
          value={fields?.name}
          onChange={(e) => {
            onChangeField(e, 'name');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT LAHIR</Form.Label>
        <Form.Control
          type="text"
          placeholder="TEMPAT LAHIR"
          value={fields?.birth_place}
          onChange={(e) => {
            onChangeField(e, 'birth_place');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TGL LAHIR</Form.Label>
        <Form.Control
          type="date"
          placeholder="TGL LAHIR"
          value={fields?.birth_date}
          onChange={(e) => {
            onChangeField(e, 'birth_date');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>STATUS PERNIKAHAN</Form.Label>
        <SelectStatusPernikahan
          type="text"
          placeholder="STATUS PERNIKAHAN"
          value={fields?.status}
          onChange={(e) => {
            onChangeField(e, 'status');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>PEKERJAAN</Form.Label>
        <Form.Control
          type="text"
          placeholder="PEKERJAAN"
          value={fields?.pekerjaan}
          onChange={(e) => {
            onChangeField(e, 'pekerjaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>TEMPAT PEKERJAAN</Form.Label>
        <Form.Control
          type="text"
          placeholder="TEMPAT PEKERJAAN"
          value={fields?.tempat_pekerjaan}
          onChange={(e) => {
            onChangeField(e, 'tempat_pekerjaan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Check
          type="checkbox"
          label="SEBAGAI AHLI WARIS"
          value={fields?.status_tunjangan}
          onChange={(e) => {
            onChangeField(e, 'status_tunjangan');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Check
          type="checkbox"
          label="SUDAH DIBAYAR"
          value={fields?.sdh_dibayar}
          onChange={(e) => {
            onChangeField(e, 'sdh_dibayar');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>BLN DIBAYAR</Form.Label>
        <Form.Control
          type="date"
          placeholder="BLN DIBAYAR"
          value={fields?.bulan_dibayar}
          onChange={(e) => {
            onChangeField(e, 'bulan_dibayar');
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Card>
        <Card.Header>
          <Card.Title>KETERANGAN NIKAH</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>NO BUKU NIKAH</Form.Label>
            <Form.Control
              type="text"
              placeholder="NO BUKU NIKAH"
              value={fields?.buku_nikah}
              onChange={(e) => {
                onChangeField(e, 'buku_nikah');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>NO KARIS</Form.Label>
            <Form.Control
              type="text"
              placeholder="NO KARIS"
              value={fields?.no_karis}
              onChange={(e) => {
                onChangeField(e, 'no_karis');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>SUAMI/ISTRI KE-</Form.Label>
            <Form.Control
              type="number"
              placeholder="SUAMI/ISTRI KE"
              value={fields?.urutan_pasangan}
              onChange={(e) => {
                onChangeField(e, 'urutan_pasangan');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>TGL NIKAH</Form.Label>
            <Form.Control
              type="date"
              placeholder="TGL NIKAH"
              value={fields?.tgl_kawin}
              onChange={(e) => {
                onChangeField(e, 'tgl_kawin');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>NIKAH KE</Form.Label>
            <Form.Control
              type="number"
              placeholder="NIKAH KE"
              value={fields?.urutan_nikah}
              onChange={(e) => {
                onChangeField(e, 'urutan_nikah');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>KETERANGAN CERAI</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>NO SK CERAI</Form.Label>
            <Form.Control
              type="text"
              placeholder="NO SK CERAI"
              value={fields?.no_sk_cerai}
              onChange={(e) => {
                onChangeField(e, 'no_sk_cerai');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>TMT SK CERAI</Form.Label>
            <Form.Control
              type="date"
              placeholder="TMT SK CERAI"
              value={fields?.tmt_sk_cerai}
              onChange={(e) => {
                onChangeField(e, 'tmt_sk_cerai');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail1">
            <Form.Label>TGL SK CERAI</Form.Label>
            <Form.Control
              type="date"
              placeholder="TGL SK CERAI"
              value={fields?.tgl_sk_cerai}
              onChange={(e) => {
                onChangeField(e, 'tgl_sk_cerai');
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
};
