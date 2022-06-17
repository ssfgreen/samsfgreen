import Image from "next/image"
import Link from "next/link"
import Social from './social'
import { useRouter } from 'next/router'

export default function Navbar(props) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return <div className="flex flex-row py-3 justify-between px-5 text-grey-dark items-center">
    <div className="sm:w-2/5 w-1/2">
    <Link href='/'>
      <a className="hover:no-underline">
        {/* <Image
          src="/images/logo_invert.png"
          alt="SG Logo"
          width='30'
          height='30'
        ></Image> */}
        <p className="text-xl text-grey-dark hover:text-secondary"><b>Sam Green</b></p>
      </a>
    </Link>
    </div>
    <div className="sm:flex hidden">
      <Link href='/'>
        <a className={`text-grey-dark px-1 mx-1 py-1 border-secondary hover:text-secondary hover:no-underline hover:border-secondary ${currentRoute === "/" && "border-b-2"}`} >Home</a>
      </Link>
      <Link href='/about'>
        <a className={`text-grey-dark px-1 mx-1 py-1 border-secondary hover:text-secondary hover:no-underline hover:border-secondary ${currentRoute === "/about" && "border-b-2"}`}>About</a>
      </Link>
      {/* <Link href='/home'>
        <a className="">Writing</a>
      </Link> */}
    </div>
    <div className="flex w-2/5 justify-end">
      <Social />
    </div>
  </div>
}