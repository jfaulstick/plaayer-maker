import React from "react";

import './card-golfer.scss';

const mockGolfer = {
  nameFirst: "Burke",
  nameLast: "Yielding",
  tour: "2017 Pro National Golf",
  skills: {
    puny: "no",
    bomber: "no",
    legend: "no",
    king: "semi",
    yeoman: "no",
    duffer: "no",
    shaper: "semi",
    scatter: "no",
    champion: "semi",
    hero: "no",
    utility: "no",
    hacker: "semi",
    laser: "semi",
    soft: "semi",
    stone: "no",
    master: "no",
    workman: "no",
    sandy: "no",
    chunky: "no",
    gold: "yes",
    rust: "no",
    icon: "semi",
    prospect: "no",
    dynamic: "no",
    gilded: "no",
  },
  tournamentNumber: 2,
  tournamentGrade: "C",
};

const CardGolfer = (props) => {
  const golfer = props.golfer || mockGolfer;

  return (
    <div className="card-hmg">
      <div className="row d-flex justify-content-center first-name">
        {golfer.nameFirst}
      </div>
      <div className="row d-flex justify-content-center last-name">
        {golfer.nameLast.toUpperCase()}
      </div>
      <div className="row d-flex justify-content-center tour">
        {golfer.tour}
      </div>

      <div className="row d-flex justify-content-between skills-container">
        <div className="skills-group d-flex flex-column">
          <div className="skills-title text-left">Woods</div>
          <div className="skills-item text-left">
            {golfer.skills.bomber !== "no" ? "BOMBER" : ""}
            {golfer.skills.bomber === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.puny !== "no" ? "PUNY" : ""}
            {golfer.skills.puny === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.legend !== "no" ? "LEGEND" : ""}
            {golfer.skills.legend === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.king !== "no" ? "KING" : ""}
            {golfer.skills.king === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.yeoman !== "no" ? "YEOMAN" : ""}
            {golfer.skills.yeoman === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.duffer !== "no" ? "DUFFER" : ""}
            {golfer.skills.duffer === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.shaper !== "no" ? "SHAPER" : ""}
            {golfer.skills.shaper === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.scatter !== "no" ? "SCATTER" : ""}
            {golfer.skills.scatter === "semi" ? String.fromCharCode(9679) : ""}
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-title text-right">Irons</div>
          <div className="skills-item text-right">
            {golfer.skills.champion === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.champion !== "no" ? "CHAMPION" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.hero === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.hero !== "no" ? "HERO" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.utility === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.utility !== "no" ? "UTILITY" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.hacker === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.hacker !== "no" ? "HACKER" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.laser === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.laser !== "no" ? "LASER" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.soft === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.soft !== "no" ? "SOFT" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.stone === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.stone !== "no" ? "STONE" : ""}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between skills-container skills-container-2">
        <div className="skills-group">
          <div className="skills-title text-left">Putting</div>
          <div className="skills-item text-left">
            {golfer.skills.gold !== "no" ? "GOLD" : ""}
            {golfer.skills.gold === "semi" ? String.fromCharCode(9679) : ""}
          </div>
          <div className="skills-item text-left">
            {golfer.skills.rust !== "no" ? "RUST" : ""}
            {golfer.skills.rust === "semi" ? String.fromCharCode(9679) : ""}
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-title text-right">Recovery</div>
          <div className="skills-item text-right">
            {golfer.skills.master === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.master !== "no" ? "MASTER" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.workman === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.workman !== "no" ? "WORKMAN" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.sandy === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.sandy !== "no" ? "SANDY" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.chunky === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.chunky !== "no" ? "CHUNKY" : ""}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between skills-container skills-container-2">
        <div className="tournament d-flex justify-content-center">{`${golfer.tournamentNumber}-${golfer.tournamentGrade}`}</div>
        <div className="skills-group">
          <div className="skills-title text-right">Experience</div>
          <div className="skills-item text-right">
            {golfer.skills.icon === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.icon !== "no" ? "ICON" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.prospect === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.prospect !== "no" ? "PROSPECT" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.dynamic === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.dynamic !== "no" ? "DYNAMIC" : ""}
          </div>
          <div className="skills-item text-right">
            {golfer.skills.gilded === "semi" ? String.fromCharCode(9679) : ""}
            {golfer.skills.gilded !== "no" ? "GILDED" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGolfer;
