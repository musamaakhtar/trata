import React,{useState} from 'react'
import { Select } from 'antd';
// import { Input } from 'antd';

const Notes = () => {
  const [note,setNote]=useState(true)
  const [show,setShow]=useState(true)
  const [show5,setShow5]=useState(true)
  const [note1,setNote1]=useState(true)
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
    <>
    {
      note ? <>
         <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Notes Or</div>
      <div className=''>
        <img onClick={()=>setNote(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow5(!show5)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show5 ? <>  <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field border_line mb-3'>
          <div className='add_search_field flex_reverse'>
          <Select
         
      showSearch
      className='add_searchplace2'
      placeholder="Net Effect"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
  
    <div className='add_search_field_fix'>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="2ry Variables"
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
        </div>
        <div className='add_field'>
          <div className='add_search_field flex_reverse'>
          
  
    <div className='add_search_field_fix'>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="Or Note"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
         
                </div>
                <Select style={{marginLeft:"20px",marginRight:"0"}}
         
      showSearch
      className='add_searchplace2 '
      placeholder="Level"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
         
        </div></>:null
      }
          
    </div></>:null
    }
  {
    note1 ? <>
       <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>And Note</div>
      <div className=''>
        <img onClick={()=>setNote1(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>   <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field border_line mb-3'>
          <div className='add_search_field flex_reverse'>
          <Select
         
      showSearch
      className='add_searchplace2'
      placeholder="Net Effect"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
  
    <div className='add_search_field_fix'>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="2ry Variables"
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
        </div>
        <div className='add_field'>
          <div className='add_search_field flex_reverse'>
          
  
    <div className='add_search_field_fix'>
             
             <Select
            showSearch
            className='add_searchplace'
            placeholder="And Note"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
         
                </div>
                <Select style={{marginLeft:"20px",marginRight:"0"}}
         
      showSearch
      className='add_searchplace2 '
      placeholder="Level"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
         
        </div></>:null
      }
   
    </div></>:null
  }
 
    </>
  )
}

export default Notes
