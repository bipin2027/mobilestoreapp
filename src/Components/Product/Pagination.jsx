import React from 'react'

const Pagination =({productPerPage, totalProducts, paginate})=>{
    const pageNumber=[];
    for(let i=1; i<=Math.ceil(totalProducts/productPerPage); i++){
        pageNumber.push(i);
    }
    return(
       <nav>
           <ul className="pagination d-flex justify-content-center">
               {pageNumber.map(number=>(
                   <li key={number} className="page-item">
                    <a onClick={()=>{paginate(number)}} className="page-link">
                        {number}
                    </a>
                   </li>
               ))}
           </ul>
       </nav>
    )
}

export default Pagination