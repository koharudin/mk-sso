import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatAnak from '../panels/PanelRiwayatAnak';
import PanelRiwayatAngkaKredit from '../panels/PanelRiwayatAngkaKredit';
import PanelRiwayatDiklatFungsional from '../panels/PanelRiwayatDiklatFungsional';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatDiklatFungsional/>
      
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
