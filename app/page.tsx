import Image from "next/image";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import SoundHealing from "./components/SoundHealing";
import Coaching from "./components/Coaching";
import About from "./components/About";

export default function Home() {
  return (
    <div className="">
    

      <section >
        
      </section>
      <section>
        <SoundHealing />
      </section>
    
      <section >
        <About />
      </section>
    
      <section>
        <Testimonials />
      </section>

    </div>
  );
}
