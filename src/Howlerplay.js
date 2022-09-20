import React from "react";
import { Howl } from "howler";
import "./Howlerplay.css";

export default function Howlerplay(props) {
  if (props.audio) {
    function play(event) {
      let sound = new Howl({
        src: [props.audio],
      });
      sound.play();
    }
    return (
      <div className="Howlerplay">
        <i class="fa-solid fa-volume-high" onClick={play}></i>
      </div>
    );
  } else {
    return null;
  }
}
