import Agents from "./_component/Agents";
import Hero from "./_component/hero";
import Baner from "../../components/Banner/banner"
import Stats from "../../components/Stats/stats"
export default function AgentsPage() {
  return (
    <div>
      <Hero/>
      <Agents/>
      <Stats/>
      <Baner/>
    </div>
  );
}