import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <nav>
        <ul>
            <li onClick={() => navigate('/soda')}>Soda</li>
            <li onClick={() => navigate('/chips')}>Chips</li>
            <li onClick={() => navigate('/sardines')}>Sardines</li>
        </ul>
    </nav>
  )
}


export default Navbar