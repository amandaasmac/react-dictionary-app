import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <p>
        <em>{props.phonetic.text}</em>
      </p>

      <ReactAudioPlayer src={props.phonetic.audio} controls />
    </div>
  );
}
