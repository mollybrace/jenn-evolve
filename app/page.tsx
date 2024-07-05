import SoundHealing from "./components/Info";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CallToAction from "./components/CallToAction";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import ElevatorPitch from "./about/components/ElevatorPitch";
import CCC from "./components/CCC";

export default function Home() {
  return (
    <div className="">
    
      <section>
        <CCC />
      </section>
      <section >
        <Banner />
      </section>

      <section>
        <ElevatorPitch />
      </section>
      
      <section>
        <SoundHealing />
      </section>
    
      <section >
        <About />
      </section>
    
      <section>
        <Reviews />
      </section>

      <section >
        <CallToAction />
      </section>



     

    </div>
  );
}
