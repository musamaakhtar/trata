import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd'
const Trade = () => {
  const [trad,setTrad]=useState(true)
  const [show,setShow]=useState(true)
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
 <>
 {
trad ? <>
   <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Trade Name</div>
      <div className=''>
        <img onClick={()=>setTrad(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>    <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field'>
        <div className='add_search_fields'>
          <Input style={{width:"40%"}} className='field_field2' type="text"   placeholder="Generic Name" />
    
  
          </div>
         
        </div>
        <div className='add_field border_line mb-3 mt-3'>
          <div className='add_search_field flex_reverse'>
        
          <Select
         
         showSearch
         className='add_searchplace2'
         placeholder="Country(s)"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
       <Input style={{width:"40%"}} className='field_field2' type="text"   placeholder="TradeName Key" />
     
         
                </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field'>
        <div className='add_search_fields'>
          <Input style={{width:"40%"}} className='field_field2' type="text"   placeholder="TradeName Sub" />
    
  
          </div>
         
        </div></>:null
      }
  
    </div>
</>:null
 }

  </>
  )
}

export default Trade
