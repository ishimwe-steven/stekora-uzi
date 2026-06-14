import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faFileArrowDown, faListCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import StudentLayout from "../../layouts/StudentLayout";
import { getStudentModule } from "../../services/studentApi";
import { resolveImageUrl } from "../../utils/resolveImageUrl";

const YOUTUBE_CHANNEL_URL =
  import.meta.env.VITE_YOUTUBE_CHANNEL_URL ||
  "https://www.youtube.com/@stekoratech?sub_confirmation=1";

function youtubeEmbedUrl(url) {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/i);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function StudentModuleView({ courseId, moduleId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [youtubeConfirmed, setYoutubeConfirmed] = useState(
    localStorage.getItem("stekoraYoutubeSubscribed") === "yes"
  );

  useEffect(() => {
    loadModule();
  }, [courseId, moduleId]);

  async function loadModule() {
    try {
      setLoading(true);
      setError("");
      const response = await getStudentModule(courseId, moduleId);
      setData(response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load module");
    } finally {
      setLoading(false);
    }
  }

  function openYouTubeChannel() {
    window.open(YOUTUBE_CHANNEL_URL, "_blank", "noopener,noreferrer");
  }

  function confirmSubscription() {
    localStorage.setItem("stekoraYoutubeSubscribed", "yes");
    setYoutubeConfirmed(true);
  }

  const moduleIndex = data?.modules?.findIndex((module) => Number(module.id) === Number(moduleId)) ?? -1;
  const previousModule = moduleIndex > 0 ? data.modules[moduleIndex - 1] : null;
  const nextModule = moduleIndex >= 0 ? data.modules[moduleIndex + 1] : null;

  return (
    <StudentLayout title={data?.module?.course_title || "Course Module"}>
      <style>{`
        .student-module-shell {
          display: grid;
          gap: 1rem;
        }

        .student-module-header,
        .student-material-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          padding: 1.2rem;
        }

        .student-module-header h2,
        .student-material-card h3 {
          margin: 0 0 0.5rem;
          color: #10243f;
        }

        .student-module-header p,
        .student-material-card p {
          margin: 0;
          color: #526175;
          line-height: 1.7;
          white-space: pre-wrap;
        }

        .student-module-status {
          display: inline-block;
          margin-top: 0.8rem;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          background: #e8eef6;
          color: #003366;
          font-size: 0.78rem;
          font-weight: 800;
        }

        .student-material-video {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 0;
          border-radius: 8px;
          background: #0f172a;
        }

        .student-video-lock {
          min-height: 300px;
          display: grid;
          place-items: center;
          padding: 1.25rem;
          border-radius: 8px;
          background:
            linear-gradient(rgba(3, 15, 31, 0.82), rgba(3, 15, 31, 0.9)),
            #10243f;
          color: #ffffff;
          text-align: center;
        }

        .student-video-lock-content {
          width: min(430px, 100%);
          display: grid;
          justify-items: center;
          gap: 0.75rem;
        }

        .student-video-lock-content p {
          color: #dbeafe;
        }

        .student-video-subscribe,
        .student-video-confirm {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-video-subscribe {
          background: #ef4444;
        }

        .student-video-confirm {
          background: #22c55e;
        }

        .student-file-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.8rem;
          color: #003366;
          font-weight: 800;
          text-decoration: none;
        }

        .student-module-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .student-module-action-group {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .student-module-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.9rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-module-button.secondary {
          background: #e8eef6;
          color: #003366;
        }

        .student-module-button.green {
          background: #16a34a;
        }

        .student-module-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}</style>

      {loading && <div className="student-module-message">Loading module...</div>}
      {error && <div className="student-module-message">{error}</div>}

      {data && (
        <div className="student-module-shell">
          <section className="student-module-header">
            <h2>
              Module {data.module.order_number}: {data.module.title}
            </h2>
            <p>{data.module.category || "Course learning module"}</p>
            <span className="student-module-status">
              {Number(data.module.completed) ? "Completed" : data.latest_grade ? `Latest score: ${data.latest_grade.score}%` : "In progress"}
            </span>
          </section>

          {data.materials.length === 0 && (
            <div className="student-module-message">The admin has not uploaded learning material for this module yet.</div>
          )}

          {data.materials.map((material) => (
            <article className="student-material-card" key={material.id}>
              <h3>{material.title}</h3>
              {material.content && <p>{material.content}</p>}
              {material.youtube_url && youtubeConfirmed && (
                <iframe
                  className="student-material-video"
                  src={youtubeEmbedUrl(material.youtube_url)}
                  title={material.title}
                  allowFullScreen
                />
              )}
              {material.youtube_url && !youtubeConfirmed && (
                <div className="student-video-lock">
                  <div className="student-video-lock-content">
                    <FontAwesomeIcon icon={faLock} size="2x" />
                    <strong>Subscribe free to watch this video</strong>
                    <p>Open the Stekora Tech YouTube channel, subscribe, then confirm below.</p>
                    <button className="student-video-subscribe" type="button" onClick={openYouTubeChannel}>
                      <FontAwesomeIcon icon={faYoutube} />
                      Subscribe
                    </button>
                    <button className="student-video-confirm" type="button" onClick={confirmSubscription}>
                      I Have Subscribed
                    </button>
                  </div>
                </div>
              )}
              {material.file_url && (
                <a className="student-file-link" href={resolveImageUrl(material.file_url)} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  Open learning file
                </a>
              )}
            </article>
          ))}

          <section className="student-module-actions">
            <div className="student-module-action-group">
              {previousModule && (
                <button
                  className="student-module-button secondary"
                  type="button"
                  onClick={() => (window.location.hash = `/student/course/${courseId}/module/${previousModule.id}`)}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Previous
                </button>
              )}
              {nextModule && Number(data.module.completed) === 1 && (
                <button
                  className="student-module-button secondary"
                  type="button"
                  onClick={() => (window.location.hash = `/student/course/${courseId}/module/${nextModule.id}`)}
                >
                  Next
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              )}
            </div>

            {data.has_assessment ? (
              <button
                className="student-module-button green"
                type="button"
                onClick={() => (window.location.hash = `/student/course/${courseId}/module/${moduleId}/assessment`)}
              >
                <FontAwesomeIcon icon={faListCheck} />
                Take Assessment
              </button>
            ) : (
              <span className="student-module-message">
                Waiting for the admin to add this module assessment.
              </span>
            )}
          </section>
        </div>
      )}
    </StudentLayout>
  );
}
