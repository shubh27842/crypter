import React from "react";
import arrowLeft from "../../../images/arrowLeft.png";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ProfilePic from "../../../images/userImg.png";
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';


const EditProfile = () => {
    return(
        <>
            <div className="padding-10 d-flex d-sm-flex justify-content-between" style={{width: "100%", borderBottom: "1px solid #E6E8EC" , paddingTop:"24px", paddingBottom: "24px"}}>
                <button className="backBtn profileText1"><img src={arrowLeft} alt="backArrow" />
                Back to profile</button>
                <div className="d-sm-inline-flex  align-items-center d-none pr-3">
                    <p className="profileText1 my-auto " style={{color: "#777E91"}}>Profile</p>
                    <ArrowForwardIosRoundedIcon className="" style={{width: "16px" ,  height: "20px", color: "#777E91", marginRight: "30px", marginLeft: "30px"}} />
                    <p className="profileText1 my-auto  ">Edit Profile</p>
                </div>
            </div>
            <div className="editProfileTopBox  ">
                    <p className="profileText1" style={{
                        fontSize: "48px",
                        lineHeight: "56px",
                        letterSpacing: "-0.02em",   
                    }}>Edit profile</p>
                    <p className="profileText2 editProfileTopBoxMobile">You can set preferred display name, create <span style={{color: "#23262F"}}>your profile URL</span> and manage other personal settings.</p>
                    <hr className="displayMobile" style={{color: "#E6E8EC",paddingRight: "5%"}} />
            </div>
            <div className="padding-10">
                <div className="editProfileBox  " >
                    <div className="profileBox ">
                        <img src={ProfilePic} alt="profilePic" className="editProfilePic" />
                        <div className="ml-3">
                            <p className="profileText2" style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#23262F",
                                textAlign: "left",
                                marginBottom: "8px"
                            }}>Profile photo</p>
                            <p className="profileText2" style={{
                                fontSize: "12px",
                                lineHeight: "20px",
                                color: "#777E91",
                            }}>We recommend an image <br className="displayDesktop"/>of at least<br className="displayTab" /> 400x400.<br className="displayDesktop"/>Gifs work too 🙌</p>
                            <button className="backBtn profileText1" style={{width: "80px"}}>Upload</button>
                        </div>
                    </div>
                    <div className="updateProfileBox  ">
                        <div className="accoutAndSocial  ">
                            <div className="accountBox  ">
                                <p className="profileText2 " style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#23262F",
                                textAlign: "left",
                                marginBottom: "32px"
                                }}>Account info</p>
                                <label className="profileLabelText3  m-0">Display Name</label>
                                <input type="text" placeholder="Enter your display name" className="editProfileInput" />
                                <label className="profileLabelText3  m-0">Custom Url</label>
                                <input type="text" placeholder="ui8.net/Your custom URL" className="editProfileInput" />
                                <label className="profileLabelText3  m-0">Bio</label>
                                <textarea  type="text" placeholder="About yourselt in a few words" className="editProfileInput" style={{height: "96px"}} />
                            </div>
                            <div className="socialBox  " style={{position: "relative"}}>
                                <p className="profileText2 " style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#23262F",
                                textAlign: "left",
                                marginBottom: "32px"
                                }}>Social</p>
                                <label className="profileLabelText3  m-0">Portfolio or website</label>
                                <input type="text" placeholder="Enter URL" className="editProfileInput" />
                                <label className="profileLabelText3  m-0">Twitter</label>
                                <input type="text" placeholder="@twitter username" className="editProfileInput" />
                                <button className="backBtn profileText1 p-2" style={{
                                    width: "120px", 
                                    height: "32px",
                                    position: "absolute",
                                    bottom: "82px",
                                    right: "12px"
                                }}>Verify account</button>
                                <button className="backBtn profileText1" style={{width: "230px" , color: "#777E90"}}><AddCircleOutlineRoundedIcon style={{color: "#777E90",width: "16px"}} />Add more social account </button>
                            </div>
                        </div>
                        <div className="updateBtnBox  ">
                            <p className="profileText2 ">To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
                            <hr  style={{color: "#E6E8EC", marginTop: "40px" , marginBottom: "40px",}} />
                            <div className="updateBtns">
                                <button className="purchaseBtn updateProfileBtn" style={{border: "none"}}>Update Profile</button>
                                <button className="bidBtn" style={{background: "transparent", border: "none", color: "#777E90"}}><CancelOutlinedIcon style={{width: "16px",marginRight: "10px"}} />Clear all </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default EditProfile;