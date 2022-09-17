import React from "react"

export default function Score(props) {
    const ScoreArr = props.Quiz

    let score = ScoreArr.filter(obj => obj.correct === obj.selected)
    return (<div className="score-box">
        <h1 className="score">Your score is  {score.length}/{ScoreArr.length}</h1>
        <button className="new-game-btn" onClick={props.StartNewGame}>NewGame</button>
    </div>)

}