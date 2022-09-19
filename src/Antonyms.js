import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div>
        <h4>Antonyms</h4>
        <ul>
          {props.antonyms.map(function (antonym, index) {
            return <li key={index}>{antonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
