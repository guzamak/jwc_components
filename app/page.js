import Footer from "./components/footer";
import InfiniteComments from "./components/infiniteComment";
import Scroll from "./components/scroll";
import Hero from "./components/hero";
import DressBox from "./components/dressBox";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Nav/>
      <Hero />
      <Scroll/>
      <DressBox />
      <InfiniteComments/>
      <Footer/>
    </div>
  )
}
