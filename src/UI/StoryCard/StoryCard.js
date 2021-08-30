import React from 'react';
import './StoryCard.scss';
import {useHistory} from "react-router-dom";

const StoryCard = (props) => {

    const {story} = props;

    const history = useHistory();


    return (
        <div className="story-card" onClick={() => history.push(`/stories/${story.id}`)}>
            <button className="outer-border">
                <div className="inner-border">
                    <img
                        src={story.profile_image_url}
                        alt={"story"}
                    />
                </div>
            </button>
            <p className="userName m-0">{story.userName.replace(/(.{7})..+/, "$1…")}</p>
        </div>
    );
};

export default StoryCard;