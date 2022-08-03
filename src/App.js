import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './componets/contact';
import About from './componets/about';
import Home from './componets/home';
import Nopage from './componets/nopage'
import Layout from './componets/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' index element={<Layout />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
