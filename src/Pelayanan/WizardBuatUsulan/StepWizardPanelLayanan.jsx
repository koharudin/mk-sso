import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';

import PanelRiwayatOrangTua from '../panels/PanelRiwayatOrangTua';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatOrangTua />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
