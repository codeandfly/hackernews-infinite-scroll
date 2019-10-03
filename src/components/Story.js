import React, { useState, useEffect } from 'react';
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
    console.log('storyId', storyId);
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-time">
          <StoryMetaElement color="#aaa">by</StoryMetaElement> {story.by} { ` ` }
        </span>
        <span data-testid="story-time">
          {/* <StoryMetaElement color="#aaa"></StoryMetaElement> { ` ` } */}
          {mapTime(story.time)} ago
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
