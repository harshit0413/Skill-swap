import React from "react";
import Button from "react-bootstrap/Button";

function Video() {
  return (
    <div class="landing-container">
      <Button className="cr_button">Create Room</Button>
      <Button className="jr_button">Join Room</Button>
      <Button className="ss_button">Screenshare</Button>
      <Button className="r_button">React</Button>
      <Button className="c_button">Chat</Button>
      <Button className="b_button">Background</Button>
      <Button className="h_button">Hangup</Button>
    </div>
  );
}

export default Video;
