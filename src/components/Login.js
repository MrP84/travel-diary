import React from 'react';
import propTypes from 'prop-types'

const Login = ({ googleAuthenticate, facebookAuthenticate, githubAuthenticate }) => {
  return (
    <div className="login">
      <h2>Connecte toi pour accéder à ton journal</h2>
      <button onClick={googleAuthenticate} className="login-button google-button">Je me connecte avec Google<i
  className="fa fa-google" aria-hidden="true"/></button>
      <button onClick={facebookAuthenticate} className="login-button facebook-button">Je me connecte avec Facebook<i
  className="fa fa-facebook" aria-hidden="true"/></button>
      <button onClick={githubAuthenticate} className="login-button github-button">Je me connecte avec Github<i
  className="fa fa-github" aria-hidden="true"/></button>
    </div>
  )
}

Login.propTypes = {
  googleAuthenticate: propTypes.func.isRequired,
  facebookAuthenticate: propTypes.func.isRequired,
  githubAuthenticate: propTypes.func
}

export default Login
