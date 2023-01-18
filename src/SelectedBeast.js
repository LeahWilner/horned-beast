import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";


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
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          <Modal.Body>
            <Image width='300px' src={this.props.selectedBeast.image}/>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
        </Modal.Header>
      </Modal>
      </>
    )}
  }
  
  export default SelectedBeast;