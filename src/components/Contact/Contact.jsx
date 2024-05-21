import React from 'react'
import styles from "./Contact.module.css"
import { FaPhone, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                    
                </p>
                <p className={styles.contact_address}>
                    <p><FaLocationDot /></p>
                    Khlong Thanon Subdistrict, <br />
                    Sai Mai District,  <br />
                    Bangkok, Thailandand 10220

                </p>
                <p><FaPhone /> (+66) 98 267 0816</p> 
                <p><FaEnvelope /> visanupc@gmail.com</p>
            </div>

            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">Frist name</label>
                            <input type="text" placeholder='eg. John' />
                        </div>
                        <div>
                            <label htmlFor="last name"> Last name</label>
                            <input type="text" placeholder='eg. Doe' />
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder='eg. johndoe@gmail.com' />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='text here'></textarea>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        </div>   
    </div>
  )
}

export default Contact
