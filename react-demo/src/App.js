import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import Users from './pages/Users';
// import Practice from './Practice';
// import Practice1 from './Practice1';
// import newPractice from './Practice3';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        

        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/users" element={<Users/>} />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
