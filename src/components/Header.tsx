"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div
      className="mx-auto w-full bg-[#06635b] sticky top-0
  "
    >
      <div className="mx-auto w-[1280px] px-[50px] py-[10px] flex items-center justify-between drop-shadow-2xl ">
        {/* Logo */}
        <div>
          <Link href={"/"}>
            <h2>Appoinment</h2>
          </Link>
        </div>
        {/* Navigation */}
        <nav className="w-[250px] flex items-center justify-between">
          <Link href="">About</Link>
          <Link href="">Doctor List</Link>
          <Link href="">Contact</Link>
          <Link href="/admin">Admin</Link>
          {/* <Link href="/admin">Admin</Link> */}
        </nav>
        {/* Button */}
        <div className="flex gap-5">
          <Link href="/book">
            <button className="bg-indigo-600 px-[25px] py-[7px] rounded-bl-2xl rounded-r-2xl border-white border-[1px]">
              Book Now
            </button>
          </Link>
          <Link href="/admin-database">
            <button className="bg-indigo-600 px-[25px] py-[7px] rounded-br-2xl rounded-l-2xl border-white border-[1px]">
              Admin Database
            </button>
          </Link>
        </div>
        {/* Theme */}

        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
