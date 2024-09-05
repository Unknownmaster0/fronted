// JobContext.jsx
import React, { createContext, useState, useContext } from "react";

const JobContext = createContext();

export const useJobs = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  const addJob = (jobDetails) => {
    setJobs([jobDetails, ...jobs]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};
