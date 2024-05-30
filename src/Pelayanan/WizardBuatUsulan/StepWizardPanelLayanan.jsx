import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';

import PanelRiwayatPengalamanKerja from '../panels/PanelRiwayatPengalamanKerja';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatPengalamanKerja />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
