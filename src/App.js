import './App.css';
import React from 'react'
import Application from './Application';
import Navigation from './components/Navigation';
import { useState } from 'react';

const pages = [
  { title: 'Home', page: 'home'},
  { title: 'About', page: 'about' }
];

function App() {

  const [CurrentPage, setCurrentPage] = useState(pages[0].page);

  const setAppPage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-container-2">
        <Navigation pages={pages}
						  setAppPage={setAppPage}/>
        <Application page={CurrentPage}
						   pages={pages}
						   setAppPage={setAppPage}/>
        </div>
      </div>
    </div>
  );
}


export default App;
