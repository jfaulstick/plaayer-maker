import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertBox(props) {
  
  if (props.show) {
    return (
      <Alert variant={props.alert.variant} onClose={() => props.closeAlert()} dismissible>
        {props.alert.message}
      </Alert>
    );
  }
  return null;
}
