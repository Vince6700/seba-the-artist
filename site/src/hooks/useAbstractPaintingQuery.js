import { graphql, useStaticQuery } from "gatsby"

const useAbstractPaintingQuery = () => {
  const data = useStaticQuery(graphql`
    query abstractPaintingsQuery {
      allSanityAbstractPainting(sort: { order: ASC, fields: row }) {
        edges {
          node {
            date
            description
            id
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
  return data.allSanityAbstractPainting.edges
}

export default useAbstractPaintingQuery
