import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Chat() {
  const [msg, smsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [onlineCount, setOnlineCount] = useState(0); 
  const messagesEndRef = useRef(null); 

  useEffect(() => {
    const assignUniqueId = () => {
      let storedId = localStorage.getItem("userId");
      if (!storedId) {
        storedId = uuidv4();
        localStorage.setItem("userId", storedId);
      }
      setUserId(storedId);
    };

    assignUniqueId();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/messages");
        setMessages(res.data.data); 
      } catch (err) {
        console.error("Error while fetching messages:", err);
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  const fetchOnlineCount = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/online");
      setOnlineCount(res.data.onlineCount); 
    } catch (err) {
      console.error("Error fetching online count:", err);
    }
  };

  useEffect(() => {
    fetchOnlineCount();

    const intervalId = setInterval(fetchOnlineCount, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  const sendText = async () => {
    if (msg.trim() === "") return;

    try {
      const newMessage = { message: msg, sender: userId };
      const res = await axios.post("http://localhost:3001/api/message", newMessage);

      setMessages((prevMessages) => [...prevMessages, res.data.data]);
      smsg(""); 
      fetchOnlineCount(); 
    } catch (err) {
      console.error("Error while sending message:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && msg.trim() !== "") {
      sendText();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="bg-black min-h-screen p-4">
      <div className="text-center text-white text-2xl font-semibold mb-4">Chat Room</div>
      <div className="text-center text-blue-500 text-xl font-bold mb-4">Your ID: {userId}</div>
      <div className="text-center text-green-500 text-lg mb-4">People Online: {onlineCount}</div> {/* Display online users count */}

      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-blue-400 p-4 rounded-lg shadow-lg">
          {/* Display messages */}
          <div className="overflow-y-auto max-h-96 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mt-2 p-2 rounded-md ${
                  message.sender === userId
                    ? "bg-blue-600 text-white ml-auto max-w-[70%]"
                    : "bg-red-600 text-white mr-auto max-w-[70%]"
                }`}
              >
                {message.message}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex justify-between items-center">
            <input
              onChange={(e) => smsg(e.target.value)}
              onKeyDown={handleKeyPress}
              value={msg}
              className="bg-gray-300 text-black font-medium border p-2 w-full max-w-lg rounded-md"
              type="text"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              onClick={sendText}
              className="bg-blue-500 text-white p-3 pl-6 pr-6 font-bold rounded-md ml-2 hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
