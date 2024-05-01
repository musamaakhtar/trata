import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd'

const RecheckDrug = () => {
  const [rech,SetRech]=useState(true)
  const [show,setshow]=useState(true)
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
    <>
    { 
    rech ?<>
    <>
<div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Recheck Drug Hx</div>
      <div className=''>
        <img onClick={()=>SetRech(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setshow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>   <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field mt-3'>
          <div className='add_search_field'>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Drug Value1"
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
            placeholder="Drug Value2"
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
             
    <Input style={{width:"70%"}} className='field_field2_normal' type="text"   placeholder="Interaction Note"
          />
         
                </div>
                <Select style={{marginLeft:"20px",marginRight:"0"}}
         
      showSearch
      className='add_searchplace2 '
      placeholder="Sevrerity"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
         
        </div>  </>:null
      }
       
    </div>
</></>:null}
  </>

  )
}

export default RecheckDrug
