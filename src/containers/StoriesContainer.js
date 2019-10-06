import React, { useEffect, useState } from 'react';

import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

import {
  StoriesContainerWrapper
} from '../styles/StoriesContainerStyles';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = ({ type }) => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds(type).then(data => setStoryIds(data));
  }, [type]);
  
  return (
    <>
      <StoriesContainerWrapper data-test-id="stories-container">
        {storyIds.slice(0, count).map((storyId, index) => (
          <Story key={storyId} storyId={storyId} index={index}/>
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
