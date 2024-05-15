import { Button } from 'react-bootstrap';

const ButtonWizard = (props) => {
  return (
    <>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
        Previous Step
      </Button>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.nextStep}>
        Next Step
      </Button>

      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.firstStep}>
        First Step
      </Button>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.lastStep}>
        Last Step
      </Button>
    </>
  );
};
export default ButtonWizard;
