import React from "react"
import PageOne from "./PageOne"

export default function App() {
  const [frontPage, setFrontPage] = React.useState(false)
  function FrontPage() {
    return (
      <div>
        <h1>Quizical</h1>
        <p>Description of the quiz process</p>
        <button onClick={() => setFrontPage((prev) => !prev)}>Start Quiz</button>
      </div>
    )
  }
  return (
    <div className="page">
      {frontPage ? <PageOne /> : <FrontPage />}

    </div>
  )
}

