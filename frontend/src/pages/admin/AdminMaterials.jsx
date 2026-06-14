import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import {
  createModuleMaterial,
  deleteModuleMaterial,
  getCourseModules,
  getCourses,
  getModuleMaterials,
  updateModuleMaterial
} from "../../services/courseApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const emptyForm = {
  title: "",
  type: "section",
  content: "",
  youtube_url: "",
  file_url: "",
  file: null
};

function getCourseTitle(course) {
  return course.title || course.name || "Untitled course";
}

function getMaterialType(material) {
  if (material.youtube_url) return "Video";
  if (material.file_url) return "File";
  return "Section";
}

export default function AdminMaterials() {
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
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
      loadMaterials(selectedModuleId);
    } else {
      setMaterials([]);
    }
  }, [selectedModuleId]);

  const selectedModule = modules.find((module) => String(module.id) === String(selectedModuleId));

  const filteredMaterials = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return materials;

    return materials.filter((material) =>
      [material.id, material.title, material.content, material.youtube_url, material.file_url, getMaterialType(material)].some((value) =>
        String(value || "").toLowerCase().includes(term)
      )
    );
  }, [materials, search]);

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

  async function loadMaterials(moduleId) {
    try {
      setError("");
      const data = await getModuleMaterials(moduleId);
      setMaterials(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load materials");
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

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function startEdit(material) {
    setEditingId(material.id);
    setForm({
      title: material.title || "",
      type: material.youtube_url ? "video" : material.file_url ? "file" : "section",
      content: material.content || "",
      youtube_url: material.youtube_url || "",
      file_url: material.file_url || "",
      file: null
    });
    setFormOpen(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!selectedModuleId) {
      alert("Please choose a module first");
      return;
    }

    if (!form.title.trim()) {
      alert("Section title is required");
      return;
    }

    setSaving(true);

    try {
      const payload = new FormData();
      payload.append("title", form.title.trim());
      payload.append("content", form.content.trim());
      payload.append("youtube_url", form.type === "video" ? form.youtube_url.trim() : "");
      payload.append("file_url", form.type === "file" ? form.file_url.trim() : "");

      if (form.type === "file" && form.file) {
        payload.append("file", form.file);
      }

      if (editingId) {
        await updateModuleMaterial(editingId, payload);
        alert("Material updated");
      } else {
        await createModuleMaterial(selectedModuleId, payload);
        alert("Material saved");
      }

      resetForm();
      setFormOpen(false);
      await loadMaterials(selectedModuleId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to save material");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this material?")) return;

    try {
      await deleteModuleMaterial(id);
      if (editingId === id) resetForm();
      await loadMaterials(selectedModuleId);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete material");
    }
  }

  return (
    <AdminLayout title="Materials">
      <style>{`
        .admin-materials-page {
          display: grid;
          gap: 1.65rem;
          padding: 0.25rem 0;
        }

        .admin-materials-actions-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-materials-big-btn {
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

        .admin-materials-big-btn.green {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 12px 24px rgba(22, 163, 74, 0.16);
        }

        .admin-materials-list-panel {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
          border: 1px solid #e2e8f0;
        }

        .admin-materials-header {
          padding: 1.55rem 1.7rem 0.8rem;
          background: #ffffff;
        }

        .admin-materials-header h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .admin-materials-header p {
          margin: 0;
          color: #64748b;
          font-size: 0.92rem;
        }

        .admin-materials-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.55);
        }

        .admin-materials-modal {
          width: min(920px, 100%);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #dfe7ef;
          box-shadow: 0 24px 64px rgba(15, 23, 42, 0.22);
        }

        .admin-materials-modal-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.35rem 1.7rem 0.5rem;
        }

        .admin-materials-close {
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

        .admin-materials-form {
          display: grid;
          gap: 0.85rem;
          padding: 0.4rem 1.7rem 1.4rem;
        }

        .admin-materials-select-row {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .admin-materials-field {
          display: grid;
          gap: 0.35rem;
          color: #334155;
          font-size: 0.82rem;
          font-weight: 800;
        }

        .admin-materials-select,
        .admin-materials-input,
        .admin-materials-textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.75rem 0.85rem;
          color: #10243f;
          background: #ffffff;
          outline: none;
          font: inherit;
        }

        .admin-materials-select {
          min-width: 170px;
          height: 52px;
        }

        .admin-materials-input {
          min-height: 52px;
        }

        .admin-materials-textarea {
          min-height: 128px;
          resize: vertical;
        }

        .admin-materials-select:focus,
        .admin-materials-input:focus,
        .admin-materials-textarea:focus,
        .admin-materials-search:focus {
          border-color: #0ea5e9;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.14);
        }

        .admin-materials-primary,
        .admin-materials-secondary {
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

        .admin-materials-primary {
          background: #003366;
          color: #ffffff;
        }

        .admin-materials-secondary {
          background: #e8eef6;
          color: #003366;
        }

        .admin-materials-form-actions {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .admin-materials-toolbar {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.45rem;
          background: #ffffff;
          flex-wrap: wrap;
        }

        .admin-materials-count {
          color: #10243f;
          font-weight: 800;
        }

        .admin-materials-search-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.35rem;
          color: #10243f;
          font-size: 1rem;
          font-weight: 800;
        }

        .admin-materials-search {
          width: min(310px, 52vw);
          height: 52px;
          border: 1px solid #aeb7c2;
          border-radius: 8px;
          padding: 0.65rem 0.8rem;
          outline: none;
          font-size: 0.95rem;
          background: #ffffff;
        }

        .admin-materials-table-wrap {
          overflow-x: auto;
        }

        .admin-materials-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #fff;
        }

        .admin-materials-table th,
        .admin-materials-table td {
          text-align: left;
          border-bottom: 1px solid #d7dde5;
          border-right: 1px solid #d7dde5;
          padding: 0.95rem 0.85rem;
          vertical-align: middle;
          font-size: 0.98rem;
          color: #0f172a;
        }

        .admin-materials-table th {
          position: relative;
          background: #20262c;
          color: #ffffff;
          white-space: nowrap;
          font-weight: 900;
          font-size: 1rem;
        }

        .admin-materials-table th::after {
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

        .admin-materials-table th:last-child,
        .admin-materials-table td:last-child {
          border-right: none;
        }

        .admin-materials-table tbody tr:nth-child(odd) {
          background: #f1f1f1;
        }

        .admin-materials-table tbody tr:nth-child(even) {
          background: #ffffff;
        }

        .admin-materials-row-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.45rem;
        }

        .admin-material-action {
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
        }

        .admin-material-action.edit {
          background: #ffc107;
          color: #0f172a;
        }

        .admin-material-action.delete {
          background: #ff3f4f;
          color: #ffffff;
        }

        .admin-materials-link {
          color: #003366;
          font-weight: 800;
          text-decoration: none;
        }

        .admin-materials-empty {
          color: #64748b;
          margin: 1rem;
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #f8fafc;
        }

        @media (max-width: 760px) {
          .admin-materials-form,
          .admin-materials-header {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          }

          .admin-materials-select-row {
            flex-direction: column;
          }

          .admin-materials-search-wrap {
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
          }

          .admin-materials-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="admin-materials-page">
        <div className="admin-materials-actions-bar">
          <button className="admin-materials-big-btn green" type="button" onClick={openAddForm}>
            <FontAwesomeIcon icon={faFileLines} />
            Add Material
          </button>
          <button className="admin-materials-big-btn" type="button" onClick={() => (window.location.hash = "/admin/modules")}>
            <FontAwesomeIcon icon={faPlus} />
            Add Module
          </button>
        </div>

        <section className="admin-materials-list-panel">
          <div className="admin-materials-toolbar">
            <div className="admin-materials-count">
              Showing <strong>{filteredMaterials.length}</strong> of <strong>{materials.length}</strong> materials
            </div>
            <label className="admin-materials-search-wrap">
              Search materials:
              <input
                className="admin-materials-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {error && <div className="admin-materials-empty">{error}</div>}
          {loading && <div className="admin-materials-empty">Loading courses...</div>}
          {!loading && courses.length === 0 && (
            <div className="admin-materials-empty">No courses yet. Create a public course first.</div>
          )}
          {!loading && courses.length > 0 && modules.length === 0 && (
            <div className="admin-materials-empty">No modules yet. Create modules for this course first.</div>
          )}
          {!loading && selectedModuleId && materials.length === 0 && (
            <div className="admin-materials-empty">No materials have been saved for this module yet.</div>
          )}

          {!loading && selectedModuleId && materials.length > 0 && (
            <div className="admin-materials-table-wrap">
              <table className="admin-materials-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Module</th>
                    <th>Type</th>
                    <th>Link/File</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMaterials.map((material) => (
                    <tr key={material.id}>
                      <td>{material.id}</td>
                      <td>{material.title}</td>
                      <td>{material.module_title || selectedModule?.title || "Module"}</td>
                      <td>{getMaterialType(material)}</td>
                      <td>
                        {material.youtube_url && (
                          <a className="admin-materials-link" href={material.youtube_url} target="_blank" rel="noreferrer">
                            Open video
                          </a>
                        )}
                        {material.file_url && (
                          <a className="admin-materials-link" href={resolveImageUrl(material.file_url)} target="_blank" rel="noreferrer">
                            Open file
                          </a>
                        )}
                        {!material.youtube_url && !material.file_url && "Paragraph"}
                      </td>
                      <td>
                        <div className="admin-materials-row-actions">
                          <button className="admin-material-action edit" type="button" onClick={() => startEdit(material)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            Edit
                          </button>
                          <button className="admin-material-action delete" type="button" onClick={() => handleDelete(material.id)}>
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
          <div className="admin-materials-modal-backdrop" role="presentation" onClick={closeForm}>
            <section className="admin-materials-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-materials-modal-head">
                <div className="admin-materials-header">
                  <h2>{editingId ? "Edit Material" : "Sections, Notes & Videos"}</h2>
                  <p>
                    Choose a course and module, then add student learning content.
                    {selectedModule ? ` Current module: ${selectedModule.title}.` : ""}
                  </p>
                </div>
                <button className="admin-materials-close" type="button" onClick={closeForm} aria-label="Close material form">
                  x
                </button>
              </div>

              <form className="admin-materials-form" onSubmit={handleSubmit}>
                <div className="admin-materials-select-row">
                  <label className="admin-materials-field">
                    Course
                    <select
                      className="admin-materials-select"
                      value={selectedCourseId}
                      onChange={(event) => {
                        setSelectedCourseId(event.target.value);
                        resetForm();
                      }}
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

                  <label className="admin-materials-field">
                    Module
                    <select
                      className="admin-materials-select"
                      value={selectedModuleId}
                      onChange={(event) => {
                        setSelectedModuleId(event.target.value);
                        resetForm();
                      }}
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

                <label className="admin-materials-field">
                  Section title
                  <input
                    className="admin-materials-input"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Section title"
                  />
                </label>

                <label className="admin-materials-field">
                  Material type
                  <select className="admin-materials-select" name="type" value={form.type} onChange={handleChange}>
                    <option value="section">Section / Paragraph</option>
                    <option value="video">YouTube Video</option>
                    <option value="file">File Upload</option>
                  </select>
                </label>

                {form.type === "video" && (
                  <label className="admin-materials-field">
                    YouTube link
                    <input
                      className="admin-materials-input"
                      name="youtube_url"
                      value={form.youtube_url}
                      onChange={handleChange}
                      placeholder="https://youtube.com/..."
                    />
                  </label>
                )}

                {form.type === "file" && (
                  <label className="admin-materials-field">
                    File
                    <input
                      className="admin-materials-input"
                      type="file"
                      onChange={(event) => setForm({ ...form, file: event.target.files?.[0] || null })}
                    />
                  </label>
                )}

                <label className="admin-materials-field">
                  Paragraph / notes
                  <textarea
                    className="admin-materials-textarea"
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    placeholder="Write section paragraphs here..."
                  />
                </label>

                <div className="admin-materials-form-actions">
                  <button className="admin-materials-primary" type="submit" disabled={saving}>
                    <FontAwesomeIcon icon={faPlus} />
                    {saving ? "Saving..." : editingId ? "Update Material" : "Save Material"}
                  </button>
                  <button className="admin-materials-secondary" type="button" onClick={closeForm}>
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
