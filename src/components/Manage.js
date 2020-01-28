import React, { Component } from 'react';
import AddTrip from "./AddTrip";
import ManageForm from "./ManageForm";

class Manage extends Component {
  render() {
    const { places, addTrip, updateTrip, loadExample } = this.props;
    return (
      <div className="cards">
        <AddTrip addTrip={addTrip} />
        {
          Object.keys(places)
            .map(key => <ManageForm
              key={key}
              id={key}
              updateTrip={updateTrip}
              places={places} />
          )
        }
        {/*<footer>
          <button onClick={loadExample}>Remplir!</button>
        </footer>*/}
      </div>
    )
  }
}

export default Manage
