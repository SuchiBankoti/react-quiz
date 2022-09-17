import React from "react";
import { nanoid } from "nanoid";

export default function QuizDisplay(props) {
    const {
        id: Id,
        question: Q,
        correct: a,
        incorrect: [b, c, d],
        selected: s,
    } = props.Ques;
    const optionsArr = [a, b, c, d];

    optionsArr.sort()

    let displayOptions = optionsArr.map((option) => {
        return (
            <div
                key={nanoid()}
                className="single-option"
                style={{
                    backgroundColor: props.Result ? (option === a ? "#94D7A2" :
                        (option === s ? "#F8BCBC" : "")) :
                        (s === option ? "#D6DBF5" : "")
                }}
                onClick={() => props.Result ? "" : props.Select(Id, option)}
            >
                {option}
            </div>
        )
    })
    return (
        <div>
            <div className="question">{Q}</div>
            <div className="options">
                {displayOptions}
            </div>
        </div>
    )
}


