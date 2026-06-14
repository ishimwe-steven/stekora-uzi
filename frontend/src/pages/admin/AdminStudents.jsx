import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCheck, faRotate } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { getAdminStudents, updateAdminStudentStatus } from "../../services/adminApi";

export default function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const filteredStudents = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return students;

    return students.filter((student) =>
      [student.id, student.full_name, student.email, student.phone, student.status]
        .some((value) => String(value || "").toLowerCase().includes(term))
    );
  }, [students, search]);

  async function loadStudents() {
    try {
      setLoading(true);
      setError("");
      const data = await getAdminStudents();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load students");
    } finally {
      setLoading(false);
    }
  }

  async function changeStatus(student) {
    const nextStatus = student.status === "active" ? "blocked" : "active";
    const message = nextStatus === "blocked" ? "Block this student account?" : "Activate this student account?";
    if (!window.confirm(message)) return;

    try {
      await updateAdminStudentStatus(student.id, nextStatus);
      await loadStudents();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to update student");
    }
  }

  return (
    <AdminLayout title="Students">
      <style>{`
        .admin-students-panel {
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.1);
        }

        .admin-students-toolbar {
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.2rem 1.4rem;
          flex-wrap: wrap;
          color: #10243f;
          font-weight: 800;
        }

        .admin-students-tools,
        .admin-students-search {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .admin-students-search input {
          width: min(280px, 50vw);
          height: 46px;
          border: 1px solid #aeb7c2;
          border-radius: 7px;
          padding: 0.6rem 0.75rem;
          font: inherit;
        }

        .admin-students-refresh {
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

        .admin-students-table-wrap {
          overflow-x: auto;
        }

        .admin-students-table {
          width: 100%;
          border-collapse: collapse;
        }

        .admin-students-table th,
        .admin-students-table td {
          padding: 0.9rem 0.8rem;
          border-right: 1px solid #d7dde5;
          border-bottom: 1px solid #d7dde5;
          text-align: left;
          vertical-align: middle;
        }

        .admin-students-table th {
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
        }

        .admin-students-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-student-status {
          display: inline-block;
          padding: 0.3rem 0.55rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
        }

        .admin-student-status.active {
          background: #dcfce7;
          color: #166534;
        }

        .admin-student-status.blocked {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-student-action {
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border: 0;
          border-radius: 6px;
          padding: 0 0.7rem;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-student-action.block {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-student-action.activate {
          background: #22c55e;
          color: #ffffff;
        }

        .admin-students-message {
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          color: #64748b;
        }
      `}</style>

      <section className="admin-students-panel">
        <div className="admin-students-toolbar">
          <div>Showing {filteredStudents.length} of {students.length} students</div>
          <div className="admin-students-tools">
            <label className="admin-students-search">
              Search:
              <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} />
            </label>
            <button className="admin-students-refresh" type="button" onClick={loadStudents}>
              <FontAwesomeIcon icon={faRotate} />
              Refresh
            </button>
          </div>
        </div>

        {loading && <div className="admin-students-message">Loading students...</div>}
        {error && <div className="admin-students-message">{error}</div>}
        {!loading && !error && students.length === 0 && (
          <div className="admin-students-message">No student accounts have been created yet.</div>
        )}

        {!loading && !error && students.length > 0 && (
          <div className="admin-students-table-wrap">
            <table className="admin-students-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Started</th>
                  <th>Completed</th>
                  <th>Certificates</th>
                  <th>Status</th>
                  <th>Registered</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.full_name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone || "-"}</td>
                    <td>{student.courses_started || 0}</td>
                    <td>{student.courses_completed || 0}</td>
                    <td>{student.certificates_count || 0}</td>
                    <td>
                      <span className={`admin-student-status ${student.status}`}>{student.status}</span>
                    </td>
                    <td>{new Date(student.created_at).toLocaleDateString()}</td>
                    <td>
                      <button
                        className={`admin-student-action ${student.status === "active" ? "block" : "activate"}`}
                        type="button"
                        onClick={() => changeStatus(student)}
                      >
                        <FontAwesomeIcon icon={student.status === "active" ? faBan : faCheck} />
                        {student.status === "active" ? "Block" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminLayout>
  );
}
