import { graphql, useStaticQuery } from "gatsby"

const useAbstractPaintingQuery = () => {
  const data = useStaticQuery(graphql`
    query abstractPaintingsQuery {
      allSanityAbstractPainting {
        edges {
          node {
            date
            description
            id
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
  return data.allSanityAbstractPainting.edges
}

export default useAbstractPaintingQuery
