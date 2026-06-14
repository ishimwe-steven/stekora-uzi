import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import StudentLayout from "../../layouts/StudentLayout";
import { getStudentFinalExam, submitStudentFinalExam } from "../../services/studentApi";

export default function FinalExamPage({ courseId }) {
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadExam();
  }, [courseId]);

  async function loadExam() {
    try {
      setLoading(true);
      setError("");
      const response = await getStudentFinalExam(courseId);
      setData(response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load final exam");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const missing = data.questions.some((question) => !String(answers[question.id] || "").trim());
    if (missing) {
      alert("Please answer every final exam question");
      return;
    }

    try {
      setSubmitting(true);
      const response = await submitStudentFinalExam(
        courseId,
        data.questions.map((question) => ({ question_id: question.id, answer: answers[question.id] }))
      );
      setResult(response);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to submit final exam");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <StudentLayout title="Final Exam">
      <style>{`
        .student-final-shell {
          width: min(900px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .student-final-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-final-card h2,
        .student-final-card h3 {
          margin: 0 0 0.5rem;
          color: #10243f;
        }

        .student-final-card p {
          margin: 0;
          color: #64748b;
          line-height: 1.6;
        }

        .student-final-form {
          display: grid;
          gap: 1rem;
        }

        .student-final-options {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.8rem;
        }

        .student-final-option {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border: 1px solid #dce4ed;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
        }

        .student-final-textarea {
          width: 100%;
          min-height: 110px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font: inherit;
          resize: vertical;
        }

        .student-final-actions {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-final-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-final-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-final-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}</style>

      <div className="student-final-shell">
        {loading && <div className="student-final-message">Loading final exam...</div>}
        {error && <div className="student-final-message">{error}</div>}

        {data && !data.unlocked && (
          <section className="student-final-card">
            <h2>Final exam locked</h2>
            <p>
              Complete every course module first. You completed {data.completed_modules} of {data.total_modules} modules.
            </p>
          </section>
        )}

        {data && data.unlocked && !data.can_attempt && (
          <section className="student-final-card">
            <h2>Final exam already submitted</h2>
            <p>
              Status: {data.latest_attempt?.status}. Score: {data.latest_attempt?.score || 0}%. Wait for admin review or re-exam permission.
            </p>
          </section>
        )}

        {data && data.can_attempt && data.questions.length === 0 && (
          <div className="student-final-message">The admin has not uploaded final exam questions yet.</div>
        )}

        {data && data.can_attempt && data.questions.length > 0 && !result && (
          <>
            <section className="student-final-card">
              <h2>{data.course?.title}</h2>
              <p>
                Answer every question. Multiple-choice answers are scored automatically; open answers are reviewed by the admin.
              </p>
            </section>

            <form className="student-final-form" onSubmit={handleSubmit}>
              {data.questions.map((question, index) => (
                <section className="student-final-card" key={question.id}>
                  <h3>
                    {index + 1}. {question.question} ({question.marks} marks)
                  </h3>

                  {question.question_type === "mcq" ? (
                    <div className="student-final-options">
                      {Object.entries(question.options || {})
                        .filter(([, value]) => value)
                        .map(([letter, value]) => (
                          <label className="student-final-option" key={letter}>
                            <input
                              type="radio"
                              name={`exam-${question.id}`}
                              value={letter}
                              checked={answers[question.id] === letter}
                              onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })}
                            />
                            <strong>{letter}.</strong> {value}
                          </label>
                        ))}
                    </div>
                  ) : (
                    <textarea
                      className="student-final-textarea"
                      value={answers[question.id] || ""}
                      onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })}
                      placeholder="Write your answer..."
                    />
                  )}
                </section>
              ))}

              <div className="student-final-actions">
                <button className="student-final-button secondary" type="button" onClick={() => (window.location.hash = "/student")}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Dashboard
                </button>
                <button className="student-final-button" type="submit" disabled={submitting}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {submitting ? "Submitting..." : "Submit Final Exam"}
                </button>
              </div>
            </form>
          </>
        )}

        {result && (
          <section className="student-final-card">
            <h2>Final exam submitted</h2>
            <p>
              Automatic score: {result.auto_score}%. Your submission is waiting for admin review and certificate approval.
            </p>
          </section>
        )}
      </div>
    </StudentLayout>
  );
}
