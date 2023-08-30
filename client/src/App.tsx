//local imports
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import About from './Components/About';
import Projects from './Components/Projects';
import Bjj from './Components/Bjj';
import Music from './Components/Music';
import Contact from './Components/Contact';

//Bootstrap Components
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button'

//React-Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Bootstrap Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bjj" element={<Bjj />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
