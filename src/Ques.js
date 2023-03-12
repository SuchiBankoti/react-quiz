import React from "react";
import he from "he";

export default function Quiz(props) {
  const i = props.index;
  let { id, ques, incorrect, correct, selected } = props.Question;
  incorrect = [...incorrect, correct].sort();

  const a = incorrect[i[0]];
  const b = incorrect[i[1]];
  const c = incorrect[i[2]];
  const d = incorrect[i[3]];
  return (
    <li>
      {he.decode(ques)}
      <ul className="question">
        <li
          className="option"
          onClick={() => props.select(id, a)}
          style={{
            background:
              props.result && a === correct
                ? "rgb(175, 228, 175)"
                : selected === a && props.result && a !== correct
                ? "red"
                : selected === a && !props.result
                ? "pink"
                : "white",
          }}
        >
          {he.decode(a)}
        </li>
        <li
          className="option"
          onClick={() => props.select(id, b)}
          style={{
            background:
              props.result && b === correct
                ? "rgb(175, 228, 175)"
                : selected === b && props.result && b !== correct
                ? "red"
                : selected === b && !props.result
                ? "pink"
                : "white",
          }}
        >
          {he.decode(b)}
        </li>
        <li
          className="option"
          onClick={() => props.select(id, c)}
          style={{
            background:
              props.result && c === correct
                ? "rgb(175, 228, 175)"
                : selected === c && props.result && c !== correct
                ? "red"
                : selected === c && !props.result
                ? "pink"
                : "white",
          }}
        >
          {he.decode(c)}
        </li>
        <li
          className="option"
          onClick={() => props.select(id, d)}
          style={{
            background:
              props.result && d === correct
                ? "rgb(175, 228, 175)"
                : selected === d && props.result && d !== correct
                ? "red"
                : selected === d && !props.result
                ? "pink"
                : "white",
          }}
        >
          {he.decode(d)}
        </li>
      </ul>
    </li>
  );
}
