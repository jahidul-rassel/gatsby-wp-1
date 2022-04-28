/*  
[ Added for WP remote Image]
https://dev.to/nevernull/gatsby-with-wpgraphql-acf-and-gatbsy-image-72m

query MyQuery {
  wpgraphql {
    posts {
      nodes {
        slug
        featuredImage {
          node {
            id
            sourceUrl
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
}
*/
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}



//  have to use REQUIRE to IMPORT MODULES into 'gatsby-node.js' file, Ex: in here 'path' is a PLUG-IN
//  REF: https://www.youtube.com/watch?v=L32Vx_bEZhA&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB&index=19 [ Generating Pages ]

const pathModule = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`query dataProjectsSlug {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    slug
                }
            }
        }
        wpgraphql {
            posts {
                nodes {
                    slug
                }
            }
        }
    }`);
    
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/'+ node.frontmatter.slug,
            component: pathModule.resolve('./src/templates/project-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })

    data.wpgraphql.posts.nodes.forEach(node => {
        actions.createPage({
            path: '/wp-posts/'+ node.slug,
            component: pathModule.resolve('./src/templates/wp-post-details.js'),
            context: { slug: node.slug }
        })
    })
}





