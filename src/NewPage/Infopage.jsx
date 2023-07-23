import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import "./style/Infopage.css"
const Infopage = () => {
  const {register, reset, handleSubmit}=useForm()
  const navigate = useNavigate()
  const handle=()=>{ navigate('/')}
  const [move, setMove] = useState([])
  const [datamove, setDatamove] = useState([])
  const dataDefault='';
  useEffect(() => {
    const keyword=datamove.movie;
    const URL=`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=8e6da8217e1eb84a246407f1542c55f3`;
    
    axios.get(URL)
        .then(res=> setMove(res.data) )
        .catch(err=> console.log(err))
  }, [datamove])

  console.log(move);
  const handlesubmiteMove=(data)=>{
    setDatamove(data)
    reset(dataDefault)
  }
  return (
    <div className='infopage'>
     <section className='info_section'>
          <button className='btn_form' onClick={handle}>homepage</button>
          <form onSubmit={handleSubmit(handlesubmiteMove)}>
            <input className='info_sect-input' type="text" id='movie' placeholder="busqueda por nombre" {...register('movie')} />
            <button className='btn_form'>send</button>
          </form>
       
     </section>

      <section className='infopage_2'>
      {
        move.results?.map(e=>( 
          <li key={e.id} className="info_card-li">
            <img className='info_img' src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="none"/>
            <div>
              <div><span className='info_span'>Name: </span>{e.original_title} <span className='info_span'>Id: </span>{e.id}</div>
              <div><span className='info_span'>Name: </span>{e.original_title} <span className='info_span'>fecha: </span>  {e.release_date}</div>
              <div> <span className='info_span'>popularidad:</span> {e.popularity}</div>
            </div>
            <p className='infopage_2-p'>{e.overview}</p>
          </li>
        ))
      }
      </section>

    </div>
  )
}

export default Infopage