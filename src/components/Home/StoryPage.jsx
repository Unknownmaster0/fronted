import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StoryPage = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [noStories, setNoStories] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/story/showAllStory"
        );

        if (response.data.data.length === 0) {
          setNoStories(true);
        } else {
          setStories(response.data.data);
        }
      } catch (error) {
        setError("Error fetching stories.");
        console.error("Error fetching stories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-800">
          Loading stories...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-red-500">{error}</div>
      </div>
    );
  }

  if (noStories) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-800">
          No stories to show.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link to={`/stories/${story._id}`} key={story._id}>
              <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800">
                  {story.title}
                </h2>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <p className="text-gray-800">
                  <span className="font-bold">Date:</span>{" "}
                  {new Date(story.date).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
