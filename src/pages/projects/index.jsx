import React from "react";

import { graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

import * as ProjectCss from "../../styles/projects.module.css"

const Projects = ( props ) => {
    console.log(props.data);

    const { dataProjectList: allProjectList, dataContact, imageFile } = props.data;

    console.log(imageFile);

    return ( 
        <Layout>
        <section className={ProjectCss.portfolio}>
            <h3>Projects List</h3>
            <div className={ProjectCss.projects} >
                <Link to="/projects/project_1">
                    <div>
                        <h3>Title 1</h3>
                        <p>
                            Stack<br />
                            Date 
                        </p>
                    </div>
                </Link>

                { allProjectList.nodes && allProjectList.nodes.map( projectObj => 
                    <Link key={ projectObj.id } to={ "/projects/"+projectObj.frontmatter.slug }>
                        <div>
                            <GatsbyImage placeholder="blurred" image={ projectObj.frontmatter.thumb.childrenImageSharp[0].gatsbyImageData } alt="testing" />
                            <h3>{projectObj.frontmatter.title}</h3>
                            <p>
                                {projectObj.frontmatter.stack}<br />
                                {projectObj.frontmatter.date}
                            </p>
                        </div>
                    </Link>
                    )
                }
            </div>
            <p>Contact Info: { dataContact.siteMetadata.contact }</p>
        </section>
        </Layout>
    );
}
 
//  NEW one with images
export const projectList = graphql `query dataProjectPage {
  dataProjectList: allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        stack
        title
        slug
        thumb {
          id
          childrenImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        date(formatString: "DD/MM/YYYY")
        featuredImg {
          id
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      id
    }
  }
  dataContact: site {
    siteMetadata {
      contact
    }
  }
}`

/*
export const projectList = graphql `query dataProjectPage {
    dataProjectList: allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          thumb {
            id
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
              fluid {
                sizes
                src
                srcSet
              }
            }
          }
          date(formatString: "DD/MM/YYYY")
          featuredImg {
            id
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
              fluid {
                src
                srcSet
                sizes
              }
            }
          }
        }
        id
      }
    }
    dataContact: site {
      siteMetadata {
        contact
      }
    }
  }`



/*
//  OLd one with Images
export const projectList = graphql `query dataProjectPage {
        dataProjectList: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    stack
                    title
                    slug
                    date(formatString: "DD/MM/YYYY")
                }
                id
            }
        }
        dataContact: site {
            siteMetadata {
                contact
            }
        }
    }`
*/

export default Projects;