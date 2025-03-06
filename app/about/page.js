import Brand from "@/components/Brand/brand";
import Hero from "./_components/hero";
import Intro from "./_components/intro";
import Process from "./_components/process";
import Space from "./_components/space";
import Agents from "../agents/_component/Agents";
import Review from "../../components/Review/review";
export default function AboutPage() {
  return (
    <div>
      <Hero />
      <Intro/>
      <Process/>
      <Review/>
      <Space/>
      <Agents/>
      <Brand/>
    </div>
  );
}