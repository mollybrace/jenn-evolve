import Image from "next/image";
import SoundHealing from "./components/Info";
import About from "./components/About";
import Form from "./components/Form";
import Reviews from "./components/Reviews";
import ContactForm from "./contact/components/ContactForm";
import CallToAction from "./components/CallToAction";

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
        <Reviews />
      </section>

      <section >
        <CallToAction />
      </section>



     

    </div>
  );
}
