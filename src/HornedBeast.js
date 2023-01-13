import React from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      beastFavorite: false,
    };
  }
  
  
  handleLikes = () => {
    this.setState9({
      likes: this.state.likes +1,
    });
    // console.log('favorites working?');
  }
  
  
  beastFavorite = () => {
    this.setState({
      beastFavorite: true,
    })
  }
  
  beastUnfavored = () => {
    this.setState({
      beastFavorite: false,
    })
  }


  render() {
    console.log('XXXXXprops?', this.props);
    return(
      <>
      {/* card
      col */}

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageURL} alt={this.props.title} title={this.props.title}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary">My Favorite Beast ❤️</Button>
      </Card.Body>
    </Card>

      {/* <h2>{this.props.title}</h2> */}
      {/* <img src={this.props.imageURL} alt={this.props.title} title={this.props.title}/> */}
      {/* <p>{this.props.description}</p> */}

      {/* <div>{this.state.beastFavorite ? 'My Favorite Beast' : ''}</div> */}
      {/* <Button>My Favorite Beast ❤️</Button> */}
      
        


      </>
    ) 
  }
}

export default HornedBeast;
