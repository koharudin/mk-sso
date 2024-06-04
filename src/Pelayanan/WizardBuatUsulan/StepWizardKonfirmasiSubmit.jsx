import { Badge, Button, Card, Table } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import { lazy, useEffect, useState } from 'react';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ApiCall } from '../../Api/api';
import { useNavigate } from 'react-router-dom';
import { AppInformasiError } from '../components/App';
const StepWizardKonfirmasiSubmit = (props) => {
  const [Component, setComponent] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (props.data?.selectedData?.id) {
      const comp = lazy(() => import('../' + props?.data?.selectedLayanan?.panelclass));
      setComponent(comp);
    }
  }, [props.data]);

  const onCreateUsulan = () => {
    const formData = new FormData();
    formData.append('action', props.data?.action);
    formData.append('id', props.data?.selectedData?.id);
    formData.append("layanan_id",props?.data?.selectedLayanan?.id);
    formData.append('ref_data', JSON.stringify(props?.data?.selectedData));
    formData.append('new_data', JSON.stringify(props?.data?.data));
    ApiCall.post('/usulan', formData)
      .then((res) => {
        if (res?.status == 200) {
          props.setData({ ...props?.data, ...{ uuid:res?.data?.uuid } });
          props.lastStep()
        }
      })
      .catch((err) => {
        AppInformasiError({ options: { text: 'Tidak dapat memproses usulan ini.' } });
      })
      .finally(() => {});
  };
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
                  <Button onClick={onCreateUsulan} style={{ float: 'right' }} className="btn-rounded text-capitalize" variant={'info'}>
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
