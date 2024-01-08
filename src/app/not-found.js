"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import notfound from "../../public/404animation.json";

export default function NotFound() {
  return (
    <main className=" dark:bg-dark flex justify-center font-mr">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2 -my-12" >
          <Lottie
            alt="About AltcoinVoyage.com"
            Lottie
            animationData={notfound}
            loop={true}
          />
        </div>
        <Link
          href="/"
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        ">
          Go To Home
        </Link>
      </div>
    </main>
  );
}
