"use client";
import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className= "mt-16 justify-between px-24 py-4 pb-8  bg-dark  dark:bg-slate-900  flex flex-col items-center text-light">
      <div className="border-b flex flex-col md:flex-row min-w-full justify-between pb-4">
        <div className="flex space-x-12 items-center">
          <Image
            src={Logo}
            alt="altcoinvyage.com logo"
            sizes="10vw"
            width={200}
            height={200}
            priority
          />
          <div className="flex flex-col">
            <h1 className="text-2xl"> AltCoinVoyage.com </h1>
            <p className="text-xl "> Your guide on crypto voyage </p>
          </div>
        </div>
        <rightfooter className="flex flex-col md:flex-row md:space-x-20">
          <div className="relative space-y-6 justify-center font-bold flex-col flex">
            <span>
              <Link href="/">Home</Link>
            </span>
            <span>
              <Link href="/categories/all">Categories</Link>
            </span>
            {/* <span>
              <Link href="/news">Latest News</Link>
            </span> */}
          </div>
          <div className="relative space-y-6 justify-center font-bold flex-col flex">
            <span>
              <Link href="/about">About Us</Link>{" "}
            </span>
            <span>
              <Link href="/privacypolicy">Privacy Policy</Link>{" "}
            </span>
            <span>
              <Link href="/contact">Contact Us</Link>{" "}
            </span>
          </div>
        </rightfooter>
      </div>
      <div className="text-light mt-4 flex">
        <p> &copy;2024 altcoinvoyage. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
