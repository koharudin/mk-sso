import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StepWizard from 'react-step-wizard';
import StepWizardChooseEmployee from './WizardBuatUsulan/StepWizardChooseEmployee';
import StepWizardChooseLayanan from './WizardBuatUsulan/StepWizardChooseLayanan';
import StepWizardPanelLayanan from './WizardBuatUsulan/StepWizardPanelLayanan';
import StepWizardHasil from './WizardBuatUsulan/StepWizardHasil';
import { ApiCall } from '../Api/api';
import { AppInformasiError } from './components/App';

const GridRecord = () => {};
const Init = () => {};
const Form = () => {};
const Detail = () => {};
const WizardUsulan = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onSubmitUsulan = (layanan_id, action, id, ref_data, new_data, cb) => {
    const formData = new FormData();
    formData.append('action', action);
    formData.append('id', id);
    formData.append('layanan_id', layanan_id);
    formData.append('ref_data', JSON.stringify(ref_data));
    formData.append('new_data', JSON.stringify(new_data));
    ApiCall.post('/usulan', formData)
      .then((res) => {
        if (res?.status == 200) {
          setData({ ...data, ...{ uuid: res?.data?.uuid } });
          cb();
        }
      })
      .catch((err) => {
        AppInformasiError({ options: { text: 'Tidak dapat memproses usulan ini.' } });
      });
  };
  const onReload = () => {};

  return (
    <React.Fragment>
      <Row>
        <Col>
          <StepWizard isHashEnabled={true}>
            <StepWizardChooseEmployee data={data} setData={setData} />
            <StepWizardChooseLayanan data={data} setData={setData} />
            <StepWizardPanelLayanan data={data} setData={setData} onSubmit={onSubmitUsulan} />
            <StepWizardHasil data={data} setData={setData} />
          </StepWizard>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default WizardUsulan;
