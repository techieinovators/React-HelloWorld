import React from "react";
import { Container, Header } from "semantic-ui-react";

const MessageDisplay = props => {
  return (
    <div class="comment">
      <div class="avatar">
        <img
          src={`https://react.semantic-ui.com/images/avatar/small/${props.sentBy.toLowerCase()}.jpg`}
        />
      </div>
      <div class="content">
        <a class="author">
          <small>
            Sent by <b>{props.sentBy}</b>
          </small>
        </a>
        <div class="metadata">
          <div>{props.sentTime}</div>
        </div>
        <div class="text">
          {props.key} {props.text}
        </div>
      </div>
    </div>
  );
};

export default MessageDisplay;
