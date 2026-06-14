export default function CertificateCard({ course, code, status }) {
  return (
    <article className="card">
      <h3>{course}</h3>
      <p>{code}</p>
      <span className="verified">Status: {status}</span>
      <button>Print Certificate</button>
    </article>
  );
}
