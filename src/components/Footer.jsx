import React from "react";
import logo from "../images/logo.svg";
import rightArrowBtn from "../images/rightArrowBtn.png";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';


const Footer = () => {
    return(
        <>
            <div className="padding-10 footer" style={{height: "397px", borderTop: "1px solid #E6E8EC"}}>
                <div className="d-flex flex-sm-row flex-column justify-content-between" style={{borderBottom: "1px solid #E6E8EC"}}>
                    <div className="footer1">
                        <div className=" d-inline-flex footerLogo  " style={{position: "relative" }}>
                            <img src={logo} alt="logo" className="" id="logoD"/>
                            <p className="logoTxt  ">crypter</p>
                        </div>
                        <p className="footerText1 ">The New Creative Economy.</p>
                    </div>
                    <div className="footer2 d-flex flex-sm-row flex-column  justify-content-between ">
                        <table className="footerTable   mb-4 mb-sm-0 " >
                            <thead className=" pb-4  " >
                                <tr>
                                    <th className="pb-4">Stacks<ExpandMoreRoundedIcon className=" float-right" style={{color: "#777E90",position: "relative"}} /></th>
                                    
                                </tr>
                                
                            </thead>
                            <tbody className=" " >
                                <tr className="">
                                    <td className="py-0 ">Discover</td>
                                </tr>
                                <tr  className="">
                                    <td  className="py-0 ">Connect wallet</td>
                                </tr>
                                <tr className="">
                                    <td className=" pb-3 pt-0">Create item</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="footerTable " >
                            <thead className=" " >
                                <tr>
                                    <th className="pb-4">Info<ExpandMoreRoundedIcon className=" float-right" style={{color: "#777E90",position: "relative"}} /></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className="py-0 ">Download</td>
                                </tr>
                                <tr >
                                    <td className="py-0 ">Demos</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-0 ">Support</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="footer3 " >
                        <th className="">Join Newsletter</th>
                        <p className="footerText2">Subscribe our newsletter to get more free design course and resource</p>
                        <div className=" footerInputBox" style={{position: "relative"}}>
                            <input type="email" className="footerEmailInput"  placeholder="Enter your email" />
                            <img src={rightArrowBtn} alt="send" className="rightArrowBtn" role="button"  />
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between" style={{height: "84px",fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "12px",
                        lineHeight: "20px",}}>
                    <p className="mx-auto mx-sm-0" style={{
                        color: "#777E91",
                    }}>Copyright © 2021 UI8 LLC. All rights reserved</p>
                    <p className="d-none d-sm-block" style={{color: "#23262F"}}>We use cookies for better service.<span style={{color: "#3772FF",fontWeight: "600", marginLeft: "7px"}}>Accept</span></p>
                </div>
            </div>
        </>
    );
};

export default Footer