import { Index } from "./pages/Index"
import { Routes, Route, Link } from 'react-router-dom';

export const  App =() => {
  
  
  return (
   
      <div>
         <Routes>
        <Route path="/" element={<Index />} />
     
      </Routes>
    </div>
  )
}


