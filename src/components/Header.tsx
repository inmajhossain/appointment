"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
//For Clerk
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
        </div>
        {/* Clerk */}
        <div className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <Link
              href={""}
              className="bg-indigo-600 px-10 py-2 rounded-bl-2xl rounded-r-2xl border-white border-[1px]"
            >
              <SignInButton />
            </Link>
            <Link
              href={""}
              className="bg-indigo-600 px-10 py-2 rounded-br-2xl rounded-l-2xl border-white border-[1px]"
            >
              <SignUpButton />
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {/* Theme */}

        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
