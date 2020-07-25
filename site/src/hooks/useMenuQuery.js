import { graphql, useStaticQuery } from "gatsby"

const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query navigation {
      allSanityNavigation {
        edges {
          node {
            navigationImage {
              _key
              _type
              asset {
                id
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
            name
          }
        }
      }
    }
  `)

  return {
    home: {
      text: data.allSanityNavigation.edges[1].node.name,
      link: "/",
      background:
        data.allSanityNavigation.edges[1].node.navigationImage.asset.fluid,
    },
    expos: {
      text: data.allSanityNavigation.edges[0].node.name,
      link: "/expos",
      background:
        data.allSanityNavigation.edges[0].node.navigationImage.asset.fluid,
    },
    figurePainting: {
      text: data.allSanityNavigation.edges[2].node.name,
      link: "/figurePainting",
      background:
        data.allSanityNavigation.edges[2].node.navigationImage.asset.fluid,
    },
    abstractPainting: {
      text: data.allSanityNavigation.edges[3].node.name,
      link: "/abstractPainting",
      background:
        data.allSanityNavigation.edges[3].node.navigationImage.asset.fluid,
    },
    tailoredPainting: {
      text: data.allSanityNavigation.edges[4].node.name,
      link: "/tailoredPainting",
      background:
        data.allSanityNavigation.edges[4].node.navigationImage.asset.fluid,
    },
  }
}

export default useMenuQuery
