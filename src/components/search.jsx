import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const QueryData=({query})=>{
    const[Data,setData]= useState("");
    const fetchData=async()=>{
        await axios.get(
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=b4561c3900844539ba95c65d8d2b991f"
            ).then((res)=>setData(res.data.articles));
    };
    useEffect(() =>{
        fetchData();
        // let ll="home jjjj kslssslslls";
        // let dd= ll.includes('home');
        // console.log(dd);
        // console.log(query);
    },[])
    return (
    <div className="container my-4 " ><u><h3>TOP HEADLINES</h3></u>
    <div className="conatiner my-3 d-flex justify-content-center align-items-center flex-column">{Data ? Data.map((items,index)=>
        items.title.includes("ss")?
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
export default QueryData;