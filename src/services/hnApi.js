import axios from 'axios';
import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;
export const json = '.json?print=pretty';

export const getStory = async storyId => {
  const result = await axios.get(`${storyUrl + storyId}.json`);

  return result.data ? selectFields(result.data) : null;
};

export const getStoryIds = async (type) => {
  const result = await axios.get(`${baseUrl}${type}stories${json}`);

  return result.data;
};
