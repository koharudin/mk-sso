import { Button, Card } from 'react-bootstrap';
import SelectJenisLayanan from '../components/SelectJenisLayanan';
import ButtonWizard from './ButtonWizard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';

export default (props) => {
  const [selectedData,setSelectedData] = useState()
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Pilih Layanan</Card.Title>
        </Card.Header>
        <Card.Body>
          <SelectJenisLayanan
            onChange={(val, o) => {
              props?.setData({ ...props?.data, ...{ selectedLayanan: o } });
              setSelectedData(o)
            }}
          ></SelectJenisLayanan>
        </Card.Body>
        <Card.Footer>
          <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
            <FaArrowLeft /> Pilih Pegawai
          </Button>
          <Button disabled={selectedData?false:true} className="btn-rounded text-capitalize" variant={'primary'} onClick={props.nextStep}>
            <FaArrowRight /> Buat Form Usulan
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
