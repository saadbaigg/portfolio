import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import ReactMarkdown from "react-markdown"
import styles from "./Post.module.scss"
import SEO from "../../components/seo/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      slug
      title
      author
      publishedDate(formatString: "D MMMM YYYY")
      image {
        fluid {
            src
        }
      }
      body {
        body
      }
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <SEO />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>{props.data.contentfulArticle.title}</h1>
          <hr className={styles.separator} />
          <div className={styles.details}>
            <div className={styles.articleDetails}>
              <p>By {props.data.contentfulArticle.author}</p>
              <span>|</span>
              <p>{props.data.contentfulArticle.publishedDate}</p>
            </div>
            <div className={styles.socials}>
              <div className={styles.twitterBtn}>
                <a href={`https://twitter.com/intent/tweet?text=${props.data.contentfulArticle.title}?url=http://saadbaigg.github.io/portfolio/blog/${props.data.contentfulArticle.slug}`} class="twitter-share-button" data-show-count="false">Tweet</a>
              </div>
              <div className={styles.fbBtn}>
                <div className="fb-like"
                  data-href={`http://saadbaigg.github.io/portfolio/blog/${props.data.contentfulArticle.slug}`}
                  data-width=""
                  data-layout="button" data-action="like" data-size="small" data-share="true"></div>
              </div>
            </div>
          </div>
          <img src={props.data.contentfulArticle.image.fluid.src} alt="sample" />
          <div className={styles.body}>
            <ReactMarkdown
              source={props.data.contentfulArticle.body.body}
              allowDangerousHtml={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
