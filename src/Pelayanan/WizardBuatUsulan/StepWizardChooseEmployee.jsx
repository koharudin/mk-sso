import { useEffect, useState } from 'react';
import DetailPegawai from '../forms/DetailPegawai';
import ButtonWizard from './ButtonWizard';
import { ApiCall } from '../../Api/api';

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
      Pegawai yang mengusulkan <hr></hr>
      <div>
        <DetailPegawai employee={employee} />
        <br></br>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardChooseEmployee;
