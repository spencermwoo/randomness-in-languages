import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const ResultsPage = ({data, children}) => {
  console.log(data, children)
  return (
    <Layout pageTitle="Results">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}> 
            {node.frontmatter.title} 
            <GatsbyImage
              image={getImage(node.frontmatter.multi_image)}
              alt=""
            />
            <GatsbyImage
              image={getImage(node.frontmatter.analysis_image)}
              alt=""
            />
            {children}
          </article>))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx (sort: {frontmatter : {date: ASC}}
            filter: {internal: {contentFilePath: {regex: "/(results/)/"}}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          multi_image {
	          childImageSharp {
	            gatsbyImageData
	          }
	        }
          analysis_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export default ResultsPage