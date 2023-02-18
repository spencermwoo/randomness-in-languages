import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const LanguagesPage = ({ data }) => {
  return (
    <Layout pageTitle="Languages">
      {
        data.allDirectory.nodes.map((node) => (
          <article key={node.id}>

            <h2>
              <Link to={`/languages/${node.name}`}>
                {node.name}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allDirectory(filter: {relativePath: {regex: "/(languages/)/"}}) {
      nodes {
        id
        name
        relativePath
      }
    }
  }
`

export const Head = () => <Seo title="Languages" />

export default LanguagesPage
