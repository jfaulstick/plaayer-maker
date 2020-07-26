import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdbreact";

import GolferImg from "./golfer.png";

import "./select-card.scss";

const SelectCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.clickEvent(props.type);
  };

  return (
    <MDBCard style={{ width: "22rem" }}>
      <MDBCardImage className="img-fluid" src={GolferImg} waves />
      <MDBCardBody className="text-center">
        <MDBBtn onClick={handleClick} color='elegant'>Create Golfer</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SelectCard;
