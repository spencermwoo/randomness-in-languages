// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require(`path`)
const fs = require('fs')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Check created pages for /programs/ to add additional context
exports.onCreatePage = ({page, actions}) => {
  const { createPage, deletePage } = actions;
  const newPage = Object.assign({}, page);

  const languagesList = ['go', 'java', 'javascript', 'python']

  if (page.path.includes('/languages/')) {
    // replace page with new context
    const language = page.path.split("/")
    // console.log(language)
    // deletePage(page);

    // newPage.context = {
    //   posts: getPosts(),
    //   data: ['some data'],
    //   moreData: { foo: 'bar' },
    // };

    // createPage(newPage);
  }
}

// Create language pages dynamically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // const layoutTemplate = path.resolve(`src/components/layout.js`)
  const layoutTemplate = path.resolve(`src/pages/languages/language.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query {
      allDirectory(filter: {relativePath: {regex: "/(languages/)/"}}) {
        nodes {
          id
          name
          relativePath
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // console.log(resul.data.allDirectory.nodes);
    // Create blog post pages.
    result.data.allDirectory.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `${node.relativePath}`,
        component: layoutTemplate,
        context: {
          name: `${node.name}`,
          regLang: `/(languages/${node.name})/`
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === `File`) {
    fs.readFile(node.absolutePath, (err, buf) => {
        createNodeField({ node, name: `contents`, value: buf.toString()});
    });
  }
}