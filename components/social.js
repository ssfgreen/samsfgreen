import Image from "next/image"
import Link from "next/link"

export default function Social({social=true, contact=true}) {
  return <div class="flex flex-row space-x-2 items-center">
    <a className="flex h-fit grey-mid" href="https://www.instagram.com/samsfgreen/" target="_blank" aria-label="">
      <Image src="/icons/instagram.svg" height={23} width={23} />
    </a>
    <a className="flex h-fit grey-mid" href="https://www.linkedin.com/in/samsfgreen/" target="_blank" aria-label="">
      <Image className="hover:highlight" src="/icons/linkedin.svg" height={23} width={23} />
    </a>
    { /* TODO: Make sure icons work responsively on Mobile} */ }
    <Link href='/contact'>
      <button className={`hover:text-secondary outline sm:flex hidden text-grey-dark rounded-full px-3 py-1 ${!contact && 'sm:hidden'}`}>Contact</button>
    </Link>
  </div>
}

