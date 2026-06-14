import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faPrint } from "@fortawesome/free-solid-svg-icons";
import CertificateTemplate from "../../components/student/CertificateTemplate";
import { verifyFinalExamCertificate } from "../../services/finalExamApi";

export default function VerifyCertificate({ code }) {
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCertificate();
  }, [code]);

  async function loadCertificate() {
    if (!code) {
      setError("Certificate code is missing");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await verifyFinalExamCertificate(code);
      setCertificate(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "Certificate not found");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        .verify-certificate-page {
          min-height: 100vh;
          padding: 2rem 1rem 4rem;
          background: #f4f6f9;
        }

        .verify-certificate-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }

        .verify-certificate-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem 1.15rem;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          background: #ffffff;
          color: #10243f;
          flex-wrap: wrap;
        }

        .verify-certificate-result {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 900;
        }

        .verify-certificate-result.verified svg {
          color: #16a34a;
        }

        .verify-certificate-result.invalid svg {
          color: #dc2626;
        }

        .verify-certificate-print-button {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 0;
          border-radius: 7px;
          padding: 0 0.85rem;
          background: #003366;
          color: #ffffff;
          cursor: pointer;
          font-weight: 800;
        }

        .verify-certificate-message {
          padding: 1rem;
          border: 1px dashed #94a3b8;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
        }
      `}</style>

      <main className="verify-certificate-page">
        <div className="verify-certificate-container">
          {loading && <div className="verify-certificate-message">Checking certificate...</div>}

          {!loading && error && (
            <div className="verify-certificate-status">
              <div className="verify-certificate-result invalid">
                <FontAwesomeIcon icon={faCircleXmark} />
                {error}
              </div>
            </div>
          )}

          {!loading && certificate && (
            <>
              <div className="verify-certificate-status">
                <div className="verify-certificate-result verified">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  Verified certificate issued by Stekora Tech
                </div>
                <button className="verify-certificate-print-button" type="button" onClick={() => window.print()}>
                  <FontAwesomeIcon icon={faPrint} />
                  Print / Download PDF
                </button>
              </div>

              <CertificateTemplate
                studentName={certificate.studentName}
                courseName={certificate.courseName}
                certificateCode={certificate.certificateCode}
                issuedDate={certificate.issuedDate}
                verificationUrl={`${window.location.origin}${window.location.pathname}#/certificate/${certificate.certificateCode}`}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
