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
                style={{
                    backgroundColor: props.Result ? (option === a ? "pink" :
                        (option === s ? "green" : "")) :
                        (s === option ? "white" : "")
                }}
                onClick={() => props.Result ? "" : props.Select(Id, option)}
            >
                {option}
            </div>
        )
    })
    return (
        <div className="Quizbox">
            <div>{Q}</div>
            <div className="options">
                {displayOptions}
            </div>
        </div>
    )
}


/* <div
key={nanoid()}
style={{
    backgroundColor: props.Result ? (option === a ? "pink" :
        (option === s ? "green" : "")) :
        (s === option ? "white" : "")
}}
onClick={() => props.Result ? "" : props.Select(Id, option)}
>
{option}
</div> */