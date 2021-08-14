import React from 'react';
import './HomePage.scss';
import Feeds from "../../UI/Feeds/Feeds";
import Story from "../../UI/Story/Story";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import suggestion from "../../data/suggestion/suggestion";


const HomePage = () => {
    return (
        <div className="homepage-container">
            <main>
                <Story/>
                <Feeds/>
            </main>
            <div className="suggestion-container">
                <div
                    className="user d-flex justify-content-between align-items-center">
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} color={"rgb(219,219,219)"}
                                         style={{fontSize: 60, background: "#fff", borderRadius: "50%"}}/>
                    </div>
                    <div className="userName">
                        <h5 className="fw-bold">aman_pahariya_g_</h5>
                        <h5 className="fw-bold text-black-50">aman gupta</h5>
                    </div>
                    <div className="switch">
                        <h5 className="fw-bold text-info mb-0">Switch</h5>
                    </div>
                </div>
                <div className="suggestion d-flex justify-content-between align-items-center pe-0">
                    <h5 className="title fw-bold mb-0">
                        Suggestion For You
                    </h5>
                    <p className={"title fw-bold mb-0 text-dark"}>See All</p>
                </div>
                <div className="suggestion-box">
                    {
                        <ul>
                            {
                                suggestion.map((ele, i) =>

                                    <li className="user d-flex justify-content-between">
                                        <div className="userProfile">
                                            <img src={ele.profile_image_url} alt="profile"/>
                                        </div>
                                        <div className="userName">
                                            <p className="mb-0 fw-bold">{ele.userName.replace(/(.{20})..+/, "$1…")}</p>
                                            <p className="mb-0 fw-bold">{ele.message.replace(/(.{20})..+/, "$1…")}</p>
                                        </div>
                                        <div>
                                            <button className="follow-btn text-info
                                            ">
                                                Follow
                                            </button>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;