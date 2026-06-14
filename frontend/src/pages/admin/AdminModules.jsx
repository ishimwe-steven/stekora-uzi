import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faLayerGroup, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { createCourseModule, deleteCourseModule, getCourseModules, getCourses } from "../../services/courseApi";

function getCourseTitle(course) {
  return course.title || course.name || "Untitled course";
}

export default function AdminModules() {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [modules, setModules] = useState([]);
  const [moduleTitle, setModuleTitle] = useState("");
  const [search, setSearch] = useState("");
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingModules, setLoadingModules] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourseId) {
      loadModules(selectedCourseId);
    } else {
      setModules([]);
    }
  }, [selectedCourseId]);

  const selectedCourse = courses.find((course) => String(course.id) === String(selectedCourseId));

  const filteredModules = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return modules;

    return modules.filter((module) =>
      [module.id, module.title, module.order_number, module.materials_count].some((value) =>
        String(value || "").toLowerCase().includes(term)
      )
    );
  }, [modules, search]);

  async function loadCourses() {
    try {
      setLoadingCourses(true);
      setError("");
      const data = await getCourses();
      const courseList = Array.isArray(data) ? data : [];
      setCourses(courseList);
      setSelectedCourseId((current) => current || (courseList[0]?.id ? String(courseList[0].id) : ""));
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load courses");
    } finally {
      setLoadingCourses(false);
    }
  }

  async function loadModules(courseId) {
    try {
      setLoadingModules(true);
      setError("");
      const data = await getCourseModules(courseId);
      setModules(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load modules");
    } finally {
      setLoadingModules(false);
    }
  }

  async function handleAddModule(event) {
    event.preventDefault();

    if (!selectedCourseId) {
      alert("Please choose a course first");
      return;
    }

    if (!moduleTitle.trim()) {
      alert("Module title is required");
      return;
    }

    try {
      await createCourseModule(selectedCourseId, { title: moduleTitle.trim() });
      setModuleTitle("");
      await loadModules(selectedCourseId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to add module");
    }
  }

  async function handleDeleteModule(moduleId) {
    if (!window.confirm("Delete this module?")) return;

    try {
      await deleteCourseModule(moduleId);
      await loadModules(selectedCourseId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete module");
    }
  }

  return (
    <AdminLayout title="Curriculum">
      <style>{`
        .admin-modules-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-modules-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-modules-big-btn {
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

        .admin-modules-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-modules-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-modules-header {
          padding: 1.55rem 1.7rem 0.75rem;
          background: #ffffff;
        }

        .admin-modules-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-modules-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-modules-form {
          display: flex;
          align-items: flex-end;
          gap: 0.85rem;
          padding: 0.5rem 1.7rem 1.35rem;
          flex-wrap: wrap;
        }

        .admin-modules-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-modules-select,
        .admin-modules-input {
          width: min(270px, 82vw);
          height: 52px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font-size: 0.95rem;
        }

        .admin-modules-select:focus,
        .admin-modules-input:focus,
        .admin-modules-search:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.14);
        }

        .admin-modules-primary {
          border: 0;
          border-radius: 8px;
          min-height: 52px;
          padding: 0 1.2rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 800;
        }

        .admin-modules-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-modules-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-modules-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-modules-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-modules-table-wrap {
          overflow-x: auto;
        }

        .admin-modules-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-modules-table th,
        .admin-modules-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-modules-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-modules-table th::after {
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

        .admin-modules-table th:last-child,
        .admin-modules-table td:last-child {
          border-right: none;
        }

        .admin-modules-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-modules-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-module-action {
          border: 0;
          border-radius: 6px;
          min-width: 96px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-module-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-modules-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        @media (max-width: 760px) {
          .admin-modules-form {
            align-items: stretch;
            flex-direction: column;
            padding: 0.5rem 1.2rem 1.2rem;
          }

          .admin-modules-select,
          .admin-modules-input,
          .admin-modules-primary {
            width: 100%;
          }

          .admin-modules-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-modules-search {
            width: 100%;
          }

          .admin-modules-header {
            padding: 1.2rem;
          }
        }
      `}</style>

      <div className="admin-modules-page">
        <div className="admin-modules-actions-bar">
          <button className="admin-modules-big-btn green" type="button" onClick={() => document.querySelector(".admin-modules-input")?.focus()}>
            <FontAwesomeIcon icon={faLayerGroup} />
            Add Module
          </button>
          <button className="admin-modules-big-btn" type="button" onClick={() => (window.location.hash = "/admin/courses")}>
            <FontAwesomeIcon icon={faBookOpen} />
            Public Courses
          </button>
        </div>

        <section className="admin-modules-panel">
          <div className="admin-modules-header">
            <h2>Modules per Course</h2>
            <p>
              Choose a public course, add learning modules, and remove old curriculum units.
              {selectedCourse ? ` Current course: ${getCourseTitle(selectedCourse)}.` : ""}
            </p>
          </div>

          <form className="admin-modules-form" onSubmit={handleAddModule}>
            <label className="admin-modules-field">
              Course
              <select
                className="admin-modules-select"
                value={selectedCourseId}
                onChange={(event) => setSelectedCourseId(event.target.value)}
                disabled={loadingCourses || courses.length === 0}
              >
                {courses.length === 0 && <option value="">No courses yet</option>}
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {getCourseTitle(course)}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-modules-field">
              Module title
              <input
                className="admin-modules-input"
                value={moduleTitle}
                onChange={(event) => setModuleTitle(event.target.value)}
                placeholder="Module title"
              />
            </label>

            <button className="admin-modules-primary" type="submit">
              <FontAwesomeIcon icon={faPlus} />
              Add module
            </button>
          </form>

          <div className="admin-modules-toolbar">
            <div className="admin-modules-count">
              Showing <strong>{filteredModules.length}</strong> of <strong>{modules.length}</strong> modules
            </div>
            <label className="admin-modules-search-wrap">
              Search modules:
              <input
                className="admin-modules-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {error && <div className="admin-modules-empty">{error}</div>}
          {loadingCourses && <div className="admin-modules-empty">Loading courses...</div>}
          {!loadingCourses && courses.length === 0 && (
            <div className="admin-modules-empty">No public courses yet. Create a course first, then add modules here.</div>
          )}
          {loadingModules && <div className="admin-modules-empty">Loading modules...</div>}
          {!loadingCourses && !loadingModules && selectedCourseId && modules.length === 0 && (
            <div className="admin-modules-empty">No modules have been added for this course yet.</div>
          )}

          {!loadingCourses && !loadingModules && selectedCourseId && modules.length > 0 && (
            <div className="admin-modules-table-wrap">
              <table className="admin-modules-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Order</th>
                    <th>Materials</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModules.map((module) => (
                    <tr key={module.id}>
                      <td>{module.id}</td>
                      <td>{module.title}</td>
                      <td>{module.order_number}</td>
                      <td>{module.materials_count || 0}</td>
                      <td>
                        <button className="admin-module-action delete" type="button" onClick={() => handleDeleteModule(module.id)}>
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
      </div>
    </AdminLayout>
  );
}
