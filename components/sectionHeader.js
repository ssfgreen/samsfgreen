export default function SectionHeader(props) {
  const {title, description} = props
  return <div className="flex flex-col py-4 text-grey-dark sm:items-center items-start">
    <h2 className="text-highlight">{title}</h2>
    <p>{description}</p>
  </div>
}