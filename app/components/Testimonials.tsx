"use client"
import React from 'react'
import FeedbackCard from './FeedbackCard';
import Carousel from "nuka-carousel";


const feedback = [
  {
      id: "feedback-1",
      text: "I have gained a lot from my sessions with Jenn. She has really helped me to shift my mindset by asking me to express my desires and dreams step-by-step, instead of focusing on the situations that I do not want. She has helped me to accept who I am in a gentle manner, rephrasing the questions when necessary. She is nice and patient with me while I consider her thought-provoking questions. I like her very much.",
      name: "Ada",
      country: "Vietnam",
  },
  {
      id: "feedback-2",
      text: "Before coming to see Jen I had never experienced any coaching sessions before. I love the way that Jenn listens, takes notes and investigates my situation step-by-step. I feel like I am being listened to by someone who can understand. I felt nervous before our first sessions began but Jen listened well and it was much easier than I had expected. Thank you for spending time with me and guiding me step-by-step.",
      name: "Valiant",
      country: "Country",

  },
  {
      id: "feedback-3",
      text: "My session with Jenn provided me with a valuable insight and perspective with my current situation. Her approach and style helped me to ponder deeper and reflect on how I will apply these realizations and learnings in the future. It was indeed a worthwhile session.",
      name: "Camille De Leon",
      country: "Country",
  },
  {
      id: "feedback-4",
      text: "Our first session was very helpful and effective. I could sound off my goals.",
      name: "Agnes", 
      country: "Country",
  },
  {
    id: "feedback-5",
   text: "Jenn was very open and willing to listen to me. She took proper record of my story and sent a follow email with possible next steps. What I appreciated most was her ability to keep the conversation going and come to certain conclusions that did make sense to me.",
   name: "Catherine",
   country: "Country",   
  },
  {
    id: "feedback-6",
      text:"I felt so relaxed and supported by Jenn. It was invaluable to be able to talk to and get a different perspective on my thoughts and feelings. I can now reassess and plan things much more clearly.", 
      name: "Clasina",
      country: "Country",
  },
  {
    id: "feedback-7",
      text: "It was so easy to talk with Jenn and so before I knew it, I was having some very profound insights into all of the blockages that were preventing me from fulfilling my full potential.",
      name: "Chris LaVigne",
      country: "Country",   
  }

]

const Testimonials = () => (
  <section
    id="clients"
    className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2
        className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full`}
      >
        What People are <br className="sm:block hidden" /> saying about me
      </h2>
      <div className="w-full md:mt-0 mt-6">
  
      </div>
    </div>
    <Carousel autoplay autoplayInterval={6000} wrapAround={true}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;