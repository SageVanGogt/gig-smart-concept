import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

export const Footer = () => {
  const popoverTop = (
    <Popover id="popover-positioned-top" title="Popover top">
      <strong>Holy guacamole!</strong> Check this info.
    </Popover>
  );
  return (
    <footer className="Job-footer">
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popoverTop}
      >
        <Button>
          <img src="calendar.png" alt="calendar" className="footer-icon" />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popoverTop}
      >
        <Button>
          <img src="phone-receiver.png" alt="phone" className="footer-icon" />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={popoverTop}
      >
        <Button>
          <img src="support.png" alt="message" className="footer-icon" />
        </Button>
      </OverlayTrigger>
    </footer>
  )

}