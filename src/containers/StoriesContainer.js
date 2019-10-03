import React, { useEffect, useState } from 'react';

import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

import {
  GlobalStyle,
  MainHeading,
  StoriesContainerWrapper
} from '../styles/StoriesContainerStyles';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <MainHeading>Hacker News Stories</MainHeading>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
