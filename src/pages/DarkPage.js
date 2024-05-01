// import React,{useState} from 'react'
import React,{ useContext,useState}  from 'react'
import { ThemeProvider } from '../Contexts/ThemeContext';
import Footer from '../Components/Dark_theme_com/Footer';
import SearchFields from '../Components/Dark_theme_com/SearchFields';
const DarkPage = () => {
  const context = useContext(ThemeProvider)
    const [show,setShow]=useState(false)
    // const [showmodal,setShowmodal]=useState(false)
    const [sett,setSett]=useState(false)
    const [cal,setCal]=useState(false)
    const [gen,setGen]=useState(false);
    const [wheel,setWheel] = useState(false)
    const [weight,setWeight]=useState(false)
    const [showicon,setShowicon]=useState(false);
    const [setting,setSetting] = useState(false)

  return (
    <div className='tratta_layer0'>
    <div className='tratta_layer1 night_bg'>
    <div className='tratta_layer2'>
        <div style={{background:"#282A3A"}} className='section_one'>  
        <div className='vector1'>
            <img src='/images2/Vector1night.svg' alt=''/>
        </div>
        <div className='tratta_nav'>
            <div className='tratta_logo'>
                <img src='/images/Tratta_LogoICO.svg'alt=''/>
            </div>
            <div className='nav_icons'>
            {
                sett ? <div className='setting_menu dark_modal_clrr'>
                <div className='set_title'>Sign Up</div>
                <div className='set_title'>Check for updates</div>
                <div  className='set_title' >Tratta Tips</div>
              </div>:null
              }
                <img onClick={()=>setSett(!sett)} className='setting' src='/images2/sett_night.svg' alt=''/>
                <img className='toggle_mode' src='/images2/toggle (1).svg' alt='' onClick={()=> context.setDarkTheme(false)}/>
            </div>
        </div>
        <div className='fields night_field_m'>
            <div className='medical_fields'>
            <div className='seacrch_field'>
            <img className='serch_img' src='/images/searchnormal.svg' alt=''/>
            <input className='search_input search_input_night' type="eamil" placeholder="Serach Drug"/>
            {
              showicon ? <> <img className='yellow_dot' src='/images/yellow.svg' alt=''/>
              <img className='perpul_dol' src='images/searchdot_purple.svg' alt=''/></>:null
            }
           
            <img onClick={()=>setShowicon(!showicon)} className='blu_dot' src='/images/bluu.svg'alt=''/>
            <img className='refresh_btn' src='/images2/Vector (1).svg' alt=''/> 
            </div>
            </div>
           
      <SearchFields/>
        </div>
        {
            cal ? <> <div className='calculation chnage_bg'>
            <img className='age_icon pr-3' src='/images/age.svg' alt=''/>
            <img className='src_img pr-3' src='/images/src.svg' alt=''/>
            <img className='ruslt_img pr-3' src='/images/ruslt.svg' alt=''/>
            <img className='del_icon' src='/images/del.svg'alt=''/>

         </div></>:null
        }
        {
            weight ? <>
            <div className='weight_div chnage_bg'>
            <img className='age_icon pr-3' src='/images/avrge.svg' alt=''/>
            <img className='src_img pr-3' src='/images/underbuild.svg' alt=''/>
            <img className='src_img pr-3' src='/images/overbuild.svg' alt=''/>

         </div></>:null
        }
        {
            gen ? <><div className='general_btn chnage_bg'>
            <img className='age_icon pr-3' src='/images/isttry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/2ndtry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/3rdtry.svg' alt=''/>
            <img className='src_img pr-3' src='/images/nurse.svg' alt=''/>
            <img className='del_icon' src='/images/category.svg'alt=''/>

         </div></>:null
        }
       

      <div style={{ textAlign: "center" }}>
        <div className={`circle_items ${show?"active": ""}`}>
            <div 
             onClick={()=>{
              console.log('')
              setWheel(false)
              setSetting(false)
              
              setGen(!gen)
              setWeight(false)
              setSett(false)
              setCal(false)
             }}className='one'>
              <img src={gen ? "/images2/gen_per.svg" : "/images2/pin.svg"} alt=''></img>
            </div>
            <div
  onClick={()=>{

    setWheel(!wheel)
    setSetting(false)
              
    setGen(false)
    setWeight(false)
    setSett(false)
    setCal(false)
  }}
             className='two'>
            <img src={wheel ? '/images2/wheel_pur.svg' : '/images2/wheel.svg'} alt=''></img>
            </div>
            <div
             onClick={()=>{
              console.log('')
              setSetting(false)

              setWheel(false)
              setWeight(!weight)
              setGen(false)
              setSett(false)
              setCal(false)

          }} className='three'>
            <img src={weight ? '/images2/weight_per.svg' : '/images2/meter.svg'} alt=''></img>
            </div>
            <div
             onClick={()=>{
              console.log('')
              setWheel(false)
              setSetting(false)

              setCal(!cal)
              setGen(false)
              setSett(false)
              setWeight(false)

          }} className='four'>
            <img src={cal ? '/images2/cal_per.svg' : '/images2/calcu.svg' }
             alt=''></img>
            </div>
            <div className='five'
            onClick={()=>{
              setWheel(false)
              setSetting(!setting)

              setCal(false)
              setGen(false)
              setSett(false)
              setWeight(false)
            }}
            
            >
            <img src={setting ? '/images2/setting_per.svg' : '/images2/sett.svg' } alt=''></img>
            </div>

            <div
             className='stetho_section right_stetho'  onClick={
              
              ()=>{setShow(!show)
                setWheel(false)
                setCal(false)
                setGen(false)
                setSett(false)
                setWeight(false)}
              }>
        
        {
            show ?<><img src='/images/Clinical history ICO.svg' className='heading' alt=''/><img src='/images2/close.svg' alt=''></img></>:<img src='/images2/Stethoscope Final.svg' alt=''/>
        }
            
            {/* <button onClick={()=>setShow(false)}>click</button> */}
        </div>

          </div>
          </div>
          
         {
            show ?   <div className='history_modal dark_clr'>
                {/* <div className='closedivv' ><img className='close_model_img' src='/images/closemodal.png' alt=''/></div> */}
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
           <div className='set_title drug_modal_slc drug_modal_sloc'>Acute Conditions</div>
                <div className='set_title drug_modal_slc drug_modal_sloc'>Venous Thromboembolic Disease</div>
                <div  className='set_title drug_modal_slc drug_modal_sloc' >Deep Venous Thrombosis</div>
                <div className='set_title drug_modal_slc drug_modal_sloc'> Pulmonary Embolism</div>
                <div  className='set_title drug_modal_slc drug_modal_sloc' >Withdrawal Syndromes</div>
                <div  className='set_title drug_modal_slc drug_modal_sloc' >Ethanol Withdrawal</div>
                <div  className='set_title drug_modal_slc drug_modal_sloc' >XYZ</div>
        
           </div>
           
           
               
          </div>:null
          }
        {/* <div className='stetho_section right_stetho'  onClick={()=>setShow(!show)}>
        
        {
            show ? <h1>X</h1>:<img src='/images2/Stethoscope Final.svg' alt=''/>
        }
            
        </div> */}
        <div className='vector2 vector2_night'>
            <img src='/images2/Vector2night.svg' alt=''/>
        </div>
         </div>
         {/* <div className='section_two_div'><h3>Max Dose</h3></div> */}
         <div style={{background:"#423F3E"}} className='section_two'>
            <div className='recomended_section'>
       
                <h3 style={{color:"#fff"}}>Recommended</h3>
                <h3 style={{color:"#fff"}}>Dosage</h3>
                <h5 style={{color:"#fff"}}>Dosage Note</h5>
            </div>
         </div>
        <Footer/>
      
  
    </div>
    </div>
    </div>
  )
}

export default DarkPage
