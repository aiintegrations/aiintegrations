import React from 'react'
import Icons from './icons';
import Logo from '../images/logo.svg'

function AppHeader() {

  return (
    <div className="App__header">
      <div className="App__header-icons">
        <Icons/>
      </div>
      <div className="App__header-authorName">
        <div className='App__header-authorName-title'>Ai Integrations</div>
        <div className="App__header-authorName-logo">
          <img className='App__header-authorName-logo' src={Logo} alt="Your SVG Image" />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
