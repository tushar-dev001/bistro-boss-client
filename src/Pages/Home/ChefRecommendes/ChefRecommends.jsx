import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import ChefCard from "../Home/Shared/ChefCard/ChefCard"


const ChefRecommends = () => {
  return (
    <section className="mt-20">
        <section>
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="Should Try"></SectionTitle>
        </section>
        <div className="flex mx-auto gap-3">
        <ChefCard></ChefCard> 
        <ChefCard></ChefCard>
        <ChefCard></ChefCard>
        </div>

    </section>
  )
}

export default ChefRecommends