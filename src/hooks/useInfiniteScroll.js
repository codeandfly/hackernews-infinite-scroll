import { useState, useEffect } from 'react';

import { STORY_INCREMENT, MAX_STORIES } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    // console.log('-----------------------');
    // console.log('offsetHeight:', document.documentElement.offsetHeight);
    // console.log('scrollTop:', document.documentElement.scrollTop);
    // console.log('window innerHeight:', window.innerHeight);

    // Safari support
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    
    if (
      window.innerHeight + scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    // if window.innerHeight + document.documentElement.scrollTop
    //    === document.documentElement.offsetHeight, that means we've reached bottom.
    // We now set loading --> true. This will in turn trigger useEffect that is watching
    // for changes in loading
    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // CLEAN UP
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { count };
};
