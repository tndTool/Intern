import React from "react";

function MessageWithEvent(props) {
  function logEventToConsole(msgid, e) {
    console.log(e.target.innerHTML);
    console.log(msgid);
  }

  return (
    <div onClick={logEventToConsole.bind(this, Math.floor(Math.random() * 10))}>
      <p>Hello {props.name}!</p>
    </div>
  );
}

export default MessageWithEvent;
