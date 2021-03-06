import React from "react"
import Quote from "../Quote/Quote"
import Skills from "./Skills/Skills"
import WhatIDo from "./WhatIDo/WhatIDo"
import cube from "../../images/skills/rubik.png"
import Fade from "react-reveal/Fade"
import styles from "./Abilities.module.scss"

const Abilities = () => {
  return (
    <div className={styles.container} id="skills">
      <Fade bottom>
        <div className={styles.header}>
          <h1>Abilities</h1>
          <img src={cube} alt="rubik's cube" loading="lazy"/>
        </div>
        <Quote
          quote="Without knowledge action is useless and knowledge without action is futile."
          author="Abu Bakr"
        />
      </Fade>
      <Skills />
      <WhatIDo />
    </div>
  )
}

export default Abilities
