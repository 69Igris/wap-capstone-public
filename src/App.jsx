import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import Blog from './pages/Blog'
import LoginPage from './components/LoginSignup/Login'
import SignupPage from './components/LoginSignup/Signup'
function App() {
  
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/shop' element={<ProductsPage/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>



    </Routes>

    </BrowserRouter>  
    <Footer/>    
    </>
  )
}

export default App
