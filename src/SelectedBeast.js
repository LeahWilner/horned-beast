import React from "react";
import Modal from "react-bootstrap/Modal";
import { Image, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Main from "./Main.js";

class SelectedBeast extends React.Component {
  // handleOnShow = (beastFavorite) => {
  //   this.setState({
  //     showModal: true,
  //     selectBeast: beastFavorite

  //   });
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  // }

  // handleSelect = (e) => {
  //   let selected = e.target.value;
  //   if (selected === '1') {
  //     let newData = data.filter((number) )
  //   }

  // }

  
  helpHandleOnShow = () => {
    this.props.handleOnShow(this.props.beastFavorite);
  };

  render() {
   
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            <Modal.Body>
              <Image width="300px" src={this.props.selectedBeast.image} />
              <p>{this.props.selectedBeast.description}</p>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
