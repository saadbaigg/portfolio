import React from "react"
import BlogPost from "../components/Blog/Blog"
import Layout from "../components/Layout/Layout"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../styles/blog.module.scss"
import SEO from "../components/seo/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulArticle {
          edges {
            node {
              title
              author
              slug
              publishedDate(formatString: "D MMMM YYYY")
              image {
                fluid {
                  src
                }
                description
              }
              description
              body {
                body
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout secondary={true}>
      <SEO title="Blog" />
      <div className={styles.container}>
        {data.allContentfulArticle.edges.map(post => (
          <BlogPost
            slug={post.node.slug}
            title={post.node.title}
            author={post.node.author}
            description={post.node.description}
            heroImage={post.node.image.fluid.src}
            imgDescription={post.node.image.description}
            date={post.node.publishedDate}
          />
        ))}
        <hr className={styles.sep} />
      </div>
    </Layout>
  )
}

export default Blog
