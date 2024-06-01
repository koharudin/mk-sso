import { Button } from 'react-bootstrap';

const ButtonWizard = (props) => {
  return (
    <>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
        Langkah sebelumnya
      </Button>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.nextStep}>
        Langkah setelahnya
      </Button>

      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.firstStep}>
        Langkah pertama
      </Button>
      <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.lastStep}>
        Langkah terakhir
      </Button>
    </>
  );
};
export default ButtonWizard;
