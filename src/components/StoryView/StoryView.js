import './StoryView.scss';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Stories from "react-insta-stories";

const StoryView = (props) => {
    const {index, stories, closeStory} = props;
    const [sIndex, setSIndex] = useState(null);

    useEffect(() => {
        setSIndex(index);
    }, [index])

    const updateStory = () => {
        if (sIndex < stories.length - 1) {
            setSIndex(sIndex + 1)
        } else {
            closeStory("");
        }
    }
    return (
        <>
            {
                sIndex !== null && props.stories[sIndex].story !== undefined && props.stories[sIndex].story ?
                    <div className="show-story">
                        <FontAwesomeIcon
                            icon={faTimes}
                            color={"#fff"}
                            className={"position-absolute top-0 right-0 m-4 icon pointer-cursor"}
                            onClick={()=>closeStory("")}
                        />
                        <Stories
                            storyContainerStyles={{borderRadius: 10}}
                            stories={stories[sIndex].story}
                            defaultInterval={3000}
                            width={432}
                            height={768}
                            onAllStoriesEnd={() => updateStory()}
                            loop={true}
                        />
                    </div> : <></>
            }
        </>
    )
};

export default StoryView;