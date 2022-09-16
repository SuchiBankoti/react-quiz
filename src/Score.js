import React from "react"

export default function Score(props) {
    const ScoreArr = props.Quiz

    let score = ScoreArr.filter(obj => obj.correct === obj.selected)
    return (<div>
        <h1>{score.length}/{ScoreArr.length}</h1>
    </div>)

}