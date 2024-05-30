import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';


import PanelRiwayatMertua from '../panels/PanelRiwayatMertua';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatMertua />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
