import React from "react"
import rdi from "../../images/projects/rdi.png"
import quiz from "../../images/projects/quiz.jpg"
import rocket from "../../images/projects/rocket.png"
import cart from "../../images/projects/cart.jpg"
import limo from "../../images/projects/limo.jpg"
import football from "../../images/projects/football.jpg"
import kpibar from "../../images/projects/kpibar.png"
import Quote from "../Quote/Quote"
import Fade from "react-reveal/Fade"
import styles from "./Projects.module.scss"

const Projects = () => {

  return (
    <Fade bottom>
      <div className={styles.container} id="projects">
        <div className={styles.header}>
          <h1>Projects</h1>
          <img src={rocket} alt="rocket" loading="lazy" />
        </div>
        <Quote
          quote="You can do anything you set your mind to."
          author="Benjamin Franklin"
        />
        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <img src={kpibar} alt="kpibar" loading="lazy" />
            <h3 className={styles.show}>KPIBAR's Website</h3>
            <p>React - Gatsby - CSS3 - Firebase</p>
            <button className={styles.viewSite}>
              <a href="https://website-pre.kpibar.com/">
                View site
              </a>
            </button>
          </div>
          <div className={styles.project}>
            <img src={rdi} alt="sample" loading="lazy" />
            <h3 className={styles.show}>RDI Solutions</h3>
            <p>ReactJS - Ant design</p>
            <button className={styles.viewSite}>
              <a href="https://rdi-solutions.netlify.app/">
                View site
              </a>
            </button>
          </div>

          <div className={styles.project}>
            <img src={cart} alt="cart" loading="lazy" />
            <h3 className={styles.show}>On-Cart CMS</h3>
            <p>React/Redux - Bootstrap</p>
            <button className={styles.viewSite}>
              <a href="https://oncartadmin.web.app/">
                View site
              </a>
            </button>
          </div>
          <div className={styles.project}>
            <img src={limo} alt="limo" loading="lazy" />
            <h3 className={styles.show}>Admirals CMS</h3>
            <p>React-Redux - Bootstrap - Node</p>
            <button className={styles.viewSite}>
              <a href="https://admiral-cms.netlify.app/">
                View site
              </a>
            </button>
          </div>
          <div className={styles.project}>
            <img src={quiz} alt="quiz" loading="lazy" />
            <h3 className={styles.show}>Quiz App (PWA)</h3>
            <p>React JS - TypeScript - PWA</p>
            <button className={styles.viewSite}>
              <a href="https://quiz-app-bc10d.web.app/">
                View site
              </a>
            </button>
            <button className={styles.gitBtn}>
              <a href="https://github.com/7-baig/Quiz-PWA">
                Github Repo
              </a>
            </button>
          </div>
          <div className={styles.project}>
            <img src={football} alt="football" loading="lazy" />
            <h3 className={styles.show}>Covid-19 tracker App</h3>
            <p>React - Charts JS - Material UI</p>
            <button className={styles.viewSite}>
              <a
                href="http://covid-19-tracker-app-saad-baig.surge.sh/"
              >
                View site
              </a>
            </button>
            <button className={styles.gitBtn}>
              <a
                href="https://github.com/saadbaigg/Covid-19-Tracker-App"
              >
                Github Repo
              </a>
            </button>
          </div>
        </div>
        <a href="https://github.com/saadbaigg?tab=repositories" >
          <button className={styles.viewAll}>View all projects</button>
        </a>
      </div>
    </Fade>
  )
}

export default Projects
