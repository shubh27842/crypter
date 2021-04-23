import React from "react";
import art from "../../images/art1.png";
import ProfilePic from "../../images/userImg.png"
import cross from "../../images/cross.png";
import heart from "../../images/heartFill.png";
import upload from "../../images/upload.png";
import more from "../../images/more.png";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const Art = () => {
    return(
        <>
            <div className="artBox d-flex justify-content-between " style={{marginTop: "96px" , marginBottom: "96px", position: "relative"}}>
                <div style={{position: "relative"}}>
                    <div className="d-flex" style={{position: "absolute" , top: "20px", left: "20px"}}>
                        <div role="button" className="artTag mr-3">ART</div>
                        <div role="button" className="unlockTag">UNLOCKABLE</div>
                    </div>
                    <img src={art} className="artImg" alt="product"  />
                </div>
                <div className="" style={{
                            width: "384px",
                            fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            
                }}>
                    <div style={{marginBottom: "40px"}}>
                        <p className=" mb-1" style={{
                            fontSize: "40px",
                            lineHeight: "48px",
                            letterSpacing: "-0.01em",
                            color: "#23262F",

                        }}>The amazing art</p>
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
                    <div className="d-inline-flex" style={{
                        width: "384px",
                        borderBottom: "1px solid #E6E8EC",
                        paddingBottom: "5px"
                    }}>
                        <img src={ProfilePic} alt="avatar" style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px"
                        }}  />
                        <div className=" d-inline-block ml-2">
                            <p className="learnMore d-inline-block m-0" style={{
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}>Owner</p>
                            <p className="learnMore d-inline-block m-0" style={{
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "24px",
                                color: "#23262F",
                            }}>Raquel Will</p>
                        </div>
                    </div>
                    <div className="d-inline-flex mt-3" style={{
                        width: "384px",
                        borderBottom: "1px solid #E6E8EC",
                        paddingBottom: "5px"
                    }}>
                        <img src={ProfilePic} alt="avatar" style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px"
                        }}  />
                        <div className=" d-inline-block ml-2">
                            <p className="learnMore d-inline-block m-0" style={{
                                fontSize: "16px",
                                lineHeight: "24px",
                            }}>Creator</p>
                            <p className="learnMore d-inline-block m-0" style={{
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "24px",
                                color: "#23262F",
                            }}>Selina Mayert</p>
                        </div>
                    </div>
                    <div className="amountBox">
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
                                    <p className="learnMore d-inline-block  m-0" style={{
                                        width: "270px",
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        fontWeight: "500"
                                    }}>Highest bid by<span style={{color: "#23262F"}}> Kohaku Tora</span></p>
                                    <p className="learnMore d-inline-block m-0" style={{
                                         width: "270px",
                                        fontWeight: "600",
                                        fontSize: "24px",
                                        lineHeight: "32px",
                                        color: "#23262F",
                                    }}>1.46 ETH <span style={{color: "#777E91"}}> $2,764.89</span></p>
                                </div>
                            </div>
                            <div className="d-flex ">
                                    <div className="purchaseBtn mr-2">Purchase Now</div>
                                    <div className="bidBtn">Place a bid</div>
                            </div>
                            <div className="" style={{height: "26px"}}>
                                <pre className="learnMore  " style={{
                                   
                                    fontSize: "14px",
                                }}>Service fee  <span style={{color: "#23262F"}}> 1.5% </span> 2.563 ETH   $4,540.62</pre>
                            </div>
                    </div>
                </div>
                <div style={{position: "absolute", right: "56px"}}>
                    <div className="sideBtn mb-3" style={{background: "#23262F"}}>
                        <img src={cross}  />
                    </div>
                    <div className="sideBtn mb-3" style={{border: "1px solid #E6E8EC"}}>
                        <img src={upload} />
                    </div>
                    <div className="sideBtn mb-3" style={{border: "1px solid #E6E8EC",}}>
                        <FavoriteOutlinedIcon style={{color: "#EF466F"}} />
                    </div>
                    <div className="sideBtn" style={{border: "1px solid #E6E8EC"}}>
                                <img src={more} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Art;