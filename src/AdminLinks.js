import React from 'react'
import { Link } from 'react-router-dom'
const AdminLinks = () => {
  return (
    <>  <div className='tratta_adimn0'>
    <div className='welcome_main doc_sec'>
    <Link to="/">
        <div className='top_left' >
          <img style={{height:"175px"}} src='/admin_imgs/sidetop.svg' alt=''/>
      </div>
        </Link>
    
      <div className=' main_doc'> 
      <div className='dooc_img'>
        <img className='' src='/admin_imgs/Group 179.png' alt=''/>
      </div></div>
      
      </div>
      </div>
     
   </>
      
 
  )
}

export default AdminLinks
