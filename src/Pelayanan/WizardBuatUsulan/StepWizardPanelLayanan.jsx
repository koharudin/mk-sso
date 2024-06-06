import { Button, Card } from 'react-bootstrap';
import ButtonWizard from './ButtonWizard';
import PanelRiwayatJabatan from '../panels/PanelRiwayatJabatan';
import { lazy, useEffect } from 'react';
import { useState } from 'react';
import { ApiCall } from '../../Api/api';
import NotFoundModule from '../components/NotFoundModule';
import { FaArrowLeft } from 'react-icons/fa';
import SelectUnitKerja from '../components/SelectUnitKerja';

const NOTFOUNDMODULE = () => {
  return <>NOT FOUND MODULE</>;
};
const StepWizardPanelLayanan = (props) => {
  const [Component, setComponent] = useState(props?.data?.selectedLayanan);
  const fwdToConfirmationRequestForm = (layanan_id, action_id, ref_data, customData) => {
    console.log('fwdToConfirmationRequestForm');
    const data = {
      layanan_id: layanan_id,
      action_id: action_id,
      ref_data: ref_data,
      custom_data: customData
    };
    console.log(data);
    alert('fwd');
    props.nextStep();
  };
  const fwdToInitForm = () => {};
  useEffect(() => {
    if (props?.data?.selectedLayanan) {
      if (props?.data?.selectedLayanan?.panelclass) {
        const component = lazy(() => import('../' + props?.data?.selectedLayanan?.panelclass));
        setComponent(component);
      } else {
        const component = lazy(() => import('../components/NotFoundModule'));
        setComponent(component);
      }
    }
  }, [props?.data?.selectedLayanan]);

  useEffect(() => {
    if (props?.activePanel) {
    }
  }, [props?.activePanel]);
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as={'h5'}> Panel Layanan {props?.data?.selectedLayanan?.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          {Component && (
            <Component
              layanan_id={props?.data?.selectedLayanan?.id}
              activePanel={'init'}
              fwdToConfirmationRequestForm={fwdToConfirmationRequestForm}
            />
          )}
        </Card.Body>
        <Card.Footer>
          <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
            <FaArrowLeft /> Pilih Kategori Layanan
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default StepWizardPanelLayanan;
