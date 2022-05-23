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
import CategoryWiseFurniture from './Component/CategoryWiseFurniture/CategoryWiseFurniture';
import Navigation from './Sheard/Navigation/Navigation';
import Footer from './Sheard/Footer/Footer';
import CartButton from './Component/CartButton/CartButton';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <CartButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<HomeFurniture />} />
        <Route path='/category/:categoryId' element={<CategoryWiseFurniture></CategoryWiseFurniture>} />
        <Route path='/' element={<HospitalFurniture />} />
        <Route path='/' element={<OfficeFurniture />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
