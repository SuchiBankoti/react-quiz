import React from "react"

export default function Score(props) {
    const ScoreArr = props.Quiz

    let score = ScoreArr.filter(obj => obj.correct === obj.selected)
    console.log(score)
    return (<div>
        <h1>{score.length}/5</h1>
    </div>)

}