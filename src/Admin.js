import React from 'react'
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
const Admin = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  
  return (
    <div className='tratta_adimn0'>
      <div style={{height:"97vh"}}  className='welcome_main cs_padding'>
        <div className='welcome_section'>
<div className='welcome_img'>
  <img src='/admin_imgs/logofirst.svg' alt=''/>
</div>
<div style={{paddingBottom:"4rem"}} className='welcome_fields'>
  <div className='admin_input'>
  <Input className='ad_field' placeholder="Admin" />
  </div>
<div className='password_input'>
<Input className='ad_field' placeholder="Password" />
</div>
<div>
<Checkbox className='chec_css' onChange={onChange}>Keep me here
</Checkbox>
</div>
<div className="mt-2">
  <Link to="/admin-links"><Button className='loginbtn' type="primary" danger>Login
    </Button></Link>


</div>

</div>
        </div>
      </div>
    </div>
  )
}

export default Admin