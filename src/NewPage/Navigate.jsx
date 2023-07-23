import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Buton from './Buton'
import { Link, useNavigate } from 'react-router-dom'
import "./style/Navigate.css"

const Navigate = () => {
  
  // const navigate = useNavigate()
  const [count, setCount] = useState([])
  const [rand, setRand] = useState(12)
  useEffect(() => {
    const API_KEY="8e6da8217e1eb84a246407f1542c55f3"
    let idNum=rand
const url = `https://api.themoviedb.org/3/movie/${idNum}?api_key=${API_KEY}`;
      axios.get(url)
      .then(res=> {setCount(res.data)})
      .catch(err=> {console.log(err)})
  }, [rand])
  //console.log(count);

  const randomNum=()=> {
    console.log(setRand(Math.floor(Math.random()*100)));
  }

  return (
    <div className='navigate'>
    <div className='content'>
      
    <h2 className='title'> <span className='span_title'>Titulo:  </span> {count?.original_title} </h2>
    <div className='overview'><span className='span_title'>Resumen:</span> {count?.overview} </div>
    <div className='date'> <span className='span_title'>fecha de lanzamiento: </span>{count?.release_date}</div>
      <div className='date'>
          <span className='span_title'>Pagina web:</span>
          <span className='span_link'>
          <Link to={count?.homepage}>  {count?.homepage?(count?.homepage):"no tiene pagina"} </Link>
          </span>
      </div>
    <div className='content_list'>
        <section className='list_section'>
          <span className='span_title'>Genero</span>
          <ul>
                {
                  count.genres?.map(u=> 
                    <li key={u.id}>{u.name}</li>
                    )
                } 
            </ul>
        </section>
      <section>
      <span className='span_title'>Pais de origen</span>
          <ul>
              <li>
                  {
                    count.production_countries?.map(u=>
                      <li key={u.id}>{u.name}</li>
                    )
                  }            
                </li>
            </ul>
      </section>
    </div>

        {/* <img className='imagen' src={count.poster_path} alt={count?.poster_path} /> */}
        <section className='content_img'>
          <img src={`https://image.tmdb.org/t/p/w500/${count.poster_path}` }/>

        </section>
     <section className='content_btn'>
          <Buton className='btn'/>
          <button className='btn' onClick={randomNum}>random movie</button>
     </section>
</div>
          
</div>
  )
}

export default Navigate