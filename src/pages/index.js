import React from "react";
import { graphql } from 'gatsby';

export default function Home({ data }) {
  const {
    markdownRemark: page,
  } = data;
  const {
    frontmatter: {
      title,
    },
    html,
  } = page;
  return <>
      <h1>{title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
}

export const pageQuery = graphql`
query topicsByPath {
  markdownRemark(frontmatter: {path: {eq: "/pageOne.html"}}) {
    html
    frontmatter {
      path
      title
    }
  }
}
`;
