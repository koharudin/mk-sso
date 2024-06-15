import { Badge, Button, Card, Col, Row, Table } from 'react-bootstrap';
import ButtonWizard from '../WizardBuatUsulan/ButtonWizard';
import { lazy, useEffect, useState } from 'react';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ApiCall } from '../../Api/api';
import { useNavigate } from 'react-router-dom';
import { AppInformasiError } from '../components/App';
export default (props) => {
  const [Component, setComponent] = useState();
  const navigate = useNavigate();

  const onCreateUsulan = async () => {
    props.onSubmitUsulan(props?.layanan_id, props?.action, props?.recordId, props?.refData, props?.recordData, () => {
      props.propsWizard.lastStep();
    });
  };
  return (
    <>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header>
              <Card.Title as="h5">Konfirmasi Usulan </Card.Title>
            </Card.Header>
            <Card.Body>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Keterangan </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aksi</td>
                    <td>
                      {props?.action == 1 && <Badge>Pembuatan Record Baru</Badge>}
                      {props?.action == 2 && <Badge>Pengubahan Record</Badge>}
                      {props?.action == 3 && <Badge>Penghapusan Record</Badge>}{' '}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>{props.children}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={'2'}>
                      <Button
                        className="btn-rounded text-capitalize"
                        variant={'danger'}
                        onClick={() => {
                          props.setActiveForm('grid');
                        }}
                      >
                        <AiOutlineCloseCircle /> Batal
                      </Button>
                      <Button onClick={onCreateUsulan} style={{ float: 'right' }} className="btn-rounded text-capitalize" variant={'info'}>
                        <FaSave /> Ya, Buat Usulan
                      </Button>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
