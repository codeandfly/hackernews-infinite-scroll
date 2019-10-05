import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 0px;
  margin-bottom: 10px;
  display: flex;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryCount = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  min-width: 40px;
  margin-bottom: 2px;
  color: ${props => props.theme.storyCountColor};

  @media(max-width: 600px) {
    font-size: .9rem;
  }
`;

export const StoryScore = styled.span`
  color: ${props => props.theme.storyMetaColor};
`;

export const StoryContent = styled.div``;

export const StoryTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8;
  text-decoration: none;

  @media(max-width: 600px) {
    line-height: 1.4;
    padding-bottom: 5px;
    font-size: .9rem;
  }

  a {
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  color: ${props => props.theme.storyMetaColor};
  font-size: .875rem;
  padding-top: 2px;

  @media(max-width: 600px) {
    font-size: .8rem;
  }

  > span:not(:first-child):before {
    margin: 0 5px;
  }

  .story__meta-bold {
    /* font-weight: bold; */
  }
`;

export const StoryMetaElement = styled.span`
  /* font-weight: bold; */
  /* color: ${props => props.color || 'red'}; */
`;
