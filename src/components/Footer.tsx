import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-[100px] lg:w-full mx-auto p-[25px] border-t-1 bg-[#f8fcfa] border-black lg:mb-[-30px]">
      {/* Brand Section */}
      <div className="flex justify-around">
        <div>
          <h2 className="text-[#5BB5A2] mt-[50px] text-lg font-semibold">
            Appiontment
          </h2>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-semibold">About</h3>
          <div className="text-gray-500 mt-[15px] flex flex-col">
            <Link href="" className="hover:text-[#5BB5A2]">
              Features
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Pricing
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Support
            </Link>
          </div>
        </div>

        {/* Blog Section (Visible on larger screens) */}
        <div className="hidden lg:flex lg:flex-col md:flex md:flex-col">
          <h3 className="font-semibold">Blog</h3>
          <div className="text-gray-500 mt-[15px] flex flex-col">
            <Link href="" className="hover:text-[#5BB5A2]">
              Products
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Technology
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Crypto
            </Link>
          </div>
        </div>

        {/* Webflow Section (Visible on larger screens) */}
        <div className="hidden lg:flex lg:flex-col md:flex md:flex-col">
          <h3 className="font-semibold">Webflow</h3>
          <div className="text-gray-500 mt-[15px] flex flex-col">
            <Link href="" className="hover:text-[#5BB5A2]">
              Styleguide
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Licensing
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Changelog
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-semibold">Social Media</h3>
          <div className="text-gray-500 mt-[15px] flex flex-col">
            <Link href="" className="hover:text-[#5BB5A2]">
              Twitter
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Facebook
            </Link>
            <Link href="" className="hover:text-[#5BB5A2]">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="lg:flex justify-between mt-8 text-center border-t-1 text-sm p-[15px] text-gray-500">
        <div>
          <p>
            © Made by <span className="text-[#5BB5A2]">Inmaj Hossain</span> -
            Powered by <span className="text-[#5BB5A2]">Next Js</span> -
            WhatsApp <span className="text-[#5BB5A2]">+8801515212670</span>
          </p>
        </div>
        <div>
          <Link href="#" className="hover:underline">
            Impressum
          </Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">
            <span className="text-[#5BB5A2]">Datenschutz</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
