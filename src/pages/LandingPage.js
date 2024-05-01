
import React, { useContext,useState } from 'react'
import { ThemeProvider } from '../Contexts/ThemeContext';
import SearchFields from '../Components/Light_theme_com/SearchFields';
// import { Iphone,Google, Youtube, Facebook } from '../assets/images';
import Footer from '../Components/Light_theme_com/Footer';

const LandingPage = () => {
  const [show,setShow]=useState(false)
 const [cal,setCal]=useState(false)
 const [gen,setGen]=useState(false)
 const [setting,setSetting] = useState(false)
 const [wheel,setWheel] = useState(false)
 const [weight,setWeight]=useState(false)
//   const [showmodal,setShowmodal]=useState(false)
  const [sett,setSett]=useState(false)
    const context = useContext(ThemeProvider)
 
  return (
    <div className='tratta_layer0'>
    <div className='tratta_layer1'>
    <div className='tratta_layer2'>
        <div className='section_one'>  
        <div className='vector1 vector1_light'>
            <img src='/images/Vector (1).svg' alt=''/>
        </div>
        <div className='tratta_nav'>
            <div className='tratta_logo'>
                <img src='/images/Tratta_LogoICO.svg'alt=''/>
            </div>
            
            <div className='nav_icons'>
              {
                sett ? <div className='setting_menu'>
                <div className='set_title set_light_tittle'>Sign Up</div>
                <div className='set_title set_light_tittle'>Check for updates</div>
                <div  className='set_title set_light_tittle' >Tratta Tips</div>
              </div>:null
              }
            
                <img onClick={()=>setSett(!sett)} className='setting' src='/images/setting.svg' alt=''/>
                <img className='toggle_mode' src='/images/toggle.svg' alt='' onClick={()=> context.setDarkTheme(true)}/>
            </div>
        </div>   
<SearchFields/>
{
            cal ? <> <div className='calculation'>
            <img className='age_icon pr-3' src='/images/age.svg' alt=''/>
            <img className='src_img pr-3' src='/images/src.svg' alt=''/>
            <img className='ruslt_img pr-3' src='/images/ruslt.svg' alt=''/>
            <img className='del_icon' src='/images/del.svg'alt=''/>

         </div></>:null
        }
        {
            weight ? <>
            <div className='weight_div'>
            <img className='age_icon pr-3' src='/images/avrge.svg' alt=''/>
            <img className='src_img pr-3' src='/images/underbuild.svg' alt=''/>
            <img className='src_img pr-3' src='/images/overbuild.svg' alt=''/>

         </div></>:null
        }
        {
            gen ? <><div className='general_btn'>
            <img className='age_icon pr-3' src='/images/isttry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/2ndtry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/3rdtry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/nurse.svg' alt=''/>
            <img className='del_icon' src='/images/category.svg'alt=''/>

         </div></>:null
        }
       
         <div>
        
         <div className={`circle_items  ${show?"active active_light": ""}`}>
        
            <div 
            onClick={()=>{
                console.log('')
                
                setGen(!gen)
                setWeight(false)
                setSetting(false)
                setSett(false)
                setCal(false)

            }}
             className={gen ? 'one light_circle bg_active' : 'one light_circle' }>
              <img src='/images/pin.svg' alt=''></img>
            </div>
            <div
            onClick={()=>{
                console.log('')
                setSetting(false)
  
                setWheel(!wheel)
                setWeight(false)
                setGen(false)
                setSett(false)
                setCal(false)}}
                  className={wheel ? "bg_active two light_circle2":'two light_circle2'}>
            <img  src='/images/Group 217.svg' alt=''></img>
            </div>
            <div  onClick={()=>{
                console.log('')
                setWheel(false)
                setWeight(!weight)
                setGen(false)
                setSetting(false)
                setSett(false)
                setCal(false)

            }} className={weight ? "bg_active three light_circle" : "three light_circle"}>
            <img src='/images/meterlight.svg' alt=''></img>
            </div>
            <div
             onClick={()=>{
                console.log('')
                
                setCal(!cal)
                setGen(false)
                setSetting(false)
                setWheel(false)
                setSett(false)
                setWeight(false)

            }} className={cal ?'four light_circle bg_active' : 'four light_circle'  }>
            <img onClick={()=>setCal(true)} src='/images/calculator.svg' alt=''></img>
            </div>
            <div className={ setting ?'five light_circle bg_active':"five light_circle"}
             onClick={()=>{
                setWheel(false)
                setSetting(!setting)
  
                setCal(false)
                setGen(false)
                setSett(false)
                setWeight(false)
              }}
            >
            <img
              src='/images/setting4.svg' alt=''></img>
            </div>

            <div style={{background:"#F1F3F6"}}  className='stetho_section light_stho'  onClick={()=>{setShow(!show)
             setCal(false)
             setGen(false)
             setSett(false)
             setSetting(false)
             setWheel(false)
             setWeight(false)
            
            
            }}>
        
        {
            show ?<><img src='/images/Clinical history ICO.svg' className='heading' alt=''/><img style={{height:"48px",paddingTop:"20px"}} src='/images/close.svg' alt=''></img></>:<img className='stethooo' style={{height:"60px",paddingTop:"10px"}} src='/images/Stethoscope.svg' alt=''/>
        }
       
            
            {/* <button onClick={()=>setShow(false)}>click</button> */}
        </div>

          </div>
         </div>
         
       
        
      
         {
            show ?   <div className='history_modal'>
                {/* <div className='closedivv'><img className='close_model_img' src='/images/closemodal.png' alt=''/></div> */}
            <div className='slect_drug_ill'>
              <div className='illbtn'>Illness</div>
              <div className='drugbttn'>Drug</div>
           
            </div>
            <div className='seacrch_modal'>
            <img className='serch_img_drugtag' src='/images/searchstatus.svg' alt=''/>
            <input className='drug_search search_input_tab' type="eamil" placeholder="Serach Drug"/>
            <img className='drug_search_btn' src='/images/refresh.svg' alt=''/> 
            </div>
           <div className='choose_para_wrapper'>
           <div className='set_title drug_modal_slc'>Acute Conditions</div>
                <div className='set_title drug_modal_slc'>Venous Thromboembolic Disease</div>
                <div  className='set_title drug_modal_slc' >Deep Venous Thrombosis</div>
                <div className='set_title drug_modal_slc'> Pulmonary Embolism</div>
                <div  className='set_title drug_modal_slc' >Withdrawal Syndromes</div>
                <div  className='set_title drug_modal_slc' >Ethanol Withdrawal</div>
                <div  className='set_title drug_modal_slc' >XYZ</div>
        
           </div>
           
           
               
          </div>:null
          }
        
        {/* <div className='stetho_section light_clr_bg'>
            <img src='/images/Stethoscope.svg' alt=''/>
        </div> */}
        <div className='vector2'>
            <img src='/images/Vector (4).svg' alt=''/>
        </div>
         </div>
         <div className='section_two'>
            <div className='recomended_section'>
                <h3>Recommended</h3>
                <h3>Dosage</h3>
                <h5>Dosage Note</h5>
            </div>
         </div>
        <Footer/>
      
  
    </div>
    </div>
    </div>
  )
}

export default LandingPage
