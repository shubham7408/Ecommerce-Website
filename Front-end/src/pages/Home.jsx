import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"
import NewLetter from "../components/NewLetter"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <NewLetter/>
    </div>
  )
}

export default Home