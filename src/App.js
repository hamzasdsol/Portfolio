import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Resume from './components/Resume';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="contact" element={<Contact />} />

      </Routes>
    </>
  );
}
export default App;