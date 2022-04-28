import React from "react";
import Layout from "../components/Layout";

import { graphql } from 'gatsby';

const test = ( {data} ) => {
    console.log(data);

    data.allMarkdownRemark.nodes.forEach(node => {
        console.log(node);
    });

    return ( 
        <Layout>
        <section>
            Test REACT "Stateless Function Component"
        </section> 
        </Layout>    
    );
}
 
export const projectList = graphql `query dataProjectsSlug {
    allMarkdownRemark {
        nodes {
            id
            frontmatter {
                slug
            }
        }
    }
}`

export default test;