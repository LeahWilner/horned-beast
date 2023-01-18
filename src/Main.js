import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import { Grid, Row, Col } from 'react-bootstrap';
import SelectedBeast from "./SelectedBeast";

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  constructor(props) 
  {super(props);
    this.state = {
      showModal: false,

    }


  }
handleOpen = () => {
  this.setState({showModal:true})
}


  handleClose = () => {
    this.setState({showModal:false})
  }

  render() {

    let beasts = [];

    data.forEach((newBeast, index) => {
      beasts.push(
        
        <HornedBeast 
        title={newBeast.title}
        imageURL={newBeast.image_url} 
        description={newBeast.description}
        key={index}
        handleOpen={this.handleOpen}
         />
      );
    });

    

    return (
      <>
      <Row xs={2} sm={3} md={4} lg={5}>

      {beasts}
     </Row>
     <SelectedBeast showModal={this.state.showModal} handleClose={this.handleClose}/>

      </>
    );
  }
}

export default Main;
