import React from 'react'

function TopInfo() {
    const clickToUp=()=>{
        window.scrollTo(0,0);
    }
  return (
    <div onClick={clickToUp} className='top-info'>
        <i className="fa-solid fa-film fa-2xl"></i>
        <h5>ENTERTAINMENT HUB</h5>
    </div>
  )
}

export default TopInfo