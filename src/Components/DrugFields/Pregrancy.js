import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd'
const Pregrancy = () => {
  const [pre,setPre]=useState(true)
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
    pre ? <>
        <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Pregnancy</div>
      <div className=''>
        <img onClick={()=>setPre(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>   <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field border_line mb-3'>
          <div className='add_search_field flex_reverse'>
        
  
    <div className='add_search_field_fix'>
    <Select
         
         showSearch
         className='add_searchplace2'
         placeholder="Stage"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
             
    <Select
         
         showSearch
         className='add_searchplace2'
         placeholder="Stage"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
         <Select
         
         showSearch
         className='add_searchplace2 mt-2'
         placeholder="Categ"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
     
  
       />
      <button style={{width:"133px"}} className='subid mb-4 '>Value</button>
  
          </div>
      
     
         
                </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field'>
        <div className='add_search_fields'>
          <Input style={{width:"60%"}} className='field_field2' type="text"   placeholder="Pregnancy Note" />
    
  
          </div>
         
        </div></>:null
      }
   
    </div>
    </>:null
   }
 
    </>
  )
}

export default Pregrancy
