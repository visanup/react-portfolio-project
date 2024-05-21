import React from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt'

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi, it's me</p>
                    <h3 className={styles.text_2}>Visanu Pengjang</h3>
                    <p className={styles.text_3}>
                        <span style={{marginRight: '10px'}}>I'm a </span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'batman',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Ironman',
                            1000,
                            'Superman',
                            1000,

                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                        />
                   </p>
                    <p className={styles.text_4}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat commodi <br /> quas cupiditate minus dolore nulla eos accusantium labore explicabo.</p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithub/></a></li>
                        <li><a href="#"><FaLinkedinIn/></a></li>
                        <li><a href="#"><FaFacebookF/></a></li>
                    </ul>
                </div>
                <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                <div className={styles.hero_img}></div>
                </Tilt>
            </div>
        </div>      
    </div>
  )
}

export default Hero;
