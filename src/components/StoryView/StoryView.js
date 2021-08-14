import Stories from 'react-insta-stories';
import './StoryView.scss';
import {useEffect, useState} from "react";

const StoryView = (props) => {
    const {index, stories, storyClicked} = props;
    const [sIndex, setSIndex] = useState(null);

    useEffect(() => {
        setSIndex(index);
    }, [index])

    const updateStory = () => {
        if (sIndex < stories.length - 1) {
            setSIndex(sIndex + 1)
        } else {
            storyClicked("");
        }
    }

    return (
        <>
            {
                sIndex !== null && props.stories[sIndex].story !== undefined && props.stories[sIndex].story ?
                    <div className="show-story">
                        <Stories
                            stories={props.stories[sIndex].story}
                            defaultInterval={1500}
                            width={432}
                            height={768}
                            loop={true}
                            keyboardNavigation={true}
                            onAllStoriesEnd={
                                () => updateStory()
                            }

                        />
                    </div> : <></>

            }
        </>
    )
};

export default StoryView;