import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatAnak from './PanelRiwayatAnak';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatAnak/>
      
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
