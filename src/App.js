import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

// pages
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import News from './pages/News';
import Auction from './pages/Auction';
import NotFound from './pages/NotFound';

// components
import GardenCatalogue from './components/GardenCatalogue';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>

     <Routes>
      <Route path="/" exact element = {<Home />} />
      <Route path="/about" exact element = {<About/>} />
      <Route path="/contact" exact element = {<Contact />} />
     <Route path="/service" element={<Services />} >
  <Route path="garden" element={<GardenCatalogue />} />
</Route>

      <Route path="/news" exact element = {<News />} />
      <Route path ="/auction" exact element = {<Auction />} />
      
      {/* Redirect to /not-found for all other routes */}
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
          
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
