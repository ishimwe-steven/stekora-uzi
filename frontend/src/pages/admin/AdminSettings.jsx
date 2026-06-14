import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faGear,
  faKey,
  faMoon,
  faShieldHalved,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../layouts/AdminLayout";
import { changeAdminPassword } from "../../services/authApi";
import { getPortalTheme, setPortalTheme } from "../../utils/portalTheme";

export default function AdminSettings() {
  const [theme, setTheme] = useState(() => getPortalTheme("admin"));
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPasswords, setShowPasswords] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [saving, setSaving] = useState(false);

  const changeTheme = (nextTheme) => {
    setTheme(nextTheme);
    setPortalTheme("admin", nextTheme);
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
      const response = await changeAdminPassword({
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
    <AdminLayout title="Settings">
      <style>{settingsStyles}</style>
      <div className="account-settings">
        <section className="settings-section">
          <div className="settings-heading">
            <span className="settings-heading-icon"><FontAwesomeIcon icon={faMoon} /></span>
            <div>
              <h2>Appearance</h2>
              <p>Choose how your admin account looks on this device.</p>
            </div>
          </div>

          <div className="theme-options">
            <button className={theme === "light" ? "selected" : ""} onClick={() => changeTheme("light")}>
              <FontAwesomeIcon icon={faSun} />
              <span><strong>Light mode</strong><small>Bright and clean interface</small></span>
            </button>
            <button className={theme === "dark" ? "selected" : ""} onClick={() => changeTheme("dark")}>
              <FontAwesomeIcon icon={faMoon} />
              <span><strong>Dark mode</strong><small>Comfortable in low light</small></span>
            </button>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-heading">
            <span className="settings-heading-icon"><FontAwesomeIcon icon={faShieldHalved} /></span>
            <div>
              <h2>Change password</h2>
              <p>Confirm your current password before setting a new one.</p>
            </div>
          </div>

          <form className="password-form" onSubmit={handleSubmit}>
            {["currentPassword", "newPassword", "confirmPassword"].map((name) => (
              <label key={name}>
                {name === "currentPassword" ? "Current password" : name === "newPassword" ? "New password" : "Confirm new password"}
                <span className="password-field">
                  <FontAwesomeIcon icon={faKey} />
                  <input
                    type={showPasswords ? "text" : "password"}
                    value={form[name]}
                    minLength={name === "currentPassword" ? undefined : 8}
                    required
                    onChange={(event) => setForm({ ...form, [name]: event.target.value })}
                  />
                </span>
              </label>
            ))}

            <div className="password-actions">
              <label className="show-passwords">
                <input type="checkbox" checked={showPasswords} onChange={(event) => setShowPasswords(event.target.checked)} />
                <FontAwesomeIcon icon={showPasswords ? faEyeSlash : faEye} />
                Show passwords
              </label>
              <button className="settings-save" disabled={saving}>
                <FontAwesomeIcon icon={faKey} />
                {saving ? "Saving..." : "Update Password"}
              </button>
            </div>

            {message.text && <p className={`settings-message ${message.type}`}>{message.text}</p>}
          </form>
        </section>

        <section className="settings-section">
          <div className="settings-heading">
            <span className="settings-heading-icon"><FontAwesomeIcon icon={faGear} /></span>
            <div>
              <h2>Company profile</h2>
              <p>Public contact information used across Stekora Tech.</p>
            </div>
          </div>
          <form className="company-settings-form">
            <label>Company name<input defaultValue="Stekora Tech Academy" /></label>
            <label>Public email<input type="email" placeholder="info@stekora.tech" /></label>
            <label>Phone number<input type="tel" placeholder="+250 ..." /></label>
            <button className="settings-save" type="button">Save Company Settings</button>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
}

const settingsStyles = `
  .account-settings { max-width: 920px; display: grid; gap: 1.25rem; }
  .settings-section { background: #fff; border: 1px solid #d9e1ea; border-radius: 8px; padding: 1.5rem; }
  .settings-heading { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1.35rem; }
  .settings-heading-icon { width: 42px; height: 42px; flex: 0 0 42px; display: grid; place-items: center; border-radius: 8px; background: #e1f8fc; color: #003366; }
  .settings-heading h2 { margin: 0 0 0.25rem; font-size: 1.15rem; }
  .settings-heading p { margin: 0; color: #64748b; font-size: 0.88rem; }
  .theme-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.9rem; }
  .theme-options button { min-height: 82px; display: flex; align-items: center; gap: 0.9rem; padding: 1rem; border: 2px solid #d9e1ea; border-radius: 8px; background: transparent; color: inherit; text-align: left; }
  .theme-options button > svg { font-size: 1.4rem; color: #64748b; }
  .theme-options button.selected { border-color: #22d3ee; background: rgba(34,211,238,0.08); }
  .theme-options button.selected > svg { color: #0891b2; }
  .theme-options span { display: grid; gap: 0.2rem; }
  .theme-options small { color: #64748b; }
  .password-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .password-form > label { display: grid; gap: 0.4rem; font-weight: 700; font-size: 0.86rem; }
  .password-field { display: flex; align-items: center; gap: 0.7rem; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; background: #fff; }
  .password-field svg { color: #64748b; }
  .password-field input { width: 100%; min-height: 46px; padding: 0; border: 0 !important; outline: 0; background: transparent !important; color: inherit; }
  .password-actions { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
  .show-passwords { display: flex !important; grid-auto-flow: column; align-items: center; gap: 0.5rem !important; color: #475569; font-weight: 600 !important; }
  .show-passwords input { width: 16px; height: 16px; }
  .settings-save { min-height: 44px; display: inline-flex; align-items: center; gap: 0.55rem; padding: 0 1rem; border-radius: 8px; background: #003f78; color: #fff; font-weight: 800; }
  .settings-save:disabled { opacity: 0.65; cursor: wait; }
  .settings-message { margin: 0; padding: 0.8rem 0.9rem; border-radius: 8px; font-weight: 700; font-size: 0.86rem; }
  .settings-message.success { background: #dcfce7; color: #166534; }
  .settings-message.error { background: #fee2e2; color: #991b1b; }
  .company-settings-form { max-width: 650px; display: grid; gap: 1rem; background: transparent !important; }
  .company-settings-form label { display: grid; gap: 0.4rem; color: inherit; font-size: 0.86rem; font-weight: 700; }
  .company-settings-form input { min-height: 46px; padding: 0 0.9rem; border: 1px solid #cbd5e1; border-radius: 8px; }
  .company-settings-form .settings-save { justify-self: start; }
  @media (max-width: 620px) { .theme-options { grid-template-columns: 1fr; } }
`;
