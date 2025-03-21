import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <div className=" mt-[50px] mb-[50px] w-full h-[500px] bg-teal-700 flex flex-col gap-[50px] justify-center items-center">
      <h1 className="text-6xl font-bold">Page Not Found</h1>
      <button className="bg-black text-white font-bold px-6 py-3 rounded-md">
        <Link href="/">Please Go To Home Page</Link>
      </button>
    </div>
  );
}
