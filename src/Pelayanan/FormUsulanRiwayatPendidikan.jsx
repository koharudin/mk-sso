import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom/dist';

const GridRecord = () => {};
const Init = () => {};
const Form = () => {};
const Detail = () => {};
const FormUsulanRiwayatPendidikan = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const onSave = () => {
    alert('Save...');
  };
  const onCreateUsulan = () => {
    navigate('/usulan/riwayat-pendidikan/baru');
  };
  const onDeleteUsulan = () => {};
  const onEditUsulan = () => {};
  const onReload = () => {};
  const Form = () => {
    return (
      <Card>
        <Card.Header>Form Riwayat Pendidikan</Card.Header>
        <Card.Body>Body</Card.Body>
      </Card>
    );
  };
  const Grid = () => {
    return (
      <Card>
        <Card.Header>
          <Card.Title as="h5">Daftar Riwayat Pendidikan</Card.Title>
          <span className="d-block m-t-5">
            use props <code>className=&quot;bg-* text-*&quot;</code> with <code>tr</code> element
          </span>
          <Button style={{ float: 'right' }} onClick={onCreateUsulan} color="primary" size={'sm'}>
            Usulan Baru
          </Button>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Jurusan</th>
                <th>Nama Sekolah</th>
                <th>Tempat Sekolah</th>
                <th>Tahun</th>

                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                return (
                  <tr key={i} className="table-dark text-white">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {data.length == 0 && (
            <>
              <Alert color="info">Tidak ada data</Alert>
            </>
          )}
        </Card.Body>
      </Card>
    );
  };
  return (
    <React.Fragment>
      <Row>
        <Col>
          {params?.usulan_type && <Form />}
          {!params?.usulan_type && <Grid />}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormUsulanRiwayatPendidikan;
