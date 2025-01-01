import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://eliteeventsbackend.onrender.com/api/v1/message/send",
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="contact container">
      <header className="contact-header">
        <h2>GET IN TOUCH!</h2>
        
      </header>

      {/* Moved banners section above the contact form */}
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Anywhere, Any City, Anytime</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: 01877766670</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>eliteevents@gmail.com</p>
        </div>
      </div>

      {/* Contact form */}
      <div className="banner">
        <div className="item">
        <form onSubmit={handleSendMessage}>
  <h2>CONTACT US</h2>
  <div>
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="email"
      placeholder="E-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <input
    type="text"
    placeholder="Subject"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
  />
  <textarea
    rows={10}
    placeholder="Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
  <button type="submit">Send</button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
