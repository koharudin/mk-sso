import { useRef } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default (props) => {
  const {useTooltip,tooltipText, ...otherProps } = props;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );
  return (
    <>
      {useTooltip && (
        <>
          <OverlayTrigger placement="top" overlay={renderTooltip}>
            <Button {...props}></Button>
          </OverlayTrigger>
        </>
      )}
      {!useTooltip && <Button {...props}></Button>}
    </>
  );
};
