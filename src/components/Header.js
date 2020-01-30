import React from 'react';

const Header = ( {pseudo} ) => {
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`

  return (
    <header className="header">
      <h1>Le carnet de voyage {formatPseudo(pseudo)}</h1>
    </header>
  )
};

export default Header;
