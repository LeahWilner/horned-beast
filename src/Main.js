import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import { Grid, Row, Col } from 'react-bootstrap';
import SelectedBeast from "./SelectedBeast";

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Main extends React.Component {


  render() {

    let beasts = [];

    data.forEach((newBeast, index) => {
      beasts.push(
        
        <HornedBeast 
        beastTitle={newBeast.title}
        imageURL={newBeast.image_url} 
        description={newBeast.description}
        key={index}
         />
      );
    });

    

    return (
      <>
      <Row xs={2} sm={3} md={4} lg={5}>

      {beasts}
     </Row>
     <SelectedBeast/>
      </>
    );
  }
}

export default Main;
