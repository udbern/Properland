import Brand from "@/components/Brand/brand";
import Hero from "./_components/hero";
import Intro from "./_components/intro";
import Process from "./_components/process";
import Space from "./_components/space";
import Agents from "../agents/_component/Agents";
import Stats from "../../components/Stats/stats"
import Review from "../../components/Review/review";
export default function AboutPage() {
  return (
    <div>
      <Hero />
      <Intro/>
      <Process/>
      <Review/>
      <Space/>
      <Stats/>
      <Agents/>
      <Brand/>
    </div>
  );
}