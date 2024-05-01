import React from 'react'
import { Iphone,Google, Youtube, Facebook } from '../../assets/images';
const Footer = () => {
  return (
    <div>
       <div className='footer_section'>
         <div className="left_fooer_mask">
                    <img src='/images/Vector (2).svg' alt=''/>
                </div>
            <div className='footer_layer'>
                <img src='/images/Union.svg' alt=''/>
            </div>
            <div className='footer_logo'>
                <img src='/images/Tratta_LOGO (to color).svg' alt=''/>
            </div>
            <div className='footer_flex'>
              
                <div className='download_icons d-flex'>
                    <h5 className='footer_content pr-3'>Download</h5>
                    <Iphone/>
                    <Google />
                </div>
                <div className='contact_icons d-flex'>
                <h5 className='footer_content pr-3'>Contact</h5>
                    {/* <img className='pr-3' src='/images/Facebook Iconsax.svg' alt=''/> */}
                    <Facebook  />
                    <Youtube />
                    {/* <img src='/images/Youtube Iconsax.svg' alt=''/> */}
                </div>
             
            </div>
            <div className='subscribe_section'>
            
                    <img className='slct_btn' src='/images/slect_sub.svg' alt=''/>
            
                <input className='subscribe_input' type="eamil" placeholder="Your E-mail"/>
                <button className='sub_btn '>SUBSCRIBE</button>
            </div>
               <div className="right_fooer_mask">
                    <img src='/images/Vector (3).svg' alt=''/>
                </div>
         </div>
    </div>
  )
}

export default Footer

