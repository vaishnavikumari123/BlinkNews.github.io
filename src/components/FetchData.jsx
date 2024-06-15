import React, { useContext, useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { QueryContext } from "../context/queryContext"; 

const FetchData=({cat})=>{
    const[Data,setData]= useState("");
    const {query} = useContext(QueryContext);
    const fetchData=async()=>{
        await axios.get(
            cat?
            `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=b4561c3900844539ba95c65d8d2b991f`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=b4561c3900844539ba95c65d8d2b991f"
            ).then((res)=>setData(res.data.articles));
    };
    useEffect(() =>{
        fetchData();
    },[cat])
    return (
    <div className="container my-4 " ><u><h3>TOP HEADLINES</h3></u>
    <div className="conatiner my-3 d-flex justify-content-center align-items-center flex-column">{Data ? Data.map((items,index)=>
        items.title.toLowerCase().includes(query)?
        <>
        <div className="container my-3 box p-3"style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
        <h5 className="my-1">{items.title}</h5>
        <div className="d-flex justify-content-center align-items-center ">
        <img src={items.urlToImage} alt="Image not found" className="img-fluid "style={{height:"300px", width:"100%", objectFit:"cover"}}/>
        </div>
        <p className="my-1">{items.content}</p>
        <a href={items.url} target="blank">View More</a>
        </div>
        </> 
        :<></>
    ):"LOADING...."}</div></div>
);
};
export default FetchData;