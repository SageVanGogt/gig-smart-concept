import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import './Footer.css';
import Calendar from 'react-calendar'

export const Footer = () => {
  const calPopover = (
    <Popover id="popover-positioned-top" title="Calendar">
      <Calendar />
    </Popover>
  );

  const phonePopover = (
    <Popover id="popover-positioned-top" title="Cellphone">
      <strong>(206)-697-1348</strong>
    </Popover>
  );

  const messagePopover = (
    <Popover id="popover-positioned-top" title="Message Me">
      <strong>Email: vogt.sage@gmail.com</strong> 
    </Popover>
  );

  return (
    <footer className="Job-footer">
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={calPopover}
      >
        <Button>
          <img src="calendar.png" alt="calendar" className="footer-icon" />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={phonePopover}
      >
        <Button>
          <img src="phone-receiver.png" alt="phone" className="footer-icon" />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        trigger="click"
        placement="top"
        overlay={messagePopover}
      >
        <Button>
          <img src="support.png" alt="message" className="footer-icon" />
        </Button>
      </OverlayTrigger>
    </footer>
  )

}