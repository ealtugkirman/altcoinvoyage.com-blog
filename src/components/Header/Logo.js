import Image from "next/image"
import Link from "next/link"
import profileImg from "../../../public/newLogo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-16 md:w-24 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={profileImg} alt="altocoinvoyage logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
      <div className="flex flex-col duration-1000 items-center" >
        <span className="font-bold dark:font-semibold text-lg md:text-xl">altcoinvoyage.com</span>
        <span className="font-bold dark:font-semibold text-sm md:text-xs">Your guide on crypto voyage</span>
     </div>
    </Link>
  )
}

export default Logo