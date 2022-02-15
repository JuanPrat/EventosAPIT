import './App.css';

import { Router } from '@reach/router';
import { Home } from './pages/Home';
import { EventPage } from './pages/EventPage'
import Navbar from './components/state/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdministrationPage } from './pages/AdministrationPage';
import {Footer} from './components/stateless/Footer'

function App(props) {
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="false" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </header>
      <Navbar></Navbar>
      <Router>
        <Home path="/" firebaseApp={props.app}></Home>
        <EventPage path="/eventPage/:eventImg/:eventTitle/:eventDescription/:speaker/:ubication/:date"></EventPage>
        <AdministrationPage path="/administration/"></AdministrationPage>
      </Router>
      <Footer></Footer>
    </div>
  );

}

export default App;
