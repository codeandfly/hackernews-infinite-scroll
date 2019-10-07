import React, { useEffect, useState, useReducer } from 'react';

import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'fetch': {
      return {
        posts: null,
        error: null,
        loading: true
      };
    }
    case 'success': {
      return {
        posts: action.posts,
        error: null,
        loading: false
      };
    }
    case 'error': {
      return {
        posts: action.posts,
        error: action.message,
        loading: false
      };
    }
    default: {
      throw new Error(`That action type is not supported`);
    }
  }
};

export const StoriesContainer = ({ type }) => {
  const { count } = useInfiniteScroll();
  const [state, dispatch] = useReducer(storiesReducer, {
    posts: null,
    error: null,
    loading: false
  });

  useEffect(() => {
    dispatch({ type: 'fetch' });

    getStoryIds(type)
      .then(posts => dispatch({ type: 'success', posts }))
      .catch(error => dispatch({ type: 'error', error }));
  }, [type]);

  // const [storyIds, setStoryIds] = useState([]);

  return (
    <>
      <StoriesContainerWrapper data-test-id="stories-container">
        {state &&
          state.posts &&
          state.posts
            .slice(0, count)
            .map((storyId, index) => (
              <Story key={storyId} storyId={storyId} index={index} />
            ))}
      </StoriesContainerWrapper>
    </>
  );
};
