import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style/Buton.css"
const Buton = () => {
    const navigate = useNavigate()
    const handle=()=>{
        navigate('/movie')
    }
  return (
    <div className='Buton_content'>
        <button className='Buton_btn' onClick={handle}>
            mas informacion
        </button>
    </div>
  )
}

export default Buton