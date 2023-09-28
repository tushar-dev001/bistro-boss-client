
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-4/12 mx-auto text-center mb-10">
        <p className="text-yellow-600 pb-2">--- {subHeading} ---</p>
        <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
    </div>
  )
}

export default SectionTitle