import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r)=>r.json())
    .then(data =>setQuestions(data))
  }, [])

  function handleDelete(id){
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function updatedQuestions(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
      {questions.map((question) => (
          <QuestionItem 
          key={question.id} 
          question={question} 
          onDeleteQuestion={handleDelete}
          onUpdateQuestion={updatedQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
