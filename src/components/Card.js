import React from 'react';
import propTypes from 'prop-types'

const Card = ({ details }) => {
  const requireImg = path => {
    try {
      return require(`../img/${path}`)
    } catch (err) {
      return require(`../img/default.jpg`)
    }
  }

  const formatDate = date => {
    return date
      .toString()
      .split('-')
      .reverse()
      .join('/');
  };

  return (
    <div className='card'>
      <div className="image">
        <img src={requireImg(details.image)} alt={details.nom}/>
      </div>
      <div className='place'>
        <div className="place-location">
          <h2>{details.nom}</h2>
          <h3>{details.pays}</h3>
        </div>
        <p className="place-description">{details.description}</p>
        <div className="place-date">
          { (details.date_debut && details.date_fin) && <p>du <span>{formatDate(details.date_debut)}</span> au <span>{formatDate(details.date_fin)}</span></p> }
          </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  details: propTypes.object.isRequired
};

export default Card
