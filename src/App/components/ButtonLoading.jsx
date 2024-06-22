import { Button, Col, Row } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';

export default (props) => {
  const { name, isLoading, ...otherProps } = props;
  return (
    <Button {...otherProps} disabled={isLoading}>
      {isLoading && (
        <>
          <Row>
            <Col lg="7">
              <BeatLoader color="white"></BeatLoader>{' '}
            </Col>
            <Col lg="5">
              <div style={{ float: 'right' }}>Loading</div>
            </Col>
          </Row>
        </>
      )}
      {!isLoading && <>{name}</>}
    </Button>
  );
};
