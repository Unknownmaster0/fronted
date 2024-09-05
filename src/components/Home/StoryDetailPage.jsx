import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StoryDetailPage = () => {
  const { id } = useParams(); // Extract the story ID from the URL
  const [story, setStory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/user/story/${id}`
        );
        if (response.data.data) {
          setStory(response.data.data);
        } else {
          setError("Story not found.");
        }
      } catch (error) {
        setError("Error fetching story details.");
        console.error("Error fetching story details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-800">Loading story...</div>
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

  if (!story) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-800">Story not found.</div>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{story.title}</h1>
        <p className="text-gray-600 mb-4">{story.description}</p>
        <p className="text-gray-800 mb-4">
          <span className="font-bold">Date:</span>{" "}
          {new Date(story.date).toLocaleDateString()}
        </p>
        {story.author && (
          <p className="text-gray-800 mb-4">
            <span className="font-bold">Author:</span> {story.author}
          </p>
        )}
        {story.content && (
          <p className="text-gray-800">
            <span className="font-bold">Content:</span> {story.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryDetailPage;
