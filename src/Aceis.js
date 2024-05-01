import React from 'react'
import { Select } from 'antd';
import { Switch } from 'antd';
import { Link } from 'react-router-dom';
const Aceis = () => {
  // const [showicon,setShowicon]=useState(false)
  const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    
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
        <span className='title_cat'>ACEIs</span>
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
   <div className='drug_filtter'>
    <div className='drug_filtter_title'>Drug 1</div>
    <div className='d-flex'>
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
   <div className='drug_filtter'>
    <div className='prpl'>Drug 2</div>
    <div className='d-flex'>
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
   <div className='drug_filtter'>
    <div className='navy'>Drug 3</div>
    <div className='d-flex'>
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
   <Link to="/ad-drugs">
   <div className='drug_filtter p_left'>
    <div className='greenadd'>+</div>
    <div>
   
    </div>
   </div>
   </Link>
   
    

     </div>
      </div>
    
      </div>
     
   </>
      
  )
}

export default Aceis
