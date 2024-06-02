import { Button } from 'react-bootstrap';

const ButtonWizard = (props) => {
  return (
    <>
      {props.showPrevButton && (
        <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.previousStep}>
          {props?.showPrevTitle??"Langkah sebelumnya"}
        </Button>
      )}
      {props.showNextButton && (
        <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.nextStep}>
          {props?.showNextTitle??"Langkah selanjutnya"}
        </Button>
      )}
      {props.showFirstButton && (
        <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.firstStep}>
          {props?.showFirstTitle??"Langkah pertama"}
        </Button>
      )}
      {props.showLastButton && (
        <Button className="btn-rounded text-capitalize" variant={'primary'} onClick={props.lastStep}>
          {props?.showLastTitle??"Langkah terakhir"}
        </Button>
      )}
    </>
  );
};
export default ButtonWizard;
