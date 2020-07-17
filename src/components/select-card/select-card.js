import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import GolferImg from './golfer.png';

import "./select-card.scss";

const SelectCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.clickEvent(props.type);
  };

  return (
    <Card className="">
      <Card.Img src={GolferImg} variant="top" alt="Golfer" />

      <Card.Body className='text-center'>
        <Button variant="primary" onClick={handleClick}>
          Create Golfer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SelectCard;
