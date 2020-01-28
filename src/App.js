import React, { Component } from 'react'
// CSS
import './App.css'
import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import places from "./places";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    places: {}
  };

  loadExample = () => this.setState({places});


  render () {
    const cards = Object.keys(this.state.places)
      .map(index => <Card key={index} details={this.state.places[index]} />);
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='cards'>
          { cards }
        </div>
        <Admin loadExample={this.loadExample} />
      </div>
    )
  }
}

export default App
