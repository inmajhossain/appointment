import GetAppointment from "../components/GetAppointment";
import AdminAppointments from "../components/AdminAppointments";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
export default function Home() {
  return (
    <div>
      <GetAppointment />
      <AdminAppointments />
      <SignUp />
      <SignIn />
    </div>
  );
}
