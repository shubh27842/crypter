import React from "react";
import art from "../../images/Item2.png";
import ProfilePic from "../../images/userImg.png"
import cross from "../../images/cross.png";
import upload from "../../images/upload.png";
import more from "../../images/more.png";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import polygon from "../../images/polygon.png";
import dollar from "../../images/dollar.png";
import arrowTransfer from "../../images/arrowTransfer.png";
import crossCircle from "../../images/crossCircle.png";
import crossFilled from "../../images/crossFilled.png";
import report from "../../images/report.svg";

const Item2 = () => {

    const showMore = (e) => {
        document.getElementsByClassName('moreBox')[0].classList.toggle('showMore');
        e.target.classList.toggle('BtnBackground');
    }
    return(
        <>
            <div className="artBox  d-flex flex-sm-row flex-column justify-content-center align-items-sm-start align-items-center justify-content-sm-between " style={{ position: "relative"}}>
                <div style={{position: "relative"}}>
                    <div className="d-flex" style={{position: "absolute" , top: "20px", left: "20px"}}>
                        <div role="button" className="artTag mr-3">ART</div>
                        <div role="button" className="unlockTag">UNLOCKABLE</div>
                    </div>
                    <img src={art} className="artImg " alt="product"  />
                </div>
                <div className="rightBox ">
                    <div style={{marginBottom: "40px"}}>
                        <p className=" mb-1" style={{
                            fontSize: "40px",
                            lineHeight: "48px",
                            letterSpacing: "-0.01em",
                            color: "#23262F",
                        }}>Awesome work</p>
                        <div className="d-flex align-items-center ">
                            <span className="artRating">2.5 ETH</span>
                            <span className="artPrice mx-2">$4,429.87</span>
                            <span className="inStock">10 in stock</span>
                        </div>
                    </div>
                    <div className="learnMore">
                    This NFT Card will give you Access to Special Airdrops.To learn more about UI8 please visit
                    <a href="https://ui8.net" style={{color: "#000"}}> https://ui8.net</a>
                    </div>
                    <div className="infoBox">
                        <div style={{
                            height: "28px",
                            padding: "6px 12px",
                            display: "flex",
                            alignItems: "center",
                            color: "#FCFCFD",
                            background: "#353945",
                            borderRadius: "100px",
                        }}>Info</div>
                        <div  style={{
                             height: "28px",
                            padding: "6px 12px",
                            display: "flex",
                            alignItems: "center",
                            color: "#777E91",
                        }}>Owners</div>
                        <div  style={{
                             height: "28px",
                            padding: "6px 12px",
                            display: "flex",
                            alignItems: "center",
                            color: "#777E91",
                        }}>History</div>
                        <div  style={{
                             height: "28px",
                            padding: "6px 12px",
                            display: "flex",
                            alignItems: "center",
                            color: "#777E91",
                        }}>Bids</div>
                    </div>
                    <div className="ownerInfo">
                        <img src={ProfilePic} alt="avatar" style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                        }}  />
                        <img src={polygon} alt="owner" width="24px" height="24px" style={{
                            position: "relative",
                            top: "28px",
                            right: "17px",
                        }} />
                        <div className=" d-inline-block ml-2">
                            <p className="learnMore d-inline-block m-0" id="learnMoreMobile" style={{
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}>Owner</p>
                            <p className="learnMore d-inline-block m-0" id="learnMoreMobile" style={{
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "24px",
                                color: "#23262F",
                            }}>Raquel Will</p>
                        </div>
                    </div>
                    <div className="ownerInfo mt-3">
                        <img src={ProfilePic} alt="avatar" style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px"
                        }}  />
                        <div className=" d-inline-block ml-2">
                            <p className="learnMore d-inline-block m-0" id="learnMoreMobile" style={{
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}>Creator</p>
                            <p className="learnMore d-inline-block m-0" id="learnMoreMobile" style={{
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "24px",
                                color: "#23262F",
                            }}>Selina Mayert</p>
                        </div>
                    </div>
                    <div className="amountBoxItem2">
                            <div className="d-inline-flex " style={{
                                width: "100%",
                                paddingBottom: "5px"
                            }}>
                                <img src={ProfilePic} alt="avatar" className="my-auto" style={{
                                    borderRadius: "50%",
                                    width: "48px",
                                    height: "48px"
                                }}  />
                                <div className=" d-inline-block ml-2">
                                    <p className="learnMore d-inline-block  m-0" id="learnMoreMobile1" style={{
                                        width: "270px",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        fontWeight: "500"
                                    }}>Highest bid by<span style={{color: "#23262F"}}> Kohaku Tora</span></p>
                                    <p className="learnMore d-inline-block m-0" id="learnMoreMobile1" style={{
                                         width: "270px",
                                        fontWeight: "600",
                                        fontSize: "24px",
                                        lineHeight: "32px",
                                        color: "#23262F",
                                    }}>1.46 ETH <span style={{color: "#777E91"}}> $2,764.89</span></p>
                                </div>
                            </div>
                            <div className="d-flex ">
                                    <div className="bidBtn mr-2">View all</div>
                                    <div className="purchaseBtn ">Accept</div>
                            </div>
                    </div>
                </div>
                <div className="sideBtnBox" >
                    <div className="sideBtn sideBtnCross mb-3" style={{background: "#23262F"}}>
                        <img src={cross} alt="remove" />
                    </div>
                    <div className="sideBtn mb-3" style={{border: "1px solid #E6E8EC"}}>
                        <img src={upload} alt="upload" />
                    </div>
                    <div className="sideBtn mb-3" style={{border: "1px solid #E6E8EC",}}>
                        <FavoriteOutlinedIcon style={{color: "#EF466F"}}  />
                    </div>
                    <div className="sideBtn" onClick={showMore} style={{border: "1px solid #E6E8EC"}}>
                                <img src={more} alt="more" />
                    </div>
                </div>
                <div className="moreBox ">
                        <div className="d-flex align-items-center  " style={{paddingBottom: "14px", width: "100%" ,borderBottom: "1px solid #E6E8EC"}}>
                            <img src={dollar} alt="dollar" width="17px" height="17px" className="" />
                            <p className="ml-2  my-auto">Change price</p>
                        </div>
                        <div className="d-flex align-items-center " style={{paddingBottom: "14px", width: "100%" ,borderBottom: "1px solid #E6E8EC"}}>
                            <img src={arrowTransfer} alt="dollar" width="17px" height="17px" className="" />
                            <p className="ml-2  my-auto">Transfer token</p>
                        </div>
                        <div className="d-flex align-items-center " style={{paddingBottom: "14px", width: "100%" ,borderBottom: "1px solid #E6E8EC"}}>
                            <img src={crossCircle} alt="dollar" width="17px" height="17px" className="" />
                            <p className="ml-2  my-auto">Remove from sale</p>
                        </div>
                        <div className="d-flex align-items-center " style={{paddingBottom: "14px", width: "100%" ,borderBottom: "1px solid #E6E8EC", color: "#EF466F"}}>
                            <img src={crossFilled} alt="dollar" width="17px" height="17px" className="" style={{color: "#EF466F!important"}} />
                            <p className="ml-2  my-auto">Burn token</p>
                        </div>
                        <div className="d-flex align-items-center " style={{paddingBottom: "14px", width: "100%" ,}}>
                            <img src={report} alt="dollar" width="17px" height="17px" className="" />
                            <p className="ml-2  my-auto">Report</p>
                        </div>
                    
                </div>
            </div>
        </>
    );
};

export default Item2;