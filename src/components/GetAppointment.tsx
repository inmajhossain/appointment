"use client";
// SQL Code for supabase for create table
// CREATE TABLE appointments (
//   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
//   name TEXT NOT NULL,
//   email TEXT NOT NULL,
//   mobile TEXT NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
//Ei file a context er kono somporko nei, eita totally individual file for data insert or transfer korar jonno supabase e
// components/GetAppointment.tsx
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
// import For toast use
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const supabaseUrl = "https://pogiiugggbxjexbqkewj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvZ2lpdWdnZ2J4amV4YnFrZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1ODA0ODIsImV4cCI6MjA1ODE1NjQ4Mn0.6qEz1yzQ4W46c9AoDk2tikComRD8wFRiicwxkB4wmDQ";
const supabase = createClient(supabaseUrl, supabaseKey);

// Use State use kore ki ki input deya hobe form e ta bole dite hobe supabase table onujayi
const GetAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  //form e aro input ba data deyar option thakle ekhane likhte hobe.
  const [error, setError] = useState("");
  //normal success messege set korar jonno & toast use korle ei code na use lkorleo hobe
  const [success, setSuccess] = useState("");
  // Full form ta ke handle kore supabase data transfer korar jonno ei function ta likhte hobe
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    //Supabase e ekta form ache sekhane data inser koro.
    const { data, error } = await supabase
      .from("appointments")
      .insert([{ name, email, mobile }]);
    // Jodi error hoy ei massege ta dibe
    if (error) {
      setError("Error submitting appointment. Please try again.");
      // Show error toast
      toast.error("Error submitting appointment. Please try again.");
    } else {
      // Show success toast
      toast("Appointment submitted successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      //normal success massege
      setSuccess("Appointment submitted successfully!");
      setName("");
      setEmail("");
      setMobile("");
      //form e aro input ba data deyar option thakle ekhane likhte hobe.
    }
  };

  return (
    <section id="get-appointment" className="p-4 w-[1280px] mx-auto mt-[50px]">
      <h2 className="text-center text-2xl font-bold mb-4">Get Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            //ei value ta user likhbe form e
            value={name}
            //tarpor ei value ta supabase e giye inser hobe ba data transfer hobe
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
      {/* For toaster outlook */}
      <Toaster />
    </section>
  );
};

export default GetAppointment;
