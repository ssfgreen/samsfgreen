export default function SectionHeader(props) {
  const {title, description} = props
  return <div className="flex flex-col py-4 text-grey-dark items-center">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
}