import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';

import PanelRiwayatSumpah from '../panels/PanelRiwayatSumpah';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatSumpah />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
