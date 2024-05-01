import React from 'react'

const Footer = () => {
  return (
    <div>
       <div style={{background:"transparent"}} className='footer_section'>
         <div className="left_fooer_mask left_fooer_mask_night">
                    <img src='/images2/Vector3night.svg' alt=''/>
                </div>
            <div className='footer_layer'>
                <img src='/images2/Union (1).svg' alt=''/>
            </div>
            <div className='footer_logo'>
                <img src='/images2/Tratta_LOGO_warm 2.svg' alt=''/>
            </div>
            <div className='footer_flex'>
              
                <div className='download_icons d-flex'>
                    <h5 style={{color:"#FFD369"}}  className='footer_content pr-3'>Download</h5>
                    <img className='pr-3' src='/images2/Apple Iconsax (night).svg' alt=''/>
                    <img src='/images2/Google Iconsax (night).svg' alt=''/>
                </div>
                <div className='contact_icons d-flex'>
                <h5 style={{color:"#FFD369"}} className='footer_content pr-3'>Contact</h5>
                    <img className='pr-3' src='/images2/Facebook Iconsax (night).svg' alt=''/>
                    <img src='/images2/Youtube Iconsax (night).svg' alt=''/>
                </div>
             
            </div>
            <div className='subscribe_section subscribe_section_night'>
            
                    <img className='slct_btn' src='/images2/Group 253.svg' alt=''/>
            
                <input className='night_color_sub subscribe_input sub_night' type="eamil" placeholder="Your E-mail"/>
                <button className='sub_btn night_sub_btn night_btn_ho'>SUBSCRIBE</button>
            </div>
               <div className="right_fooer_mask right_fooer_mask_night">
                    <img src='/images2/Vector4night.svg' alt=''/>
                </div>
         </div>
    </div>
  )
}

export default Footer
