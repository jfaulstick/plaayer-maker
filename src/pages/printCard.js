import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import CardGolfer from "../components/card-golfer/card-golfer";
import "./printCard.scss";

class PrintGolfers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 0,
      pages: 0,
    };
  }

  componentWillMount() {
    if (this.props.location && this.props.location.items) {
      this.setState({
        rows: Math.ceil(this.props.location.items.length / 6),
        pages: Math.ceil(this.props.location.items.length / 18),
      });
    }
  }

  getPages = (items) => {
    return Math.ceil(items / 18);
  }

  renderPages = () => {
    if (this.props.location && this.props.location.items) {
      const pages = [];

      for (let i = 0; i < this.state.pages; i++) {
        const firstIndex = i * 17;
        const lastIndex =
          firstIndex + 17 < this.props.location.items.length
            ? firstIndex + 17
            : this.props.location.items.length - 1;

        pages.push(
          <div
            key={i}
            className="print-page d-flex flex-column justify-content-center padding-top-noprint"
          >
            {this.renderRows(firstIndex, lastIndex)}
          </div>
        );
      }

      return pages;
    }
  };

  renderRows = (first, last) => {
    if (this.props.location && this.props.location.items) {
      const totalRows = Math.ceil((last - first) / 6);
      const rows = [];

      for (let i = 0; i < totalRows; i++) {
        const firstIndex = first + i * 6;
        const lastIndex = firstIndex + 5 < last ? firstIndex + 5 : last;

        const items = [];

        for (let j = firstIndex; j <= lastIndex; j++) {
          const item = this.props.location.items[j];
          items.push(<CardGolfer key={j} golfer={item} />);
        }

        rows.push(
          <div key={i} className="d-flex print-row">
            {items}
          </div>
        );
      }

      return rows;
    }
  };

  render() {
    if (!this.props.location || !this.props.location.items) {
      return <Redirect to="/" />;
    }

    return <div>{this.renderPages()}</div>;
  }
}

export default withRouter(PrintGolfers);
