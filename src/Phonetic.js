import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <p>
          <em>{props.phonetic.text}</em>
        </p>
        <i class="fa-solid fa-volume-high"></i>

        {/* <ReactAudioPlayer src={props.phonetic.audio} controls /> */}
      </div>
    );
  } else {
    return null;
  }
}
