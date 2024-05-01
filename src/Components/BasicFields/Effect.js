import React,{useState} from 'react'
import { Input } from 'antd';


const Effect = () => {
  const [data,setData]=useState(true)
  const [show,setShow]=useState(true)
  return (
   <>
   {
    data ? <>
        <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Effects</div>
      <div className=''>
        <img onClick={()=>setData(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>   <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Note Effect" />
  </div>
  <button className='subid mr'>6</button>
        <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Nil Effect" />
  </div>
  <button className='subid mr'>5</button>
      <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="X2 Effect" />
  </div>
  <button className='subid mr'>4</button>
      <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="XL Effect" />
  </div>
  <button className='subid mr'>3</button>
      <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="L Effect" />
  </div>
  <button className='subid mr'>2</button>
      <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="50% Effect" />
  </div>
  <button className='subid mr'>1</button>
      <button className='subid mr'>Color</button>
        </div>
        <div className='plusicon'>
        {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="CI Effect" />
  </div>
  <button className='subid mr'>0</button>
      <button className='subid mr'>Color</button>
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

export default Effect
