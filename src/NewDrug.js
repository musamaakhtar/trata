import React,{useState} from 'react'
import { Select } from 'antd';
import VariableFields from './Components/DrugFields/VariableFields';
import FixDose from './Components/DrugFields/FixDose';
import { Link } from 'react-router-dom';
import PreDose from './Components/DrugFields/PreDose';
import Notes from './Components/DrugFields/Notes';
import Pregrancy from './Components/DrugFields/Pregrancy';
import Trade from './Components/DrugFields/Trade';
import RecheckDrug from './Components/DrugFields/RecheckDrug';
import Forbidden from './Components/Forbidden';

const NewDrug = () => {
  const[hide,setHide]=useState(true);
  const[main,setMain]=useState(true);
  const[imdi,setImdi]=useState(true)
  const [showicon,setShowicon]=useState(false)
  const [show1,setShow1] = useState(true)
  const [show2,setShow2] = useState(true)
  const [show3,setShow3] = useState(true)
  const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    
    const onSearch = (value) => {
      console.log('search:', value);
    };
    
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
        <span className='title_cat'>New Drug</span>
      </div>
      <div className='catetory_search'>
     
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
   
    </div>
     <div className='catetory_search'>
     
      <div className='img_seacrh'>
      <img className='search_first' src='/admin_imgs/searchstatus1.svg' alt=''></img>
    
      </div>
    
     <Select
    showSearch
    className='category_field'
    placeholder="Select for a Category"
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
      main ?<>
       <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>main id</div>
      <div className=''>
        <img onClick={()=>setMain(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow1(!show1)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show1 ? <>  <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Generic Name w formula"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <img className='ml-3' src='/admin_imgs/data2.svg' alt=''/>
        </div>
        <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div></>:null
      }
    
      <div className='main_div'>

      </div>
    </div>
      </>:null
    }
  
    {
      hide ? <>
        <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Formula ICO</div>
  
      <div className=''>
      <img onClick={()=>setHide(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow2(!show2)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show2 ? <>    <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Formula ICO"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
  <img className='ml-3' src='/admin_imgs/data2.svg' alt=''/>
        </div>
        <div className='plusicon'>
          <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div></>:null
      }
  
      <div className='main_div'>

      </div>
    </div></>:null
    }
  {
    imdi ? <>
      <div className='fields_container mb-3'>
    <div className='fields_icons'>
      <div className='heading_data'>Indication</div>
      <div className=''>
        <img onClick={()=>setImdi(false)} src='/admin_imgs/Delete.svg' alt=''/>
        <img onClick={()=>setShow3(!show3)} src='/admin_imgs/minimize -.svg' alt=''/>
      </div>
      </div>
      {
        show3 ? <>   <div className='add_field'>
        <div className='add_search_field'>
           
     <Select
    showSearch
    className='add_searchplace'
    placeholder="Indication"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
   
    
  />
 <button className='subid'>SubID</button>
        </div>
        <div className='plusicon'>
        <img src="/admin_imgs/Component 46.svg" alt=''/>
        </div>
      </div></>:null
      }
   
      <div className='main_div'>

      </div>
    </div></>:null
  }
  
  <VariableFields/>
  <FixDose/>
  <PreDose/>
  <Notes/>
  <Pregrancy/>
  <Trade/>
  <RecheckDrug/>
  <Forbidden/>
   </div>
     </div>
      </div>
    
      </div>
     
   </>
      
  )
}

export default NewDrug
