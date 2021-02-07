import React from "react"
import Quote from '../Quote/Quote'
import Education from "./Education/Education"
import styles from "./Experiences.module.scss"
import Template from "./Template/Template"

const Experiences = () => {
  return (
    <div className={styles.container}>
      <h1>Experiences</h1>
      <Quote
        quote="Protons give an atom its identity, electrons its personality."
        author="Bill Bryson"
      />
      {/* <Education /> */}
      <Template 
        title="Education"
        row={[
            {
                institute: "Axiom",
                duration: "2019 - 2020",
                level: "Course - Cloud Native Computing / MERN Stack Development",
                description: "Cloud native is an approach to building and running applications that exploits the advantages of the cloud computing delivery model. Whereas, MERN is a javascript Stack for building dynamic web sites and web applications. This course taught me about the devOps and Full Stack Web Development.",
                location: "Karachi"
            },
            {
                institute: "Jinnah Govt. College",
                duration: "2017 - 2019",
                level: "Intermediate - (Pre-Engineering)",
                description: "During my time in college, I continued learning physics, chemistry and mathematics. Also during this time, I started to create static HTML5 and CSS3 websites.",
                location: "Karachi"
            },
            {
                institute: "Green Land Public School",
                duration: "2004 - 2017",
                level: "Highschool - (Computer Science)",
                description: "I completed School, where I enjoyed doing computer science, maths, physics and arts. I realized in the last year of school that I wanted to do something with software, so I started learning HTML5 and CSS3.",
                location: "Karachi"
            },
        ]}
      />
    </div>
  )
}

export default Experiences
