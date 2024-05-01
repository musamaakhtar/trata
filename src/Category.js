import React,{useState} from 'react'
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Switch } from 'antd';
const Category = () => {

  // const onChange = (checked) => {
  //   console.log(`switch to ${checked}`);
  // };
  const [showicon,setShowicon]=useState(false)
  const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    const Navigate = useNavigate ();
    const onSearch = (value) => {
      console.log('search:', value);
    };
  return (
    <>  <div className='tratta_adimn0'>
    <div className='welcome_main doc_sec'>
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
        <span className='title_cat'>Category</span>
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
      {
        value: 'tom',
        label: 'Category-3',
      },
    ]}
    
  />
    <img className='search_sec' src='/admin_imgs/more.svg' alt=''></img>
     </div>
    
     <div onClick={()=>setShowicon(true)} className='plus_img'>
      <img src='/admin_imgs/Iconsax.svg' alt=''/>
     
     
     </div>
     {
      showicon ?  <div className='create_category'>
      <div className='new_ca_title'>New Category</div>
      <img onClick={()=>{setShowicon(false);console.log(showicon)}}  className='cate_close_icon'src='/admin_imgs/close button.svg' alt=''/>
    
      <div><input className='untitled_field' type="text" placeholder='Untitled category'></input></div>
     <button className='category_btn'>Create</button>
    </div>:null
     }
     <div className='whole_data'>
     <div className='row data_section mb-5 mt-4'>   <div className='dataa col-lg-2 mr_clm'>
      {/* < className='data data_effect col-lg-2 mr_clm' to="/aceis">   / */}
   
     
     <div onClick={()=>Navigate("/aceis")} className='heaer_item'>
       <img src='/admin_imgs/Iconsax (1).svg' alt=''/>
       <span className='icon_title'>ACEIs</span>
       </div>
       <div className='pb-2 iconss'>
         <img className='mr__icon' src='/admin_imgs/edit comp.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/duplicate.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Iconsax bookmark 1.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Component 44.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/play (active).svg' alt=''/>
         <div className='customm_check1 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
        
         <img className='mr__icon'  src='/admin_imgs/star (featured).svg' alt=''/>
         <div className='customm_check2 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
       </div>
     
       {/* :where(.css-dev-only-do-not-override-sk7ap8).ant-switch.ant-switch-checked */}
 </div>
   
      <div className='data col-lg-2'>
     
     <div className='heaer_item'>
       <img src='/admin_imgs/Iconsax (1).svg' alt=''/>
       <span className='icon_title'>Category 2</span>
       </div>
       <div className='pb-2 iconss'>
         <img className='mr__icon' src='/admin_imgs/edit comp.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/duplicate.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Iconsax bookmark 1.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Component 44.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/play (active).svg' alt=''/>
         <div className='customm_check1 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
        
         <img className='mr__icon'  src='/admin_imgs/star (featured).svg' alt=''/>
         <div className='customm_check2 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
       </div>
     
  
 </div>
 </div>
 <div className='row data_section'>
 <div className='data col-lg-2 mr_clm'>
     
     <div className='heaer_item'>
       <img src='/admin_imgs/Iconsax (1).svg' alt=''/>
       <span className='icon_title'>Category 3</span>
       </div>
       <div className='pb-2 iconss'>
         <img className='mr__icon' src='/admin_imgs/edit comp.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/duplicate.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Iconsax bookmark 1.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Component 44.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/play (active).svg' alt=''/>
         <div className='customm_check1 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
        
         <img className='mr__icon'  src='/admin_imgs/star (featured).svg' alt=''/>
         <div className='customm_check2 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
       </div>
     
  
 </div>
 <div className='data col-lg-2'>
     
     <div className='heaer_item'>
       <img src='/admin_imgs/Iconsax (1).svg' alt=''/>
       <span className='icon_title'>Category 4</span>
       </div>
       <div className='pb-2 iconss'>
         <img className='mr__icon' src='/admin_imgs/edit comp.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/duplicate.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Iconsax bookmark 1.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/Component 44.svg' alt=''/>
         <img className='mr__icon'  src='/admin_imgs/play (active).svg' alt=''/>
         <div className='customm_check1 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
        
         <img className='mr__icon'  src='/admin_imgs/star (featured).svg' alt=''/>
         <div className='customm_check2 mr-2'>
         <Switch defaultChecked onChange={onChange} />
         </div>
       </div>
     
  
 </div>
 </div>
     </div>
    

     </div>
      </div>
    
      </div>
     
   </>
      
  )
}

export default Category
