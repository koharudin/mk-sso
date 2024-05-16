import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatDiklatStruktural from '../panels/PanelRiwayatDiklatStruktural';
import PanelRiwayatDiklatTeknis from '../panels/PanelRiwayatDiklatTeknis';
import PanelRiwayatDP3 from '../panels/PanelRiwayatDP3';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatDP3 />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
