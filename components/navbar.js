import Image from "next/image"

export default function Navbar(props) {
  return <div>
    <Image 
      src="/public/images/profile_image.jpeg"
      alt="Profile Image"
      width='500'
      height='500'
    ></Image>
    <a class="icon icon--fill" href="https://www.linkedin.com/in/lennyrachitsky/" target="_blank" aria-label="">
      {/* <svg viewBox="23 23 64 64">
        <use xlink:href="#linkedin-unauth-icon" width="110" height="110"></use>
      </svg> */}
      <Image src="/public/icons/instagram.svg" height={23} width={23} />
    </a>
    
  </div>
}