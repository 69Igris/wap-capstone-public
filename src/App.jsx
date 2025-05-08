
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory category="men" />}></Route>
      <Route path='/womens' element={<ShopCategory category="men" />}></Route>
      <Route path='/kids' element={<ShopCategory category="kids" />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/> }/>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
