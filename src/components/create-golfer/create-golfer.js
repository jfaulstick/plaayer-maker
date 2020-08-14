import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import { useForm } from "react-hook-form";

import CardGolfer from "../card-golfer/card-golfer";

import "./create-golfer.scss";

const CreateGolfer = (props) => {
  console.log(props);
  const { register, handleSubmit, watch, setValue, errors } = useForm();

  const golfer = {
    nameFirst: watch("nameFirst", "John"),
    nameLast: watch("nameLast", "Doe"),
    tour: watch("tour", "2020's Amateurs"),
    skills: {
      puny: watch("skills.puny", "no"),
      bomber: watch("skills.bomber", "no"),
      shaper: watch("skills.shaper", "no"),
      scatter: watch("skills.scatter", "no"),
      legend: watch("skills.legend", "no"),
      king: watch("skills.king", "no"),
      yeoman: watch("skills.yeoman", "no"),
      duffer: watch("skills.duffer", "no"),
      champion: watch("skills.champion", "no"),
      hero: watch("skills.hero", "no"),
      utility: watch("skills.utility", "no"),
      hacker: watch("skills.hacker", "no"),
      laser: watch("skills.laser", "no"),
      soft: watch("skills.soft", "no"),
      stone: watch("skills.stone", "no"),
      master: watch("skills.master", "no"),
      workman: watch("skills.workman", "no"),
      sandy: watch("skills.sandy", "no"),
      chunky: watch("skills.chunky", "no"),
      gold: watch("skills.gold", "no"),
      rust: watch("skills.rust", "no"),
      icon: watch("skills.icon", "no"),
      prospect: watch("skills.prospect", "no"),
      dynamic: watch("skills.dynamic", "no"),
      gilded: watch("skills.gilded", "no"),
    },
    tournamentNumber: watch("tournamentNumber", 8),
    tournamentGrade: watch("tournamentGrade", "C"),
  };

  const resetForm = () => {
    setValue("nameFirst", "John");
    setValue("nameLast", "Doe");
    setValue("tour", "2020's Amateurs");
    setValue("tournamentNumber", 8);
    setValue("tournamentGrade", "C");
    setValue("skills", {
      puny: "no",
      bomber: "no",
      shaper: "no",
      scatter: "no",
      legend: "no",
      king: "no",
      yeoman: "no",
      duffer: "no",
      champion: "no",
      hero: "no",
      utility: "no",
      hacker: "no",
      laser: "no",
      soft: "no",
      stone: "no",
      master: "no",
      workman: "no",
      sandy: "no",
      chunky: "no",
      gold: "no",
      rust: "no",
      icon: "no",
      prospect: "no",
      dynamic: "no",
      gilded: "no",
    });
  };

  const onSubmit = (data) => {
    props.golfers.push(data);
    localStorage.setItem("golfers", JSON.stringify(props.golfers));
    resetForm();
    console.log(props);
    props.showAlert(
      "success",
      `New golfer ${data.nameFirst} ${data.nameLast} saved to local storage.`
    );
  };

  return (
    <div className="container-md d-flex flex-column flex-md-row justify-content-center align-items-center">
      <div className="col-md-8">
        <MDBCard>
          <form
            className="create-golfer-form "
            onSubmit={handleSubmit(onSubmit)}
          >
            <MDBCardBody>
              <div className="row mt-2 d-flex justify-content-center">
                <MDBCardTitle>Information</MDBCardTitle>
              </div>
              <div className="row form-row">
                {/* register your input into the hook by invoking the "register" function */}
                <div className="col-md-4">
                  <input
                    name="nameFirst"
                    className="form-control"
                    placeholder="First Name"
                    ref={register({ required: true })}
                  />
                  {errors.nameFirst && (
                    <span className="text-danger">
                      A first name is required
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    name="nameLast"
                    className="form-control"
                    placeholder="Last Name"
                    ref={register({ required: true })}
                  />
                  {errors.nameFirst && (
                    <span className="text-danger">A last name is required</span>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    name="tour"
                    className="form-control"
                    placeholder="Tour Name"
                    ref={register()}
                  />
                </div>
              </div>
              <div className="row form-row">
                <div className="col-md-6">
                  <select
                    className="form-control form-control-sm"
                    name="tournamentNumber"
                    ref={register({ required: true })}
                  >
                    <option value={1}>Tournament Rating 1</option>
                    <option value={2}>Tournament Rating 2</option>
                    <option value={3}>Tournament Rating 3</option>
                    <option value={4}>Tournament Rating 4</option>
                    <option value={5}>Tournament Rating 5</option>
                    <option value={6}>Tournament Rating 6</option>
                    <option value={7}>Tournament Rating 7</option>
                    <option value={8}>Tournament Rating 8</option>
                  </select>
                  {errors.nameFirst && (
                    <span className="text-danger">
                      A tournament rating number is required
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <select
                    className="form-control form-control-sm"
                    name="tournamentGrade"
                    ref={register({ required: true })}
                  >
                    <option value={"A"}>Grade A</option>
                    <option value={"B"}>Grade B</option>
                    <option value={"C"}>Grade C</option>
                  </select>
                  {errors.nameFirst && (
                    <span className="text-danger">
                      A tournament rating grade is required
                    </span>
                  )}
                </div>
              </div>
              <div className="row mt-2 d-flex justify-content-center">
                <MDBCardTitle>Skills</MDBCardTitle>
              </div>
              <div className="row mt-1 d-flex justify-content-center">
                {Object.keys(golfer.skills).map((skill) => {
                  return (
                    <div className="col-md-4 text-left">
                      <div className="d-flex">
                        <div className="skill-select-label">{skill.toUpperCase()}</div>
                        <div className="skill-select">
                          <select
                            className="form-control form-control-sm"
                            name={`skills.${skill}`}
                            ref={register}
                          >
                            <option value={"no"}>No</option>
                            <option value={"semi"}>Semi</option>
                            <option value={"yes"}>Yes</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="row justify-content-center mt-3">
                <MDBBtn color="elegant" type="submit">
                  Submit
                </MDBBtn>
              </div>
            </MDBCardBody>
          </form>
        </MDBCard>
      </div>
      <div className="col-md-4">
        <CardGolfer golfer={golfer} />
      </div>
    </div>
  );
};

export default CreateGolfer;
