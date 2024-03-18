import React, { useEffect } from 'react'
import Navbar from '../Navbar';

function Sardines() {
    useEffect(() => {
        document.title = "Sardines page"
        return () => {
            console.log("Exit Sardines");
        }
    }, [])
    return (
        <div>
            <Navbar />
            <h1>Sardines</h1>
            
        </div>
      )
}

export default Sardines
