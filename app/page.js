import Footer from "./components/footer";
import InfiniteComments from "./components/infiniteComment";
import Scroll from "./components/scroll";

export default function Home() {
  return (
    <div>
      <Scroll/>
      <InfiniteComments/>
      <Footer/>
    </div>
  )
}
