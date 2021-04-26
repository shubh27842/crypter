import React from "react";
import logo from "../images/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import Bell from "../images/bell.png";
import ProfilePic from "../images/userImg.png";
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';


const Navbar = () => {
    return(
        <>
            <nav className="w-100 container-fluid navbar navbar-expand-lg  " style={{   borderBottom: "1px solid #E6E8EC"}}>
                <div className="margin-10 navbarContent d-flex flex-row justify-content-around   mb-0 ">
                    <div className=" d-inline-flex " style={{position: "relative" }}>
                        <img src={logo} alt="logo" className="" id="logoD"/>
                        <p className="logoTxt  ">crypter</p>
                    </div>
                    <div className="my-auto divider" style={{height: "40px", width: "2px", background: "#E6E8EC",borderRadius: "2px"}} ></div>
                    <div className="nonTabNav  ml-4 mr-auto" >
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
                    <DragHandleRoundedIcon className="d-sm-none d-block  d-flex align-items-center ml-3" style={{transform: "scale(1.5,2)",color: "#777E90",marginTop: "28px"}} />

                </div>
            </nav>
        </>
    );
};

export default Navbar;