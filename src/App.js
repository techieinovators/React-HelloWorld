import React from "react";
import "./styles.css";
import Message from "./Message";

export default function App() {
  return (
    <div className="App">
      <h1>Messages</h1>
      <Message key={`message-0`} text="Message 0" sentBy="Sharon" />
    </div>
  );
}
