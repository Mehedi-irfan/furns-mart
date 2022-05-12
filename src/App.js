import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import HomeFurniture from './Component/HomeFurniture/HomeFurniture';
import HospitalFurniture from './Component/HospitalFurniture/HospitalFurniture';
import OfficeFurniture from './Component/OfficeFurniture/OfficeFurniture';
import Contact from './Component/Contact/Contact'
import NewArrible from './Component/NewArrible/NewArrible';
import Features from './Component/Features/Features';
import OnSale from './Component/OnSale/OnSale';
import Teanding from './Component/Teanding/Teanding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/homeFurniture' element={<HomeFurniture />} />
        <Route path='/hospitalFurniture' element={<HospitalFurniture />} />
        <Route path='/officeFurniture' element={<OfficeFurniture />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />}>
          <Route path='newArrible' element={<NewArrible />} />
          <Route path='featured' element={<Features />} />
          <Route path='onSale' element={<OnSale />} />
          <Route path='tending' element={<Teanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
