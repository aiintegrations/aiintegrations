import React from 'react'
import Icons from './icons';

function AppHeader() {

  return (
    <div className="App__header">
      <div className="App__header-icons">
        <Icons/>
      </div>
      <div className="App__header-authorName">
        Ai Integrations
      </div>
    </div>
  );
}

export default AppHeader;
