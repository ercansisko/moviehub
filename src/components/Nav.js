import React from 'react'
import { Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className='navbar'>
        <div className='nav-item'>
        <i className="fa-solid fa-arrow-trend-up"></i>
        <Link to='/'>Trending</Link>
        </div>
        <div className='nav-item'>
        <i className="fa-solid fa-film"></i>
        <Link to='movies'>Movies</Link>
        </div>
        <div className='nav-item'>
        <i className="fa-solid fa-tv"></i>
        <Link to='tvseries'>TV Series</Link>
        </div>
        <div className='nav-item'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <Link to='search'>Search</Link>
        </div>
      
      
      
      </nav>
  )
}

export default Nav