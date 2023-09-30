
import SectionTitle from "../../../components/SectionTitle/SectionTitle"


const ChefRecommends = () => {
  return (
    <section className="mt-20">
        <section>
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try"></SectionTitle>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
        {/* <ChefCard name={name}></ChefCard> 
        <ChefCard></ChefCard>
        <ChefCard></ChefCard> */}
        </div>

    </section>
  )
}

export default ChefRecommends