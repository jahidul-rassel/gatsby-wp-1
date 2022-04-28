import React from 'react'

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import * as ProjectDetailsCss from "../styles/project-details.module.css"

export default function ProjectDetails( { data: projectData } ) {
  console.log( projectData.projectData.frontmatter.featuredImg.childImageSharp.gatsbyImageData );
  
  return (
    <Layout>
      <div className={ProjectDetailsCss.details} >
          <div className={ProjectDetailsCss.featured}>
            <GatsbyImage image={ projectData.projectData.frontmatter.featuredImg.childImageSharp.gatsbyImageData } alt="testing" /> 
          </div>

          { ( projectData.projectData.frontmatter.title ) && <h3>Stack: { projectData.projectData.frontmatter.stack }</h3> }  
          { ( projectData.projectData.frontmatter.title ) && <h2>Title: { projectData.projectData.frontmatter.title }</h2> }
          { ( projectData.projectData.frontmatter.title ) && <h4>Slug: { projectData.projectData.frontmatter.slug }</h4> }
          <br />
          { 
            ( projectData.projectData.frontmatter.title ) && 
            <div className={ProjectDetailsCss.html} dangerouslySetInnerHTML={ { __html: projectData.projectData.html } } ></div>
          }
          

          <div className={ProjectDetailsCss.featured}>
            THUMB IMAGE:<br />
            <GatsbyImage image={ projectData.projectData.frontmatter.thumb.childImageSharp.gatsbyImageData } alt="testing" /> 
          </div>

          { /* }
          <div className={ProjectDetailsCss.featured}>
          </div>
          { */ }
      </div>
    </Layout>
  )
}


export const projectDetails = graphql `query MyQuery($slug: String) {
  projectData: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      slug
      stack
      title
      date(formatString: "DD/MM/YYYY")
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      thumb {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}`
