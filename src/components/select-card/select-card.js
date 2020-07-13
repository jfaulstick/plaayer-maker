import React from "react";

import './select-card.scss';

const SelectCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.clickEvent(props.type)
  }

  return (
    <div
      className="card select-card"
      style={{ width: "18rem" }}
      onClick={handleClick}
    >
      <img
        src={props.imgUrl}
        className="card-img-top img-fluid"
        alt="Golfer"
      />
    </div>
  );
};

export default SelectCard;