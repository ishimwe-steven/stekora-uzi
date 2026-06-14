# Stekora Tech Academy

React, Node.js, Express.js, and MySQL starter for the Stekora Tech Academy website, student portal, admin portal, shop, final exam flow, and certificate verification system.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `backend/.env.example` to `backend/.env` and update the MySQL details.

3. Import `backend/scripts/schema.sql` in phpMyAdmin or MySQL.

4. Start the frontend and backend together:

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5001/api/health`

You can also run them separately:

```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

## EmailJS Contact Form

1. Copy `frontend/.env.example` to `frontend/.env`.
2. In EmailJS, connect the email account that should receive contact requests.
3. Create a main contact template and set its recipient to your Stekora Tech email.
4. Use these template variables: `{{name}}`, `{{email}}`, `{{phone}}`, `{{service}}`, `{{message}}`, and `{{reply_to}}`.
5. Create a customer confirmation template with its **To Email** field set to `{{email}}`.
6. Put the EmailJS service ID, admin template ID, customer template ID, and public key in `frontend/.env`.
7. Use `VITE_EMAILJS_CUSTOMER_TEMPLATE_ID` for the customer confirmation template.
8. Restart the frontend after changing `.env`.

## Main Routes

- Public website: `#/`, `#/services`, `#/study`, `#/jobs`, `#/about`, `#/contact`, `#/shop`
- Login: `#/login`
- Student portal: `#/student`
- Admin portal: `#/admin`
- Certificate verification: `#/certificate/STK-2026-001`

## Backend API Structure

- `/api/auth`
- `/api/students`
- `/api/courses`
- `/api/final-exam`
- `/api/products`
- `/api/admin`

## Frontend Structure

- `frontend/src/components/public` - Navbar, Footer, FloatingActions, cards, and shared public UI.
- `frontend/src/components/student` - Student sidebar, progress cards, certificate cards, and quiz blocks.
- `frontend/src/components/admin` - Admin sidebar, topbar, table, search box, modal, course form, and question form.
- `frontend/src/layouts` - SiteLayout, StudentLayout, and AdminLayout.
- `frontend/src/pages/public` - Home, Services, Courses, Jobs, About, Contact, Shop, VerifyCertificate, and Login.
- `frontend/src/pages/student` - StudentDashboard, StudentModuleView, FinalExamPage, and StudentCertificates.
- `frontend/src/pages/admin` - Overview, Courses, Modules, Materials, Assessments, Final Exam, Exam Submissions, Students, Products, Certificates, and Settings.
- `frontend/src/services` - API helper files separated by domain.
- `frontend/src/utils` - Image, YouTube, and date helper functions.
