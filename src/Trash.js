import React  from 'react'

import { Link } from 'react-router-dom';


const Trash = () => {

    
  return (
    <>  <div className='tratta_adimn0'>
    <div className='welcome_main doc_sec'>
    <Link to="/">
        <div className='top_left' >
          <img style={{height:"175px"}} src='/admin_imgs/sidetop.svg' alt=''/>
      </div>
        </Link>
      <div className='admin_img'>
        <img style={{height:"80px"}} src='/admin_imgs/Group 166.svg' alt=''/>
      </div>
      <div className='category_data'>
      <div className='category_title'>
        <span className='title_cat'>Trash</span>
    
   
  
      </div>
    
      <div className='trash_div'>
      <button className='trashbtn'>Empty</button>
      </div>

     </div>
      </div>
    
      </div>
     
   </>
      
  )
}

export default Trash
