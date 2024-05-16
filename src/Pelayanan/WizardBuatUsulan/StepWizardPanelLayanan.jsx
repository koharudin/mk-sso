import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatDiklatStruktural from '../panels/PanelRiwayatDiklatStruktural';
import PanelRiwayatDiklatTeknis from '../panels/PanelRiwayatDiklatTeknis';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatDiklatTeknis />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
