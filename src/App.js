import React, { Component } from 'react'
// CSS
import './App.css'

import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import places from "./places";
import base from './base';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    places: {}
  };

  // sync with database
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/diary`, {
      context: this,
      state: 'places'
    });
  }

  // end connexion to avoid data persistence
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTrip = place => {
    const places = { ...this.state.places };
    places[`place-${Date.now()}`] = place;
    this.setState(places);
  }

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
        <Admin
          addTrip={this.addTrip}
          loadExample={this.loadExample} />
      </div>
    )
  }
}

export default App
