import React, { Component } from "react";

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

  componentWillMount() {
    
  }

  componentDidMount() {
    console.log('Create Page Mounted', this);
  }

  cardClick = (mode) => {
    this.setState({ mode: mode.toLowerCase() });
  };

  SelectMode = () => {
    return (
      <Page>
        {/* <SelectCard
          type={"Course"}
          imgUrl="/assets/img/pinflag.jpg"
          clickEvent={this.cardClick}
        /> */}
        <SelectCard
          type={"Golfer"}
          imgUrl="./assets/img/golfer.png"
          clickEvent={this.cardClick}
        />
      </Page>
    );
  };

  render = () => {
    switch (this.state.mode) {
      case "golfer":
        return (
          <Page>
            <CreateGolfer golfers={this.props.golfers} showAlert={this.props.showAlert}/>
          </Page>
        );
      case "course":
        return (
          <Page>
            <div>Creating a Course!</div>
          </Page>
        );
      case "unset":
        return (
          <Page>
            {/* <SelectCard
              type={"Course"}
              imgUrl="/assets/img/pinflag.jpg"
              clickEvent={this.cardClick}
            /> */}
            <SelectCard
              type={"Golfer"}
              imgUrl="./assets/img/golfer.png"
              clickEvent={this.cardClick}
            />
          </Page>
        );
      default:
        return (
          <Page>
            {/* <SelectCard
              type={"Course"}
              imgUrl="/assets/img/pinflag.jpg"
              clickEvent={this.cardClick}
            /> */}
            <SelectCard
              type={"Golfer"}
              imgUrl="./assets/img/golfer.png"
              clickEvent={this.cardClick}
            />
          </Page>
        );
    }
  };
}

export default CreatePage;
