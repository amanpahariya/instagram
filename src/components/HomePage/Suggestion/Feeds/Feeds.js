import React, {useEffect, useState} from 'react';
import feeds from '../../../../data/feeds/feeds';
import FeedCard from "../../../../UI/FeedCard/FeedCard";

const Feeds = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setPosts(feeds);
    }, [])
    return (
        <div>
            {
                posts && posts.map((each, i) => <FeedCard key={i} post={each}/>)
            }
        </div>
    );
};

export default Feeds;