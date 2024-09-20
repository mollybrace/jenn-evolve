import SoundHealing from "./components/Info";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CallToAction from "./components/CallToAction";
import ElevatorPitch from "./components/ElevatorPitch";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
    
  
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
