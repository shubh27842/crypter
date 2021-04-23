import React from "react";
import logo from "../images/logo.svg";
import rightArrowBtn from "../images/rightArrowBtn.png";


const Footer = () => {
    return(
        <>
            <div className="padding-10 footer" style={{height: "397px", borderTop: "1px solid #E6E8EC"}}>
                <div className="d-flex justify-content-between" style={{borderBottom: "1px solid #E6E8EC"}}>
                    <div>
                        <div className=" d-inline-flex  " style={{position: "relative",marginTop: "46px" }}>
                            <img src={logo} alt="logo" className="" id="logoD"/>
                            <p className="logoTxt  ">crypter</p>
                        </div>
                        <p className="footerText1 m-0 ">The New Creative Economy.</p>
                    </div>
                    <div className="" style={{marginTop: "70px"}}>
                        <table className="" style={{width: "260px",height: "190px"}}>
                            <thead className="" >
                                <tr>
                                    <th>Stacks</th><th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>Discover</td>
                                    <td>Download</td>
                                </tr>
                                <tr >
                                    <td>Connect wallet</td>
                                    <td>Demos</td>
                                </tr>
                                <tr>
                                    <td>Create item</td>
                                    <td>Support</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="" style={{marginTop: "70px"}}>
                        <th>Join Newsletter</th>
                        <p className="footerText2">Subscribe our newsletter to get more free design course and resource</p>
                        <div className="" style={{position: "relative"}}>
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
                    <p style={{
                        color: "#777E91",
                    }}>Copyright © 2021 UI8 LLC. All rights reserved</p>
                    <p style={{color: "#23262F"}}>We use cookies for better service.<span style={{color: "#3772FF",fontWeight: "600", marginLeft: "7px"}}>Accept</span></p>
                </div>
            </div>
        </>
    );
};

export default Footer