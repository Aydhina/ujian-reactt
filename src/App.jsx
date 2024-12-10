import React from 'react';
import Header from './header.jsx';
import About from './about.jsx';
import Services from './services.jsx';
import Project from './project.jsx';
import Seacrh from './search.jsx';
import Credit from './credit.jsx';
import Footer from './footer.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Services/>
      <Project/>
      <Seacrh/>
      <Credit/>
      <Footer/>
    </div>
  );
};

export default App;
