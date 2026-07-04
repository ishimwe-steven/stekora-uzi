import stevoPhoto from "../../assets/image/stevo.png";
import codePhoto from "../../assets/image/code.jpeg";
import crestlinePhoto from "../../assets/image/crestline.png";

const teamMembers = [
  {
    name: "Steven",
    role: "CEO & Founder",
    bio: "Leads overall vision, projects and partnerships.",
    photo: "",
  },
  {
    name: "Tabitha",
    role: "Chief Technology Officer",
    bio: "Oversees technology choices and engineering quality.",
    photo: "",
  },
  {
    name: "Stekora Team",
    role: "Developers & Mentors",
    bio: "Collaborate on client work and student projects.",
    photo: "",
  },
];

const partners = [
  {
    name: "Code Rwanda Tech",
    logo: codePhoto,
    website: "https://coderwanda.net.rw/",
  },
  {
    name: "Crestline Journeys",
    logo: crestlinePhoto,
    website: "https://www.crestjourneys.com/",
  },
  {
    name: "Nadev Solution",
    icon: "👤",
    website: "https://stekoratech.com/#/about",
  },
  
];

export default function About() {
  return (
    <>
      <style>{`
        :root {
          --richblue: #003366;
          --palegray: #f5f5f5;
          --lightgray: #9ca3af;
        }

        .about-page {
          background: var(--palegray);
          min-height: 100vh;
          padding: 3rem 1rem;
        }

        .about-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .about-top {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .about-box {
          background: #ffffff;
          border-radius: 0.75rem;
          padding: 1.5rem 1.7rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
        }

        .about-box h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0 0 0.6rem;
        }

        .about-box p {
          font-size: 0.85rem;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        .team-section {
          background: #fbfbfb;
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .team-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--richblue);
          margin: 0 0 0.5rem;
        }

        .team-sub {
          font-size: 0.9rem;
          color: #4b5563;
          max-width: 40rem;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .team-grid {
          display: grid;
          gap: 1.5rem;
        }

        .team-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 1.8rem 1.4rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }

        .team-avatar {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          border: 3px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          color: #9ca3af;
          background: #f8fafc;
          overflow: hidden;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--richblue);
        }

        .team-role {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .team-bio {
          font-size: 0.8rem;
          color: #9ca3af;
          line-height: 1.5;
        }

        .partners-strip {
          margin-top: 1rem;
          padding: 2rem 1rem 0;
          text-align: center;
        }

        .partners-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--richblue);
          margin-bottom: 1.5rem;
        }

        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          align-items: center;
        }

        .partner-card {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          padding: 0.75rem 1.2rem;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .partner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          border-color: var(--richblue);
        }

        .partner-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e7f5f3;
          color: #0f766e;
          font-size: 1.2rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        .partner-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .partner-name {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.85rem;
          font-weight: 700;
          color: #4b5563;
        }

        .external-icon {
          font-size: 0.85rem;
          color: #9ca3af;
        }

        .partner-card:hover .partner-name,
        .partner-card:hover .external-icon {
          color: var(--richblue);
        }

        @media (min-width: 768px) {
          .about-top {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .team-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding: 2rem 1.2rem;
          }

          .partner-card {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="about-page">
        <div className="about-container">
          <div className="about-top">
            <div className="about-box">
              <h3>Our Vision</h3>
              <p>
                To be a reliable technology partner to our clients, delivering
                modern digital solutions for both local and international needs.
              </p>
            </div>

            <div className="about-box">
              <h3>Our Mission</h3>
              <p>
                To solve business challenges with innovative software, embedded
                systems and research while empowering young talent through
                practical innovation and mentorship.
              </p>
            </div>

            <div className="about-box">
              <h3>Strategic Driving Lines</h3>
              <p>
                Continuous quality improvement, strong customer support and
                partnerships that help us deliver reliable products and services
                to every client we serve.
              </p>
            </div>
          </div>

          <section className="team-section">
            <h2 className="team-title">Our Awesome Team Of Engineers &amp; Staff</h2>

            <p className="team-sub">
              Stekora Tech works with skilled professionals and partners to
              deliver software and electronics solutions in Rwanda and beyond.
            </p>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <div className="team-card" key={member.name}>
                  <div className="team-avatar">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>

                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-bio">{member.bio}</div>
                </div>
              ))}
            </div>

            <div className="partners-strip">
              <div className="partners-label">Our Partners</div>

              <div className="partners-logos">
                {partners.map((partner) => (
                  <a
                    className="partner-card"
                    key={partner.name}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    <div className="partner-icon">
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} />
                      ) : (
                        <span>{partner.icon}</span>
                      )}
                    </div>

                    <span className="partner-name">{partner.name}</span>
                    <span className="external-icon">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}