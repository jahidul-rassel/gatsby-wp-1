import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import React from "react"
import Layout from "../components/Layout"

import * as HomeStyle from '../styles/home.module.css'

const Home = ( props ) => {
  const { description, copyright, data } = props.data.site.siteMetadata;
  const imageFile = props.data.imageFile;

  //console.log(imageFile.childrenImageSharp[0].gatsbyImageData);

  return ( 
    <Layout>
      <section className={ HomeStyle.header } >
        <div>
          <b>GATSBY - WP - 1</b><br />
          Showing the 'siteMetadata'
          <p style={ { color: 'black', fontWeight: 'bold' } }>SITE DESCRIPTION: { description }</p>
          <p style={ { color: 'black', fontWeight: 'bold' } }>COPYRIGHT: { copyright }</p>
          <p style={ { color: 'black', fontWeight: 'bold' } }> 
            Data Field<br />
            {
              Object.keys(data).map((key)=>{
                return (
                    <span key={key}>{ key+" --- "+ data[key] }<br /></span>
                  )
              })
            }
          </p>

          <h2>Home Page [Hello World] 123</h2>  
          <h3>Hello world project</h3>  
          <h5>some some description</h5>  

          <Link className={ HomeStyle.btn } to="/projects">Projects</Link>
        </div>    
        <GatsbyImage image={ imageFile.childrenImageSharp[0].gatsbyImageData } alt="testing" />
        
        <img src="/banner.png" alt="Index" style={ { maxWidth:'100%', maxHeight: '80%' } }></img>

      </section>
    </Layout>
   );
}
 
export const siteQuery = graphql `
    query SiteInfoQuery {
      site {
        siteMetadata {
          description
          copyright
          data {
            data_key_1
            data_key_2
            data_key_3
            data_key_4
            data_key_5
          }
        }
      }
      imageFile: file(relativePath: {eq: "imagesBanner.png"}) {
        id
        absolutePath
        childrenImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
          fluid {
            src
            srcSet
            sizes
          }
        }
      }
    }`


export default Home;