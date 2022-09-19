import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <p>{props.phonetic.text}</p>
      <p>
        <a href={props.phonetic.audio} target="_blank">
          listen
        </a>
      </p>
    </div>
  );
}
