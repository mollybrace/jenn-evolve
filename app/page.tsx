import Image from "next/image";
import Testimonials from "./components/Testimonials";
import SoundHealing from "./components/Info";
import About from "./components/About";
import Form from "./components/Form";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

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
        <ContactForm />
      </section>



     

    </div>
  );
}
