import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd'

const Forbidden = () => {
  const [forb,setForb]=useState(true)
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
      forb ? <>
        <div className='fields_container mb-3'>
        <div className='fields_icons'>
          <div className='heading_data'>Logically Forbidden Case (You can’t kid Tratta)</div>
          <div className=''>
            <img onClick={()=>setForb(false)} src='/admin_imgs/Delete.svg' alt=''/>
            <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
          </div>
          </div>
          {
            show ? <>  <button className='subid'>MainID</button>
            <button className='subid mb-4 ml_4'>SubID</button>
            <div className='add_field mt-3'>
              <div className='add_search_field'>
                 
           <Select
          showSearch
          className='add_searchplace'
          placeholder="Variable Value1"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
         
          
        />
              </div>
              <div className='plusicon'>
              <img src="/admin_imgs/Component 46.svg" alt=''/>
              </div>
              
            </div>
            <div className='mt-2 border_line mb-3'>
            <div className='add_search_field '>
                 
                 <Select
                showSearch
                className='add_searchplace'
                placeholder="Variable Value2"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
               
                
              />
                    </div>
            </div>
          
            <div className='add_field'>
              <div className='add_search_field flex_reverse'>
              
      
        <div className='add_search_field_fix'>
                 
        <Input style={{width:"70%"}} className='field_field2_normal' type="text"   placeholder="Forbidden Message"
              />
             
                    </div>
          
              </div>
             
            </div> </>:null
          }
             
        </div>
      </>:null
    }
  
    </>
  )
}

export default Forbidden
