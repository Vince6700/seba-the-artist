import { graphql, useStaticQuery } from "gatsby"

const useTailoredPaintingQuery = () => {
  const data = useStaticQuery(graphql`
    query tailoredQuery {
      allSanityTailored(sort: { order: ASC, fields: row }) {
        edges {
          node {
            date
            description
            name
            row
            column
            painting {
              asset {
                fixed {
                  base64
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allSanityTailored.edges
}

export default useTailoredPaintingQuery
