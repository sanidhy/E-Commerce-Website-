import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/navbar';
import { HomeScreen } from './Screen/HomeScreen/homeScreen';
import { Routes,Route } from 'react-router-dom';
import { Products } from './Screen/Products/products';
import { Footer } from './Component/Footer/footer';
import { Cart } from './Screen/Cart/cart';
import { Signup } from './Component/Login/Sign_up/signup';
import { Login } from './Component/Login/Log_in/login';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar> 

    <Routes> 
      <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/signup' element={<Login/>}/>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;