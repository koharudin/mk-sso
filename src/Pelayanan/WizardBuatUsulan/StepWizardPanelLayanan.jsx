import { Button } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';
import { lazy, useEffect } from 'react';
import { useState } from 'react';
const Panels = {
  'Riwayat Anak': lazy(() => import('../panels/PanelRiwayatAnak')),
  'Identitas Pegawai': lazy(() => import('../forms/FormInformasiPegawai'))
};
const Pzy = lazy(() => import('../panels/PanelRiwayatAnak'));
const StepWizardPanelLayanan = (props) => {
  const [Component, setComponent] = useState();
  useEffect(() => {
    if (props?.data?.selectedLayanan) {
      if (Panels[props?.data?.selectedLayanan?.name]) {
        setComponent(Panels[props?.data?.selectedLayanan?.name]);
      }
    }
  }, [props?.data?.selectedLayanan]);

  return (
    <>
      Panel Layanan <hr></hr>
      <div>
        {Component && <Component />}
        <hr></hr>
        <ButtonWizard {...props}></ButtonWizard>
      </div>
    </>
  );
};
export default StepWizardPanelLayanan;
