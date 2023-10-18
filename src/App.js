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

// tea auction
import AuctionSchedule from './tea auction/AuctionSchedule';
import SaleCatalogues from './tea auction/SaleCatalogues';
import ForthcomingAuctions from './tea auction/ForthcomingAuctions';
import MarketReports from './tea auction/MarketReports';

// about
import Profile from './pages/about/Profile';
import Community from './pages/about/Community';
import Science from './pages/about/Science';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>

     <Routes>
      <Route path="/" exact element = {<Home />} />
      <Route path="/about" exact element = {<About/>} >
        <Route path="profile" exact element={<Profile/>}/>
        <Route path="community" exact element={<Community/>}/>
        <Route path="science" exact element={<Science/>}/>
      </Route>
      <Route path="/contact" exact element = {<Contact />} />
     <Route path="/service" exact element = {<Services />} />
     <Route path="/garden" exact element = {<GardenCatalogue/>} />
      <Route path="/news" exact element = {<News />} />
      <Route path ="/auction" exact element = {<Auction />} >
        <Route path="auction-schedule" exact element={<AuctionSchedule/>}/>
        <Route path="sale-catalogues" exact element={<SaleCatalogues/>}/>
        <Route path="forthcoming" exact element={<ForthcomingAuctions/>}/>
        <Route path="market-reports" exact element = {<MarketReports/>}/>
        
      </Route>
      
      {/* Redirect to /not-found for all other routes */}
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
          
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
