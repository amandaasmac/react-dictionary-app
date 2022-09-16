import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        <p>
          <em>{props.data.phonetics[0].text}</em>
        </p>
        <div>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
