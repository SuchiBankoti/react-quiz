import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import QuizDisplay from "./QuizDisplay"
import Score from "./Score"

export default function PageOne() {

    const [quiz, setQuiz] = useState([])
    const [Result, setResult] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (loading) {
            async function getQuiz() {

                let result = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                let data = await result.json()

                const arr = data.results
                let questionsArray = arr.map(obj => {
                    const { question, correct_answer: correct, incorrect_answers: incorrect } = obj;
                    return { id: nanoid(), question, correct, incorrect, selected: null };
                })
                setLoading(false)
                setQuiz(questionsArray)
            }
            getQuiz()
        }
    }, [loading])

    function click(id, value) {
        setQuiz(prev => prev.map(obj => obj.id === id ?
            {
                ...obj,
                selected: value
            }
            : obj))
    }

    function checkResult() {
        setResult((prev) => !prev)
    }

    function StartNewGame() {
        checkResult()
        setLoading(true)
    }



    let displayQuiz = quiz.map((question) => <QuizDisplay Result={Result} key={question.id} Select={click}
        Ques={question} />)


    return (
        <div className="page-one">
            {loading ? <div className="loading">
                <h2>Loading</h2>
            </div> :
                <>
                    <div className="question-container">
                        {displayQuiz}
                    </div>
                    <div>
                        {Result ?
                            <Score Quiz={quiz} StartNewGame={StartNewGame} />
                            : <button className="get-result-btn" onClick={checkResult}>Get Results</button>}
                    </div>
                </>}
        </div>
    )

}



