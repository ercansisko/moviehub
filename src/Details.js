import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { img_300 } from './config';

function Details() {
    const {contenttype,id}=useParams();
    const [film, setFilm]=useState({});
    const [credits, setCredits]=useState([]);
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyZDM3ODgzYmNmYTA2MzZhMjI2YTU0NWNjZTYwYSIsInN1YiI6IjY0ZjliMGU1ZmZjOWRlMDEzOGViMzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-BW6XG1yBwfB8Tht8g-tkxfkOSK81w0Kzffm8m-2hM'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/${contenttype}/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setFilm(response))
            .catch(err => console.error(err)); 

    ///////////////////
    const options2 = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzIyZDM3ODgzYmNmYTA2MzZhMjI2YTU0NWNjZTYwYSIsInN1YiI6IjY0ZjliMGU1ZmZjOWRlMDEzOGViMzQ2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-BW6XG1yBwfB8Tht8g-tkxfkOSK81w0Kzffm8m-2hM'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/${contenttype}/${id}/credits?language=en-US`, options2)
        .then(response => response.json())
        .then(response => setCredits(response.cast.slice(0,5)))
        .catch(err => console.error(err)); 
    },[]);
  return (
    <div className='details card'>
        <div className="row">
            <div className="col-4">
                <img src={`${img_300}/${film.poster_path}`} className='img-fluid' alt="" />
            </div>
            <div className="col-8">
                <h4>{film.original_title}</h4>
                <p className='overview'>{film.overview}</p>
                <div className="container row">
                    {
                        credits&&credits.map((person, key)=>(
                            <div id={key} className="card col-2">
                                <img className='card-img-top img-fluid' src={`${img_300}/${person.profile_path}`} />
                                <div className="card-body">
                                    <p className='artist-name'>{person.original_name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to={contenttype&&contenttype=='movie'?'../movies':'../tvseries'} className='btn btn-outline-warning'>Back to Page</Link>
            </div>
        </div>
        <div className="row row-btn"><Link to='#' className='btn'>Watch The Trailer</Link></div>
    </div>
  )
}

export default Details