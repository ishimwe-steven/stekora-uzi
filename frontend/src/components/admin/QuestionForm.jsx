export default function QuestionForm() {
  return (
    <form className="form">
      <select>
        <option>MCQ</option>
        <option>Open Question</option>
      </select>
      <textarea placeholder="Question" rows="4" />
      <input placeholder="Marks" />
      <input placeholder="Correct answer" />
      <button className="primary" type="button">Save Question</button>
    </form>
  );
}
