import Image from 'next/image'

export default function ArticleCard(props) {
  const {title, description, image, link} = props
  return <div className="flex flex-row sm:w-2/3 w-full py-5 sm:px-5 text-grey-dark items-start">
      <div className='w-28 h-28 mr-3'>
        <Image className='w-28 h-28 mr-3'
          src={image.src}
          alt={image.alt}
          width='110'
          height='110'
        ></Image>
      </div>
      <div className="flex flex-col justify-start">
        <a href={link} target="_blank"><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
    </div>
}