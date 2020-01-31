import React, { Component } from 'react';

class AddTrip extends Component {
  state = {
    nom: '',
    pays: '',
    image: '',
    description: '',
    date_debut:'',
    date_fin:''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState( { [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const place = { ...this.state };
    this.props.addTrip(place);
    console.log(place);

    Object.keys(place).forEach((item) => {
      place[item] = '';
    });
    this.setState({ ...place })
  };

  render() {
    return (
      <div className="card">
        <form className="admin-form add-trip" onSubmit={this.handleSubmit}>
          <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text" placeholder="Nom du lieu visité"/>
          <input value={this.state.pays} onChange={this.handleChange} name="pays" type="text" placeholder="Nom du pays"/>
          <input value={this.state.image} onChange={this.handleChange} name="image" type="text" placeholder="adresse de l'image"/>
          <input value={this.state.date_debut} onChange={this.handleChange} name="image" type="date" placeholder="date de début"/>
          <input value={this.state.date_fin} onChange={this.handleChange} name="image" type="date" placeholder="date de fin"/>
          <textarea value={this.state.description} onChange={this.handleChange} name="description" rows="10" placeholder="Description de votre séjour"></textarea>
          <button type="submit">+ Ajouter une étape</button>
        </form>
      </div>
    )
  }
}

export default AddTrip;
