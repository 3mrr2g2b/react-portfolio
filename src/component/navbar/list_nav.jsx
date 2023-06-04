import React, { Link } from 'react-router-dom';
const List = () => {
     const lis = document.querySelectorAll('ul li')
     lis.forEach((li)=>{
         li.addEventListener('click',(e)=>{
             lis.forEach((li)=>{
                 li.classList.remove('active')
             })
             e.currentTarget.classList.add('active')
             e.currentTarget.style.background = ''
         })
     })
    return (
    <div className="navbar">
        <div className="brand">
             <span >Amr</span> <i className="fas fa-code change-color"></i> Portfolio
        </div>
        <ul className="menu">
         
          <li className='active'>
            <Link className="link" to="/slider" >
              <i className="fas fa-th-list"></i>
            </Link>
          </li>
          <li>
            <Link className="link" to="/skilles" >
              <i className="fas fa-greater-than-equal"></i>
            </Link>
          </li>
          <li>
            <Link className="link" to="/aboutMe" >
              <i className="fas fa-id-card"></i>
            </Link>
          </li>
          
        </ul>
        
      </div>
    )
}

export default List;