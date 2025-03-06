import Process from "../about/_components/process";
import Hero from "./_component/hero";
import Intro from "./_component/intro";
import Service from "../../components/Services/services";
import Space from "../about/_components/space";

  
  export default function page() {
    return (
      <div>
        <Hero/>
        <Intro />
        <Process/>
        <Service/>
        <Space/>
      </div>
    )
  }
  
