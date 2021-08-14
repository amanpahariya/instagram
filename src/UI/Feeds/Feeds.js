import React, {useEffect, useState} from 'react';
import feeds from '../../data/feeds/feeds';
import FeedCard from "../FeedCard/FeedCard";

const Feeds = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setPosts(feeds);
    }, [])
    return (
        <div>
            {
                posts && posts.map((each) => <FeedCard post={each}/>)
            }
        </div>
    );
};

export default Feeds;