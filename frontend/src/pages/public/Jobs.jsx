export default function Jobs() {
  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .jobs-page {
          min-height: 70vh;
          background-color: var(--palegray);
          color: var(--richblue);
        }

        .jobs-container {
          max-width: 72rem;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        .jobs-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
        }

        .jobs-subtitle {
          font-size: 0.875rem;
          color: var(--lightgray);
          margin: 0 0 1.5rem;
          line-height: 1.7;
          max-width: 46rem;
        }

        .job-box {
          border: 1px dashed var(--richblue);
          background-color: rgba(0, 51, 102, 0.1);
          padding: 1.5rem;
          border-radius: 1rem;
        }

        .job-box h2 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: var(--richblue);
        }

        .job-box p {
          font-size: 0.75rem;
          margin: 0 0 0.75rem;
          color: var(--lightgray);
          line-height: 1.7;
        }

        .job-box p.email {
          color: var(--richblue);
          margin-bottom: 0;
          font-weight: 600;
        }
      `}</style>

      <div className="jobs-page">
        <div className="jobs-container">
          <h1 className="jobs-title">Jobs &amp; Opportunities</h1>
          <p className="jobs-subtitle">
            We collaborate with developers, designers and hardware enthusiasts on
            IT and electronics projects.
          </p>

          <div className="job-box">
            <h2>No open positions right now</h2>
            <p>
              We're always happy to see strong portfolios. You can still send
              your CV and GitHub/LinkedIn, and we'll keep you in mind for future
              IT projects.
            </p>
            <p className="email">Email: info@stekoratech.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
