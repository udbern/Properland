import Featured from "@/components/FeaturedProperties/featured";
import Hero from "@/components/Hero/hero";
import Intro from "@/components/Intro/intro";
import Why from "@/components/WhyChooseUS/why";
import Baner from "@/components/Banner/banner";
import Services from "@/components/Services/services";
import Review from "@/components/Review/review";
import Neighborhood from "@/components/Neighborhood/Neighborhood";
import Blog from "@/components/LatestBlog/blog";


export const revalidate = 2

export default function Home() {
  return (
    <div>
    <Hero />
    <Intro />
    <Featured/>
    <Why/>
    <Baner/>
    <Services/>
    <Review/>
    <Neighborhood/>
    <Blog/>
    </div>
  )
}