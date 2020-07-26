import React, { useState } from 'react';
import { MDBAlert } from 'mdbreact';
import './alertBox.scss';

export default function AlertBox(props) {
  
  if (props.show) {
    return (
      <MDBAlert className='pm-alert' color={props.alert.variant} onClose={() => props.closeAlert()} dismiss>
        {props.alert.message}
      </MDBAlert>
    );
  }
  return null;
}
