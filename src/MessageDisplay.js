import React from "react";

const MessageDisplay = props => {
  return (
    <div class="comment">
      <div class="avatar">
        <img
          alt="AV"
          src={
            props.avatarSource === "git"
              ? `https://github.com/${props.sentBy.toLowerCase()}.png`
              : `https://react.semantic-ui.com/images/avatar/small/${props.sentBy.toLowerCase()}.jpg`
          }
        />
      </div>
      <div class="content">
        <a class="author">{props.sentBy}</a>
        <div class="metadata">
          <div>{props.sentTime}</div>
        </div>
        <div class="text">{props.text}</div>
      </div>
    </div>
  );
};

export default MessageDisplay;
