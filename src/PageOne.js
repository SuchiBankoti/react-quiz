import React from "react"
import { nanoid } from "nanoid"
import QuizDisplay from "./QuizDisplay"
import Score from "./Score"

export default function PageOne() {

    const [quiz, setQuiz] = React.useState("")
    const [Result, setResult] = React.useState(false)
    const [newGame, setNewGame] = React.useState(0)
    React.useEffect(() => {
        async function getQuiz() {
            let result = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            let data = await result.json()
            const arr = data.results
            let questionsArray = arr.map(obj => {
                const { question, correct_answer: correct, incorrect_answers: incorrect } = obj;
                return { id: nanoid(), question, correct, incorrect, selected: null };
            })
            setQuiz(questionsArray)
        }
        getQuiz()
    }, [newGame])

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
        setQuiz([])
        checkResult()
        setNewGame(prev => prev + 1)
    }


    if (quiz.length > 0) {
        let displayQuiz = quiz.map((question) => <QuizDisplay Result={Result} key={question.id} Select={click}
            Ques={question} />)


        return (
            <div>
                <div>
                    {displayQuiz}
                </div>
                <div>
                    {Result ? <Score Quiz={quiz} /> : ""}
                </div>
                <div>
                    {Result ? <button onClick={StartNewGame}>NewGame</button> : <button onClick={checkResult}>:Get Results</button>}
                </div>
            </div>
        )
    }


}



