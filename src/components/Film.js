import React from 'react'
import { img_300 } from '../config';
import { Link } from 'react-router-dom';

function Film({film, media_type}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
       <Link className='card-link' to={`../${media_type}/${film.id}`}>
        <div className="card">
            <img src={`${img_300}/${film.poster_path}`} alt="" className="img-fluid card-img-top" />
            <div className="card-body">
                <p className="card-title"><b>{film.title || film.name}</b></p>
                <div className="footer-context">
                    <p>{media_type}</p>
                    <p>{film.release_date||film.first_air_date}</p>
                </div>
                   
            </div>
            <p className='imdb-point'>{film.vote_average}</p>
        </div>
        </Link>
    </div>
  )
}

export default Film