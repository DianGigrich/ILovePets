
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from "./pages/PetPage";
import Navbar from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="banner">
        <h1>I Love Pets!</h1>
        <h2>Petsitting made easy</h2>
      </header>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
      </Router>
        <Footer/>
    </div>
  );
}

export default App;
