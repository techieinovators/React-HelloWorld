import React from "react";
import "./styles.css";
import MessageDisplay from "./MessageDisplay";

export default function App() {
  return (
    <div className="App">
      <div class="ui comments">
        <h3 class="ui dividing header">Comments</h3>
        <MessageDisplay
          text="Message 0"
          sentBy="Matt"
          sentTime="Today at 5:42PM"
        />
        <MessageDisplay
          text="Message 1"
          sentBy="Elliot"
          sentTime="Yesterday at 7:22PM"
        />
      </div>
    </div>
  );
}
