export default function QuizBlock({ title, questions }) {
  return (
    <div className="list-panel">
      <h3>{title}</h3>
      {questions.map((question) => (
        <div className="list-row" key={question}>
          <span>{question}</span>
          <button>Answer</button>
        </div>
      ))}
    </div>
  );
}
