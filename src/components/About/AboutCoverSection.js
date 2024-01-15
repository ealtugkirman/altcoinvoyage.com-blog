"use client";
import Image from "next/image";
import React from "react";
// import profileCharacter from "../../../public/character.png";
import aboutanimation from "../../../public/aboutusanimation.json";
import Lottie from "lottie-react";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Lottie
          alt="About AltcoinVoyage.com"
          Lottie
          animationData={aboutanimation}
          loop={true}
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-newcolor dark:text-light mb-4 text-xl xs:text-2xl sxl:text-4xl  text-center lg:text-left">
          Welcome to AltcoinVoyage.com   </h2>
          <h3 className="font-semibold italic text-md xs:text-lg sxl:text-2xl text-base">
            where innovation meets insight in the dynamic world of alternative
            cryptocurrencies.
          </h3>
    
        <p className="font-medium mt-4 text-base">
          Established with a passion for navigating the ever-evolving crypto
          seas, AltcoinVoyage is your compass for a timeless journey through the
          digital financial landscape. <br /> At AltcoinVoyage, we are a
          dedicated team of crypto enthusiasts, analysts, and writers committed
          to providing you with a rich and informative experience. Our mission
          is to empower individuals, whether seasoned investors or newcomers,
          with the knowledge and resources needed to confidently explore and
          understand the diverse universe of altcoins.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
