import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LunchWishes from './pages/lunchWishes';
import Placeholder from './pages/placeholder';

import PageFrame from './components/pageFrame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFrame />} >
          <Route
          index
          element={<LunchWishes/>}
          />
          <Route path='placeholder' element={<Placeholder />} />
        </Route>
        
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
          }
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;