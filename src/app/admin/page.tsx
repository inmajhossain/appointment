// pages/admin/dashboard.tsx
import withAdminAuth from "../../components/withAdminAuth";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className=" text-3xl font-bold">Admin Dashboard</h1>
      <p>
        Welcome to the admin dashboard. Here you can manage appointments and
        users.
      </p>
      {/* Add your admin functionalities here */}
    </div>
  );
};

export default AdminDashboard;
