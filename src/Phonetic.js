import React from "react";
import Howlerplay from "./Howlerplay";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <p>
          <em>{props.phonetic.text}</em>
        </p>

        <Howlerplay audio={props.phonetic.audio} />
        {/* <ReactAudioPlayer src={props.phonetic.audio} controls /> */}
      </div>
    );
  } else {
    return null;
  }
}
