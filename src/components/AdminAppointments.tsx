"use client";

// components/AdminAppointments.tsx
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pogiiugggbxjexbqkewj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZ2lpdWdnZ2J4amV4YnFrZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA0ODIsImV4cCI6MjA1ODE1NjQ4Mn0.6qEz1yzQ4W46c9AoDk2tikComRD8wFRiicwxkB4wmDQ";
const supabase = createClient(supabaseUrl, supabaseKey);

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState("");

  const fetchAppointments = async () => {
    const { data, error } = await supabase.from("appointments").select("*");

    if (error) {
      setError("Error fetching appointments.");
    } else {
      setAppointments(data);
    }
  };

  const deleteAppointment = async (id) => {
    const { error } = await supabase.from("appointments").delete().eq("id", id);

    if (error) {
      setError("Error deleting appointment.");
    } else {
      fetchAppointments(); // Refresh the list
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <section className="p-4 w-[1280px] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Admin - Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border border-gray-300 p-2">{appointment.name}</td>
              <td className="border border-gray-300 p-2">
                {appointment.email}
              </td>
              <td className="border border-gray-300 p-2">
                {appointment.mobile}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminAppointments;
