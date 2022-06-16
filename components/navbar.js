import Image from "next/image"
import Link from "next/link"

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
    <div class="flex flex-row space-x-2 items-center w-1/5 justify-end">
      <a className="flex h-fit grey-mid" href="https://www.instagram.com/samsfgreen/" target="_blank" aria-label="">
        <Image src="/icons/instagram.svg" height={23} width={23} />
      </a>
      <a className="flex h-fit grey-mid" href="https://www.linkedin.com/in/samsfgreen/" target="_blank" aria-label="">
        <Image src="/icons/linkedin.svg" height={23} width={23} />
      </a>
      <button className="outline highlight text-highlight rounded-full px-3 py-1">Contact</button>
      {/* <a className="w-full" href="https://www.linkedin.com/in/samsfgreen/" target="_blank" aria-label="">
        <Image src="/icons/twitter.svg" height={23} width={23} />
      </a> */}
    </div>
    
  </div>
}