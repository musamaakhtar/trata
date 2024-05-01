import React,{useState}  from 'react'
import { Select } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import PregnancyStages from './Components/BasicFields/PregnancyStages';
import NursingCategory from './Components/BasicFields/NursingCategory';
import DrugFormula from './Components/BasicFields/DrugFormula';
// import { MinusOutlined } from '@ant-design/icons';
// import { Collapse } from 'antd';
import Effect from './Components/BasicFields/Effect';
import CalculationData from './Components/BasicFields/CalculationData';

const BasicPage = () => {
   const [data,setData]= useState(true)
   const[data1,setData1]=useState(true)
   const[data2,setData2]=useState(true)
   const[data3,setData3]=useState(true)
   const[data4,setData4]=useState(true)
   const[data5,setData5]=useState(true)
   const[data6,setData6]=useState(true)
   const[data7,setData7]=useState(true)
   const[data8,setData8]=useState(true)
   const[show,setShow]=useState(true)
   const[show2,setShow2]=useState(true)
   const[show1,setShow1]=useState(true)
   const[show3,setShow3]=useState(true)
   const[show4,setShow4]=useState(true)
   const[show5,setShow5]=useState(true)
   const[show6,setShow6]=useState(true)
   const[show0,setShow0]=useState(true)
   const[show8,setShow8]=useState(true)
  //  const { Panel } = Collapse;
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      

      
      const onSearch = (value) => {
        console.log('search:', value);
      };
      // const panelStyle = {
      //   marginBottom: 24,
  
      //   border: 'none',
      // };
  return (
    <>  <div className='tratta_adimn0'>
    <div style={{height:"fit-content"}} className='welcome_main doc_sec'>
    <Link to="/">
        <div className='top_left' >
          <img style={{height:"175px"}} src='/admin_imgs/sidetop.svg' alt=''/>
      </div>
        </Link>
      <div className='admin_img'>
        <img style={{height:"80px"}} src='/admin_imgs/Group 166.svg' alt=''/>
      </div>
      <div className='category_data'>
      <div className='category_title'>
        <span className='title_cat'>Basic Data</span>
      </div>
      {/* <div className='catetory_search'>
     
     <div className='img_seacrh'>
   
     </div>
   <div className='category_new_seach'>
 
   <Select
   showSearch
   className='category_field1'
   placeholder="Search in Drug algorithm"
   optionFilterProp="children"
   onChange={onChange}
   onSearch={onSearch}
   filterOption={(input, option) =>
     (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
   }
   options={[
     {
       value: 'Select Formula',
       label: 'Category-1',
     },
     {
       value: 'lucy',
       label: 'Category-2',
     },
     {
       value: 'tom',
       label: 'Category-3',
     },
   ]}
   dropdownRender={(menu) => (
    <>
      {menu}
      <></>
      <div onClick={()=>setShowicon(true)} className='plus_img2'>
      <img src='/admin_imgs/Iconsax.svg' alt=''/>
     </div>
   
    </>
  )}
 />
 {
      showicon ?  <div className='create_category'>
      <div className='new_ca_title'>New Category</div>
      <img onClick={()=>{setShowicon(false);console.log(showicon)}}  className='cate_close_icon'src='/admin_imgs/close button.svg' alt=''/>
    
      <div><input className='untitled_field' type="text" placeholder='Untitled category'></input></div>
     <button className='category_btn'>Create</button>
    </div>:null
     }
 
   </div>
   
    </div> */}
     <div className='catetory_search'>
     
      <div className='img_seacrh'>
      <img className='search_first' src='/admin_imgs/searchstatus1.svg' alt=''></img>
    
      </div>
    
     <Select
    showSearch
    className='category_field'
    placeholder="Search in BD"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Select Formula',
        label: 'Category-1',
      },
      {
        value: 'lucy',
        label: 'Category-2',
      },
    ]}
    
  />
    {/* <img className='search_sec' src='/admin_imgs/more.svg' alt=''></img> */}
     </div>
   <div className='data__fields mt-3 mb-2'>
    {
      data ? <>
        <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Drug Category</div>
      <div className=''>
        <img onClick={()=>setData(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow(!show)} src='/admin_imgs/minimize -.svg' alt=''/>
        {/* <Collapse className='mini_icon'
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <MinusOutlined />}
     
    >
      <Panel header="" key="1" style={panelStyle}>
        <p>ccccccccc</p>
      </Panel>
    </Collapse> */}
      </div>
      </div>
      {
        show ? <>   <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Drug Category" />
  </div>
  <Select
       
       showSearch
       className='add_searchplace2'
       placeholder="Sort"
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
       placeholder="Cryptic"
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
      <div  style={{width:'100%'}} className='add_field_fix mt-3'>
  
      
   
    
           
        <div style={{width:'84%'}} className='add_search_fields d-flex'>
            <div>   <button className='subid2'>ICO</button></div>
     
        <Input style={{width:"50%"}} className='field_fieldss' type="text"   placeholder="Drug Category Shy Sub" />
  
       
        </div>
     
      </div></>:null
      }
    
   
      <div className='main_div'>

      </div>
    </div></>:null
    }
 {
  data1 ? <> <div className='fields_container mb-3'>
  <div className='fields_icons'>
    <div className='heading_data'>Drug Generic</div>
    <div className=''>
      <img onClick={()=>setData1(false)} src='/admin_imgs/Delete.svg' alt=''/>
      <img onClick={()=>setShow2(!show2)} src='/admin_imgs/minimize -.svg' alt=''/>
    </div>
    </div>
    {
      show2 ? <>   <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
      <div style={{width:"87%"}} className='d-flex flex_reverse'>
    
<div className='custom_field mr_2'>
<Input className='field_field_fix' type="text"   placeholder="Drug Generic Key" />
</div>

      </div>
      <div className='plusicon'>
      <img src="/admin_imgs/Component 46.svg" alt=''/>
      </div>
      
    </div>
    <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
      <div style={{width:"87%"}} className='d-flex flex_reverse'>
    
<div className='custom_field mr_2'>
<Input className='field_field' type="text"   placeholder="Drug Generic Key" />
</div>
<Select
     
     showSearch
     className='add_searchplace2'
     placeholder="Sort"
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
     placeholder="Cryptic"
     optionFilterProp="children"
     onChange={onChange}
     onSearch={onSearch}
     filterOption={(input, option) =>
       (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
     }
    
     
   />
   


      </div>
    
      
    </div>
    <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
      <div style={{width:"87%"}} className='d-flex flex_reverse'>
    
<div className='custom_field mr_2'>
<Input className='field_field' type="text"   placeholder="Drug Generic Sub" />
</div>
<Select
     
     showSearch
     className='add_searchplace2'
     placeholder="Sort"
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
     placeholder="Cryptic"
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
 
    <div className='main_div'>

    </div>
  </div></>:null
 }
   {
    data2 ? <>
      <div className='fields_container mb-3'> 
    <div className='fields_icons'>
      <div className='heading_data'>Illness Category</div>
      <div className=''>
        <img onClick={()=>setData2(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow1(!show1)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show1 ? <>  <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Illness Category" />
  </div>
  <Select
       
       showSearch
       className='add_searchplace2'
       placeholder="Sort"
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
       placeholder="Cryptic"
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
      <div  style={{width:'100%'}} className='add_field_fix mt-3'>
  
      
   
    
           
        <div style={{width:'84%'}} className='add_search_fields d-flex'>
            <div>   <button className='subid2'>ICO</button></div>
     
        <Input style={{width:"50%"}} className='field_fieldss' type="text"   placeholder="Illness Category Shy Sub" />
  
       
        </div>
     
      </div></>:null
      }
    
      <div className='main_div'>

      </div>
    </div></>:null
   }
  {
    data3 ? <>
       <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Illness</div>
      <div className=''>
        <img onClick={()=>setData3(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow3(!show3)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show3 ? <>  <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field_fix' type="text"   placeholder="Illness Category" />
  </div>

        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Illness Key" />
  </div>
  <Select
       
       showSearch
       className='add_searchplace2'
       placeholder="Sort"
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
       placeholder="Cryptic"
       optionFilterProp="children"
       onChange={onChange}
       onSearch={onSearch}
       filterOption={(input, option) =>
         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
       }
      
       
     />
     
 

        </div>
      
        
      </div>
      <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Illness Sub" />
  </div>
  <Select
       
       showSearch
       className='add_searchplace2'
       placeholder="Sort"
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
       placeholder="Cryptic"
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
    
      <div className='main_div'>

      </div>
    </div></>:null
  }
 {
  data4 ? <>
      <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Indication</div>
      <div className=''>
        <img onClick={()=>setData4(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow4(!show4)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show4 ? <> <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"87%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Drug Category" />
  </div>
  <Select
       
       showSearch
       className='add_searchplace2'
       placeholder="Sort"
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
       placeholder="Cryptic"
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
      </div></>:null
      }
     
    </div></>:null
 }
{
  data5 ? <>
   <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Gender</div>
      <div className=''>
        <img onClick={()=>setData5(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow6(!show6)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show6 ? <>
            <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"53%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Male" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="Female" />
  </div>
   </>:<></>
      }
  
      <div className='main_div'>

      </div>
    </div></>:null
}
{
data6 ? <> <div className='fields_container mb-3'>
<div className='fields_icons'>
  <div className='heading_data'>Age</div>
  <div className=''>
    <img onClick={()=>setData6(false)} src='/admin_imgs/Delete.svg' alt=''/>
    <img onClick={()=>setShow0(!show0)} src='/admin_imgs/minimize -.svg' alt=''/>
  </div>
  </div>
  {
    show0 ? <>  <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
    <div style={{width:"53%"}} className='d-flex flex_reverse'>
  
<div className='custom_field mr_2'>
<Input className='field_field' type="text"   placeholder="Adult" />
</div>
    </div>
    <div className='plusicon'>
    <img src="/admin_imgs/Component 46.svg" alt=''/>
    </div>
    
  </div>
  <div className='custom_field mr_2 mt-3'>
<Input className='field_field_width' type="text"   placeholder="Elderly" />
</div></>:null
  }


  <div className='main_div'>

  </div>
</div></>:null
}

  {
    data7 ? <>
       <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Weight</div>
      <div className=''>
        <img onClick={()=>setData7(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow8(!show8)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show8 ? <>  <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"53%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="Average" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="Overweight" />
  </div>
  <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="Underweight" />
  </div> </>:null
      }
    
      <div className='main_div'>

      </div>
    </div></>:null
  } 
 {
  
 }
 {
  data8 ? <>
    <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Pregnany Stages</div>
      <div className=''>
        <img onClick={()=>setData8(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow5(!show5)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show5 ? <>  <div style={{width:"100%",marginTop:"16px"}} className='add_field'>
        <div style={{width:"53%"}} className='d-flex flex_reverse'>
      
  <div className='custom_field mr_2'>
  <Input className='field_field' type="text"   placeholder="1st Trimester" />
  </div>

   
     
 

        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
        
      </div>
      <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="2nd Trimester" />
  </div>
  <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="3rd Trimester" />
  </div>
  <div className='custom_field mr_2 mt-3'>
  <Input className='field_field_width' type="text"   placeholder="Nursing" />
  </div></>:null
      }
    
      <div className='main_div'>

      </div>
    </div></>:null
 }
  
    <PregnancyStages/>
    <NursingCategory/>
    <DrugFormula/>
    <Effect/>
    <CalculationData/>
   </div>
     </div>
      </div>
    
      </div>
     
   </>
  )
}

export default BasicPage
