import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFileCircleQuestion, faPenToSquare, faPlus, faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { getCourses } from "../../services/courseApi";
import {
  assignFinalExamCertificate,
  deleteFinalExamQuestion,
  getFinalExamQuestions,
  getFinalExamSubmissions,
  reviewFinalExamSubmission,
  saveFinalExamQuestions
} from "../../services/finalExamApi";

const emptyQuestion = {
  question_type: "mcq",
  question: "",
  option_a: "",
  option_b: "",
  option_c: "",
  option_d: "",
  correct_option: "A",
  marks: 1
};

function getCourseTitle(course) {
  return course.title || course.name || "Untitled course";
}

function defaultQuestions() {
  return [{ ...emptyQuestion }];
}

export default function AdminFinalExam() {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [formQuestions, setFormQuestions] = useState(defaultQuestions());
  const [formOpen, setFormOpen] = useState(false);
  const [submissionSearch, setSubmissionSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCourses();
    loadSubmissions();
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      loadQuestions(selectedCourseId);
    } else {
      setQuestions([]);
    }
  }, [selectedCourseId]);

  const selectedCourse = courses.find((course) => String(course.id) === String(selectedCourseId));

  const filteredSubmissions = useMemo(() => {
    const term = submissionSearch.trim().toLowerCase();
    if (!term) return submissions;

    return submissions.filter((submission) =>
      [
        submission.id,
        submission.student_name,
        submission.student_email,
        submission.course_title,
        submission.status,
        submission.score,
        submission.certificate_code
      ].some((value) => String(value || "").toLowerCase().includes(term))
    );
  }, [submissions, submissionSearch]);

  async function loadCourses() {
    try {
      setLoading(true);
      setError("");
      const data = await getCourses();
      const courseList = Array.isArray(data) ? data : [];
      setCourses(courseList);
      setSelectedCourseId(courseList[0]?.id ? String(courseList[0].id) : "");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load courses");
    } finally {
      setLoading(false);
    }
  }

  async function loadQuestions(courseId) {
    try {
      setError("");
      const data = await getFinalExamQuestions(courseId);
      setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load final exam questions");
    }
  }

  async function loadSubmissions() {
    try {
      const data = await getFinalExamSubmissions();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  }

  function openQuestionForm() {
    setFormQuestions(
      questions.length > 0
        ? questions.map((question) => ({
            question_type: question.question_type || question.type || "mcq",
            question: question.question || "",
            option_a: question.option_a || "",
            option_b: question.option_b || "",
            option_c: question.option_c || "",
            option_d: question.option_d || "",
            correct_option: question.correct_option || question.correct_answer || "A",
            marks: question.marks || 1
          }))
        : defaultQuestions()
    );
    setFormOpen(true);
  }

  function closeQuestionForm() {
    setFormQuestions(defaultQuestions());
    setFormOpen(false);
  }

  function updateQuestion(index, field, value) {
    setFormQuestions((current) =>
      current.map((question, questionIndex) => (questionIndex === index ? { ...question, [field]: value } : question))
    );
  }

  function addQuestion() {
    setFormQuestions((current) => [...current, { ...emptyQuestion }]);
  }

  function removeQuestion(index) {
    if (formQuestions.length <= 1) {
      alert("Final exam needs at least one question");
      return;
    }
    setFormQuestions((current) => current.filter((_, questionIndex) => questionIndex !== index));
  }

  async function handleSaveQuestions(event) {
    event.preventDefault();

    if (!selectedCourseId) {
      alert("Please select a course first");
      return;
    }

    const cleanQuestions = formQuestions.map((question) => ({
      question_type: question.question_type,
      question: question.question.trim(),
      option_a: question.option_a.trim(),
      option_b: question.option_b.trim(),
      option_c: question.option_c.trim(),
      option_d: question.option_d.trim(),
      correct_option: question.correct_option,
      marks: Number(question.marks || 1)
    }));

    const invalid = cleanQuestions.some((question) => {
      if (!question.question) return true;
      if (question.question_type === "open") return false;
      return !question.option_a || !question.option_b || !question.correct_option;
    });

    if (invalid) {
      alert("Each MCQ needs a question, option A, option B, and correct answer");
      return;
    }

    setSaving(true);

    try {
      await saveFinalExamQuestions(selectedCourseId, { questions: cleanQuestions });
      alert("Final exam questions saved");
      closeQuestionForm();
      await loadQuestions(selectedCourseId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save final exam questions");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteQuestion(questionId) {
    if (!window.confirm("Delete this final exam question?")) return;

    try {
      await deleteFinalExamQuestion(questionId);
      await loadQuestions(selectedCourseId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete question");
    }
  }

  async function handleReview(submission, status) {
    const scoreInput = window.prompt("Enter total score percent", submission.score || 0);
    if (scoreInput === null) return;

    try {
      await reviewFinalExamSubmission(submission.id, {
        score: Number(scoreInput),
        status,
        allow_reexam: status === "rejected"
      });
      await loadSubmissions();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to review submission");
    }
  }

  async function handleCertificate(submissionId) {
    try {
      const result = await assignFinalExamCertificate(submissionId);
      alert(`Certificate assigned: ${result.certificateCode}`);
      await loadSubmissions();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to assign certificate");
    }
  }

  return (
    <AdminLayout title="Final Exam & Certificates">
      <style>{`
        .admin-exam-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-exam-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-exam-big-btn {
          border: 0;
          border-radius: 8px;
          min-height: 60px;
          padding: 0 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          background: linear-gradient(135deg, #0ea5e9, #0284c7);
          font-size: 1.05rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(2, 132, 199, 0.16);
        }

        .admin-exam-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-exam-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-exam-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-exam-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-exam-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-exam-controls {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          align-items: flex-end;
          padding: 0.4rem 1.7rem 1.35rem;
        }

        .admin-exam-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-exam-select,
        .admin-exam-input,
        .admin-exam-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-exam-select {
          min-width: 270px;
          height: 52px;
        }

        .admin-exam-textarea {
          min-height: 86px;
          resize: vertical;
        }

        .admin-exam-primary,
        .admin-exam-secondary,
        .admin-exam-danger {
          border: 0;
          border-radius: 8px;
          min-height: 48px;
          padding: 0 1.15rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-exam-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-exam-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-exam-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-exam-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
          border-top: 1px solid #edf2f7;
        }

        .admin-exam-count,
        .admin-exam-search-wrap {
          color: #10243f;
          font-weight: 800;
        }

        .admin-exam-search-wrap {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .admin-exam-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-exam-table-wrap {
          overflow-x: auto;
        }

        .admin-exam-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-exam-table th,
        .admin-exam-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-exam-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-exam-table th::after {
          content: "";
          position: absolute;
          right: 0.65rem;
          top: 50%;
          width: 0;
          height: 0;
          border-left: 0.32rem solid transparent;
          border-right: 0.32rem solid transparent;
          border-bottom: 0.55rem solid rgba(255, 255, 255, 0.22);
          transform: translateY(-70%);
        }

        .admin-exam-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-exam-action {
          border: 0;
          border-radius: 6px;
          min-height: 36px;
          padding: 0 0.7rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 800;
          margin: 0.15rem;
        }

        .admin-exam-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-exam-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-exam-action.pass {
          background: #22c55e;
          color: #ffffff;
        }

        .admin-exam-action.cert {
          background: #22d3ee;
          color: #052f3f;
        }

        .admin-exam-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-exam-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-exam-modal {
          width: min(980px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-exam-modal-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-exam-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-exam-form {
          display: grid;
          gap: 1rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-exam-question-card {
          border: 1px solid #dbe3ec;
          border-radius: 10px;
          padding: 1rem;
          display: grid;
          gap: 0.75rem;
          background: #f8fafc;
        }

        .admin-exam-question-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          color: #10243f;
          font-weight: 900;
        }

        .admin-exam-options-grid {
          display: grid;
          gap: 0.75rem;
        }

        .admin-exam-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        @media (min-width: 760px) {
          .admin-exam-options-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-exam-controls,
          .admin-exam-header,
          .admin-exam-form {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-exam-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-exam-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-exam-page">
        <div className="admin-exam-actions-bar">
          <button className="admin-exam-big-btn green" type="button" onClick={openQuestionForm}>
            <FontAwesomeIcon icon={faFileCircleQuestion} />
            Add Final Exam
          </button>
          <button className="admin-exam-big-btn" type="button" onClick={loadSubmissions}>
            <FontAwesomeIcon icon={faRotate} />
            Refresh
          </button>
        </div>

        <section className="admin-exam-panel">
          <div className="admin-exam-header">
            <h2>Final Exam Questions</h2>
            <p>
              Set final exam questions separately from student grading. Supports MCQ and open questions.
              {selectedCourse ? ` Current course: ${getCourseTitle(selectedCourse)}.` : ""}
            </p>
          </div>

          <div className="admin-exam-controls">
            <label className="admin-exam-field">
              Course
              <select
                className="admin-exam-select"
                value={selectedCourseId}
                onChange={(event) => setSelectedCourseId(event.target.value)}
                disabled={loading || courses.length === 0}
              >
                {courses.length === 0 && <option value="">No courses yet</option>}
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {getCourseTitle(course)}
                  </option>
                ))}
              </select>
            </label>
            <button className="admin-exam-primary" type="button" onClick={openQuestionForm}>
              <FontAwesomeIcon icon={faPlus} />
              Add/Edit Questions
            </button>
          </div>

          {error && <div className="admin-exam-empty">{error}</div>}
          {loading && <div className="admin-exam-empty">Loading courses...</div>}
          {!loading && selectedCourseId && questions.length === 0 && (
            <div className="admin-exam-empty">Select a course above to create or edit its final exam questions.</div>
          )}

          {!loading && selectedCourseId && questions.length > 0 && (
            <div className="admin-exam-table-wrap">
              <table className="admin-exam-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Type</th>
                    <th>Correct</th>
                    <th>Marks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => (
                    <tr key={question.id}>
                      <td>{question.id}</td>
                      <td>{question.question}</td>
                      <td>{question.question_type}</td>
                      <td>{question.correct_answer || "Manual"}</td>
                      <td>{question.marks}</td>
                      <td>
                        <button className="admin-exam-action edit" type="button" onClick={openQuestionForm}>
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Edit
                        </button>
                        <button className="admin-exam-action delete" type="button" onClick={() => handleDeleteQuestion(question.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin-exam-panel">
          <div className="admin-exam-header">
            <h2>Final Exam Grading & Submissions</h2>
            <p>Review answers, allow re-exam for failed students, and assign certificates only to competent students.</p>
          </div>

          <div className="admin-exam-toolbar">
            <div className="admin-exam-count">
              Showing <strong>{filteredSubmissions.length}</strong> of <strong>{submissions.length}</strong> submissions
            </div>
            <label className="admin-exam-search-wrap">
              Search submissions:
              <input
                className="admin-exam-search"
                type="search"
                value={submissionSearch}
                onChange={(event) => setSubmissionSearch(event.target.value)}
              />
            </label>
            <button className="admin-exam-primary" type="button" onClick={loadSubmissions}>
              Refresh
            </button>
          </div>

          {submissions.length === 0 ? (
            <div className="admin-exam-empty">No final exam submissions found.</div>
          ) : (
            <div className="admin-exam-table-wrap">
              <table className="admin-exam-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Status</th>
                    <th>Total Score</th>
                    <th>Certificate</th>
                    <th>Re-exam</th>
                    <th>Submitted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id}>
                      <td>{submission.id}</td>
                      <td>{submission.student_name}</td>
                      <td>{submission.student_email}</td>
                      <td>{submission.course_title}</td>
                      <td>{submission.status}</td>
                      <td>{submission.score || 0}%</td>
                      <td>{submission.certificate_code || "Not assigned"}</td>
                      <td>{submission.allow_reexam ? "Yes" : "No"}</td>
                      <td>{submission.created_at ? new Date(submission.created_at).toLocaleDateString() : "-"}</td>
                      <td>
                        <button className="admin-exam-action pass" type="button" onClick={() => handleReview(submission, "approved")}>
                          Approve
                        </button>
                        <button className="admin-exam-action delete" type="button" onClick={() => handleReview(submission, "rejected")}>
                          Re-exam
                        </button>
                        <button className="admin-exam-action cert" type="button" onClick={() => handleCertificate(submission.id)}>
                          <FontAwesomeIcon icon={faAward} />
                          Certificate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {formOpen && (
          <div className="admin-exam-modal-backdrop" role="presentation" onClick={closeQuestionForm}>
            <section className="admin-exam-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-exam-modal-head">
                <div className="admin-exam-header">
                  <h2>Final Exam Questions</h2>
                  <p>Saving replaces all final exam questions for the selected course.</p>
                </div>
                <button className="admin-exam-close" type="button" onClick={closeQuestionForm} aria-label="Close final exam form">
                  x
                </button>
              </div>

              <form className="admin-exam-form" onSubmit={handleSaveQuestions}>
                {formQuestions.map((question, index) => (
                  <div className="admin-exam-question-card" key={`exam-question-${index}`}>
                    <div className="admin-exam-question-head">
                      <span>Question {index + 1}</span>
                      {formQuestions.length > 1 && (
                        <button className="admin-exam-danger" type="button" onClick={() => removeQuestion(index)}>
                          Remove
                        </button>
                      )}
                    </div>

                    <label className="admin-exam-field">
                      Question type
                      <select
                        className="admin-exam-select"
                        value={question.question_type}
                        onChange={(event) => updateQuestion(index, "question_type", event.target.value)}
                      >
                        <option value="mcq">Multiple Choice</option>
                        <option value="open">Open Answer</option>
                      </select>
                    </label>

                    <label className="admin-exam-field">
                      Question
                      <textarea
                        className="admin-exam-textarea"
                        value={question.question}
                        onChange={(event) => updateQuestion(index, "question", event.target.value)}
                        placeholder="Write final exam question..."
                      />
                    </label>

                    {question.question_type === "mcq" && (
                      <>
                        <div className="admin-exam-options-grid">
                          {["a", "b", "c", "d"].map((letter) => (
                            <label className="admin-exam-field" key={letter}>
                              Option {letter.toUpperCase()}
                              <input
                                className="admin-exam-input"
                                value={question[`option_${letter}`]}
                                onChange={(event) => updateQuestion(index, `option_${letter}`, event.target.value)}
                              />
                            </label>
                          ))}
                        </div>

                        <label className="admin-exam-field">
                          Correct answer
                          <select
                            className="admin-exam-select"
                            value={question.correct_option}
                            onChange={(event) => updateQuestion(index, "correct_option", event.target.value)}
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </label>
                      </>
                    )}

                    <label className="admin-exam-field">
                      Marks
                      <input
                        className="admin-exam-input"
                        type="number"
                        min="1"
                        value={question.marks}
                        onChange={(event) => updateQuestion(index, "marks", event.target.value)}
                      />
                    </label>
                  </div>
                ))}

                <div className="admin-exam-form-actions">
                  <button className="admin-exam-secondary" type="button" onClick={addQuestion}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add Question
                  </button>
                  <button className="admin-exam-primary" type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save Final Exam"}
                  </button>
                  <button className="admin-exam-secondary" type="button" onClick={closeQuestionForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
