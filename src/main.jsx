import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Event from "./components/Home/Event";
import StoryPage from "./components/Home/StoryPage";
import Home from "./components/Home/Home";
import CreateStory from "./components/Home/CreateStory";
import Layout from "./Layout";
import { StoryProvider } from "./contexts/StoryContext";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import JobPortal from "./components/Job/JobPortal";
import JobPost from "./components/Job/JobPost";
import { JobProvider } from "./contexts/JobContext";
import JobList from "./components/Job/JobList";
import CreateEvent from "./components/Home/CreateEvent";
import AccountPage from "./components/Account/AccountPage";
import StoryDetailPage from "./components/Home/StoryDetailPage";
import ViewUserJob from "./components/Job/ViewUserJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="event" element={<Event />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="jobportal" element={<JobPortal />} />
      <Route path="createevent" element={<CreateEvent />} />
      <Route path="accountpage" element={<AccountPage />} />
      <Route path="stories" element={<StoryPage />} />
      <Route path="stories/:id" element={<StoryDetailPage />} />
      <Route path="userjob" element={<ViewUserJob />} />

      <Route
        path="jobpost"
        element={
          <JobProvider>
            <JobPost />
          </JobProvider>
        }
      />

      <Route
        path="createstory"
        element={
          <StoryProvider>
            <CreateStory />
          </StoryProvider>
        }
      />

      <Route
        path="joblist"
        element={
          <JobProvider>
            <JobList />
          </JobProvider>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
