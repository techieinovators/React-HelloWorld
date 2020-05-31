import React from "react";

const Message = props => {
  return (
    <div style={{ border: "1px solid grey" }}>
      <h2>{props.key}</h2>
      <p>{props.text}</p>
      <div>
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
      </div>
    </div>
  );
};

export default Message;
