import React from 'react';

const Login = ({ googleAuthenticate, facebookAuthenticate }) => {
  return (
    <div className="login">
      <h2>Connecte toi pour accéder à ton journal</h2>
      <button onClick={googleAuthenticate} className="google-button">Je me connecte avec Google</button>
      <button onClick={facebookAuthenticate} className="facebook-button">Je me connecte avec Facebook</button>
    </div>
  )
}

export default Login
