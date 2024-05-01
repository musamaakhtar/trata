import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd';
const FixDose = () => {
  const [dose,setDose]=useState(true);
 const [dosee, setDosee] = useState(true);
 const [dose2,setDose2]=useState(true)
 const [show,setShow]=useState(true)
 const [show1,setShow1]=useState(true)
 const [show2,setShow2]=useState(true)
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
 <>
 {
  dose ?
  <>
   <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Fixed Dose</div>
      <div className=''>
        <img onClick={()=>setDose(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow1(!show1)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show1 ? <>     <button className='subid'>MainID</button>
        <button className='subid mb-4 ml_4'>SubID</button>
        <div className='add_field'>
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
    <div className='custom_field'>
    <Input className='field_field' type="text"   placeholder="Recommended Dosage" />
    </div>
       
   
  
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
        </div>
        <div className='add_field mt-2'>
          <div className='add_search_field2'>
          <Input className='field_field2' type="text"   placeholder="Dosage Note" />
    
  
          </div>
        
        </div>
        <div className='add_field mt-2'>
          <div className='add_search_field2'>
          <Input className='field_field2' type="text"   placeholder="Titration Note" />
    
  
          </div>
        
        </div></>:null
      }
 
      
    </div>
  </>:null
 }
 {
  dosee ? <>
    <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Dose Or</div>
      <div className=''>
        <img onClick={()=>setDosee(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow2(!show2)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show2 ? <>   <button className='subid'>MainID</button>
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
            placeholder="Recommended Dosage"
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
      placeholder="Priority"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
     
      
    />
          </div>
         
        </div>
        <div className='add_field mt-2'>
          <div className='add_search_field2'>
          <Input className='field_field2' type="text"   placeholder="Dosage Note" />
    
  
          </div>
        
        </div>
        <div className='add_field mt-2'>
          <div className='add_search_field2'>
          <Input className='field_field2' type="text"   placeholder="Titration Note" />
    
  
          </div>
        
        </div></>:null
      }
   

    
    
      
    </div>
  </>:null
 }
  
  {
    dose2 ? <>
        <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Dose And</div>
      <div className=''>
        <img onClick={()=>setDose2(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>
            <button className='subid'>MainID</button>
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
          placeholder="Recommended Dosage"
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
    placeholder="Priority"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
        </div>
       
      </div>
      <div className='add_field mt-2'>
        <div className='add_search_field2'>
        <Input className='field_field2' type="text"   placeholder="Dosage Note" />
  

        </div>
      
      </div>
      <div className='add_field mt-2'>
        <div className='add_search_field2'>
        <Input className='field_field2' type="text"   placeholder="Titration Note" />
  

        </div>
      
      </div></>:null
      }
      
    </div></>:null
  }

 </>
  )
}

export default FixDose
