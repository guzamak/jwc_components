import Footer from "./components/footer";
import InfiniteComments from "./components/infiniteComment";
import Scroll from "./components/scroll";
import Hero from "./components/hero";
import DressBox from "./components/dressBox";
import Nav from "./components/nav";
import ProproductView from "./components/productView";
import Banner from "./components/banner";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden relative">
      <Banner/>
      <Nav/>
      <Hero />
      <Scroll/>
      <ProproductView/>
      <DressBox />
      <InfiniteComments/>
      <Footer/>
    </div>
  )
}
