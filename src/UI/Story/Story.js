import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import './Story.scss';
import StoryCard from "../StoryCard/StoryCard";
import story from "../../data/story/story";
import Carousel from 'react-elastic-carousel';
import StoryView from "../../components/StoryView/StoryView";

const Story = () => {

    const [storyPreViewIndex, setStoryPreViewIndex] = useState("");

    const storyClicked = (index) => {
        setStoryPreViewIndex(index);
    }

    const closeStory = () => {
        setStoryPreViewIndex("");
    }

    return (
        <>
            {
                storyPreViewIndex !== "" ?
                    <StoryView index={storyPreViewIndex} stories={story} closeStory={closeStory}/> :
                    <div className="bg-white d-flex story-container">
                        <div className="d-flex w-100">
                            <Carousel
                                itemPadding={[10, 50]}
                                itemsToShow={9}
                                pagination={false}
                                className={"carousel"}
                            >
                                <div className="create-story">
                                    <FontAwesomeIcon className="user-icon" icon={faUserCircle}
                                                     color={"rgb(219,219,219)"}/>
                                    <FontAwesomeIcon className="icon text-primary bg-white" icon={faPlusCircle}/>
                                </div>
                                {
                                    story && story.map((element, i) =>
                                        <StoryCard
                                            key={i} story={element}
                                            storyClicked={storyClicked}
                                            index={i}
                                        />)
                                }
                            </Carousel>
                        </div>
                    </div>
            }
        </>
    );
};

export default Story;