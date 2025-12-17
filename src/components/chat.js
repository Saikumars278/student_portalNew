import React from "react";
import "../style/chat.css";
 
const ChatPage = () => {
  return (
    <div className="chat-page">
 
      {/* ===== TOP INFO CARD ===== */}
      <div className="top-card">
        <div className="top-left">
          <h2>
            Good Morning, <span>Alsha Jhon</span>
          </h2>
          <p>Check Your Daily Task & schedules</p>
 
          <div className="top-details">
            <div>Email : <b>john@example.com</b></div>
            <div>Course : <b>Python Full Stack</b></div>
            <div>Batch : <b>Batch AI (morning)</b></div>
          </div>
        </div>
 
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300"
          alt="group"
        />
      </div>
 
      {/* ===== CHAT CARD ===== */}
      <div className="chat-card">
        <h2>Chat</h2>
 
        <div className="chat-body">
 
          {/* RIGHT */}
          <div className="msg right">
            <div className="bubble">
              Hi mam, I didn’t understand the Data Cleaning topic.
              Can you explain again?
            </div>
            <div className="avatar">👤</div>
          </div>
 
          {/* LEFT */}
          <div className="msg left">
            <div className="bubble">
              Sure!! I’ll send you the notes and we will revise it
              in tomorrow’s class.
            </div>
          </div>
 
          {/* RIGHT */}
          <div className="msg right">
            <div className="bubble">
              In Data Cleaning chapter… missing values part
              I didn’t understand properly.
            </div>
            <div className="avatar">👤</div>
          </div>
 
          {/* LEFT */}
          <div className="msg left">
            <div className="bubble">
              Okay, no problem. I’ll explain it again with a simple example.
              Also check the class recording, I uploaded it just now.
            </div>
          </div>
 
          {/* RIGHT */}
          <div className="msg right">
            <div className="bubble">
              Oh great! I will watch it today.
            </div>
            <div className="avatar">👤</div>
          </div>
 
        </div>
 
        {/* INPUT */}
        <div className="chat-input">
          <button>📎</button>
          <button>🎤</button>
          <input type="text" placeholder="Start typing" />
          <button className="send">➤</button>
        </div>
      </div>
 
    </div>
  );
};
 
export default ChatPage;
 
 