import { Badge, Button, Card, Table } from 'react-bootstrap';
import ButtonWizard from '../WizardBuatUsulan/ButtonWizard';
import { lazy, useEffect, useState } from 'react';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ApiCall } from '../../Api/api';
import { useNavigate } from 'react-router-dom';
import { AppInformasiError } from '../components/App';
export default  (props) => {
  const [Component, setComponent] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("PANEL KONFIRMASI CONSTRUCT")
    if (props?.propsWizard?.data?.selectedData?.id) {
      
      const comp = lazy(() => import("../"+ props?.propsWizard?.data?.selectedLayanan?.panelclass))
      setComponent(comp);
    }
    else {
      console.log(props?.propsWizard)
    }
  }, [props?.propsWizard?.data?.selectedLayanan]);

  const onCreateUsulan = async () => {
    if(props?.onSubmit){
       props?.onSubmit(props?.propsWizard?.data?.selectedLayanan?.id,props?.propsWizard?.data?.action,props?.propsWizard?.data?.selectedData?.id,JSON.stringify(props?.propsWizard?.data?.selectedData),JSON.stringify(props?.propsWizard?.data?.data),props?.propsWizard?.lastStep);
       
    }
    else {
      AppInformasiError({options:{text:"function onSubmit tidak ditemukan"}});
    }
    
  };
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Konfirmasi Usulan {JSON.stringify(props?.propsWizard?.data?.selectedLayanan?.panelclass)}</Card.Title>
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
                  {props?.propsWizard?.data?.action == 1 && <Badge>Pembuatan Record Baru</Badge>}
                  {props?.propsWizard?.data?.action == 2 && <Badge>Pengubahan Record</Badge>}
                  {props?.propsWizard?.data?.action == 3 && <Badge>Penghapusan Record</Badge>}{' '}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  {Component && <Component activePanel="init" recordData={props?.propsWizard?.data?.selectedData} />}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={'2'}>
                  <Button className="btn-rounded text-capitalize" variant={'danger'} onClick={props?.propsWizard?.previousStep}>
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
    </>
  );
};
