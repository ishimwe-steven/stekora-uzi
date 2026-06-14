import { QRCodeSVG } from "qrcode.react";
import certificateTemplate from "../../assets/image/certificate-template.png";

function formatAwardDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function CertificateTemplate({
  studentName,
  courseName,
  certificateCode,
  issuedDate,
  verificationUrl
}) {
  return (
    <>
      <style>{`
        .stekora-certificate {
          position: relative;
          width: 100%;
          height: 100%;
          aspect-ratio: 1448 / 1086;
          container-type: inline-size;
          overflow: hidden;
          background: #ffffff;
          color: #0b2857;
          font-family: Arial, Helvetica, sans-serif;
        }

        .stekora-certificate-template {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
          user-select: none;
          pointer-events: none;
        }

        .stekora-certificate-name,
        .stekora-certificate-course,
        .stekora-certificate-date,
        .stekora-certificate-id,
        .stekora-certificate-motto,
        .stekora-certificate-qr {
          position: absolute;
          z-index: 2;
        }

        .stekora-certificate-name {
          top: 40.2%;
          left: 24.3%;
          width: 51.4%;
          height: 7.4%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c68b09;
          font-family: "Bookman Old Style", "Segoe Script", cursive;
          font-size: 4.55cqw;
          font-weight: 400;
          line-height: 1;
          text-align: center;
          text-transform: capitalize;
          white-space: nowrap;
        }

        .stekora-certificate-course {
          top: 54.6%;
          left: 24.5%;
          width: 51%;
          min-height: 5%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #102f68;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 2.75cqw;
          font-weight: 800;
          line-height: 1.1;
          text-align: center;
        }

        .stekora-certificate-date {
          top: 72.4%;
          left: 19.5%;
          width: 13.5%;
          color: #102a58;
          font-size: 1.58cqw;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
        }

        .stekora-certificate-id {
          top: 72.9%;
          left: 61.3%;
          width: 15.3%;
          color: #102a58;
          font-size: 1.50cqw;
          font-weight: 500;
          overflow-wrap: anywhere;
          text-align: center;
          white-space: nowrap;
        }

        .stekora-certificate-motto {
          top: 72.1%;
          left: 38%;
          width: 18.7%;
          height: 10.8%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #102a58;
          font-size: 1.22cqw;
          font-weight: 700;
          line-height: 1.45;
          text-align: center;
          white-space: pre-line;
        }

        .stekora-certificate-qr {
          top: 66.4%;
          left: 80.25%;
          width: 8.2%;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          padding: 0.35%;
          background: #ffffff;
        }

        .stekora-certificate-qr svg {
          width: 100%;
          height: 100%;
        }

        @media print {
  html, body {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }

  body * {
    visibility: hidden !important;
  }

  .stekora-certificate-print,
  .stekora-certificate-print * {
    visibility: visible !important;
  }

  .stekora-certificate-print {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    aspect-ratio: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    overflow: hidden !important;
  }

  .stekora-certificate-template {
    width: 100% !important;
    height: 100% !important;
    object-fit: fill !important;
  }

  @page {
    size: A4 landscape;
    margin: 0;
  }

        }
      `}</style>

      <div className="stekora-certificate stekora-certificate-print">
        <img className="stekora-certificate-template" src={certificateTemplate} alt="" />
        <div className="stekora-certificate-name">{studentName}</div>
        <div className="stekora-certificate-course">{courseName}</div>
        <div className="stekora-certificate-date">{formatAwardDate(issuedDate)}</div>
        <div className="stekora-certificate-id">{certificateCode}</div>
        <div className="stekora-certificate-motto">
          {"KEEP LEARNING\nKEEP BUILDING\nTHE FUTURE"}
        </div>
        <div className="stekora-certificate-qr">
          <QRCodeSVG value={verificationUrl} level="M" marginSize={0} />
        </div>
      </div>
    </>
  );
}
