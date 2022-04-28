import React from 'react'

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

import * as ProjectDetailsCss from "../styles/wp-posts-details.module.css";

export default function PostDetails( { data } ) {
  
  const wpPostDetails = data.wpgraphql.post

  console.log(  );
  
  return (
    <Layout>
      <div className={ProjectDetailsCss.details} >
        { ( wpPostDetails.slug ) && <h3>WP Slug: { wpPostDetails.slug }</h3> }  
        { (  wpPostDetails.title ) && <h2>WP Title: {  wpPostDetails.title }</h2> }

        { /*  ( wpPostDetails.content ) && <h4>Slug: { wpPostDetails.content }</h4> */ }
        
        <br />
        <b>WP Content:</b>
        <br /><br />

        <div className={ProjectDetailsCss.imgDiv} >
          <GatsbyImage image={ wpPostDetails.featuredImage.node.imageFile.childImageSharp.gatsbyImageData } alt="testing" /> 
        </div>
        
        { 
          ( wpPostDetails.content ) && 
          <div className={ProjectDetailsCss.html} dangerouslySetInnerHTML={ { __html: wpPostDetails.content } } ></div>
        }
      </div>
    </Layout>
  )
}

export const wpPostDetails = graphql `query WpPostDetailsQuery($slug: ID = "") {
  wpgraphql {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      content
      featuredImage {
        node {
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
}`