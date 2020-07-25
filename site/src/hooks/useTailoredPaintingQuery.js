import { graphql, useStaticQuery } from "gatsby"

const useTailoredPaintingQuery = () => {
  const data = useStaticQuery(graphql`
    query tailoredQuery {
      allSanityTailored {
        edges {
          node {
            date
            description
            name
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
