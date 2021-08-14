import React, {useEffect, useState} from "react";
import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faHeart, faPaperPlane, faCompass} from "@fortawesome/free-regular-svg-icons";


function Header(props) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        document.addEventListener("focusout", () => {
            setToggle(false);
        });
    })
    return (
        <header>
            <nav className="header-container">
                <div className="navbar">
                    <div className="logo">
                        <div>
                            <img
                                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                                alt={"logo"}/>
                        </div>
                    </div>
                    <div className="search-box">
                        {toggle ?
                            <input type="text" autoCapitalize="none" placeholder={"search"} autoFocus={"autofocus"}/>
                            : <div className="placeholder" onClick={() => setToggle(true)}>
                                <span>
                                <FontAwesomeIcon icon={faSearch} style={{width: 10, height: 10}}/>
                                </span>
                                <span>Search</span>
                            </div>
                        }
                    </div>
                    <div className="nav-links">
                        <div>
                            <FontAwesomeIcon icon={faHome}/>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                            <FontAwesomeIcon icon={faCompass}/>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;