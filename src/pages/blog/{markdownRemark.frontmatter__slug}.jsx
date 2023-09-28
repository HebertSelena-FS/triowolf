import * as React from "react"
import { graphql } from "gatsby"
import "../../styles/home.css"

// const headingAccentStyles = {
//   color: "#663399",
// }



// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }


// const Header = () => {
//   return ( 
//     <header className="header">
//       <h1 className="logo">TrioWolf</h1>
//         <span style={headingAccentStyles}>— Tech Blog</span>
//       <div className="content">
//         <div className="item">Blog</div>
//         <div className="item">About</div>
//         <div className="item">Home</div>
//       </div>
//     </header>
//    );
// }

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    // <main className="post-pagestyle">
    <div className="post-pagestyle"  >
      <div>
        <h1 className="title">{frontmatter.title}</h1>
        <h2 className="date">{frontmatter.date}</h2>
        <p className="description">{frontmatter.content}</p>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    // </main>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        content
      }
    }
  }
`