import React from 'react'
import { Select } from 'antd';

const SearchFields = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
    <div>
            <div className='formula_fields formula_fields_pl'>
     <Select 
    showSearch
    placeholder="Select Formula"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options ={[
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
     <div className='indication_fields formula_fields_pl border_sp'>
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
  )
}

export default SearchFields
