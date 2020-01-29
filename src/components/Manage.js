import React, { Component } from 'react';
import AddTrip from "./AddTrip";
import ManageForm from "./ManageForm";
import Login from "./Login";

import firebase from "firebase/app";
import 'firebase/auth';
import base, { firebaseApp } from "../base";


class Manage extends Component {
  state = {
    uid: null,
    tripper: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.handleAuth({ user })
      }
    })
  }

  handleAuth = async authData => {
    const box = await base.fetch(this.props.pseudo, {context: this});

    if (!box.tripper) {
      await base.post(`${this.props.pseudo}/tripper`, {
        data: authData.user.uid
      })
    }

    this.setState({uid: authData.user.uid, tripper: box.tripper || authData.user.uid})
    // console.log(authData);
  }

  googleAuthenticate = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(googleProvider)
      .then(this.handleAuth)
  }

  facebookAuthenticate = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebaseApp
      .auth()
      .signInWithPopup(facebookProvider)
      .then(this.handleAuth)
  }

  logout = async () => {
    await  firebase.auth().signOut();
    this.setState({ uid: null });

  }

  render() {
    const { places, addTrip, updateTrip, loadExample, deleteTrip } = this.props;

    const logout = <button onClick={this.logout}>Déconnexion</button>

    if (!this.state.uid) {
      return <Login googleAuthenticate={this.googleAuthenticate} facebookAuthenticate={this.facebookAuthenticate} />
    }

    if (this.state.uid !== this.state.tripper) {
      return (
        <div>
          <p>Mmh... tu n'es pas le bon voyageur semble-t-il</p>
          {logout}
        </div>
      )
    }

    return (
      <div className="cards">
        <AddTrip addTrip={addTrip} />
        {
          Object.keys(places)
            .map(key => <ManageForm
              key={key}
              id={key}
              updateTrip={updateTrip}
              places={places}
              deleteTrip={deleteTrip} />
          )
        }
        <footer>
          { logout }
          <button onClick={loadExample}>Remplir!</button>
        </footer>
      </div>
    )
  }
}

export default Manage
