import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding-top: 0px;
  margin-bottom: 10px;
  /* border-top: 1px solid #eee; */

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 1.8;
  text-decoration: none;

  a {
    color: #2c3e50;
    /* background-color: #f8dc3d; */
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  color: #aaa;
  font-size: 14px;

  > span:not(:first-child):before {
    margin: 0 5px;
  }

  .story__meta-bold {
    /* font-weight: bold; */
  }
`;

export const StoryMetaElement = styled.span`
  /* font-weight: bold; */
  color: ${props => props.color || 'red'};
`;