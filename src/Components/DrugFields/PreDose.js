import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd';
const PreDose = () => {
  const [show,setShow]=useState(true)
  const [dose,setDose]=useState(true);
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
   <>
   {
    dose ? <>
       <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Pre-dose Q</div>
      <div className=''>
        <img onClick={()=>setDose(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <><button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field border_line'>
          <div className='add_search_field '>
             
          <div className='add_search_fields'>
          <Input style={{width:"100%"}} className='field_field2' type="text"   placeholder="Q_Guide" />
    
  
          </div>
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field mt-3'>
          <div className='add_search_field'>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Q_Range"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
   <button className='subid mb-1'>Range</button>
   <button className='subid mb-1 ml_2'>Unit</button>
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
          
        </div>
        <div className='border_line'>
        <div className='add_search_field mt-2 '>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="Synonym Variable"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
           
            
          />
                </div>
        </div>
        <div className='add_field  mt-3 mb-2'>
        <div className='add_search_fields'>
          <Input style={{width:"100%"}} className='field_field2' type="text"   placeholder="Q_Radio" />
    
  
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field border_line'>
          <div className='add_search_field '>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Synonym Variable"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
       
        </div>
        <div className='add_field  mt-3 mb-2'>
        <div className='add_search_fields'>
          <Input style={{width:"100%"}} className='field_fields' type="text"   placeholder="Q_CheckBox (key,sub)" />
    
  
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field border_line'>
          <div className='add_search_field '>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Synonym Variable"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
       
        </div>
        <div className='add_field mt-3'>
          <div className='add_search_field'>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Q_CheckBox (key,sub)"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
   <button className='subid mb-1'>Value</button>
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field '>
          <div className='add_search_field'>
             
       <Select
      showSearch
      className='add_searchplace'
      placeholder="Q_CheckBox (key,sub)"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
   <button className='subid mb-1'>Value</button>
          </div>
         
        </div>
        <div className='add_field mb-3 mt-2'>
          <div className='add_search_field flex_reverse'>
          <button style={{fontSize:"12px",color:"#F2CC8F",marginRight:"15px"}} className='subid mb-1'>Net Value (Range)</button>
  
    <div className='add_search_field_fix'>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="Net Value Synonym Variable"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
           
            
          />
         
                </div>
  
       
   
  
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div> </>:null
      }
      
    </div></>:null
   }

   </>
  )
}

export default PreDose
