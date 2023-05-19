import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';
import MotionComponent from '../motionComponent/MotionComponent';
import { verticalVariant } from '../../constants/constant';
import { MainColorContext } from '../../App';
import contactImage from '../../assets/images/ukr_made.webp';
import AlertMessage from '../alertMessage/AlertMessage';
import Loader from '../loader/Loader';


function Contact() {
   const [alertText, setAlertText] = useState('');
   const [showLoader, setShowLoader] = useState(false)
   const mainColor = React.useContext(MainColorContext);
   const formRef = useRef();

   useEffect(() => {
      if (alertText) {
         const timer = setTimeout(() => { setAlertText('') }, 2000)
         return () => clearTimeout(timer)
      }
   }, [alertText])

   const handleSubmit = (e) => {
      e.preventDefault();
      let nameValue = formRef.current.name.value.trim();
      let emailValue = formRef.current.email.value.trim();
      let messageValue = formRef.current.message.value.trim();

      if (nameValue.length > 0 && emailValue.length > 0 && messageValue.length > 0) {
         setShowLoader(true)
         emailjs
            .sendForm(
               'service_c4nsjbk',
               'template_cjroexq',
               formRef.current,
               'vhZJkv-_dXV-apvNU'
            )
            .then(
               (result) => {
                  setShowLoader(false)
                  setAlertText('Your message has been sent');
               },
               (error) => {
                  setShowLoader(false)
                  setAlertText(`Something went wrong.${error.text}`)
               }
            );
         e.target.reset();
      }
      else {
         if (nameValue.length <= 0) {
            setAlertText('Please enter your name')
         } else
            if (emailValue.length <= 0) {
               setAlertText('Please enter your email')
            }
            else
               if (messageValue.length <= 0) {
                  setAlertText('You have not entered a message text')
               }
      }
   }

   return (
      <section className='contact'>
         <div className="container">
            <div className="titleWrap">
               <div className="title">
                  <MotionComponent
                     content={<h2>
                        Contact me
                     </h2>} variant={verticalVariant}
                  />
               </div>
               <div className="subTitle" >
                  <h4>
                     " Each project contains a little code, a lot of time spent and even more soul invested :) "
                  </h4>
               </div>
            </div>
            <div className="contactContent">
               <div className='formChapter'>
                  {alertText && <AlertMessage text={alertText} />}
                  {showLoader && <Loader color={mainColor} />}
                  <form
                     ref={formRef}
                     className='contactForm'
                     onSubmit={handleSubmit}
                  >
                     <input type='text'
                        name='name'
                        placeholder='your name'
                        aria-label='name'
                     />
                     <input className=''
                        type='email'
                        name='email'
                        placeholder='email'
                        aria-label='email'
                     />
                     <textarea
                        name='message'
                        aria-label='message'
                        rows={10}
                        placeholder='write your message'
                     ></textarea>
                     <button className='sentButton' style={{
                        border: `1px solid ${mainColor}`
                     }}
                        aria-label='sent message'
                     >SENT</button>
                  </form>

               </div>
               <div className='imageChapter'>
                  <div className="logoUkraine">
                     <img src={contactImage} alt='logo Ukraine' />
                  </div>
               </div>

            </div>
         </div>
      </section >
   )
}

export default Contact