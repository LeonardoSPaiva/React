/* App.js */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBars from './Component/Layout/NavBars.js';
import Footer from './Component/Layout/Footer.js';
import ItemDetailContainer from './Component/Detail/ItemDetailContainer.js';
import Error from './Component/Error.js';
import ItemListContainer from './Component/Item/ItemListContainer.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={ /* Rutas con Navbar y Footer */
            <>
              <NavBars />
              <ItemListContainer greeting="Bienvenidos a Delta Gamers" />
              <Footer />
            </>
          }
        />
        <Route path="/item/:id" element={
            <>
              <NavBars />
              <ItemDetailContainer />
              <Footer />
            </>
          }
        />
        <Route path="/productos/:category" element={
            <>
              <NavBars />
              <ItemListContainer />
              <Footer />
            </>
          }
        />
        {/* Ruta sin Navbar y Footer */}
        <Route path="error" element={<Error />} />
        {/* Rutas no existentes redirigen a la página de error */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;