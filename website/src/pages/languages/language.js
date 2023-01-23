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
  // if(!pageContext['name']){
  //   console.log(props);
  //   console.log(data.allFile.nodes);
  // }
  // console.log(language);

  const nodes = data.allFile.nodes;

  // overview language
  // T1 image
  // T1 result

  // T2 image
  // T2 result

  // T3 image
  // T3 result

  // source

  // node.name -- source_
  // node.name -- trial
  
  const sourceNode = nodes.filter(node => node.name === language)[0] // required
  // console.log(sourceNode, language)
  // console.log(language);

  const imageNodes = nodes.filter(node => node.extension === 'jpg')
  const resultNodes = nodes.filter(node => node.extension === '' || node.extension === 'txt')

  // console.log(sourceNode)
  
  // console.log(imageNodes)
  // console.log(resultNodes)

  const images = imageNodes.map(node => getImage(node.childImageSharp))

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
