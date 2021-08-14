import React from 'react';
import './StoryCard.scss';

const StoryCard = (props) => {
    return (
        <div className="story-card">
            <button className="outer-border" onClick={()=>props.storyClicked(props.index)}>
                <div className="inner-border">
                    <img
                        src={props.story.profile_image_url}
                        alt={"story"}
                    />
                </div>
            </button>
            <p className="userName m-0">{props.story.userName.replace(/(.{7})..+/, "$1…")}</p>
        </div>
    );
};

export default StoryCard;