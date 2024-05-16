import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';

import PanelRiwayatGaji from '../panels/PanelRiwayatGaji';

const StepWizardPanelLayanan = (props) => {
  return (
    <>
      Panel Layanan <hr></hr>
      <PanelRiwayatGaji />
      <div>
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
