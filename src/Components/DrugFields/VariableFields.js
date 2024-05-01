import React,{useState} from 'react'
import { Select } from 'antd';
const VariableFields = () => {
  const [varb,setVarb]=useState(true)
  const [show,setShow]=useState(true);
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
 <>
 {
  varb ? <>  <div className='fields_container mb-3'>
  <div className='fields_icons'>
    <div className='heading_data'>1ry Variables</div>
    <div className=''>
      <img onClick={()=>setVarb(false)} src='/admin_imgs/Delete.svg' alt=''/>
      <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
    </div>
    </div>
    {
      show ? <><button className='subid'>MainID</button>
      <button className='subid mb-4 ml_4'>SubID</button>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Age"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Weight"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Gender"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Pregnant"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Nursing"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Illness"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Drug"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <button className='subid mb-1'>Effect</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div>
      <div style={{width:"70%"}} className='add_field'>
        <div style={{width:"28%"}} className=''>
           
     {/* <Select
    showSearch
    className='add_searchplace'
    placeholder="Drug"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  /> */}
  
        </div>
        <div> <button style={{width:"115px",color:"#F2CC8F"}} className='subid mb-1'>Net Effect</button></div>
        {/* <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div> */}
      </div></>:null
    }
    
  </div></>:null
 }
 
 </>
  )
}

export default VariableFields
