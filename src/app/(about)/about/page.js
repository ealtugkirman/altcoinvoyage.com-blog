import AboutCoverSection from "@/src/components/About/AboutCoverSection";
// import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About AltcoinVoyage.com",
  description: `Welcome To AltcoinVoyage.Com
where innovation meets insight in the dynamic world of alternative cryptocurrencies.
Established with a passion for navigating the ever-evolving crypto seas, AltcoinVoyage is your compass for a timeless journey through the digital financial landscape.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      {/* <Skills /> */}
      <div className="flex">
        {" "}
        <h2 className="mt-8 text-center justify-center flex font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
          <Link href="/contact" className="">
            Reach out to us from{" "}
            <span className="underline underline-offset-6">here</span>
          </Link>{" "}
        </h2>
      </div>
    </>
  );
}
