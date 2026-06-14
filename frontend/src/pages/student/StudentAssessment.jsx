import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import StudentLayout from "../../layouts/StudentLayout";
import { getStudentAssessment, submitStudentAssessment } from "../../services/studentApi";

export default function StudentAssessment({ courseId, moduleId }) {
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAssessment();
  }, [moduleId]);

  async function loadAssessment() {
    try {
      setLoading(true);
      setError("");
      const response = await getStudentAssessment(moduleId);
      setData(response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load assessment");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const missing = data.questions.some((question) => !String(answers[question.id] || "").trim());
    if (missing) {
      alert("Please answer every question");
      return;
    }

    try {
      setSubmitting(true);
      const response = await submitStudentAssessment(
        moduleId,
        data.questions.map((question) => ({ question_id: question.id, answer: answers[question.id] }))
      );
      setResult(response);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to submit assessment");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <StudentLayout title="Module Assessment">
      <style>{`
        .student-assessment-shell {
          width: min(850px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .student-assessment-intro,
        .student-assessment-question,
        .student-assessment-result {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-assessment-intro h2,
        .student-assessment-question h3 {
          margin: 0 0 0.45rem;
          color: #10243f;
        }

        .student-assessment-intro p {
          margin: 0;
          color: #64748b;
        }

        .student-assessment-form {
          display: grid;
          gap: 1rem;
        }

        .student-assessment-options {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.8rem;
        }

        .student-assessment-option {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border: 1px solid #dce4ed;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          cursor: pointer;
        }

        .student-assessment-answer {
          width: 100%;
          min-height: 100px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem;
          font: inherit;
          resize: vertical;
        }

        .student-assessment-actions {
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-assessment-button {
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

        .student-assessment-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-assessment-result {
          text-align: center;
        }

        .student-assessment-result strong {
          display: block;
          margin: 0.5rem 0;
          color: #003366;
          font-size: 2rem;
        }

        .student-assessment-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}</style>

      <div className="student-assessment-shell">
        {loading && <div className="student-assessment-message">Loading assessment...</div>}
        {error && <div className="student-assessment-message">{error}</div>}

        {data && data.questions.length === 0 && (
          <div className="student-assessment-message">The admin has not added assessment questions yet.</div>
        )}

        {data && data.questions.length > 0 && !result && (
          <>
            <section className="student-assessment-intro">
              <h2>{data.module.title}</h2>
              <p>{data.questions.length} questions · Pass mark {data.pass_mark}%</p>
            </section>

            <form className="student-assessment-form" onSubmit={handleSubmit}>
              {data.questions.map((question, index) => (
                <section className="student-assessment-question" key={question.id}>
                  <h3>
                    {index + 1}. {question.question}
                  </h3>

                  {question.question_type === "mcq" ? (
                    <div className="student-assessment-options">
                      {Object.entries(question.options || {})
                        .filter(([, value]) => value)
                        .map(([letter, value]) => (
                          <label className="student-assessment-option" key={letter}>
                            <input
                              type="radio"
                              name={`question-${question.id}`}
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
                      className="student-assessment-answer"
                      value={answers[question.id] || ""}
                      onChange={(event) => setAnswers({ ...answers, [question.id]: event.target.value })}
                      placeholder="Write your answer..."
                    />
                  )}
                </section>
              ))}

              <div className="student-assessment-actions">
                <button
                  className="student-assessment-button secondary"
                  type="button"
                  onClick={() => (window.location.hash = `/student/course/${courseId}/module/${moduleId}`)}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back to Module
                </button>
                <button className="student-assessment-button" type="submit" disabled={submitting}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {submitting ? "Submitting..." : "Submit Assessment"}
                </button>
              </div>
            </form>
          </>
        )}

        {result && (
          <section className="student-assessment-result">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <strong>{result.score}%</strong>
            <p>{result.passed ? "You passed this module assessment." : "You need 60% to pass. Review the lesson and try again."}</p>
            {result.passed ? (
              <button
                className="student-assessment-button"
                type="button"
                onClick={() => (window.location.hash = `/student/course/${courseId}/module/${moduleId}`)}
              >
                Return to Module
              </button>
            ) : (
              <button
                className="student-assessment-button"
                type="button"
                onClick={() => {
                  setAnswers({});
                  setResult(null);
                }}
              >
                Retry Assessment
              </button>
            )}
          </section>
        )}
      </div>
    </StudentLayout>
  );
}
