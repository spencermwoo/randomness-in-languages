import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

// const fmtTrialResults(trial, dataNodes, mdxNodes) {

// }

// function testF(trial){
//   const dataResults = dataNodes.filter(node => node.relativeDirectory.includes(trial))
//   const analysisImage = mdxNodes.filter(node => node.frontmatter.analysis_image.relativeDirectory.includes(trial))
//   const multiImage = mdxNodes.filter(node => node.frontmatter.multi_image.relativeDirectory.includes(trial))

//   f = ''
// }

const ResultsPage = (props) => {
  // console.log(data, children)
  const {pageContext, data} = props
  console.log(pageContext)
  console.log(data)

  const mdxNodes = data.allMdx.nodes;
  const dataNodes = data.allFile.nodes;

  const trialFolders = ['trial-one', 'trial-two', 'trial-three']

  const results = [];
  // trialFolders.map(trial => testF(trial, dataNodes, mdxNodes));
  // const dataResults = dataNodes.filter(node => node.relativeDirectory.includes('trial-one'))
  // const analysisImage = mdxNodes.filter(node => node.frontmatter.analysis_image.relativeDirectory.includes('trial-one'))
  // const multiImage = mdxNodes.filter(node => node.frontmatter.multi_image.relativeDirectory.includes('trial-one'))

  // const t1Nodes = 

  return (
    <Layout pageTitle="Results">
      {
        mdxNodes.map((node) => (
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
          </article>
        ))
      }

        {
          dataNodes.map((node) => (
          <pre>
            <code>
              {node.fields.contents}
            </code>
          </pre>
        ))
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
            relativeDirectory
          }
          analysis_image {
            childImageSharp {
              gatsbyImageData
            }
            relativeDirectory
          }
        }
        id
      }
    }
    allFile(filter: {relativePath: {regex: "/(results)/"}, extension: {eq: ""}}) {
      nodes {
        name
        extension
        fields {
          contents
        }
        relativeDirectory
      }
    }
  }
`

export const Head = () => <Seo title="Results" />

export default ResultsPage