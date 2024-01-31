import React, { FC } from 'react'
import ProductListPage from './ProductListPage';
import NavBar from './NavBar';
import Footer from './Footer';
import ProductDetailPage from './ProductDetailPage';
import { Route, Routes } from 'react-router-dom';

type AppProps={
  
}

const App: FC<AppProps> = ({  }) => {
  return (
    <div>
      <NavBar />
      <div className='p-8 bg-gray-300 '>
      <div className='h-full p-16 pt-4 bg-white'>
          
           <Routes>  
     <Route path='/' element={<ProductListPage query={""} prise={0}/>}/>
            <Route path="/products/:id" element={<ProductDetailPage  />} />
          </Routes>
    </div>
    </div>
    <Footer/>




    </div>
  );
}

export default App;