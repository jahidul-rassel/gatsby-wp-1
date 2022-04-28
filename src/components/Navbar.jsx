import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Navbar() {
  const componentSiteQuery = useStaticQuery(graphql`
                      query componentSiteQuery {
                        site {
                          siteMetadata {
                            title
                          }
                        }
                      }`);
  //console.log(componentSiteQuery);

  return (
      <nav>
            <h3>Title { componentSiteQuery.site.siteMetadata.title }</h3>
            <div className="topnav">
                <Link to='/'>HOME</Link>
                <Link to='/wp-posts'>WP-POSTS</Link>
                <Link to='/projects'>PROJECTS</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/contact'>CONTACT US</Link>
            </div>    
      </nav>
  )
}

