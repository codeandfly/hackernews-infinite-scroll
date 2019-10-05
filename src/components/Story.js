import React, { useState, useEffect } from 'react';
import { ThemeConsumer } from 'styled-components';

import { getStory } from '../services/hnApi';
import {
  StoryWrapper,
  StoryCount,
  StoryScore,
  StoryContent,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from '../styles/StoryStyles';

import { mapTime } from '../mappers/mapTime';

export const Story = ({ storyId, index }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    // console.log('storyId', storyId);
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <ThemeConsumer>
      {theme => (
        <StoryWrapper data-testid="story">
          <StoryCount>{index + 1}.</StoryCount>
          <StoryContent>
            <StoryTitle>
              <a href={story.url}>{story.title}</a>
            </StoryTitle>
            <StoryMeta>
              <StoryScore>
                {story.score} {story.score > 1 ? 'points' : 'point'}{' '}
              </StoryScore>
              <span data-testid="story-time">
                <StoryMetaElement>by</StoryMetaElement> {story.by} {` `}
              </span>
              <span data-testid="story-time">
                {/* <StoryMetaElement color="#aaa"></StoryMetaElement> { ` ` } */}
                {mapTime(story.time)} ago
              </span>
            </StoryMeta>
          </StoryContent>
        </StoryWrapper>
      )}
    </ThemeConsumer>
  ) : null;
};
