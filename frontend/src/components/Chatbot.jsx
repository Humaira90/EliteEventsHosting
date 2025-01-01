import React, { useState } from 'react';

function Chatbot() {
  const [isChatboxVisible, setIsChatboxVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isQuestionSelected, setIsQuestionSelected] = useState(false);

  // Pre-defined questions and answers
  const questionsAndAnswers = [
    { question: "What are your working hours?", answer: "We are open from 9 AM to 6 PM, Monday to Friday." },
    { question: "How can I book an appointment?", answer: "You can book an appointment through our website or by calling us." },
    { question: "What is your cancellation policy?", answer: "You can cancel your booking up to 24 hours in advance for a full refund." },
    { question: "Where are you located?", answer: "We are located at 687, Mehedibag, 4203." },
  ];

  const toggleChatbox = () => {
    setIsChatboxVisible(!isChatboxVisible);
    setIsQuestionSelected(false); // Reset the question selection state when toggling
  };

  // Function to handle when a user clicks on a question
  const handleQuestionClick = (question, answer) => {
    setMessages([...messages, { text: question, sender: 'user' }, { text: answer, sender: 'bot' }]);
    setIsQuestionSelected(true);
  };

  return (
    <>
      <button className="floating-chatbox-btn" onClick={toggleChatbox}>
        Chat
      </button>

      {isChatboxVisible && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            Chat with us
            <button className="close-btn" onClick={toggleChatbox}>X</button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? 'message-user' : 'message-bot'}>
                {message.text}
              </div>
            ))}
          </div>

          {!isQuestionSelected && (
            <div className="questions-list">
              <p>Select a question:</p>
              {questionsAndAnswers.map((qa, index) => (
                <div
                  key={index}
                  className="question-item"
                  onClick={() => handleQuestionClick(qa.question, qa.answer)}
                >
                  {qa.question}
                </div>
              ))}
            </div>
          )}

          {isQuestionSelected && (
            <div className="chatbox-input">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbot;
