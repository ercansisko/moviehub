import React, {useState, useEffect} from 'react';
import Film from './components/Film';
import Pagination from './components/Pagination';
function Trending() {
  const [trendingFilms, setTrendingFilms]=useState([]);
  const [page, setPage]=useState(1);
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
   
    fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(response => setTrendingFilms(response.results))
      .catch(err => console.error(err));
  },[][page]);
  return (
      <div className="trending container g-0">
        <h6 className='content-title'>TRENDING TODAY</h6>
        <div className="row">
                {trendingFilms.map((film)=>(
                  <Film film={film} media_type={film.media_type}/>
              ))}
        </div>
        <Pagination page={page} setPage={setPage}/>

        
      </div> 
      
  
  )
}

export default Trending