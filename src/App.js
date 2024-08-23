import React from 'react';
//import {Route, Routes} from 'react-router-dom';
import {Container} from "react-bootstrap"
import "./App.css"
import Footer from './Components/Footer';
import LocationForm from './Components/LocationForm';
import About from "./Components/About";
import Video from "./Components/Video";

const App = () => {
  return (
    <Container>
      {/*<Navbar />
      <div>
        <Routes>
          <Route path='/' element={<LocationForm />} />
          <Route path='/' element={<Footer />} />
          <Route path='/' element={<About/>} />
        </Routes>
      </div>*/}
      
      <About />
      <Video />
      <LocationForm />
      <Footer />
    </Container>
  )
}

export default App;
