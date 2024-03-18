import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import style from "../Soda/style.module.css";
import soda from "../../assets/image/Soda.png"

function Soda() {
    useEffect(() => {
        document.title = "Soda page"
        return () => {
            console.log("Exit Soda");
        }
    }, [])
  return (
    <div className={style.soda} style={{backgroundImage: `url(${soda})`}}>
        <Navbar />
        <h1>Soda</h1>
        
    </div>
  )
}

export default  Soda
