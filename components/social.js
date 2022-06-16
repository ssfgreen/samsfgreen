import Image from "next/image"

export default function Social(props) {
  return <div class="flex flex-row space-x-2 items-center">
    <a className="flex h-fit grey-mid" href="https://www.instagram.com/samsfgreen/" target="_blank" aria-label="">
      <Image src="/icons/instagram.svg" height={23} width={23} />
    </a>
    <a className="flex h-fit grey-mid" href="https://www.linkedin.com/in/samsfgreen/" target="_blank" aria-label="">
      <Image src="/icons/linkedin.svg" height={23} width={23} />
    </a>
    { /* TODO: Make sure icons work responsively on Mobile} */ }
    <button className="outline highlight sm:flex hidden text-highlight rounded-full px-3 py-1">Contact</button>
  </div>
}

