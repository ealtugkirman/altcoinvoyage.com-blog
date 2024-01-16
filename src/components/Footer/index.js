"use client";
import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../public/newLogo.png";
import Image from "next/image";
import voyage from "../../../public/altcoınvoyage.gif"
  
const Footer = () => {
  return (
    <footer className= "mt-16 justify-between font-mr px-6 md:px-24 py-4 pb-8  bg-dark   flex flex-col items-center text-light">
      <div className="border-b flex flex-row min-w-full justify-between pb-4">
        <div className="flex md:space-x-12 space-x-4 items-center">
          <Image
            src={Logo}
            alt="altcoinvyage.com logo"
            sizes="10vw"
            width={240}
            height={240}
            priority
          />
        </div>
        <div className="hidden md:flex" >
          <Image
            src={ voyage }
            alt="altcoinvyage.com logo"
            sizes="10vw"
            width={ 240 }
            height={ 240 }
            priority
          />
      </div>
        <rightfooter className="flex text-sm md:text-lg flex-row space-x-6 md:space-x-20">
          <div className="relative space-y-4 justify-center    flex-col flex">
            <span>
              <Link href="/">Home</Link>
            </span>
            <span>
              <Link href="/categories/all">Categories</Link>
            </span>
            <span>
              <Link href="/categories/all">Latest News</Link>
            </span>
          </div>
          <div className="relative space-y-4 justify-center  flex-col flex">
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
