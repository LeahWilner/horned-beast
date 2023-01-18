import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Card, Button, Col } from "react-bootstrap";

class SelectedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectBeast: '',
    }
  }

  handleOnShow = (beastFavorite) => {
    this.setState({
      showModal: true,
      selectBeast: beastFavorite

    });
  };

  helpHandleOnShow = () => {
    this.props.handleOnShow(this.props.beastFavorite);
  };



    render() {
      return (
      <>
         <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectBeast}</Modal.Title>
        </Modal.Header>
      </Modal>
      </>
    )}
  }
  
  export default SelectedBeast;