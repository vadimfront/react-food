import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import React, { Fragment } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './layout/Home';
import { About } from './layout/About';
import { Contact } from './layout/Contact';
import { NotFound } from './layout/NotFound';
import { Category } from './layout/Category';
import { Recipe } from './layout/Recipe';

function App() {
  return <>
    <Router>
      <Fragment>
        <Header />
        <main className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/category/:name' element={<Category />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Fragment>
    </Router>
  </>
}

export default App;
