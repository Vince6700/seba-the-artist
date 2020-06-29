import { graphql, useStaticQuery } from "gatsby"

const useMenuQuery = () => {
const data = useStaticQuery(graphql`query navigation {
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
}`);

return data.allSanityNavigation.edges
}

export default useMenuQuery;
