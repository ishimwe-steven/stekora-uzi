import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faKey, faMoon, faShieldHalved, faSun } from "@fortawesome/free-solid-svg-icons";
import StudentLayout from "../../layouts/StudentLayout";
import { changeStudentPassword } from "../../services/authApi";
import { getPortalTheme, setPortalTheme } from "../../utils/portalTheme";

export default function StudentSettings() {
  const [theme, setTheme] = useState(() => getPortalTheme("student"));
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [showPasswords, setShowPasswords] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [saving, setSaving] = useState(false);

  const changeTheme = (nextTheme) => {
    setTheme(nextTheme);
    setPortalTheme("student", nextTheme);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage({ type: "", text: "" });

    if (form.newPassword !== form.confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match." });
      return;
    }

    setSaving(true);
    try {
      const response = await changeStudentPassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword
      });
      setMessage({ type: "success", text: response.message });
      setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <StudentLayout title="Settings">
      <style>{studentSettingsStyles}</style>
      <div className="student-account-settings">
        <section className="student-settings-section">
          <div className="student-settings-heading">
            <span><FontAwesomeIcon icon={faMoon} /></span>
            <div><h2>Appearance</h2><p>Choose how your learning account looks on this device.</p></div>
          </div>
          <div className="student-theme-options">
            <button className={theme === "light" ? "selected" : ""} onClick={() => changeTheme("light")}>
              <FontAwesomeIcon icon={faSun} /><span><strong>Light mode</strong><small>Bright and clean interface</small></span>
            </button>
            <button className={theme === "dark" ? "selected" : ""} onClick={() => changeTheme("dark")}>
              <FontAwesomeIcon icon={faMoon} /><span><strong>Dark mode</strong><small>Comfortable in low light</small></span>
            </button>
          </div>
        </section>

        <section className="student-settings-section">
          <div className="student-settings-heading">
            <span><FontAwesomeIcon icon={faShieldHalved} /></span>
            <div><h2>Change password</h2><p>Use your current password to protect this change.</p></div>
          </div>
          <form className="student-password-form" onSubmit={handleSubmit}>
            {["currentPassword", "newPassword", "confirmPassword"].map((name) => (
              <label key={name}>
                {name === "currentPassword" ? "Current password" : name === "newPassword" ? "New password" : "Confirm new password"}
                <span className="student-password-field">
                  <FontAwesomeIcon icon={faKey} />
                  <input type={showPasswords ? "text" : "password"} value={form[name]} minLength={name === "currentPassword" ? undefined : 8} required onChange={(event) => setForm({ ...form, [name]: event.target.value })} />
                </span>
              </label>
            ))}
            <div className="student-password-actions">
              <label className="student-show-passwords">
                <input type="checkbox" checked={showPasswords} onChange={(event) => setShowPasswords(event.target.checked)} />
                <FontAwesomeIcon icon={showPasswords ? faEyeSlash : faEye} /> Show passwords
              </label>
              <button className="student-settings-save" disabled={saving}>
                <FontAwesomeIcon icon={faKey} /> {saving ? "Saving..." : "Update Password"}
              </button>
            </div>
            {message.text && <p className={`student-settings-message ${message.type}`}>{message.text}</p>}
          </form>
        </section>
      </div>
    </StudentLayout>
  );
}

const studentSettingsStyles = `
  .student-account-settings { max-width: 920px; display: grid; gap: 1.25rem; }
  .student-settings-section { background: #fff; border: 1px solid #d9e1ea; border-radius: 8px; padding: 1.5rem; }
  .student-settings-heading { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1.35rem; }
  .student-settings-heading > span { width: 42px; height: 42px; flex: 0 0 42px; display: grid; place-items: center; border-radius: 8px; background: #e1f8fc; color: #003366; }
  .student-settings-heading h2 { margin: 0 0 0.25rem; font-size: 1.15rem; }
  .student-settings-heading p { margin: 0; color: #64748b; font-size: 0.88rem; }
  .student-theme-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; }
  .student-theme-options button { min-height: 82px; display: flex; align-items: center; gap: 0.9rem; padding: 1rem; border: 2px solid #d9e1ea; border-radius: 8px; background: transparent; color: inherit; text-align: left; }
  .student-theme-options button > svg { font-size: 1.4rem; color: #64748b; }
  .student-theme-options button.selected { border-color: #22d3ee; background: rgba(34,211,238,0.08); }
  .student-theme-options button.selected > svg { color: #0891b2; }
  .student-theme-options span { display: grid; gap: 0.2rem; }
  .student-theme-options small { color: #64748b; }
  .student-password-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .student-password-form > label { display: grid; gap: 0.4rem; font-weight: 700; font-size: 0.86rem; }
  .student-password-field { display: flex; align-items: center; gap: 0.7rem; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; }
  .student-password-field svg { color: #64748b; }
  .student-password-field input { width: 100%; min-height: 46px; padding: 0; border: 0 !important; outline: 0; background: transparent !important; color: inherit; }
  .student-password-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .student-show-passwords { display: flex !important; grid-auto-flow: column; align-items: center; gap: 0.5rem !important; color: #475569; font-weight: 600 !important; }
  .student-show-passwords input { width: 16px; height: 16px; }
  .student-settings-save { min-height: 44px; display: inline-flex; align-items: center; gap: 0.55rem; padding: 0 1rem; border-radius: 8px; background: #003f78; color: #fff; font-weight: 800; }
  .student-settings-save:disabled { opacity: 0.65; cursor: wait; }
  .student-settings-message { margin: 0; padding: 0.8rem 0.9rem; border-radius: 8px; font-weight: 700; font-size: 0.86rem; }
  .student-settings-message.success { background: #dcfce7; color: #166534; }
  .student-settings-message.error { background: #fee2e2; color: #991b1b; }
  @media (max-width: 620px) { .student-theme-options { grid-template-columns: 1fr; } }
`;
