import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import {
  deleteQuizQuestion,
  getCourseModules,
  getCourses,
  getModuleQuiz,
  saveModuleQuiz
} from "../../services/courseApi";

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

function makeThreeQuestions() {
  return [{ ...emptyQuestion }, { ...emptyQuestion }, { ...emptyQuestion }];
}

export default function AdminAssessments() {
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const [formQuestions, setFormQuestions] = useState(makeThreeQuestions());
  const [formOpen, setFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      loadModules(selectedCourseId);
    } else {
      setModules([]);
      setSelectedModuleId("");
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (selectedModuleId) {
      loadQuestions(selectedModuleId);
    } else {
      setQuestions([]);
    }
  }, [selectedModuleId]);

  const selectedModule = modules.find((module) => String(module.id) === String(selectedModuleId));

  const filteredQuestions = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return questions;

    return questions.filter((question) =>
      [question.id, question.question, question.question_type, question.correct_answer, question.marks].some((value) =>
        String(value || "").toLowerCase().includes(term)
      )
    );
  }, [questions, search]);

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

  async function loadModules(courseId) {
    try {
      setError("");
      const data = await getCourseModules(courseId);
      const moduleList = Array.isArray(data) ? data : [];
      setModules(moduleList);
      setSelectedModuleId(moduleList[0]?.id ? String(moduleList[0].id) : "");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load modules");
    }
  }

  async function loadQuestions(moduleId) {
    try {
      setError("");
      const data = await getModuleQuiz(moduleId);
      setQuestions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load assessment questions");
    }
  }

  function openAddForm() {
    setFormQuestions(questions.length > 0 ? questions.map((question) => ({
      question_type: question.question_type || "mcq",
      question: question.question || "",
      option_a: question.option_a || "",
      option_b: question.option_b || "",
      option_c: question.option_c || "",
      option_d: question.option_d || "",
      correct_option: question.correct_option || question.correct_answer || "A",
      marks: question.marks || 1
    })) : makeThreeQuestions());
    setFormOpen(true);
  }

  function closeForm() {
    setFormQuestions(makeThreeQuestions());
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
    if (formQuestions.length <= 3) {
      alert("Assessment must have at least 3 questions");
      return;
    }
    setFormQuestions((current) => current.filter((_, questionIndex) => questionIndex !== index));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!selectedModuleId) {
      alert("Please choose a module first");
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

    if (cleanQuestions.length < 3) {
      alert("Assessment must have at least 3 questions");
      return;
    }

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
      await saveModuleQuiz(selectedModuleId, { questions: cleanQuestions });
      alert("Assessment saved");
      closeForm();
      await loadQuestions(selectedModuleId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save assessment");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteQuestion(questionId) {
    if (!window.confirm("Delete this question?")) return;

    try {
      await deleteQuizQuestion(questionId);
      await loadQuestions(selectedModuleId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete question");
    }
  }

  return (
    <AdminLayout title="Assessments">
      <style>{`
        .admin-assessments-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-assessments-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-assessments-big-btn {
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

        .admin-assessments-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-assessments-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-assessments-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-assessments-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-assessments-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-assessments-select-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          padding: 0.4rem 1.7rem 1.35rem;
        }

        .admin-assessments-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-assessments-select,
        .admin-assessments-input,
        .admin-assessments-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-assessments-select {
          min-width: 210px;
          height: 52px;
        }

        .admin-assessments-textarea {
          min-height: 86px;
          resize: vertical;
        }

        .admin-assessments-toolbar {
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

        .admin-assessments-count,
        .admin-assessments-search-wrap {
          color: #10243f;
          font-weight: 800;
        }

        .admin-assessments-search-wrap {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .admin-assessments-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-assessments-table-wrap {
          overflow-x: auto;
        }

        .admin-assessments-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-assessments-table th,
        .admin-assessments-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-assessments-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-assessments-table th::after {
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

        .admin-assessments-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-assessment-action {
          border: 0;
          border-radius: 6px;
          min-width: 92px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
          margin-right: 0.4rem;
        }

        .admin-assessment-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-assessment-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-assessments-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-assessments-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-assessments-modal {
          width: min(980px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-assessments-modal-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-assessments-close {
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

        .admin-assessments-form {
          display: grid;
          gap: 1rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-assessment-question-card {
          border: 1px solid #dbe3ec;
          border-radius: 10px;
          padding: 1rem;
          display: grid;
          gap: 0.75rem;
          background: #f8fafc;
        }

        .admin-assessment-question-head {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          color: #10243f;
          font-weight: 900;
        }

        .admin-assessment-options-grid {
          display: grid;
          gap: 0.75rem;
        }

        .admin-assessments-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-assessments-primary,
        .admin-assessments-secondary,
        .admin-assessments-danger {
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

        .admin-assessments-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-assessments-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-assessments-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        @media (min-width: 760px) {
          .admin-assessment-options-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-assessments-select-row,
          .admin-assessments-header,
          .admin-assessments-form {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-assessments-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-assessments-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-assessments-page">
        <div className="admin-assessments-actions-bar">
          <button className="admin-assessments-big-btn green" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faCircleQuestion} />
            Add Assessment
          </button>
          <button className="admin-assessments-big-btn" type="button" onClick={() => (window.location.hash = "/admin/modules")}>
            <FontAwesomeIcon icon={faPlus} />
            Add Module
          </button>
        </div>

        <section className="admin-assessments-panel">
          <div className="admin-assessments-header">
            <h2>Module Assessments</h2>
            <p>
              Choose a course and module, then create at least three questions. Pass mark is 60%.
              {selectedModule ? ` Current module: ${selectedModule.title}.` : ""}
            </p>
          </div>

          <div className="admin-assessments-select-row">
            <label className="admin-assessments-field">
              Course
              <select
                className="admin-assessments-select"
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

            <label className="admin-assessments-field">
              Module
              <select
                className="admin-assessments-select"
                value={selectedModuleId}
                onChange={(event) => setSelectedModuleId(event.target.value)}
                disabled={modules.length === 0}
              >
                {modules.length === 0 && <option value="">No modules yet</option>}
                {modules.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="admin-assessments-toolbar">
            <div className="admin-assessments-count">
              Showing <strong>{filteredQuestions.length}</strong> of <strong>{questions.length}</strong> questions
            </div>
            <label className="admin-assessments-search-wrap">
              Search questions:
              <input
                className="admin-assessments-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {error && <div className="admin-assessments-empty">{error}</div>}
          {loading && <div className="admin-assessments-empty">Loading courses...</div>}
          {!loading && courses.length === 0 && <div className="admin-assessments-empty">No courses yet.</div>}
          {!loading && courses.length > 0 && modules.length === 0 && (
            <div className="admin-assessments-empty">No modules yet. Create modules first.</div>
          )}
          {!loading && selectedModuleId && questions.length === 0 && (
            <div className="admin-assessments-empty">No assessment questions have been saved for this module yet.</div>
          )}

          {!loading && selectedModuleId && questions.length > 0 && (
            <div className="admin-assessments-table-wrap">
              <table className="admin-assessments-table">
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
                  {filteredQuestions.map((question) => (
                    <tr key={question.id}>
                      <td>{question.id}</td>
                      <td>{question.question}</td>
                      <td>{question.question_type}</td>
                      <td>{question.correct_answer || "Manual"}</td>
                      <td>{question.marks}</td>
                      <td>
                        <button className="admin-assessment-action edit" type="button" onClick={openAddForm}>
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Edit
                        </button>
                        <button className="admin-assessment-action delete" type="button" onClick={() => handleDeleteQuestion(question.id)}>
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

        {formOpen && (
          <div className="admin-assessments-modal-backdrop" role="presentation" onClick={closeForm}>
            <section className="admin-assessments-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-assessments-modal-head">
                <div className="admin-assessments-header">
                  <h2>Section Assessment</h2>
                  <p>Save all questions for the selected module. This replaces the current assessment for that module.</p>
                </div>
                <button className="admin-assessments-close" type="button" onClick={closeForm} aria-label="Close assessment form">
                  x
                </button>
              </div>

              <form className="admin-assessments-form" onSubmit={handleSubmit}>
                {formQuestions.map((question, index) => (
                  <div className="admin-assessment-question-card" key={`question-${index}`}>
                    <div className="admin-assessment-question-head">
                      <span>Question {index + 1}</span>
                      {formQuestions.length > 3 && (
                        <button className="admin-assessments-danger" type="button" onClick={() => removeQuestion(index)}>
                          Remove
                        </button>
                      )}
                    </div>

                    <label className="admin-assessments-field">
                      Question type
                      <select
                        className="admin-assessments-select"
                        value={question.question_type}
                        onChange={(event) => updateQuestion(index, "question_type", event.target.value)}
                      >
                        <option value="mcq">Multiple Choice</option>
                        <option value="open">Open Answer</option>
                      </select>
                    </label>

                    <label className="admin-assessments-field">
                      Question
                      <textarea
                        className="admin-assessments-textarea"
                        value={question.question}
                        onChange={(event) => updateQuestion(index, "question", event.target.value)}
                        placeholder="Write question..."
                      />
                    </label>

                    {question.question_type === "mcq" && (
                      <>
                        <div className="admin-assessment-options-grid">
                          {["a", "b", "c", "d"].map((letter) => (
                            <label className="admin-assessments-field" key={letter}>
                              Option {letter.toUpperCase()}
                              <input
                                className="admin-assessments-input"
                                value={question[`option_${letter}`]}
                                onChange={(event) => updateQuestion(index, `option_${letter}`, event.target.value)}
                              />
                            </label>
                          ))}
                        </div>

                        <label className="admin-assessments-field">
                          Correct answer
                          <select
                            className="admin-assessments-select"
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

                    <label className="admin-assessments-field">
                      Marks
                      <input
                        className="admin-assessments-input"
                        type="number"
                        min="1"
                        value={question.marks}
                        onChange={(event) => updateQuestion(index, "marks", event.target.value)}
                      />
                    </label>
                  </div>
                ))}

                <div className="admin-assessments-form-actions">
                  <button className="admin-assessments-secondary" type="button" onClick={addQuestion}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add Question
                  </button>
                  <button className="admin-assessments-primary" type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Save Assessment"}
                  </button>
                  <button className="admin-assessments-secondary" type="button" onClick={closeForm}>
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
