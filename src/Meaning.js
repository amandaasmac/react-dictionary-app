import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definitions">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div className="definition" key={index}>
              <p>{definition.definition}</p>
              <p className="example">
                <em>{definition.example}</em>
              </p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
        <Antonyms synonyms={props.meaning.antonyms} />
      </div>
    </div>
  );
}
