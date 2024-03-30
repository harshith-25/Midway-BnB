import {Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import SearchPage from './SearchPage';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/search" element = {<SearchPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
