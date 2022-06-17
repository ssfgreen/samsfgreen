import Image from 'next/image'

export default function ShowcaseCard(props) {
  const {title, description, image, index} = props
  return <div key={index} className="flex flex-row sm:w-1/2 w-full sm:p-3 px-0 my-3 text-grey-dark">
    <div className='w-28 h-28 mr-3'>
      <Image className='w-28 h-28 mr-3'
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