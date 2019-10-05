import React, { useState, useEffect } from 'react';
import { ThemeConsumer } from 'styled-components';

import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from '../styles/StoryStyles';

import { mapTime } from '../mappers/mapTime';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    // console.log('storyId', storyId);
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <ThemeConsumer>
      {theme => (
        <StoryWrapper data-testid="story">
          <StoryTitle>
            <a href={story.url}>{story.title}</a>
          </StoryTitle>
          <StoryMeta>
            <span data-testid="story-time">
              <StoryMetaElement>by</StoryMetaElement> {story.by}{' '}
              {` `}
            </span>
            <span data-testid="story-time">
              {/* <StoryMetaElement color="#aaa"></StoryMetaElement> { ` ` } */}
              {mapTime(story.time)} ago
            </span>
          </StoryMeta>
        </StoryWrapper>
      )}
    </ThemeConsumer>
  ) : null;
};
