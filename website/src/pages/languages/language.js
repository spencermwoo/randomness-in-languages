import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const LanguagesPost = (props) => {
  // console.log(props)
  const {pageContext, data} = props
  const language = pageContext['name']

  if(!language){
    return
  }

  const nodes = data.allFile.nodes;
  
  const sourceNode = nodes.filter(node => node.name === language)[0] // required

  const imageNodes = nodes.filter(node => node.extension === 'png')
  const resultNodes = nodes.filter(node => node.extension === '' || node.extension === 'txt')

  const images = imageNodes.map(node => getImage(node.childImageSharp))

  // TODO: Split into trials for display

  // node.fields.contents.replaceAll(/\s/g, "\n")
  return (
    <Layout pageTitle={language}>

      {images.map(image => 
        <GatsbyImage
          image={image}
          alt=""
        />
      )}
      <hr></hr>
      
      <pre>
        <code>
          {resultNodes.map(node => 
            node.fields.contents
          )}
        </code>
      </pre>

      <hr></hr>

      <pre>
        <code>
          
          {sourceNode.fields.contents}
        </code>
      </pre>
        
      <hr></hr>      
    </Layout>
  )
}

export const query = graphql`
  query ($regLang: String){
    allFile(filter: {relativePath: {regex: $regLang}}) {
      nodes {
        name
        relativePath
        extension
        fields {
          contents
        }
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title='TODO' />

export default LanguagesPost
