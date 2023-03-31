import { Index } from "./pages/Index"
import { Routes, Route, Link } from 'react-router-dom';

import { Home } from "./pages/Home";

export const  App =() => {
  
  
  return (
   
      <div>
         <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
       
     
      </Routes>
    </div>
  )
}


