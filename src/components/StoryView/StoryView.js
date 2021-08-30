import './StoryView.scss';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Stories from 'react-insta-stories';
import {useHistory, useParams} from "react-router-dom";
import story from '../../data/story/story';


const StoryView = () => {
    const {id} = useParams();
    const [storyID, setStoryID] = useState(null);
    const history = useHistory();

    useEffect(() => {
        setStoryID(story.indexOf(story.find((item) => item.id === id)))
    }, [id])


    const updateStory = () => {
        if (storyID < story.length - 1) {
            history.push(`/stories/${story[story.indexOf(story.find((item) => item.id === id)) + 1].id}`);
        } else {
            history.push('/')
        }
    }

    function closeStory() {
        history.push('/');
    }

    return (
        <>
            {
                storyID !== null ?
                    <div className="show-story">
                        <div>
                            <FontAwesomeIcon
                                icon={faTimes}
                                color={"#fff"}
                                className={"position-absolute top-0 right-0 m-4 icon pointer-cursor"}
                                onClick={(e) =>
                                    closeStory()
                                }
                            />
                        </div>
                        <Stories
                            stories={story[storyID].story}
                            onAllStoriesEnd={() => updateStory()}
                            loop={true}
                            storyContainerStyles={{"height": "100%", "border-radius": "15px"}}
                        />
                    </div> : <></>
            }
        </>
    )
};

export default StoryView;