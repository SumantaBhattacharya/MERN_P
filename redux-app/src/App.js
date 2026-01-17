// import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/page1/Home';
import Cart from './Components/page1/Cart';

import Navbar from './Components/Navbar';

import ProductDts from './Components/ProductDts';

import Page404 from './Components/Pages_404';

import RegandLogin from './Components/RegandLogin';

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>

           <Route path='/product/:productId' element={<ProductDts/>}/>

          <Route path='/auth' element={<RegandLogin/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;