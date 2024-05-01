import React,{useState} from 'react'
import { Select } from 'antd';
const SearchFields = () => {
  const [showicon,setShowicon]=useState(false)
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
    <div>
 <div className='fields night_field_m'>
            <div className='medical_fields'>
            <div className='seacrch_field'>
            <img className='serch_img' src='/images/searchnormal.svg' alt=''/>
            <input className='search_input search_input_tab' type="eamil" placeholder="Serach Drug"/>
            {
              showicon ? <> <img className='yellow_dot' src='/images/yellow.svg' alt=''/>
              <img className='perpul_dol' src='images/searchdot_purple.svg' alt=''/></>:null
            }
           
            <img onClick={()=>setShowicon(!showicon)} className='blu_dot' src='/images/bluu.svg'alt=''/>
            
            <img className='refresh_btn' src='/images/refresh.svg' alt=''/> 
            </div>
            </div>
           
            <div className='formula_fields'>
     <Select
    showSearch
    className='kon'
    placeholder="Select Formula"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Select Formula',
        label: 'Formula-1',
      },
      {
        value: 'lucy',
        label: 'Formula-2',
      },
      {
        value: 'tom',
        label: 'Formula-3',
      },
    ]}
  />
     </div>
     <div className='indication_fields border_sp_light'>
     <Select
    showSearch
    placeholder="For What Indication?"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Select Formula',
        label: 'Indication-1',
      },
      {
        value: 'lucy',
        label: 'Indication-2',
      },
      {
        value: 'tom',
        label: 'Indication-3',
      },
    ]}
  />
     </div>
        </div>
    </div>
  )
}

export default SearchFields
