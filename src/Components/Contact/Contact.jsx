import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5b2eef8a-e4b6-485d-8e89-ac710115ddf0");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message)
        //   setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

  return (
    <div className='contact'>
        <div id='contact' className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I am currently available to take on new projects, so feel free to talk about anything you wnat me to work on.You can contact anytime.</p>
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>rishabh.jain260303@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>Tulsi nagar, Nagpur, Maharashtra, India</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write you message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message' id=""></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact