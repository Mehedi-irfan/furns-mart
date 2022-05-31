import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import HomeFurniture from './Component/HomeFurniture/HomeFurniture';
import HospitalFurniture from './Component/HospitalFurniture/HospitalFurniture';
import OfficeFurniture from './Component/OfficeFurniture/OfficeFurniture';
import Contact from './Component/Contact/Contact'
import CategoryWiseFurniture from './Component/CategoryWiseFurniture/CategoryWiseFurniture';
import Navigation from './Sheard/Navigation/Navigation';
import Footer from './Sheard/Footer/Footer';
import CartButton from './Component/CartButton/CartButton';
import Furniture from './Component/Furniture/Furniture';
import CategoryFurniture from './Component/CategoryFurniture/CategoryFurniture';
import AllProducts from './Component/AllProducts/AllProducts';
import SingleBlog from './Component/SingleBlog/SingleBlog';
import { CartProvider } from 'react-use-cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
    console.log(newCart);
  }

  const handleClearCart = () => {
    setCart('');
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Navigation cart={cart} />
        <CartButton cart={cart} handleClearCart={handleClearCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<HomeFurniture />} />
          <Route path='/category/:categoryId' element={<CategoryWiseFurniture></CategoryWiseFurniture>} />
          <Route path='/furniture/:furnitureId' element={<Furniture />}></Route>
          <Route path='/Categoryfurniture/:categoryFurnitureId' element={<CategoryFurniture handleAddToCart={handleAddToCart} handleClearCart={handleClearCart} />}></Route>
          <Route path='/allProducts' element={<AllProducts />}></Route>
          <Route path='/blogs/:blogId' element={<SingleBlog />} />
          <Route path='/' element={<HospitalFurniture />} />
          <Route path='/' element={<OfficeFurniture />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
