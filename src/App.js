import React from "react"
import PageOne from "./PageOne"
import blob1 from "./blob1.png"
import QuizLogo from "./quiz2.png"

export default function App() {
  const [frontPage, setFrontPage] = React.useState(false)
  function FrontPage() {
    return (
      <div className="front-page">
        <h1 className="quiz-heading">Quizical</h1>
        <div>
          <img className="logo" alt="quizlogo" src={QuizLogo} />
        </div>
        <div>
          <p className="quiz-des">You will get<div className="quiz-des-pink">pinkk</div>for wrong answers</p>
          <p className="quiz-des">You will get<div className="quiz-des-green">green</div>for right answers</p>
        </div>
        <div>
          <button className="start-quiz-btn" onClick={() => setFrontPage((prev) => !prev)}>Start Quiz</button>
        </div>
      </div>
    )
  }
  return (
    <div className="page">
      <img className="blob" alt="blob" src={blob1} />
      {frontPage ? <PageOne /> : <FrontPage />}
    </div>
  )
}

