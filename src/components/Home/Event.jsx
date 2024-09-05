import React, { useEffect, useState } from "react";
import axios from "axios";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch all events from the backend API
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/event/showAllEvents"
        );
        setEvents(response.data.data); // Adjust according to your backend response structure
        console.log(response.data.data);

        setIsLoading(false);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-800">
          Loading events...
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

  return (
    <div className="relative -z-10 mt-20 min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-gray-800">
                <span className="font-bold">Date:</span>{" "}
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Time:</span> {event.time}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Category:</span> {event.category}
              </p>
              <p className="text-gray-800">
                <span className="font-bold">Presenter:</span>{" "}
                {event.presenter?.name || "N/A"}
              </p>
              {event.presenter?.socialMediaLink && (
                <p className="text-blue-500 hover:underline">
                  <a
                    href={event.presenter.socialMediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Presenter Link
                  </a>
                </p>
              )}
              <p className="text-blue-500 hover:underline">
                <a
                  href={event.linkToJoin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Event
                </a>
              </p>
              <p className="text-gray-600 mt-4">
                <span className="font-bold">Contact:</span> {event.contactEmail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
