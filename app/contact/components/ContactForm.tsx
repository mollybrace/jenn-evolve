"use client"
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

    type Formprops = {
        email: string;
        message: string;
        fullname: string;
        response: string;
        contact_form: string;
      }

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState("")

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (form.current) {
        emailjs.sendForm("service_6wfnqk6", "template_c081vtn", form.current, 'fVj8ydZe__X-cKeGe').then((response) => {
          console.log(response.text);
          setEmail("")
          setFullname("")
          setMessage("")
          setSubmissionStatus("success")
    
        }).catch((error) => {
          console.log(error.text)
          setSubmissionStatus("error")
        })
       }
      }

      
  return (

    
    <div>
        <div>
            <p className='md:text-5xl text-3xl pl-6 py-6'>
            Get in touch</p>
        </div>

       
        <form 
        className='justify-around flex flex-col items-center bg-khaki-cream rounded-xl mx-4 md:mx-20 mb-10' 
        ref={form}
        onSubmit={handleSubmit}
        >

          <input 
            placeholder='Full Name...'
            type='text'
            id="fullname"
            value={fullname}
            name="fullname"
            className='mt-10 input input-lg input-bordered md:w-full max-w-lg shadow-lg mb-5 rounded-xl p-4 '
            required
            onChange={(event) => setFullname(event.target.value)}
            />


          <input  
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder='Email...'
            className='input input-lg input-bordered md:w-full max-w-lg shadow-lg mb-5 rounded-xl p-4 '
            onChange={(event) => setEmail(event.target.value)}
            required

            />
    
          <div className='flex flex-col items-center'>
            <div className='flex  justify-center'>

          <textarea
            name="message"
            value={message}
            placeholder='Message...'
            rows={10}
            cols={60}
            id="message"
            className='textarea-md textarea-bordered w-full max-w-lg border  rounded-lg shadow-lg p-5 mx-4'
            onChange={(event) => setMessage(event.target.value)}
            required
          />
            </div>
            
          </div>
        <br></br>
          <button 
          type='submit'
          className='bg-bistre m-2 border p-4 text-khaki-cream transition-all hover:bg-carmine px-6 rounded-xl shadow-xl mb-10'
          >
            Submit
          </button>
          <div>
          {submissionStatus === 'success' && <p className='text-green-500'>Form submitted successfully!</p>}
          {submissionStatus === 'error' && <p className='text-red-500'>Form submission failed. Please try again.</p>}
          </div>
  </form>
    </div>
  )
}

export default ContactForm