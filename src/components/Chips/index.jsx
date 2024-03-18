import React, { useEffect } from 'react'
import Navbar from '../Navbar';
import soda from "../../assets/image/Soda.png"

function Chips() {
    useEffect(() => {
        document.title = "Chips page"
        return () => {
            console.log("Exit Chips");
        }
    }, [])
    return (
        <div>
            <Navbar />
            <h1>Chips</h1>
            
        </div>
      )
}

export default Chips
