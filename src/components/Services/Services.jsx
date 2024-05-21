import React from 'react'
import styles from "./Services.module.css"
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
    return (
      <div className={styles.services_con}>
        <h3 className={styles.services_title}>My Service</h3>
        <div className={styles.services_list}>
          <div className={styles.services_item}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>XXXXXXXXXXXXXXX</p>
          </div>
          <div className={styles.services_item}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>yyyyyyyyyyyyyyyy</p>
          </div>
          <div className={styles.services_item}>
            <FaDesktop/>
            <h4>Front-end Consulting</h4>
            <p>ZZZZZZZZZZZZZZZZZ</p>
          </div>
        </div>
      </div>
    )
  }
  

export default Services
