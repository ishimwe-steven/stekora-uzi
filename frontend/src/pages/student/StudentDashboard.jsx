import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBookOpen, faCheckCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import StudentLayout from "../../layouts/StudentLayout";
import { getStudentDashboard, startStudentCourse } from "../../services/studentApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

export default function StudentDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [startingId, setStartingId] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    if (!localStorage.getItem("studentToken")) {
      window.location.hash = "/login";
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await getStudentDashboard();
      setData(response);
      if (response.student?.full_name) localStorage.setItem("studentName", response.student.full_name);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load student dashboard");
    } finally {
      setLoading(false);
    }
  }

  async function startCourse(course) {
    const firstModule = course.modules?.[0];
    if (!firstModule) return;

    try {
      setStartingId(course.id);
      await startStudentCourse(course.id);
      window.location.hash = `/student/course/${course.id}/module/${firstModule.id}`;
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to start course");
    } finally {
      setStartingId(null);
    }
  }

  function continueCourse(course) {
    const nextModule = course.modules?.find((module) => !Number(module.completed)) || course.modules?.[0];
    if (nextModule) window.location.hash = `/student/course/${course.id}/module/${nextModule.id}`;
  }

  return (
    <StudentLayout title="Student Dashboard">
      <style>{`
        .student-dashboard-summary {
          display: grid;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .student-summary-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.15rem;
        }

        .student-summary-card strong {
          display: block;
          color: #003366;
          font-size: 1.35rem;
          margin-top: 0.3rem;
        }

        .student-course-grid {
          display: grid;
          gap: 1.1rem;
        }

        .student-course-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 350px;
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .student-course-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #dbe6f3;
        }

        .student-course-body {
          flex: 1;
          padding: 1rem;
        }

        .student-course-category {
          color: #0891b2;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
        }

        .student-course-body h2 {
          margin: 0.45rem 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .student-course-body p {
          margin: 0;
          color: #64748b;
          line-height: 1.55;
          font-size: 0.88rem;
        }

        .student-course-progress {
          height: 8px;
          margin-top: 1rem;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .student-course-progress span {
          display: block;
          height: 100%;
          background: #22c55e;
        }

        .student-course-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .student-course-footer small {
          color: #64748b;
          font-weight: 700;
        }

        .student-course-actions {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .student-course-button {
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.8rem;
          background: #3b82f6;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-course-button.green {
          background: #16a34a;
        }

        .student-course-button.gold {
          background: #facc15;
          color: #10243f;
        }

        .student-page-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }

        @media (min-width: 700px) {
          .student-dashboard-summary {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .student-course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1180px) {
          .student-course-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>

      {loading && <div className="student-page-message">Loading your courses...</div>}
      {error && <div className="student-page-message">{error}</div>}

      {data && (
        <>
          <section className="student-dashboard-summary">
            <div className="student-summary-card">
              Available courses
              <strong>{data.courses.length}</strong>
            </div>
            <div className="student-summary-card">
              Courses completed
              <strong>{data.courses.filter((course) => course.status === "completed").length}</strong>
            </div>
            <div className="student-summary-card">
              Certificates
              <strong>{data.certificates_count || 0}</strong>
            </div>
          </section>

          {data.courses.length === 0 ? (
            <div className="student-page-message">No courses have been posted by the admin yet.</div>
          ) : (
            <section className="student-course-grid">
              {data.courses.map((course) => (
                <article className="student-course-card" key={course.id}>
                  {course.image_url ? (
                    <img className="student-course-image" src={resolveImageUrl(course.image_url)} alt={course.name} />
                  ) : (
                    <div className="student-course-image" />
                  )}

                  <div className="student-course-body">
                    <div className="student-course-category">{course.category || "Course"}</div>
                    <h2>{course.name}</h2>
                    <p>{course.description || "Practical learning modules created by Stekora Tech."}</p>
                    <div className="student-course-progress">
                      <span style={{ width: `${course.progress}%` }} />
                    </div>
                  </div>

                  <footer className="student-course-footer">
                    <small>
                      {course.completed_modules}/{course.modules_count} modules · {course.progress}%
                    </small>
                    <div className="student-course-actions">
                      {course.modules_count === 0 ? (
                        <span className="student-page-message">Waiting for modules</span>
                      ) : course.status === "not_started" ? (
                        <button className="student-course-button" type="button" onClick={() => startCourse(course)}>
                          <FontAwesomeIcon icon={faPlay} />
                          {startingId === course.id ? "Starting..." : "Start"}
                        </button>
                      ) : course.status === "completed" ? (
                        <>
                          <button
                            className="student-course-button green"
                            type="button"
                            onClick={() => (window.location.hash = `/student/course/${course.id}/final-exam`)}
                          >
                            <FontAwesomeIcon icon={faCheckCircle} />
                            Final Exam
                          </button>
                          <button
                            className="student-course-button gold"
                            type="button"
                            onClick={() => (window.location.hash = "/student/certificates")}
                          >
                            <FontAwesomeIcon icon={faAward} />
                            Certificate
                          </button>
                        </>
                      ) : (
                        <button className="student-course-button green" type="button" onClick={() => continueCourse(course)}>
                          <FontAwesomeIcon icon={faBookOpen} />
                          Continue
                        </button>
                      )}
                    </div>
                  </footer>
                </article>
              ))}
            </section>
          )}
        </>
      )}
    </StudentLayout>
  );
}
