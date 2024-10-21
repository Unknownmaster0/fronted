import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [stories, setStories] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all stories from the backend
        const storyResponse = await axios.get(
          "http://localhost:8000/api/v1/user/story/showAllStory"
        );
        console.log(storyResponse.data);
        setStories(storyResponse.data.data || []); // Ensure data is an array

        // Fetch all events from the backend
        const eventResponse = await axios.get(
          "http://localhost:8000/api/v1/user/event/showAllEvents"
        );
        console.log(eventResponse.data);
        setEvents(eventResponse.data.data || []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array ensures it runs once on mount

  // Get up to 4 items, or all if there are less than 4
  const getTopItems = (items) => {
    if (!Array.isArray(items)) return []; // Ensure items is an array
    return items.length <= 4 ? items : items.slice(0, 4);
  };

  return (
    <>
      {/* College Image Section */}
      <section className="mt-24">
        <img
          src="./collegeImage.jpg"
          alt="College Image"
          className="w-full h-64 object-cover"
        />
      </section>

      {/* College Principal Section */}
      <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center">
          {/* Principal Image */}
          <div className="w-1/2">
            <img
              src="./johnsmith.jpg"
              alt="Principal Image"
              className="w-1/2 h-1/2 object-cover rounded-lg"
            />
          </div>
          {/* Principal Description */}
          <div className="w-1/2 pl-6">
            <h2 className="text-2xl font-bold mb-2">Dr. Satyanshu Satyam</h2>
            <p className="text-gray-700">
              Dr. John Smith is the esteemed Principal of our college, bringing
              over two decades of experience in educational leadership...
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-grow bg-aqua mt-4">
        <div className="container mx-auto p-6 flex flex-wrap justify-around">
          {/* Stories Section */}
          <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-0">
            <h2 className="text-center text-2xl font-bold mb-6">Stories</h2>

            {getTopItems(stories).map((story, index) => (
              <div
                key={index}
                className="flex mb-6 hover:scale-105 transform transition-transform duration-200"
              >
                <img
                  src={story.image || "/default-story-image.png"}
                  alt={story.title}
                  className="w-24 h-24 mr-4 rounded-lg object-cover"
                />
                <div>
                  <span className="text-gray-500 text-sm block mb-1">
                    {story.date
                      ? new Date(story.date).toLocaleDateString()
                      : "Unknown Date"}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
                </div>
              </div>
            ))}

            <a
              href="/stories"
              className="block text-center text-blue-600 font-bold hover:bg-gray-100 py-2 border-t border-gray-200 mt-4"
            >
              View All Stories
            </a>
          </div>

          {/* Programs & Events Section */}
          <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-bold mb-6">
              Programs & Events
            </h2>

            {getTopItems(events).map((event, index) => (
              <div
                key={index}
                className="flex items-center mb-4 hover:scale-105 transform transition-transform duration-200"
              >
                <span className="font-bold text-lg mr-3">
                  {event.date
                    ? new Date(event.date).toLocaleDateString()
                    : "Unknown Date"}
                </span>
                <div>
                  <span className="text-gray-500 text-sm block">
                    {event.category}
                  </span>
                  <h4 className="text-md font-semibold">{event.title}</h4>
                  <p className="text-xs text-gray-600">
                    {event.description || "No description available"}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="/events"
              className="block text-center text-blue-600 font-bold hover:bg-gray-100 py-2 border-t border-gray-200 mt-4"
            >
              View All Upcoming Events
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
