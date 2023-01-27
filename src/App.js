import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Quiz from "./Ques";
export default function App() {
  const [quiz, setQuiz] = useState([]);
  const [result, setResult] = useState(false);
  const [i, setI] = useState([]);

  useEffect(() => {
    if (!result) {
      async function getQuiz() {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await res.json();
        setQuiz((prev) => {
          prev = Array.from(data.results).map((obj) => {
            const {
              question: ques,
              incorrect_answers: incorrect,
              correct_answer: correct,
            } = obj;
            return {
              id: nanoid(),
              ques,
              incorrect,
              correct,
              selected: null,
            };
          });
          return prev;
        });
        let set1 = new Set();
        while (set1.size < 4) {
          set1.add(Math.floor(Math.random() * 4));
        }
        setI((prev) => (prev = Array.from(set1.values())));
      }
      getQuiz();
    }
  }, [result]);

  function select(_id, value) {
    setQuiz((prev) =>
      prev.map((obj) => (obj.id === _id ? { ...obj, selected: value } : obj))
    );
  }
  function getResult() {
    const score = quiz.filter((obj) => obj.selected === obj.correct);
    return score;
  }

  const q = quiz.map((obj) => (
    <Quiz
      key={nanoid()}
      Question={obj}
      select={select}
      result={result}
      index={i}
    />
  ));

  return (
    <div>
      <h1>Quizzical</h1>
      <ol>{q}</ol>
      {result ? (
        <div>
          score{getResult().length}/{quiz.length}
        </div>
      ) : (
        ""
      )}
      <button onClick={() => setResult((prev) => !prev)}>
        {result ? "New Quiz" : "Get Result"}
      </button>
    </div>
  );
}
