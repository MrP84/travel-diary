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

  return (
    <div className='card'>
      <div className="image">
        <img src={requireImg(details.image)} alt={details.nom}/>
      </div>
      <div className='place'>
        <div className="location">
          <h2>{details.nom}</h2>
          <h3>{details.pays}</h3>
        </div>
        <p>{details.description}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  details: propTypes.object.isRequired
};

export default Card
