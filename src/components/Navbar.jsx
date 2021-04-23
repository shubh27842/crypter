import React from "react";
import logo from "../images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import Bell from "../images/bell.png";
import ProfilePic from "../images/userImg.png"


const Navbar = () => {
    return(
        <>
            <nav className="w-100 container-fluid navbar navbar-expand-lg " style={{  height: "81px", borderBottom: "1px solid #E6E8EC"}}>
                <div className="margin-10 navbarContent d-flex  " style={{width: "100%", height: "81px"}}>
                    <div className=" d-inline-flex " style={{position: "relative" }}>
                        <img src={logo} alt="logo" className="" id="logoD"/>
                        <p className="logoTxt  ">crypter</p>
                    </div>
                    <div className=" d-lg-inline-flex d-none align-items-center  ml-4 mr-auto justify-content-between" style={{width: "170px",height: "81px"}}>
                        <li className="nav-item navItem">
                            Discover
                        </li>
                        <li className="nav-item navItem">
                            How it work
                        </li>
                    </div>
                    <div className=" searchBox ml-auto  my-auto">
                        <input type="text" className="searchBoxInput" placeholder="search"  />
                        <SearchIcon  className="searchBoxIcon  my-auto"/>
                    </div>
                    <div className=" notificationBell my-auto">
                        <div className="notificationCircle" style={{width: "12px",height: "12px",background: "#45B36B",borderRadius: "8px"}}></div>
                        <img src={Bell} alt="notification" />
                    </div>
                    <div className=" uploadBtn my-auto" role="button">
                        Upload
                    </div>
                    <div className="user  my-auto">
                        <img src={ProfilePic} alt="profile" className="profilePic" />
                        <p className="userId my-auto">7.00698<span className="ml-1" style={{color: "#45B36B"}}>ETH</span></p>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;