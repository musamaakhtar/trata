import React,{useState} from 'react'
import { Select } from 'antd';
import { Input } from 'antd';

const CalculationData = () => {
  const [data,setData]=useState(true);
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
      data ? <>
         <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>CrCl Calculator</div>
      <div className=''>
        <img onClick={()=>setData(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show ? <>      <div className='heading_data_sub'>Age range</div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"87%"}} className='d-flex flex_reverse'>
        
    <div className='custom_field mr_2'>
    <Input className='field_field' type="text"   placeholder="Adult" />
    </div>
    <button className='subid mr'>17</button>
          <button className='subid mr'>64</button>
          </div>
          <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"87%"}} className='d-flex flex_reverse'>
        
    <div className='custom_field mr_2'>
    <Input className='field_field' type="text"   placeholder="Elderly" />
    </div>
    <button className='subid mr'>65</button>
        <button className='subid mr'>150</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div className='heading_data_sub mt-2'>Weight range in relation to Gender</div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Average</button>
    <button className='subid '>Male</button>
        <button className='subid '>76</button>
        <button className='subid '>100</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Average</button>
    <button className='subid '>Female</button>
        <button className='subid '>71</button>
        <button className='subid '>95</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Overweight</button>
    <button className='subid '>Male</button>
        <button className='subid '>101</button>
        <button className='subid '>120</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Overweight</button>
    <button className='subid '>Female</button>
        <button className='subid '>96</button>
        <button className='subid '>115</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Underweight</button>
    <button className='subid '>Male</button>
        <button className='subid '>50</button>
        <button className='subid '>75</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
          <div style={{width:"86%",justifyContent:"space-between"}} className='d-flex flex_reverse'>
        
          <button className='subid '>Underweight</button>
    <button className='subid '>Female</button>
        <button className='subid '>45</button>
        <button className='subid '>70</button>
          </div>
          <div className='plusicon'>
          {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
          </div>
          
        </div>
        <div className='heading_data_sub mt-4'>CrCl range & Synonym Illness</div>
        <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"88%"}} className='d-flex flex_reverse'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>90</button>
     <button className='subiid mr'>60</button>
           </div>
           <div className='plusicon'>
           {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
           </div>
           
         </div>
         <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"88%"}} className='d-flex flex_reverse'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>60</button>
     <button className='subiid mr'>30</button>
           </div>
           <div className='plusicon'>
           {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
           </div>
           
         </div>
         <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"88%"}} className='d-flex flex_reverse'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>30</button>
     <button className='subiid mr'>15</button>
           </div>
           <div className='plusicon'>
           {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
           </div>
           
         </div>
         <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"88%"}} className='d-flex flex_reverse'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>15</button>
     <button className='subiid mr'>0</button>
           </div>
           <div className='plusicon'>
           {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
           </div>
           
         </div>
         <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"73%"}} className='d-flex flex_reverse'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>On HD</button>
    
           </div>
           <div className='plusicon'>
           {/* <img src="/admin_imgs/Component 46.svg" alt=''/> */}
           </div>
           
         </div>
         <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
           <div style={{width:"73%%"}} className='d-flex flex_reverse width-fix'>
     <div className='custom_field mr_2'>
     <Select
         
         showSearch
         className='add_searchplace-2'
         placeholder="Synonym Illness"
         optionFilterProp="children"
         onChange={onChange}
         onSearch={onSearch}
         filterOption={(input, option) =>
           (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
         }
        
         
       />
     </div> 
     <button className='subiid mr'>On PD</button>
    
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

export default CalculationData
