import React,{useState} from 'react'
import { Input } from 'antd';

const PregnancyStages = () => {
  const [pre,setPre]=useState(true)
  const [show,setShow]=useState(true)
   
  return (
 <>
 {
  pre ? <>
     <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Pregnancy Safety Category</div>
      <div className=''>
        <img onClick={()=>setPre(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>   <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"70%"}} className='d-flex flex_reverse'>
        <button className='subid mr'>A</button>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_preg' type="text"   placeholder="Value" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"70%"}} className='d-flex flex_reverse'>
        <button className='subid mr'>B</button>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_preg' type="text"   placeholder="Value" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"70%"}} className='d-flex flex_reverse'>
        <button className='subid mr'>C</button>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_preg' type="text"   placeholder="Value" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"70%"}} className='d-flex flex_reverse'>
        <button className='subid mr'>D</button>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_preg' type="text"   placeholder="Value" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"70%"}} className='d-flex flex_reverse'>
        <button className='subid mr'>X</button>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_preg' type="text"   placeholder="Value" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div></>:null
      }
   
   
   
   
    </div></>:null
 }
</>
  )
}

export default PregnancyStages
