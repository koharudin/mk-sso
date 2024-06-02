import React from 'react';
import { useState } from 'react';
import { Row, Col, Card, Table, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StepWizard from 'react-step-wizard';
import WizardEmployee from './WizardBuatUsulan/StepWizardChooseEmployee';
import ChooseLayanan from './WizardBuatUsulan/StepWizardChooseLayanan';
import StepWizardChooseEmployee from './WizardBuatUsulan/StepWizardChooseEmployee';
import StepWizardChooseLayanan from './WizardBuatUsulan/StepWizardChooseLayanan';
import StepWizardPanelLayanan from './WizardBuatUsulan/StepWizardPanelLayanan';
import StepWizardKonfirmasiSubmit from './WizardBuatUsulan/StepWizardKonfirmasiSubmit';

const GridRecord = () => {};
const Init = () => {};
const Form = () => {};
const Detail = () => {};
const WizardUsulan = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const onSave = () => {
    alert('Save...');
  };
  const onReload = () => {};

  return (
    <React.Fragment>
      <Row>
        <Col>
          <StepWizard isHashEnabled={true}>
            <StepWizardChooseEmployee data={data} setData={setData} />
            <StepWizardChooseLayanan data={data} setData={setData} />
            <StepWizardPanelLayanan data={data} setData={setData} />
            <StepWizardKonfirmasiSubmit data={data} setData={setData} />
          </StepWizard>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default WizardUsulan;
