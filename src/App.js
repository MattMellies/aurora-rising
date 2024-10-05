import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/home/index.js';
import About from './pages/about/index.js';
import Services from './pages/services/index.js';
import FAQ from './pages/faq/index.js';
import Booking from './pages/booking/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const isStaging = window.location.href.includes('github') ? true : false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <BrowserRouter basename={isStaging ? '/aurora-rising' : '/'}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
