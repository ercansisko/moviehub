import React, { useEffect } from 'react'

function Pagination({page,setPage}) {

   for(let span of document.querySelectorAll('span'))
      span.addEventListener('click',()=>window.scrollTo(0,0));
 
  
  return (
    <div className="pagination">
          <span onClick={()=>{
            
            setPage((prev)=>{
              let i=prev;
              if(i>1)
              i--;
              return i;
            })
          }}>&laquo;</span>
          <span onClick={()=>setPage((prev)=>prev>5?prev-4:1)}>{page>5?page-4:1}</span>
          <span onClick={()=>setPage((prev)=>prev>5?prev-3:2)}>{page>5?page-3:2}</span>
          <span onClick={()=>setPage((prev)=>prev>5?prev-2:3)}>{page>5?page-2:3}</span>
          <span onClick={()=>setPage((prev)=>prev>5?prev-1:4)}>{page>5?page-1:4}</span>
          <span onClick={()=>setPage((prev)=>prev>5?prev:5)}>{page>5?page:5}</span>
          <span onClick={()=>{
            setPage((prev)=>{
              let i=prev;
              i++
              return i;
            })
          }}>&raquo;</span> 
        
        </div>
  )
}

export default Pagination