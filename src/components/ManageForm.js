import React from 'react';
import propTypes from 'prop-types'

const ManageForm = ({ id: key, updateTrip, places, deleteTrip }) => {
  const place = places[key];

  const handleChange = (event, key) => {
    const {name, value} = event.target;
    const place = places[key];
    place[name] = value;
    updateTrip(key, place);
  }

  return (
    <div className="card">
      <form className="admin-form update-trip">
        <input value={place.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="Nom du lieu visité" />
        <input value={place.pays} onChange={e => handleChange(e, key)} name="pays" type="text" placeholder="Nom du pays"/>
        <input onChange={e => handleChange(e, key)} name="image" type="file" placeholder="Choisissez votre image"/>
        <input value={place.date_debut} onChange={e => handleChange(e, key)} name="date_debut" type="date" placeholder="date de début"/>
        <input value={place.date_fin} onChange={e => handleChange(e, key)} name="date_fin" type="date" placeholder="date de fin"/>
        <textarea value={place.description} onChange={e => handleChange(e, key)} name="description" rows="10" placeholder="Description de votre séjour"></textarea>
      </form>
      <button className="delete-button" onClick={() => deleteTrip(key)}>x Supprimer une étape</button>
    </div>
  )
}

ManageForm.propTypes = {
  id: propTypes.string.isRequired,
  updateTrip: propTypes.func.isRequired,
  places: propTypes.object.isRequired,
  deleteTrip: propTypes.func.isRequired
}

export default ManageForm
