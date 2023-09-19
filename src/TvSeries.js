import React from 'react';
import { useState, useEffect } from 'react';
import { tvSeries_genres } from './config';
import Film from './components/Film';
import Pagination from './components/Pagination';

function TvSeries() {
  const [tvSeries, setTvSeries]=useState([]);
  const [page, setPage]=useState(1);
  const [genres, setGenres]=useState([]);
  const [selectedGenres, setSelectedGenres]=useState([]);
  const [selectedGenreIds, setSelectedGenreIds]=useState([]);
  
  useEffect(()=>setGenres(tvSeries_genres),[]);
  useEffect(()=>{
    setSelectedGenreIds(selectedGenres.map(selectedGenre=>selectedGenre.id));
  },[selectedGenres])

useEffect(()=>{
    for(let span of document.querySelectorAll('span'))
    {
      if(span.innerHTML==page)
      {
        span.classList.add('active');
      }
      else
      span.classList.remove('active');
    }
  },[page]);  
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyZDM3ODgzYmNmYTA2MzZhMjI2YTU0NWNjZTYwYSIsInN1YiI6IjY0ZjliMGU1ZmZjOWRlMDEzOGViMzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-BW6XG1yBwfB8Tht8g-tkxfkOSK81w0Kzffm8m-2hM'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${selectedGenreIds}`, options)
      .then(response => response.json())
      .then(response => setTvSeries(response.results)) 
      .catch(err => console.error(err));
  },[][page])


  return (
    <div className="tv-series container g-0">
      <h6 className='content-title'>TV SERIES</h6>

      <div className='selected-genres'>
        {
          selectedGenres.map((selectedGenre)=>(
            <span>{selectedGenre.name}
            <i onClick={()=>{setGenres((prev)=>[...prev, selectedGenre]);
              setSelectedGenres((prev)=>prev.filter((prevgenre)=>prevgenre!=selectedGenre))
            }} className="fa-solid fa-xmark fa-xs"></i></span>
          ))
        }
      </div>
      <div className="genres">
      {
        genres.map((genre)=>(
          <span onClick={()=>{
              setSelectedGenres((prev)=>[...prev, genre]);
              setGenres((prev)=>prev.filter((prevgenre)=>prevgenre!=genre))
          }}>{genre.name}</span>
        ))
      }
      </div>
        <div className="row">
                {tvSeries.map((film)=>(
                  <Film film={film} media_type='tv'/>
              ))}
        </div>
        <Pagination page={page} setPage={setPage}/>

        
      </div>
  )
}

export default TvSeries