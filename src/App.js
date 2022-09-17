import React from "react"
import PageOne from "./PageOne"

export default function App() {
  const [frontPage, setFrontPage] = React.useState(false)
  function FrontPage() {
    return (
      <div className="front-page">
        <h1 className="quiz-heading">Quizical</h1>
        <div>
          <button className="start-quiz-btn" onClick={() => setFrontPage((prev) => !prev)}>Take the Quiz</button>
        </div>
      </div>
    )
  }
  return (
    <div className="page">
      {frontPage ? <PageOne /> : <FrontPage />}
    </div>
  )
}

