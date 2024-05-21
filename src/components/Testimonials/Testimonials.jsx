import React from 'react'
import styles from "./Testimonials.module.css"

export default function Testimonials() {
  return (
    <div className={styles.testi_con}>
        <h3 className={styles.testi_title}>Testimonials</h3>
        <div className={styles.testi_list}>
            <div className={styles.testi_items}>
                <p>XXXXXXXXXXXXXXXXXXXXXXX</p>
                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>John Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>YYYYYYYYYYYYYYYYYYYYYYYYY</p>
                <img src="https://plus.unsplash.com/premium_photo-1669065123832-5c43e8f80f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="" />
                <h4>Jan Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testi_items}>
                <p>ZZZZZZZZZZZZZZZZZZZZZZZZZZ</p>
                <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <h4>Jo Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div> 
    </div>
  )
}
