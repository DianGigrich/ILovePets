import react from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from "./pages/PetPage";
import Navigation from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import './App.css';


function App() {
  return (
    <div className="App">
      <Container>
        <h1>I Love Pets!</h1>
        <h2>Petsitting made easy</h2>
      </Container>
        <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
        <h2>Footer</h2>
      </Router>
    </div>
  );
}

export default App;
