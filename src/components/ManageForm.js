import React from 'react';

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
        <input value={place.image} onChange={e => handleChange(e, key)} name="image" type="text" placeholder="adresse de l'image"/>
        <textarea value={place.description} onChange={e => handleChange(e, key)} name="description" rows="10" placeholder="Description de votre séjour"></textarea>
      </form>
      <button className="delete-button" onClick={() => deleteTrip(key)}>x Supprimer une étape</button>
    </div>
  )
}

export default ManageForm
