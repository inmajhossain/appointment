"use client";
//Ei file a context er kono somporko nei, eita totally individual file for data insert or transfer korar jonno supabase e
// components/AdminAppointments.tsx
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
// Import for toast and Toaster
import toast, { Toaster } from "react-hot-toast";

const supabaseUrl = "https://pogiiugggbxjexbqkewj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZ2lpdWdnZ2J4amV4YnFrZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA0ODIsImV4cCI6MjA1ODE1NjQ4Mn0.6qEz1yzQ4W46c9AoDk2tikComRD8wFRiicwxkB4wmDQ";
const supabase = createClient(supabaseUrl, supabaseKey);
//admin ki edit kore set korbe ta define kore dite hobe
const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    //r o input thakle likhe dite hobe same vabe
    name: "",
    email: "",
    mobile: "",
  });
  //Data Fetch kore niye aste hobe website e supabase theke ei function diye
  const fetchAppointments = async () => {
    // supabase e table jei name e thakbe sei nam likhte hobe jemon ("appointments")
    const { data, error } = await supabase.from("appointments").select("*");

    if (error) {
      setError("Error fetching appointments.");
    } else {
      setAppointments(data);
    }
  };
  //website er delete button er maddhome supabase theke data delete korte hole ei function ta lagbe
  // supabase e id dhore delete hobe
  const deleteAppointment = async (id) => {
    // supabase e table jei name e thakbe sei nam likhte hobe jemon ("appointments")
    const { error } = await supabase.from("appointments").delete().eq("id", id);

    if (error) {
      setError("Error deleting appointment.");
      // Show error toast
      toast.error("Error submitting appointment. Please try again.");
    } else {
      // Show success toast
      toast.success("Your Appointment Delete Successfully!");
      fetchAppointments(); // Refresh the list
    }
  };
  //for edit Start
  const editAppointment = async (id) => {
    const { error } = await supabase
      .from("appointments")
      .update(updatedData)
      .eq("id", id);
    if (error) {
      setError("Error editing appointment.");
      // Show error toast
      toast.error("Error submitting appointment. Please try again.");
    } else {
      // Show success toast
      toast.success("Appointment Data Update Successfully!");
      setEditingAppointment(null); // Reset editing state
      //jodi r o input option thake tahole likhe dite hobe "setUpdatedData" te
      setUpdatedData({ name: "", email: "", mobile: "" }); // Reset updated data
      fetchAppointments(); // Refresh the list
    }
  };
  //for edit End
  useEffect(() => {
    fetchAppointments();
  }, []);

  // //Only for showing and deleteing
  //   return (
  //     <section className="p-4 w-[1280px] mx-auto">
  //       <h2 className="text-center text-2xl font-bold mb-4">Admin - Dashboard</h2>
  //       {error && <p className="text-red-500">{error}</p>}
  //       <table className="min-w-full border-collapse border border-gray-300">
  //         {/* Colum table extra item thakale add korte hobe jemon name, date, time, status etc. */}
  //         <thead>
  //           <tr>
  //             <th className="border border-gray-300 p-2">Name</th>
  //             <th className="border border-gray-300 p-2">Email</th>
  //             <th className="border border-gray-300 p-2">Mobile</th>
  //             <th className="border border-gray-300 p-2">Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {/* Supabase theke website e asbe Mapping hoye asbe user id dhore */}
  //           {appointments.map((appointment) => (
  //             <tr key={appointment.id}>
  //               <td className="border border-gray-300 p-2">{appointment.name}</td>
  //               <td className="border border-gray-300 p-2">
  //                 {appointment.email}
  //               </td>
  //               <td className="border border-gray-300 p-2">
  //                 {appointment.mobile}
  //               </td>
  //               {/* Colum table extra item thakale add korte hobe jemon name, email, mobile, time, status etc. */}
  //               <td className="border border-gray-300 p-2 flex gap-5">
  //                 {/* Delete korar jonnoonclick e uporer deleteAppoinment function ta call korte hobe & id diye delete korte hobe */}
  //                 <button
  //                   onClick={() => deleteAppointment(appointment.id)}
  //                   className="bg-red-500 text-white p-1 rounded"
  //                 >
  //                   Delete
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </section>
  //   );

  //for showing and deleteing and editing

  return (
    <section id="admin-database" className="p-4 w-[1280px] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Admin - Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">Actions</th>
            {/* r o table colum thakle add korte hobe jemon name, email, mobile, action, etc. */}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border border-gray-300 p-2">
                {editingAppointment === appointment.id ? (
                  <input
                    type="text"
                    value={updatedData.name}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, name: e.target.value })
                    }
                  />
                ) : (
                  appointment.name
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editingAppointment === appointment.id ? (
                  <input
                    type="email"
                    value={updatedData.email}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, email: e.target.value })
                    }
                  />
                ) : (
                  appointment.email
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editingAppointment === appointment.id ? (
                  <input
                    type="text"
                    value={updatedData.mobile}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, mobile: e.target.value })
                    }
                  />
                ) : (
                  appointment.mobile
                )}
              </td>
              {/* r o input thakle uporer moto detail likhe diye hobe jemon ta sob input field er jonno kora hoyeche "edit option er jonno" */}
              <td className="items-center justify-center border border-gray-300 p-2 flex gap-5">
                {editingAppointment === appointment.id ? (
                  <button
                    onClick={() => editAppointment(appointment.id)}
                    className="bg-blue-500 text-white py-1 px-5 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditingAppointment(appointment.id);
                      setUpdatedData({
                        name: appointment.name,
                        email: appointment.email,
                        mobile: appointment.mobile,
                        //* r o table colum thakle add korte hobe jemon name, email, mobile, action, etc.
                      });
                    }}
                    className="bg-yellow-500 text-white px-5 py-1 rounded"
                  >
                    Edit
                  </button>
                )}

                {/* For delete from supabase */}
                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="bg-red-500 text-white py-1 rounded px-5"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add the Toaster component here */}
      <Toaster />
    </section>
  );
};

export default AdminAppointments;
