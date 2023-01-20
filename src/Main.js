import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import { Grid, Row, Col } from "react-bootstrap";
import SelectedBeast from "./SelectedBeast";
import { Image, ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {
        title: "",
        description: "",
        image: "",
      },
      selectedData: data
    };
  }
  handleOpen = (beastData) => {
    console.log(beastData);
    this.setState({ showModal: true });
    this.setState({ selectedBeast: beastData });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };



  handleSelect = (e) => {
    const numHorns = parseInt(e.target.value);
    
    let gallery = this.state.selectedData;
    if (numHorns) {
      gallery = data.filter((creature) => creature.horns === numHorns); 
    }
    this.setState({ selectedData: gallery });
    if(numHorns === 50){
      this.setState({ selectedData: data });
    }
    
  };




  render() {
    // let numbers = this.state.sortedData.map((number, index) => {
    //   return <ListGroup.Item key={index}>{number}</ListGroup.Item>;
    // });


    let beasts = [];

    this.state.selectedData.forEach((newBeast, index) => {
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
        <main>
        {/* <ListGroup>{numbers}</ListGroup> */}
          <Form>
            <p>Select Number of Horns</p>
            <Form.Select name="select" onChange={this.handleSelect}>
             <option value="50">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
            <Button type="submit">Submit</Button>
         </Form>
          <Row xs={2} sm={3} md={4} lg={5}>
            {beasts}
          </Row>
        </main>

        <SelectedBeast
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          selectedBeast={this.state.selectedBeast}
        />
      </>
    );
  }
}

export default Main;
