import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Message.css"; // Importing the CSS styles (you can define this in your styles folder)

// Message Component
const Message = () => {
  const { id } = useParams(); // Get the recipient's user ID from the URL
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [recipient, setRecipient] = useState(null);
  const token = localStorage.getItem("token");
  const currentUserId = localStorage.getItem("userId"); // Assuming current user's ID is stored in localStorage

  // Fetch messages between the current user and the recipient
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/conversations/${id}`, // Fetch conversation
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setMessages(response.data.messages);
        setRecipient(response.data.recipient);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [id, token]);

  // Function to send a new message
  const sendMessage = async () => {
    if (messageInput.trim() === "") return; // Avoid sending empty messages
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/messages`, // Send message API
        {
          recipientId: id,
          content: messageInput,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setMessages([...messages, response.data]); // Append the new message to the conversation
      setMessageInput(""); // Clear the input field after sending
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="mt-20 container mx-auto min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">
        Chat with {recipient ? recipient.fullName : "User"}
      </h1>
      <div className="message-container">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div
              key={index}
              className={`message-bubble ${
                message.senderId === currentUserId
                  ? "message-sent"
                  : "message-received"
              }`}
            >
              <strong>{message.senderName}: </strong>
              <span>{message.content}</span>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="message-input"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="message-send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Message;
