import { graphql, useStaticQuery } from "gatsby"

const useFigurePaintingQuery = () => {
  const data = useStaticQuery(graphql`
    query figurePaintingQuery {
      allSanityFigurePainting {
        edges {
          node {
            date
            description
            id
            name
            painting {
              asset {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
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
              }
            }
          }
        }
      }
    }
  `)
  return data.allSanityFigurePainting.edges
}

export default useFigurePaintingQuery
