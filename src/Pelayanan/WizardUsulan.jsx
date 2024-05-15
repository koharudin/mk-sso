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
          <Card>
            <Card.Header>Buat Usulan Wizard</Card.Header>
            <Card.Body>
              <StepWizard  isHashEnabled={true}>
                <StepWizardChooseEmployee />
                <StepWizardChooseLayanan/>
                <StepWizardPanelLayanan/>
                <StepWizardKonfirmasiSubmit/>
              </StepWizard>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default WizardUsulan;
