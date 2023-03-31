
import { Routes, Route, Link } from 'react-router-dom';

import { Index } from "./pages/Index";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export const  App =() => {
  
  
  return (
   
      <div>
         <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
     
      </Routes>
    </div>
  )
}


