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
  const onSubmitUsulan = (layanan_id, action, id, ref_data, new_data, useUploadFiles, cb) => {
    ApiCall.post('/usulan', {
      action : action,
      id:id,
      layanan_id, layanan_id,
      ref_data : JSON.stringify(ref_data),
      new_data :  JSON.stringify(new_data),
      dokumen_pendukung:new_data.dokumen_pendukung
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
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
            <StepWizardPanelLayanan data={data} setData={setData} onSubmitUsulan={onSubmitUsulan} />
            <StepWizardHasil data={data} setData={setData} />
          </StepWizard>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default WizardUsulan;
