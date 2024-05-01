import { Link } from "react-router-dom";
function Header() {
    return (
       
            <nav id="sidebarMenu" class="sidebar d-lg-block  text-white collapse" data-simplebar>
                <div class=" px-4 pt-3">
                <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar-lg me-4"><img src="assets/img/profile-picture-3.jpg" class="card-img-top rounded-circle border-white" alt="Bonnie Green"/></div>
                       
                    </div>
                    <div class="collapse-close d-md-none">
                        <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                            <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <ul class="nav flex-column pt-3 pt-md-0">
              
                    {/* <li class="nav-item"><a href="#" class="nav-link d-flex align-items-center"><span class="sidebar-icon"><img src="assets/img/light.svg" height="20" width="20" alt="Rich Logo" /> </span><span class="mt-1 ms-1 sidebar-text">Rich Overview</span></a></li> */}
                
                        <li class="nav-item">
                        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-apps" aria-expanded="false">
                            <span>
                            <span class="sidebar-icon">
                              <img src="/admin_imgs/Capsule & Pill.svg" alt=""/>
                            </span>
                            <span  class="sidebar-text clr">Drug Algorithms</span> 
                            </span>
                            <span class="link-arrow">
                           <img src="/admin_imgs/open subs.svg" alt=""/>
                            </span>
                        </span>
                        <div class="multi-level collapse" id="submenu-apps" aria-expanded="true" >
                            <ul class="flex-column nav">
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/category"}}><span class="sidebar-text border_css">Category</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/ad-drugs"}}><span class="sidebar-text border_csss">New Drug</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item ">
                       <Link to="/basic-page" class="nav-link">
                            <span class="sidebar-icon">
                           <img src="/admin_imgs/data2.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Basic Data</span>
                        </Link></li>
                    <li class="nav-item">
                        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-app" aria-expanded="false">
                            <span>
                            <span class="sidebar-icon">
                              <img src="/admin_imgs/foldercloud.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Bulk Files</span> 
                            </span>
                            <span class="link-arrow">
                            <img src="/admin_imgs/open subs.svg" alt=""/>
                            </span>
                        </span>
                        {/* <div class="multi-level" role="list" id="submenu-app" aria-expanded="true">
                            <ul class="flex-column nav">
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/tables"}}><span class="sidebar-text">Bootstrap Tables</span></Link></li>
                            </ul>
                        </div> */}
                    </li>
                    
                    <li class="nav-item">
                        <Link class="nav-link" to={{ pathname: "/trash"}}>
                            <span class="sidebar-icon">
                           <img src="/admin_imgs/Trash 5.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Trash</span>
                        </Link>
                    </li>
                    <Link to="/reports">
                    <li class="nav-item">
                        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-appw" aria-expanded="false">
                            <span>
                            <span class="sidebar-icon">
                               <img src="/admin_imgs/report.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Reports</span> 
                            </span>
                            <span class="link-arrow">
                            <img src="/admin_imgs/open subs.svg" alt=""/>
                            </span>
                        </span>
                        {/* <div class="multi-level" role="list" id="submenu-appw" aria-expanded="true">
                            <ul class="flex-column nav">
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/tables"}}><span class="sidebar-text">Bootstrap Tables</span></Link></li>
                            </ul>
                        </div> */}
                    </li>
                    </Link>
                 
                    <li class="nav-item">
                        <Link class="nav-link" to={{ pathname: "/account"}}>
                            <span class="sidebar-icon">
                          <img src="/admin_imgs/Icon.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Account</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={{ pathname: "/setting"}}>
                            <span class="sidebar-icon">
                           <img src="/admin_imgs/setting2.svg" alt=""/>
                            </span>
                            <span class="sidebar-text">Setting</span>
                        </Link>
                    </li>
                    {/* <li class="nav-item">
                        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-pages">
                            <span>
                            <span class="sidebar-icon">
                                <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                                </svg>
                            </span>
                            <span class="sidebar-text">Page examples</span> 
                            </span>
                            <span class="link-arrow">
                            <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            </span>
                        </span>
                        <div class="multi-level collapse" role="list" id="submenu-pages" aria-expanded="false">
                            <ul class="flex-column nav">
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/sign-in"}}><span class="sidebar-text">Sign In</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/sign-up"}}><span class="sidebar-text">Sign Up</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/forgotpassword"}}><span class="sidebar-text">Forgot password</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/resetpassword"}}><span class="sidebar-text">Reset password</span></Link></li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#submenu-pagess">
                            <span>
                            <span class="sidebar-icon">
                                <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
                                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                                </svg>
                            </span>
                            <span class="sidebar-text">ccccccc</span> 
                            </span>
                            <span class="link-arrow">
                            <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            </span>
                        </span>
                        <div class="multi-level collapse" role="list" id="submenu-pagess" aria-expanded="false">
                            <ul class="flex-column nav">
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/sign-in"}}><span class="sidebar-text">Sign In</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/sign-up"}}><span class="sidebar-text">Sign Up</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/forgotpassword"}}><span class="sidebar-text">Forgot password</span></Link></li>
                            <li class="nav-item"><Link class="nav-link" to={{ pathname: "/resetpassword"}}><span class="sidebar-text">Reset password</span></Link></li>
                            </ul>
                        </div>
                    </li> */}
                    </ul>
                </div>
            </nav>
     
    );
}

export default Header;