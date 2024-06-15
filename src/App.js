import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FetchData from "./components/FetchData";
import { QueryContext } from "./context/queryContext";
import PreLoader from "./components/PreLoader";
const App=()=>{
  const [query, setQuery]=useState("");
  return(
  <>
  <PreLoader/>
  <QueryContext.Provider value={{query, setQuery}}>
  <Router>
  <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/general" element={<FetchData cat="general"/>}/>
      <Route path="/business" element={<FetchData cat="business"/>}/>
      <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
      <Route path="/health" element={<FetchData cat="health"/>}/>
      <Route path="/science" element={<FetchData cat="science"/>}/>
      <Route path="/sports" element={<FetchData cat="sports"/>}/>
      <Route path="/technology" element={<FetchData cat="technology"/>}/>
    </Routes>
    <Footer/>
  </Router>
  </QueryContext.Provider>
  </>
  );
};
export default App