import React from 'react';
import propTypes from 'prop-types'

const Login = ({ googleAuthenticate, facebookAuthenticate }) => {
  return (
    <div className="login">
      <h2>Connecte toi pour accéder à ton journal</h2>
      <button onClick={googleAuthenticate} className="google-button">Je me connecte avec Google</button>
      <button onClick={facebookAuthenticate} className="facebook-button">Je me connecte avec Facebook</button>
    </div>
  )
}

Login.propTypes = {
  googleAuthenticate: propTypes.func.isRequired,
  facebookAuthenticate: propTypes.func.isRequired
}

export default Login
