import Process from "../about/_components/process";
import Hero from "./_component/hero";
import Intro from "./_component/intro";
import Service from "../../components/Services/services";
import Space from "../about/_components/space";
import Stats from "../../components/Stats/stats";
  
  export default function page() {
    return (
      <div>
        <Hero/>
        <Intro />
        <Process/>
        <Service/>
        <Space/>
        <Stats/>
      </div>
    )
  }
  
