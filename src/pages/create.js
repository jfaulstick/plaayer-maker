import React, { Component } from "react";

import {
  MDBFreeBird,
  MDBRow,
  MDBContainer,
  MDBEdgeHeader,
} from "mdbreact";

import Page from "../components/page/page";
import SelectCard from "../components/select-card/select-card";
import CreateGolfer from "../components/create-golfer/create-golfer";

class CreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: this.props.game,
      mode: "unset",
    };
  }

  componentWillMount() {}

  componentDidMount() {
    console.log("Create Page Mounted", this);
  }

  cardClick = (mode) => {
    this.setState({ mode: mode.toLowerCase() });
  };

  render = () => {
    switch (this.state.mode) {
      case "golfer":
        return (
          <MDBContainer className="p-0" fluid>
            <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
            <MDBFreeBird>
              <CreateGolfer
                golfers={this.props.golfers}
                showAlert={this.props.showAlert}
              />
            </MDBFreeBird>
          </MDBContainer>
        );
      default:
        return (
          <MDBContainer className="p-0" fluid>
            <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
            <MDBFreeBird>
              <MDBRow className="d-flex justify-content-center">
                <SelectCard type={"Golfer"} clickEvent={this.cardClick} />
              </MDBRow>
            </MDBFreeBird>
          </MDBContainer>
        );
    }
  };
}

export default CreatePage;
