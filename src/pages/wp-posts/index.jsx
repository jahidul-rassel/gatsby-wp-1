import React from "react";

import { graphql, Link } from 'gatsby';
//import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

import * as ProjectCss from "../../styles/wp-posts.module.css"

const WP_Posts = ( props ) => {
    //const WPgraphql = props.data.wpgraphql.posts.nodes;

    const wpPosts = props.data.wpgraphql.posts;
    console.log(wpPosts);
    return ( 
        <Layout>
        <section className={ProjectCss.portfolio}>
            <h3>Posts List</h3>
            <div className={ProjectCss.projects} >
                { wpPosts.nodes && wpPosts.nodes.map( tmpPostsObj => 
                    <Link key={ tmpPostsObj.id } to={ "/wp-posts/"+tmpPostsObj.slug }>
                      { console.log("fdafad") }
                      <div>
                          <h3>{tmpPostsObj.title}</h3>
                          <p>
                            {tmpPostsObj.date}<br />
                            {tmpPostsObj.id}<br />
                            {tmpPostsObj.slug}
                          </p>
                      </div>
                    </Link>
                  ) 
                }
            </div>
        </section>
        </Layout>
    );
}
 
//  NEW one with images
export const wp_post_list = graphql `query WPPostQuery {
  wpgraphql {
    posts {
      nodes {
        id
        slug
        date
        title(format: RENDERED)
      }
    }
  }
}`
/*
export const wp_post_list = graphql `query WPPostQuery {
      wpgraphql {
        posts {
          nodes {
            id
            postId
            uri
            slug
            date
            title(format: RENDERED)
            content(format: RENDERED)
            comments {
              nodes {
                content
              }
            }
          }
        }
      }
    }`
*/    

export default WP_Posts;