import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faFileImport,
  faListUl,
  faPenToSquare,
  faPlus,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import {
  createCourse,
  createCourseModule,
  deleteCourse,
  deleteCourseModule,
  getCourseModules,
  getCourses,
  updateCourse
} from "../../services/courseApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const emptyForm = {
  title: "",
  category: "Development",
  description: "",
  image_url: "",
  image: null,
  modules: [""]
};

function getCourseTitle(course) {
  return course.title || course.name || "Untitled course";
}

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [curriculumCourse, setCurriculumCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [moduleTitle, setModuleTitle] = useState("");
  const [modulesLoading, setModulesLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return courses;

    return courses.filter((course) =>
      [course.id, getCourseTitle(course), course.category, course.description].some((value) =>
        String(value || "").toLowerCase().includes(term)
      )
    );
  }, [courses, search]);

  async function loadCourses() {
    try {
      setLoading(true);
      setError("");
      const data = await getCourses();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load courses");
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  function openAddForm() {
    resetForm();
    setFormOpen(true);
  }

  function closeForm() {
    resetForm();
    setFormOpen(false);
  }

  function startEdit(course) {
    setEditingId(course.id);
    setForm({
      title: getCourseTitle(course),
      category: course.category || "Development",
      description: course.description || "",
      image_url: course.image_url || "",
      image: null,
      modules: [""]
    });
    setFormOpen(true);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function updateModuleDraft(index, value) {
    setForm({
      ...form,
      modules: form.modules.map((module, moduleIndex) => (moduleIndex === index ? value : module))
    });
  }

  function addModuleDraft() {
    setForm({ ...form, modules: [...form.modules, ""] });
  }

  function removeModuleDraft(index) {
    setForm({ ...form, modules: form.modules.filter((_, moduleIndex) => moduleIndex !== index) });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (saving) return;

    const title = form.title.trim();

    if (!title) {
      alert("Course title is required");
      return;
    }

    setSaving(true);

    try {
      const payload = new FormData();
      payload.append("title", title);
      payload.append("category", form.category.trim());
      payload.append("description", form.description.trim());
      payload.append("image_url", form.image_url.trim());
      payload.append("modules", JSON.stringify(form.modules.map((module) => module.trim()).filter(Boolean)));

      if (form.image) {
        payload.append("image", form.image);
      }

      if (editingId) {
        await updateCourse(editingId, payload);
        alert("Course updated");
      } else {
        await createCourse(payload);
        alert("Course created");
      }

      closeForm();
      await loadCourses();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save course");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this course?")) return;

    try {
      await deleteCourse(id);
      if (editingId === id) resetForm();
      await loadCourses();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete course");
    }
  }

  async function openCurriculum(course) {
    setCurriculumCourse(course);
    setModuleTitle("");
    setModules([]);
    setModulesLoading(true);

    try {
      const data = await getCourseModules(course.id);
      setModules(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to load curriculum");
    } finally {
      setModulesLoading(false);
    }
  }

  function closeCurriculum() {
    setCurriculumCourse(null);
    setModules([]);
    setModuleTitle("");
  }

  async function handleAddModule(event) {
    event.preventDefault();
    if (!curriculumCourse || !moduleTitle.trim()) return;

    try {
      await createCourseModule(curriculumCourse.id, { title: moduleTitle.trim() });
      setModuleTitle("");
      const data = await getCourseModules(curriculumCourse.id);
      setModules(Array.isArray(data) ? data : []);
      await loadCourses();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to add module");
    }
  }

  async function handleDeleteModule(moduleId) {
    if (!window.confirm("Delete this module?")) return;

    try {
      await deleteCourseModule(moduleId);
      const data = await getCourseModules(curriculumCourse.id);
      setModules(Array.isArray(data) ? data : []);
      await loadCourses();
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete module");
    }
  }

  return (
    <AdminLayout title="Public Courses">
      <style>{`
        .admin-courses-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-courses-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-courses-big-btn {
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

        .admin-courses-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-courses-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-courses-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.55rem 1.7rem 1rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-courses-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-courses-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-courses-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-courses-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-courses-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-courses-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-courses-table-wrap {
          overflow-x: auto;
        }

        .admin-courses-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-courses-table th,
        .admin-courses-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-courses-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-courses-table th::after {
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

        .admin-courses-table th:last-child,
        .admin-courses-table td:last-child {
          border-right: none;
        }

        .admin-courses-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-courses-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-courses-image {
          width: 66px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          background: #f1f5f9;
        }

        .admin-courses-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-course-action {
          border: 0;
          border-radius: 6px;
          min-width: 104px;
          min-height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .admin-course-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-course-action.curriculum {
          background: #22d3ee;
          color: #052f3f;
        }

        .admin-course-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-courses-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        .admin-courses-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-courses-modal {
          width: min(720px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
          padding: 1.35rem;
        }

        .admin-courses-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .admin-courses-modal-head h2 {
          margin: 0;
          color: #10243f;
          font-size: 1.1rem;
        }

        .admin-courses-close {
          border: 0;
          background: #e8eef6;
          color: #003366;
          border-radius: 999px;
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 900;
        }

        .admin-courses-form {
          display: grid;
          gap: 0.9rem;
        }

        .admin-courses-grid {
          display: grid;
          gap: 0.9rem;
        }

        .admin-courses-form label {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-courses-form input,
        .admin-courses-form select,
        .admin-courses-form textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          font: inherit;
          outline: none;
        }

        .admin-courses-form textarea {
          min-height: 104px;
          resize: vertical;
        }

        .admin-courses-file-input {
          background: #f8fafc;
          cursor: pointer;
        }

        .admin-courses-help {
          color: #64748b;
          font-size: 0.78rem;
          line-height: 1.5;
        }

        .admin-courses-preview {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f1f5f9;
        }

        .admin-courses-module-drafts {
          display: grid;
          gap: 0.55rem;
        }

        .admin-courses-module-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .admin-courses-module-row input {
          flex: 1;
        }

        .admin-courses-small-btn {
          border: 0;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          background: #e8eef6;
          color: #003366;
          cursor: pointer;
          font-weight: 800;
        }

        .admin-courses-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-courses-primary,
        .admin-courses-secondary,
        .admin-courses-danger {
          border: 0;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-weight: 800;
          cursor: pointer;
        }

        .admin-courses-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-courses-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-courses-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .admin-courses-module-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
          display: grid;
          gap: 0.55rem;
        }

        .admin-courses-module-list li {
          border: 1px solid #dbe3ec;
          border-radius: 8px;
          background: #f8fafc;
          padding: 0.7rem 0.8rem;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
        }

        @media (min-width: 760px) {
          .admin-courses-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .admin-courses-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-courses-search {
            width: 100%;
          }

          .admin-courses-header {
            padding: 1.2rem;
          }
        }
      `}</style>

      <div className="admin-courses-page">
        <div className="admin-courses-actions-bar">
          <button className="admin-courses-big-btn green" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faBookOpen} />
            Add public course
          </button>
          <button className="admin-courses-big-btn" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faPlus} />
            New Course
          </button>
          <button className="admin-courses-big-btn" type="button" onClick={() => alert("Excel import will be added after upload support.")}>
            <FontAwesomeIcon icon={faFileImport} />
            Import Courses (Excel)
          </button>
        </div>

        <section className="admin-courses-panel">
          <div className="admin-courses-header">
            <div>
              <h2>Public Courses</h2>
              <p>Manage the courses that appear on the public study page.</p>
            </div>
            <button className="admin-courses-primary" type="button" onClick={openAddForm}>
              Add public course
            </button>
          </div>

          <div className="admin-courses-toolbar">
            <div className="admin-courses-count">
              Showing <strong>{filteredCourses.length}</strong> of <strong>{courses.length}</strong> public courses
            </div>
            <label className="admin-courses-search-wrap">
              Search courses:
              <input
                className="admin-courses-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {loading && <div className="admin-courses-empty">Loading courses...</div>}
          {error && <div className="admin-courses-empty">{error}</div>}
          {!loading && !error && courses.length === 0 && (
            <div className="admin-courses-empty">No courses in the database yet.</div>
          )}

          {!loading && !error && courses.length > 0 && (
            <div className="admin-courses-table-wrap">
              <table className="admin-courses-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Lessons</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>
                        {course.image_url ? (
                          <img className="admin-courses-image" src={resolveImageUrl(course.image_url)} alt="" />
                        ) : (
                          "No image"
                        )}
                      </td>
                      <td>{getCourseTitle(course)}</td>
                      <td>{course.category || "Uncategorized"}</td>
                      <td>{course.description || "No description"}</td>
                      <td>{course.modules_count || course.module_count || 0}</td>
                      <td>
                        <div className="admin-courses-row-actions">
                          <button className="admin-course-action edit" type="button" onClick={() => startEdit(course)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            Edit
                          </button>
                          <button className="admin-course-action curriculum" type="button" onClick={() => openCurriculum(course)}>
                            <FontAwesomeIcon icon={faListUl} />
                            Curriculum
                          </button>
                          <button className="admin-course-action delete" type="button" onClick={() => handleDelete(course.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete
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

        {formOpen && (
          <div className="admin-courses-modal-backdrop" role="presentation" onClick={closeForm}>
            <section className="admin-courses-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-courses-modal-head">
                <h2>{editingId ? "Edit public course" : "Add public course"}</h2>
                <button className="admin-courses-close" type="button" onClick={closeForm} aria-label="Close course form">
                  x
                </button>
              </div>

              <form className="admin-courses-form" onSubmit={handleSubmit}>
                <div className="admin-courses-grid">
                  <label>
                    Course title
                    <input name="title" value={form.title} onChange={handleChange} required />
                  </label>
                  <label>
                    Category
                    <select name="category" value={form.category} onChange={handleChange}>
                      <option>Development</option>
                      <option>Backend</option>
                      <option>IoT</option>
                      <option>Design</option>
                      <option>Security</option>
                      <option>Infrastructure</option>
                    </select>
                  </label>
                  <label>
                    Course image
                    <input
                      className="admin-courses-file-input"
                      type="file"
                      accept="image/*"
                      onChange={(event) => setForm({ ...form, image: event.target.files?.[0] || null })}
                    />
                    <span className="admin-courses-help">Choose an image from your computer.</span>
                  </label>
                </div>

                {(form.image || form.image_url) && (
                  <img
                    className="admin-courses-preview"
                    src={form.image ? URL.createObjectURL(form.image) : resolveImageUrl(form.image_url)}
                    alt="Course preview"
                  />
                )}

                <label>
                  Description
                  <textarea name="description" value={form.description} onChange={handleChange} />
                </label>

                {!editingId && (
                  <label>
                    First curriculum modules
                    <div className="admin-courses-module-drafts">
                      {form.modules.map((module, index) => (
                        <div className="admin-courses-module-row" key={`module-${index}`}>
                          <input
                            value={module}
                            onChange={(event) => updateModuleDraft(index, event.target.value)}
                            placeholder={`Module ${index + 1}`}
                          />
                          {form.modules.length > 1 && (
                            <button className="admin-courses-small-btn" type="button" onClick={() => removeModuleDraft(index)}>
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button className="admin-courses-small-btn" type="button" onClick={addModuleDraft}>
                        Add module
                      </button>
                    </div>
                  </label>
                )}

                <div className="admin-courses-actions">
                  <button className="admin-courses-primary" type="submit" disabled={saving}>
                    {saving ? "Saving..." : editingId ? "Update Course" : "Save Course"}
                  </button>
                  <button className="admin-courses-secondary" type="button" onClick={closeForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          </div>
        )}

        {curriculumCourse && (
          <div className="admin-courses-modal-backdrop" role="presentation" onClick={closeCurriculum}>
            <section className="admin-courses-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-courses-modal-head">
                <h2>Curriculum: {getCourseTitle(curriculumCourse)}</h2>
                <button className="admin-courses-close" type="button" onClick={closeCurriculum} aria-label="Close curriculum">
                  x
                </button>
              </div>

              <form className="admin-courses-form" onSubmit={handleAddModule}>
                <label>
                  Module title
                  <input value={moduleTitle} onChange={(event) => setModuleTitle(event.target.value)} placeholder="Introduction" />
                </label>
                <div className="admin-courses-actions">
                  <button className="admin-courses-primary" type="submit">
                    Add Module
                  </button>
                  <button className="admin-courses-secondary" type="button" onClick={closeCurriculum}>
                    Done
                  </button>
                </div>
              </form>

              {modulesLoading && <div className="admin-courses-empty">Loading curriculum...</div>}
              {!modulesLoading && modules.length === 0 && (
                <div className="admin-courses-empty">No modules have been added for this course yet.</div>
              )}
              {!modulesLoading && modules.length > 0 && (
                <ul className="admin-courses-module-list">
                  {modules.map((module) => (
                    <li key={module.id}>
                      <span>
                        {module.order_number}. {module.title}
                      </span>
                      <button className="admin-courses-danger" type="button" onClick={() => handleDeleteModule(module.id)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
