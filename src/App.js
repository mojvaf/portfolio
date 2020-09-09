import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Header'
import Section from './components/Section';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <Fragment>
      
      <GlobalStyles/>
     <Header/>
     <Section/>
     <Footer/>
     
    </Fragment>
  );
}

export default App;
