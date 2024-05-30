import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';

import PanelRiwayatNikah from '../panels/PanelRiwayatNikah';
import PanelRiwayatSaudara from '../panels/PanelRiwayatSaudara';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatSaudara />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
