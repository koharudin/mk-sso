import { Badge, Button, Card, Table } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import { lazy, useEffect, useState } from 'react';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const StepWizardKonfirmasiSubmit = (props) => {
  const [Component, setComponent] = useState();
  useEffect(() => {
    if (props.data?.selectedData?.id) {
      const comp = lazy(() => import('../' + props?.data?.selectedLayanan?.panelclass));
      setComponent(comp);
    }
  }, [props.data]);
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Konfirmasi Usulan</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aksi</td>
                <td>
                  {props?.data?.action == 1 && <Badge>Pembuatan Record Baru</Badge>}
                  {props?.data?.action == 2 && <Badge>Pengubahan Record</Badge>}
                  {props?.data?.action == 3 && <Badge>Penghapusan Record</Badge>}{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>{Component && <Component activePanel="konfirmasiSubmit" recordData={props?.data?.selectedData} />}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={'2'}>
                  <Button className="btn-rounded text-capitalize" variant={'danger'} onClick={props.previousStep}>
                    <AiOutlineCloseCircle /> Batal
                  </Button>
                  <Button style={{ float: 'right' }} className="btn-rounded text-capitalize" variant={'info'}>
                    <FaSave /> Ya, Buat Usulan
                  </Button>
                </td>
              </tr>
            </tfoot>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.firstStep}>
            <FaArrowLeft /> Pilih Pegawai
          </Button>
          <Button
            className="btn-rounded text-capitalize"
            variant={'primary'}
            onClick={() => {
              props.goToStep(2);
            }}
          >
            <FaArrowLeft /> Buat Form Usulan
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default StepWizardKonfirmasiSubmit;
