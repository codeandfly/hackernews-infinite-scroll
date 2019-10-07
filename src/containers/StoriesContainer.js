import React, { useEffect, useState, useReducer, useRef } from 'react';

import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

import { StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import logger from '../hooks/use-reducer-logger';
import { Loading } from '../components/Loading';
import { STORY_INCREMENT } from '../constants';

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

const initialState = {
  posts: null,
  error: null,
  loading: false
};

export const StoriesContainer = ({ type }) => {
  // const ref = useRef(STORY_INCREMENT);
  let { count } = useInfiniteScroll(type);
  // const initialCount = STORY_INCREMENT;

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development'
      ? logger(storiesReducer)
      : storiesReducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: 'fetch' });
    
    getStoryIds(type)
    .then(posts => dispatch({ type: 'success', posts }))
    .catch(error => dispatch({ type: 'error', error }));
    
    // count = initialCount;
  }, [type]);
  
  // const [storyIds, setStoryIds] = useState([]);
  
  // state.loading ? (
    //   <Loading />
    // ) :
    
    return (
      <>
      {state.loading ? (
        <Loading />
        ) : (
          <StoriesContainerWrapper data-test-id="stories-container">
          {console.log('count', count)}
          {state &&
            state.posts &&
            state.posts
              .slice(0, 30)
              .map((storyId, index) => (
                <Story key={storyId} storyId={storyId} index={index} />
              ))}
        </StoriesContainerWrapper>
      )}
    </>
  );
};
