import React from 'react'
import styles from './Skills.module.css';
import { FaSquareJs, FaReact, FaSass,FaGitAlt, FaNode } from 'react-icons/fa6';
import { SiPowerbi, SiSap } from "react-icons/si";
import { FaRegFileExcel,FaPython, FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaSquareJs/>
            </li>
            <li>
                <FaReact/>
            </li>
            <li>
                <FaPython/>
            </li>
            <li>
                <FaCss3Alt/>
            </li>
            <li>
                <FaGitAlt/>
            </li>
            <li>
                <FaNode/>
            </li>
            <li>
                <SiPowerbi />
            </li>
            <li>
                <FaRegFileExcel />
            </li>
            <li>
                <SiSap />
            </li>            
        </ul>
    </div>
  )
}

export default Skills

