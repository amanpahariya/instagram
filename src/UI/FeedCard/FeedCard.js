import React from 'react';
import './FeedCard.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faPaperPlane, faComment, faBookmark, faGrinBeam} from "@fortawesome/free-regular-svg-icons";

const FeedCard = (props) => {
    const {post} = props;
    return (
        <section className="post-container">
            <header className="user">
                <div className="profile">
                    <div>
                        <img src={post.profile_image_url} alt="profile"/>
                    </div>
                </div>
                <div className="username">
                    <h5>{post.userName}</h5>
                </div>
            </header>
            <div className="post">
                <div className="feed">
                    <img src={post.post_url} alt="post"/>
                </div>
                <footer>
                    <div className="top">
                        <div className="feed-response">
                            <button>
                                <div><FontAwesomeIcon icon={faPaperPlane}/></div>
                            </button>
                            <button>
                                <div><FontAwesomeIcon icon={faHeart}/></div>
                            </button>
                            <button>
                                <div><FontAwesomeIcon icon={faComment}/></div>
                            </button>
                        </div>
                        <div className="saved">
                            <button>
                                <div>
                                    <FontAwesomeIcon icon={faBookmark}/>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="likes fw-bold">
                            {post.likes.toLocaleString('en-IN', {maximumSignificantDigits: 3})} <span>likes</span>
                        </div>
                        <div className="comments my-2">
                            {
                                post.comments && post.comments.map((each) => {
                                    return (
                                        <div className="d-flex">
                                            <p className="fw-bold text-dark mb-0">{each.userName}</p>
                                            <p className="mb-0 mx-2">{each.comment}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="end">
                        <div className="post-comment">
                            <form action="#" method="POST">
                                <div className="emoji">
                                    <FontAwesomeIcon icon={faGrinBeam} style={{width: 24, height: 24}}/>
                                </div>
                                <div className="post-input">
                                    <input type="text" placeholder="Add a comment..."/>
                                </div>
                                <div className="post-button">
                                    <button type="button" disabled>
                                        Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default FeedCard;