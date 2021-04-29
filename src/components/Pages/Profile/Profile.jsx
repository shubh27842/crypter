import React, { useLayoutEffect, useState } from "react";
import profileCover from "../../../images/profileCover.png";
import cover from "../../../images/cover.png";
import edit from "../../../images/edit.png";
import profilePic from "../../../images/userImg.png";
import coins from "../../../images/coins.png";
import globe from "../../../images/globe.png";
import more from "../../../images/more.png";
import upload from "../../../images/upload.png";
import twitterIcon from "../../../images/twitterIcon.png";
import instaIcon from "../../../images/instaIcon.png";
import fbIcon from "../../../images/fbIcon.png";
import artistProduct from "../../../images/artistProduct.png";
import loading from "../../../images/loading.png";
import { Link } from "react-router-dom";


const ArtistCard = (props) => {
    return(
        <div className="artistCard ">
            <div className="d-flex ">
                <img src={props.profileSrc} alt="profile" className="artistProfilePic" />
                <div className="artistInfo ">
                    <div className="">
                        <p className="m-0" style={{
                            fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: "16px",
                                lineHeight: "24px",
                                color: "#23262F",
                        }}>
                            {props.name}
                        </p>
                        <p className="caption m-0">{props.followers} followers</p>
                    </div>
                    {
                        props.isFollower ? 
                        <button className="purchaseBtn artistFollowBtn" style={{border: "none" , padding: "12px 16px",}}>Follow</button>
                        :
                        <button className="bidBtn artistFollowBtn2" style={{ padding: "12px 16px",}}>Unfollow</button>
                    }
                    
                </div>
                <div className="artistImgBox ">
                    <img src={artistProduct} alt="images" className="artistProduct" />
                    <img src={artistProduct} alt="images" className="artistProduct" />
                    <img src={artistProduct} alt="images" className="artistProduct" />
                    <img src={artistProduct} alt="images" className="artistProduct" style={{zIndex: "-1"}}/>
                </div>
            </div>
        </div>
    );
};


const Profile = () => {

    const [subHeads,setSubHeads] = useState(['On Sales','Collectibles','Created','Likes','Following','Followers']);
    const [isFollower,setIsFollower] = useState(true)
    const currentActiveHead = () => {
        let cat = document.getElementsByClassName("subHeadsBtn");
          cat[cat.length-1].classList.add("activeSubHead");
    };
    useLayoutEffect(()=>{
        currentActiveHead();
        if(window.innerWidth<480)
        {
            setSubHeads(subHeads.slice(2,6));
        }
    },[])

    const setActiveHead = (e) => {
        let cat = document.getElementsByClassName("subHeadsBtn");
        for(let i=0; i< cat.length; i++ ){
          cat[i].classList.remove("activeSubHead");
        }
        e.target.classList.add("activeSubHead"); 
        if(e.target.innerHTML === 'Following') {
            console.log(e.target.innerHTML)
            setIsFollower(false);
        }
        if(e.target.innerHTML === 'Followers') {
            setIsFollower(true);
        }
    }
    console.log(isFollower)

    return(
        <div>
            <div>
                <div className="coverBox" >
                    <img src={profileCover} alt="cover" className="coverBoxImg" />
                    <div className=" coverBtnBox" >
                        <button className="coverBtns">Edit cover photo   <img src={cover} alt="cover" className="ml-2" /></button>
                        <button className="coverBtns">Edit profile <img src={edit} alt="edit" className="ml-2" /></button>
                    </div>
                    <div className="profileInfoBox">
                        <img src={profilePic} alt="profile" style={{width: "160px", height: "160px", borderRadius: "50%"}} />
                        <p style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "24px",
                            lineHeight: "32px",
                            color: "#23262F",
                            marginTop: "24px",
                            marginBottom: "4px",
                        }}>Enrico Cole</p>
                        <p className="d-flex align-items-center  m-0" style={{
                             fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "#23262F",
                        }}>0xc4c16a645...b21a <img src={coins} alt="coins" className="ml-2" /></p>
                        <p className="caption " style={{margin: "20px 0px"}}>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
                        <a className="d-flex" href="https://ui8.net" style={{
                              fontFamily: "DM Sans",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "#23262F",
                        }} ><img src={globe}  alt="globe" className="mr-2" />https://ui8.net</a>
                        <div className="d-flex justify-content-between" style={{width: "171px", height: "40px",margin: "48px 0px 50px 0px"}}>
                            <button className="purchaseBtn " style={{border: "none" , padding: "12px 16px", width: "75px", height: "40px"}}>Follow</button>
                            <div className="sideBtn mb-3" style={{border: "1px solid #E6E8EC", width: "40px", height: "40px"}}>
                                <img src={upload} alt="remove" style={{width: "20px", height: "20px"}} />
                            </div>
                            <div className="sideBtn" role="button" style={{border: "1px solid #E6E8EC", width: "40px", height: "40px"}}>
                                    <img src={more} alt="more"  />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between" style={{width: "108px", height: "20px"}}>
                            <img src={twitterIcon} alt="twitter" />
                            <img src={instaIcon} alt="instagram" />
                            <img src={fbIcon} alt="facebook" />
                        </div>
                        <hr style={{background: "#E6E8EC", height: "1px",width: "100%",margin: "50px 0px 48px 0px"}} />
                        <p className="caption m-0">Member since Mar 15, 2021</p>
                    </div>
                </div>
                <div className="moreArtistBox" >
                        <div className="d-flex  justify-content-center justify-content-sm-around subHeadBtnBox">
                            {subHeads.map((v)=>{
                                return(
                                    <Link className="subHeadsBtn" onClick={setActiveHead}>{v}</Link>
                                )
                            })}
                        </div>
                            <p> {isFollower}</p>
                        {
                            isFollower ? 
                                <div>
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={true} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={true} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={true} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={true} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={true}/>
                                </div>
                            : 
                               <div>
                               <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={false} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={false} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={false} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={false} />
                                <ArtistCard name="Sally Fadel" followers={161} profileSrc={profilePic} isFollower={false} />
                               </div>
                            
                        }
                        
                        <img src={loading} alt="loading" className=" loading d-flex" />
                </div>
               
                
            </div>
        </div>
    );
};

export default Profile;