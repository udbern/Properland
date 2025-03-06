import Hero from "./_component/hero";
import PropertyDetails from "./_component/property";
import Deals from "./_component/deal";

export default function page() {
  return (
    <div>
        <Hero/>
        <PropertyDetails/>
        <Deals/>
    </div>
  )
}