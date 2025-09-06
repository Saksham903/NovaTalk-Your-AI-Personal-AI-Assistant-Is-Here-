import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { UserData } from "../context/UserContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoadingSpinner } from "../components/Loading";
import toast from "react-hot-toast";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchResponse, messages, prompt, setPrompt } = ChatData();
  const { userInitials } = UserData(); // Get initials from context
  console.log("User Initials in Home:", userInitials); // Debug log
  const [isRecording, setIsRecording] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false); // Track voice button state
  const recognitionRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (messages && messages.length > 0 && isVoiceEnabled) {
      const lastMessage = messages[messages.length - 1];
      speakText(lastMessage.answer); // Speak only the latest message
    }
  }, [messages, isVoiceEnabled]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsLoading(true);
    await fetchResponse(prompt);
    setIsLoading(false);
  };

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    // Initialize if not already
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;

     recognitionRef.current.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  setPrompt(transcript); // Set transcript as prompt

  // Wait for prompt to update before calling fetchResponse
  setTimeout(async () => {
    setIsLoading(true);
    await fetchResponse(transcript); // Pass transcript directly
    setIsLoading(false);
  }, 100); // Small delay to ensure prompt is set
};

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    // Toggle recording
    if (!isRecording) {
      recognitionRef.current.start();
      setIsRecording(true);
      setIsVoiceEnabled(true); // Enable voice speaking
    } else {
      recognitionRef.current.stop(); // Triggers onresult
      setIsRecording(false);
      setIsVoiceEnabled(false); // Disable voice speaking
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel(); // Stop any ongoing speech synthesis
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Text copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isOpen} toogleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <GiHamburgerMenu className="w-5 h-5 text-gray-300" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {userInitials || "?"}
              </span>
            </div>
            <h1 className="text-lg font-semibold">Nova Talk</h1>
          </div>
          <div className="w-9"></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Message Container */}
          <div
            ref={messageContainerRef}
            className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto"
          >
            {/* Welcome screen when no messages */}
            {(!messages || messages.length === 0) && !isLoading && (
              <div className="flex flex-col justify-center items-center h-full text-center space-y-6">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <FaRobot className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-semibold">Nova Talk</h1>
                <p className="text-gray-400">How can I help you today?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-emerald-400 font-semibold mb-2">
                      Examples
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>"Explain quantum computing in simple terms"</li>
                      <li>
                        "Got any creative ideas for a 10 year old's birthday?"
                      </li>
                      <li>"How do I make an HTTP request in JavaScript?"</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-emerald-400 font-semibold mb-2">
                      Capabilities
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>
                        Remembers what user said earlier in the conversation
                      </li>
                      <li>Allows user to provide follow-up corrections</li>
                      <li>Trained to decline inappropriate requests</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-sm text-emerald-400 font-semibold mb-2">
                      Limitations
                    </h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li>May occasionally generate incorrect information</li>
                      <li>May produce harmful instructions</li>
                      <li>Limited knowledge after 2021</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Actual chat messages */}
            {messages && messages.length > 0 && (
              <>
                <Header />
                {messages.map((e, i) => (
                  <div key={i} className="mb-8">
                    {/* User Message */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {userInitials || "?"}
                        </span>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-white leading-relaxed">
                          {e.question}
                        </div>
                      </div>
                    </div>

                    {/* Bot Message */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <FaRobot className="text-white text-lg" />
                      </div>
                      <div className="flex-1 pt-1">
                        {/* Render response based on type */}
                        {e.answer.includes("<img") ? (
                          <div dangerouslySetInnerHTML={{ __html: e.answer }} />
                        ) : e.answer.includes("<pre>") ? (
                          <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                              <code
                                dangerouslySetInnerHTML={{ __html: e.answer }}
                              />
                            </pre>
                          </div>
                        ) : (
                          <div className="text-gray-100 leading-relaxed">
                            {e.answer}
                            <button
                              className="ml-2 text-emerald-400 hover:text-emerald-300 cursor-pointer"
                              onClick={() => speakText(e.answer)}
                              title="Read aloud"
                            >
                              🔊
                            </button>
                            <button
                              className="ml-2 text-red-400 hover:text-red-300 cursor-pointer"
                              onClick={stopSpeaking}
                              title="Stop speaking"
                            >
                              ❌
                            </button>
                            <button
                              className="ml-2 text-blue-400 hover:text-blue-300 cursor-pointer"
                              onClick={() => copyToClipboard(e.answer)}
                              title="Copy to clipboard"
                            >
                              📋
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Loading */}
            {isLoading && (
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <FaRobot className="text-white text-lg" />
                </div>
                <div className="flex-1 pt-1">
                  <LoadingSpinner />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-800 bg-gray-900 w-full">
            <div className="max-w-3xl mx-auto px-4 py-6">
              <form onSubmit={submitHandler} className="relative">
                <div className="flex items-end space-x-4">
                  <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      isRecording
                        ? "bg-red-600 animate-pulse"
                        : "bg-gray-700 hover:bg-gray-600"
                    } text-white`}
                    title={isRecording ? "Stop Recording" : "Start Speaking"}
                  >
                    🎤
                  </button>

                  <div className="flex-1 relative">
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Send a message..."
                      disabled={isLoading}
                      rows={1}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 pr-12 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent disabled:opacity-50"
                      style={{ minHeight: "52px", maxHeight: "200px" }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          submitHandler(e);
                        }
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !prompt.trim()}
                      className="absolute right-2 bottom-4 p-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
                    >
                      <IoMdSend className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                ChatBot may make mistakes. Please verify important facts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
