//Collecting data from the files and importing react.
import './App.css';
import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
//Function to create the sections of the page
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        </Wrapper>
    </div>
  );
}

export default App;
