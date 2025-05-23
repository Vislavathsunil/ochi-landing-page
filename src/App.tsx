import About from "./Components/about";
import ClientsReview from "./Components/clientsReview";
import Eye from "./Components/eye";
import Featured from "./Components/featured";
import Footer from "./Components/footer";
import Landing from "./Components/landing";
import Marquee from "./Components/marquee";
import Navbar from "./Components/navbar";

import Readytostart from "./Components/readytostart";

// Locomotive for smooth scrolling
// import LocomotiveScroll from "locomotive-scroll";

function App() {
  return (
    <div className="w-full min-h-screen text-black bg-zinc-100">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eye />
      <Featured />
      <ClientsReview />

      <Readytostart />
      <Footer />
    </div>
  );
}

export default App;
