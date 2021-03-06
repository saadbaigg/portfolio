import React from "react"
import Abilities from "../components/Abilities/Abilities"
import About from "../components/About/About"
import Blogs from "../components/Blogs/Blogs"
import Contact from "../components/Contact/Contact"
import Email from "../components/Email/Email"
import Experiences from "../components/Experiences/Experiences"
import Facts from "../components/Facts/Facts"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"
import SEO from "../components/seo/seo"

export default function Home() {
  return (
    <Layout primary={true}>
      <SEO title="Saad Baig" />
      <About />
      <Abilities />
      <Experiences />
      <Projects />
      <Blogs />
      <Facts />
      <Contact />
      <Email />
    </Layout>
  )
}
