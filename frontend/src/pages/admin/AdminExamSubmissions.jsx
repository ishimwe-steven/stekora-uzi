import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCheck, faRotate, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import {
  assignFinalExamCertificate,
  getFinalExamSubmissions,
  reviewFinalExamSubmission
} from "../../services/finalExamApi";

export default function AdminExamSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSubmissions();
  }, []);

  const filteredSubmissions = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return submissions;

    return submissions.filter((item) =>
      [item.id, item.student_name, item.student_email, item.course_title, item.status, item.score]
        .some((value) => String(value || "").toLowerCase().includes(term))
    );
  }, [submissions, search]);

  async function loadSubmissions() {
    try {
      setLoading(true);
      setError("");
      const data = await getFinalExamSubmissions();
      setSubmissions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load exam submissions");
    } finally {
      setLoading(false);
    }
  }

  async function reviewSubmission(submission, status) {
    const scoreInput = window.prompt("Enter the student's total score percentage", submission.score || 0);
    if (scoreInput === null) return;

    const score = Number(scoreInput);
    if (!Number.isFinite(score) || score < 0 || score > 100) {
      alert("Enter a score between 0 and 100");
      return;
    }

    try {
      await reviewFinalExamSubmission(submission.id, {
        score,
        status,
        allow_reexam: status === "rejected"
      });
      await loadSubmissions();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to review submission");
    }
  }

  async function assignCertificate(submission) {
    if (Number(submission.score || 0) < 60 && submission.status !== "approved") {
      alert("Approve a competent student before assigning a certificate");
      return;
    }

    try {
      const result = await assignFinalExamCertificate(submission.id);
      alert(`Certificate: ${result.certificateCode}`);
      await loadSubmissions();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to assign certificate");
    }
  }

  return (
    <AdminLayout title="Exam Submissions">
      <style>{`
        .admin-submissions-page {
          display: grid;
          gap: 1.2rem;
        }

        .admin-data-panel {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.1);
        }

        .admin-data-toolbar {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          flex-wrap: wrap;
        }

        .admin-data-count,
        .admin-data-search {
          color: #10243f;
          font-weight: 800;
        }

        .admin-data-tools,
        .admin-data-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .admin-data-search input {
          width: min(280px, 50vw);
          height: 46px;
          border: 1px solid #aeb7c2;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          font: inherit;
        }

        .admin-refresh-button {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-live-table-wrap {
          overflow-x: auto;
        }

        .admin-live-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-live-table th,
        .admin-live-table td {
          padding: 0.9rem 0.8rem;
          border-right: 1px solid #d7dde5;
          border-bottom: 1px solid #d7dde5;
          text-align: left;
          vertical-align: middle;
        }

        .admin-live-table th {
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
        }

        .admin-live-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-row-actions {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .admin-row-action {
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 6px;
          padding: 0 0.65rem;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-row-action.approve { background: #22c55e; color: #ffffff; }
        .admin-row-action.reexam { background: #ff3f4f; color: #ffffff; }
        .admin-row-action.certificate { background: #22d3ee; color: #052f3f; }

        .admin-data-message {
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          color: #64748b;
        }
      `}</style>

      <div className="admin-submissions-page">
        <section className="admin-data-panel">
          <div className="admin-data-toolbar">
            <div className="admin-data-count">
              Showing {filteredSubmissions.length} of {submissions.length} submissions
            </div>
            <div className="admin-data-tools">
              <label className="admin-data-search">
                Search:
                <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
              </label>
              <button className="admin-refresh-button" type="button" onClick={loadSubmissions}>
                <FontAwesomeIcon icon={faRotate} />
                Refresh
              </button>
            </div>
          </div>

          {loading && <div className="admin-data-message">Loading submissions...</div>}
          {error && <div className="admin-data-message">{error}</div>}
          {!loading && !error && submissions.length === 0 && (
            <div className="admin-data-message">No final exam submissions found.</div>
          )}

          {!loading && !error && submissions.length > 0 && (
            <div className="admin-live-table-wrap">
              <table className="admin-live-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Certificate</th>
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
                      <td>{new Date(submission.created_at).toLocaleString()}</td>
                      <td>
                        <div className="admin-row-actions">
                          <button className="admin-row-action approve" type="button" onClick={() => reviewSubmission(submission, "approved")}>
                            <FontAwesomeIcon icon={faCheck} /> Approve
                          </button>
                          <button className="admin-row-action reexam" type="button" onClick={() => reviewSubmission(submission, "rejected")}>
                            <FontAwesomeIcon icon={faRotateLeft} /> Re-exam
                          </button>
                          <button className="admin-row-action certificate" type="button" onClick={() => assignCertificate(submission)}>
                            <FontAwesomeIcon icon={faAward} /> Certificate
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </AdminLayout>
  );
}
