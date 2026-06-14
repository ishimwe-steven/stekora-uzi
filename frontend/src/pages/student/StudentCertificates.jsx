import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faCertificate, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import CertificateTemplate from "../../components/student/CertificateTemplate";
import StudentLayout from "../../layouts/StudentLayout";
import { getStudentCertificates } from "../../services/studentApi";

export default function StudentCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    loadCertificates();
  }, []);

  async function loadCertificates() {
    try {
      setLoading(true);
      setError("");
      const data = await getStudentCertificates();
      setCertificates(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load certificates");
    } finally {
      setLoading(false);
    }
  }

  return (
    <StudentLayout title="My Certificates">
      <style>{`
        .student-certificates-grid {
          display: grid;
          gap: 1rem;
        }

        .student-certificate-card {
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-top: 5px solid #facc15;
          border-radius: 8px;
          padding: 1.3rem;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
        }

        .student-certificate-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: #fef3c7;
          color: #92400e;
          margin-bottom: 0.8rem;
        }

        .student-certificate-card h2 {
          margin: 0 0 0.45rem;
          color: #10243f;
          font-size: 1.15rem;
        }

        .student-certificate-meta {
          display: grid;
          gap: 0.45rem;
          color: #64748b;
          font-size: 0.88rem;
        }

        .student-certificate-code {
          color: #003366;
          font-weight: 900;
        }

        .student-certificate-button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.85rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .student-certificate-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }

        .student-certificate-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.72);
        }

        .student-certificate-modal {
          width: min(1180px, 100%);
          max-height: calc(100vh - 2rem);
          overflow: auto;
          background: #ffffff;
          border-radius: 8px;
          padding: 1rem;
        }

        .student-certificate-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.65rem;
          margin-bottom: 0.8rem;
        }

        @media (min-width: 760px) {
          .student-certificates-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

      {loading && <div className="student-certificate-message">Loading certificates...</div>}
      {error && <div className="student-certificate-message">{error}</div>}
      {!loading && !error && certificates.length === 0 && (
        <div className="student-certificate-message">
          No certificate has been assigned yet. Complete the course and wait for final exam approval.
        </div>
      )}

      <section className="student-certificates-grid">
        {certificates.map((certificate) => (
          <article className="student-certificate-card" key={certificate.id}>
            <div className="student-certificate-icon">
              <FontAwesomeIcon icon={faAward} size="lg" />
            </div>
            <h2>{certificate.course_title}</h2>
            <div className="student-certificate-meta">
              <span className="student-certificate-code">{certificate.certificate_code}</span>
              <span>
                <FontAwesomeIcon icon={faShieldHalved} /> Status: {certificate.status}
              </span>
              <span>Issued: {new Date(certificate.issued_date).toLocaleDateString()}</span>
            </div>
            <button
              className="student-certificate-button"
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <FontAwesomeIcon icon={faCertificate} />
              View Certificate
            </button>
          </article>
        ))}
      </section>

      {selectedCertificate && (
        <div className="student-certificate-modal-backdrop" role="presentation" onClick={() => setSelectedCertificate(null)}>
          <section className="student-certificate-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="student-certificate-modal-actions">
              <button className="student-certificate-button" type="button" onClick={() => window.print()}>
                Print / Download PDF
              </button>
              <button className="student-certificate-button" type="button" onClick={() => setSelectedCertificate(null)}>
                Close
              </button>
            </div>
            <CertificateTemplate
              studentName={selectedCertificate.student_name || localStorage.getItem("studentName") || "Student"}
              courseName={selectedCertificate.course_title}
              certificateCode={selectedCertificate.certificate_code}
              issuedDate={selectedCertificate.issued_date}
              verificationUrl={`${window.location.origin}${window.location.pathname}#/certificate/${selectedCertificate.certificate_code}`}
            />
          </section>
        </div>
      )}
    </StudentLayout>
  );
}
