import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Card, Button, Col } from "react-bootstrap";

class SelectedBeast extends React.Component {


  // handleOnShow = (beastFavorite) => {
  //   this.setState({
  //     showModal: true,
  //     selectBeast: beastFavorite

  //   });
  // };

  

  helpHandleOnShow = () => {
    this.props.handleOnShow(this.props.beastFavorite);
  };



    render() {
      return (
      <>
         <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectBeast}</Modal.Title>
        </Modal.Header>
      </Modal>
      </>
    )}
  }
  
  export default SelectedBeast;