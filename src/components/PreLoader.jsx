import React, { useEffect } from "react";
import "./preloader.css"
import {preLoaderAnim} from "../animations/index"
const PreLoader=()=>{
    useEffect(()=>{
        preLoaderAnim()
    },[])
    return (
        <div className="preloader">
        <div className="texts-container">
            <span style={{fontSize:"50px"}}>BLINK </span>
            <span style={{fontSize:"30px"}}>News</span>
            <span style={{fontSize:"30px"}}>.</span>
            <span style={{fontSize:"30px"}}>.</span>
            <span style={{fontSize:"30px"}}>.</span>
        </div>
    </div>
    )
}
export default PreLoader;