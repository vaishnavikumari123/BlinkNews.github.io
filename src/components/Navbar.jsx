import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import navbar from "../components/navbar.css"
import FetchData from "./FetchData";
import QueryData from "./search";
import { QueryContext } from "../context/queryContext"; 
export const Navbar=()=>{

  const [search, setSearch] = useState("");
  const {setQuery} = useContext(QueryContext);
  function handleSearch(){
    console.log(search)
    setQuery(search.toLowerCase());
  }

  return (<div style={{zIndex:"2",position:"fixed",width:"100%",top:"0",boxShadow:"5px 5px 10px #3f3f4a"}}><nav class="navbar navbar-expand-lg bg-dark" >
  <div class="container-fluid">
    <div ><b style={{fontSize:"30px" }}><img src="./news.png"style={{height:"60px"}}/></b></div>
    <nav class="navbar bg-dark"> 
 
</nav>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"style={{backgroundColor:"blueviolet"}}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/business" >Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/entertainment" text-white>Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/health" text-white>Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/science" text-white>Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/sports" text-white>Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="/technology" text-white>Technology</Link>
        </li>
        <li>
        <div class="container-fluid ">
    <form class="d-flex " role="search" onSubmit={(e)=>{e.preventDefault()}}>
      <input class="form-control me-2 " type="search" id="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button class="btn btn-outline-success" onClick={handleSearch} type="submit">Search</button>
    </form>
  </div>
        </li>
      </ul>
      
    </div>
  </div>
 
</nav></div>
  )
}
