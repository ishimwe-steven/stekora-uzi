import DataTable from "../../components/admin/DataTable";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminCertificates() {
  return (
    <AdminLayout title="Certificates">
      <DataTable
        columns={["Student", "Course", "Code", "Status"]}
        rows={[{ id: 1, student: "Sample Student", course: "Web Development", code: "STK-2026-001", status: "verified" }]}
      />
      <div className="list-panel">
        <button className="primary">Open Verification Link</button>
        <button>Revoke Certificate</button>
      </div>
    </AdminLayout>
  );
}
