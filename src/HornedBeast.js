import React from "react";
import Button from "react-bootstrap/Button";

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
    console.log('props?', this.props);
    return(
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
      <p>{this.props.description}</p>

      <div>{this.state.beastFavorite ? 'My Favorite Beast' : ''}</div>
      <Button></Button>
      <Button></Button>
        


      </>
    ) 
  }
}

export default HornedBeast;
