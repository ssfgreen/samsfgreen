import Image from "next/image"
import Link from "next/link"
import Social from './social'

export default function Navbar(props) {
  return <div className="flex flex-row py-2 justify-between px-5 text-grey-dark items-center">
    <div className="w-1/5">
      <Image className='rounded-full'
        src="/images/profile_image.jpg"
        alt="Profile Image"
        width='30'
        height='30'
      ></Image>
    </div>
    <div>
      <Link href='/home'>
        <a className="text-grey-dark px-2 py-1 hover:underline active:underline">Home</a>
      </Link>
      <Link href='/about'>
        <a className="text-grey-dark">About</a>
      </Link>
      {/* <Link href='/home'>
        <a className="">Writing</a>
      </Link> */}
    </div>
    <div className="flex w-1/5 justify-end">
      <Social />
    </div>
  </div>
}