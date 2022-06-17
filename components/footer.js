import Social from "./social"

export default function Footer({social=true, contact=true}) {
  return (
    <div className="flex justify-center pb-20">
      <Social social={social} contact={contact}/>
    </div>
  )
}