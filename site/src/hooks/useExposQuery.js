import { graphql, useStaticQuery } from "gatsby"

const useExposQuery = () => {
  const data = useStaticQuery(graphql`
    query expos {
      allSanityExpos(sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            date
            description
            name
            slug {
              current
            }
            sliderImage {
              _key
              _type
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
              }
            }
            place {
              lat
              lng
            }
          }
        }
      }
    }
  `)
  return data.allSanityExpos.edges
}

export default useExposQuery
