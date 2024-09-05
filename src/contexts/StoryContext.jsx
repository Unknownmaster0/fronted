import React, { createContext, useContext, useState, useEffect } from 'react';

const StoryContext = createContext();

export const useStories = () => {
  return useContext(StoryContext);
};

export const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState(() => {
    const savedStories = localStorage.getItem('stories');
    return savedStories ? JSON.parse(savedStories) : [];
  });

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

  const addStory = (story) => {
    setStories((prevStories) => [...prevStories, story]);
  };

  return (
    <StoryContext.Provider value={{ stories, addStory }}>
      {children}
    </StoryContext.Provider>
  );
};