import React from "react";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <div>
        <h4>Synonyms</h4>
        {props.meaning.synonyms.map(function (synonym, index) {
          return (
            <div key={index}>
              <span>{synonym}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h4>Antonyms</h4>
        {props.meaning.antonyms.map(function (antonym, index) {
          return (
            <div key={index}>
              <span>{antonym}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
