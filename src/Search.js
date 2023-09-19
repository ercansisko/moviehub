import React, {useEffect, useState} from 'react';
import Film from './components/Film';
import Pagination from './components/Pagination';

function Search() {
const [searchItem, setSearchItem]=useState('');
const [search, setSearch]=useState('');
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
},[page][searchItem]); 
const handleSearch=(e)=>{
setSearchItem(e.target.value);
}
useEffect(()=>setPage(1),[searchItem]);
useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyZDM3ODgzYmNmYTA2MzZhMjI2YTU0NWNjZTYwYSIsInN1YiI6IjY0ZjliMGU1ZmZjOWRlMDEzOGViMzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-BW6XG1yBwfB8Tht8g-tkxfkOSK81w0Kzffm8m-2hM'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/search/multi?query=${searchItem}&include_adult=false&language=en-US&page=${page}`, options)
    .then(response => response.json())
    .then(response => setSearch(response.results))
    .catch(err => console.error(err));
},[searchItem][page]);

  return (
    <div className="search container g-0">
    
        <form className='search-bar'>
          <input type="text" onChange={handleSearch} placeholder='search tv-movie'/>
        </form>
      
        <div className="row">
                {search&&search.map((film)=>(
                  <Film film={film} media_type={film.media_type}/>
              ))}
              
        </div> {search!=''?(<Pagination page={page} setPage={setPage}/>):(<div></div>)}
        

        
    </div>
  )
}

export default Search