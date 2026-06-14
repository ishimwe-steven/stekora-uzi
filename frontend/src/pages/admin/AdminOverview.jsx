import { LayoutDashboard } from "lucide-react";
import CardGrid from "../../components/public/CardGrid";
import Stat from "../../components/public/Stat";
import { adminAreas } from "../../data/siteData";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminOverview() {
  return (
    <AdminLayout title="Admin Dashboard">
      <div className="dashboard-grid">
        <Stat label="Students" value="128" />
        <Stat label="Courses" value="4" />
        <Stat label="Submissions" value="23" />
        <Stat label="Certificates" value="41" />
      </div>
      <CardGrid>
        {adminAreas.map((title) => (
          <div className="mini-card" key={title}>
            <LayoutDashboard size={20} />
            <strong>{title}</strong>
            <span>Manage {title.toLowerCase()}</span>
          </div>
        ))}
      </CardGrid>
    </AdminLayout>
  );
}
