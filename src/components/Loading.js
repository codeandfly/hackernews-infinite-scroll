import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background-image: #777;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  /* display: flex; */
`;

export const LoadingContent = styled.p`
  font-size: 28px;
`;

export const Loading = ({ text = 'Loading', speed = 300 }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent(content => {
        return content === `${text}...`
        ? text
        : `${content}.`
      });
    }, speed);

    return () => window.clearInterval(id)
  }, [speed, text]);

  return (
    <LoadingContainer>
      <LoadingContent>
        {content}
      </LoadingContent>
    </LoadingContainer>
  )
};