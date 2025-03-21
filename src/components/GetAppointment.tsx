"use client";
// components/GetAppointment.tsx
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pogiiugggbxjexbqkewj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZ2lpdWdnZ2J4amV4YnFrZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA0ODIsImV4cCI6MjA1ODE1NjQ4Mn0.6qEz1yzQ4W46c9AoDk2tikComRD8wFRiicwxkB4wmDQ";
const supabase = createClient(supabaseUrl, supabaseKey);

const GetAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { data, error } = await supabase
      .from("appointments")
      .insert([{ name, email, mobile }]);

    if (error) {
      setError("Error submitting appointment. Please try again.");
    } else {
      setSuccess("Appointment submitted successfully!");
      setName("");
      setEmail("");
      setMobile("");
    }
  };

  return (
    <section className="p-4 w-[1280px] mx-auto mt-[50px]">
      <h2 className="text-center text-2xl font-bold mb-4">Get Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block">
            Mobile Number:
          </label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className=" lg:ml-[540px] w-[200px] bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </section>
  );
};

export default GetAppointment;
