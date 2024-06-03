import { useEffect, useState } from 'react';
import DetailPegawai from '../forms/DetailPegawai';
import ButtonWizard from './ButtonWizard';
import { ApiCall } from '../../Api/api';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import SelectUnitKerja from '../components/SelectUnitKerja';
import SelectTingkatHukuman from '../components/SelectTingkatHukuman';

const StepWizardChooseEmployee = (props) => {
  const [employee, setEmployee] = useState();
  useEffect(() => {
    ApiCall.get('/me')
      .then((res) => {
        setEmployee(res?.data);
      })
      .catch((err) => {})
      .finally(() => {});
  }, employee);
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}>Pegawai yang mengusulkan</Card.Title>
        </Card.Header>
        <Card.Body>
          <DetailPegawai employee={employee} />
        </Card.Body>
        <Card.Footer>
        <SelectUnitKerja value={{value:79}} />
          <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.nextStep}>
            Pilih Kategori Layanan
             {" "}<FaArrowRight />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default StepWizardChooseEmployee;
