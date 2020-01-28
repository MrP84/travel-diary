import React from 'react'

const Card = ({ details }) => {
  return (
    <div className='card'>
      <div className="image">
        <img src={require(`../img/${details.image}`)} alt={details.nom}/>
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

export default Card
