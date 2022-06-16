import Image from 'next/image'

export default function ShowcaseCard(props) {
  const {title, description, image} = props
  return <div className="flex flex-row sm:w-1/2 w-full py-5 px-5 text-grey-dark items-start">
    <div className='w-28 h-28 pr-3'>
      <Image className='w-28 h-28 pr-3'
        src={image.src}
        alt={image.alt}
        width='110'
        height='110'
      ></Image>
    </div>
    <div className="flex flex-col justify-start">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    
  </div>
}