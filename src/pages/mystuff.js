import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEye } from "@fortawesome/free-solid-svg-icons";

import CardGolfer from "../components/card-golfer/card-golfer";

class MyStuffPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      golfers: this.props.golfers,
      modalTarget: {},
      showModal: false,
    };

    this.closeModal = this.closeModal.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  viewItem(item) {
    this.setState({ modalTarget: item });
    this.showModal();
  }

  handleClick() {
    console.log(`Button clicked.`, this.props);
  }

  golferTable() {
    if (this.props.golfers) {
      return this.props.golfers.map((golfer, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{golfer.nameFirst}</td>
            <td>{golfer.nameLast}</td>
            <td>{golfer.tour}</td>
            <td>{`${golfer.tournamentNumber}-${golfer.tournamentGrade}`}</td>
            <td>
              <FontAwesomeIcon
                className="icon-button"
                icon={faEye}
                onClick={() => this.viewItem(golfer)}
              />
            </td>
            <td>
              <FontAwesomeIcon
                className="icon-button"
                icon={faTrashAlt}
                onClick={() => this.props.deleteGolfer(golfer)}
              />
            </td>
          </tr>
        );
      });
    }
    return <div>No golfers found!</div>;
  }

  render() {
    return (
      <div className="page container-fluid p-0">
        <Modal
          size="sm"
          show={this.state.showModal}
          onHide={this.closeModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="d-flex justify-content-center">
              Player Card
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <CardGolfer golfer={this.state.modalTarget} />
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Tour</th>
              <th scope="col">Grade</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.golferTable()}</tbody>
        </table>
        <Link to={{pathname: "/print/golfers", items: this.props.golfers}}>
          <Button variant="primary">Print</Button>
        </Link>
      </div>
    );
  }
}

export default MyStuffPage;
