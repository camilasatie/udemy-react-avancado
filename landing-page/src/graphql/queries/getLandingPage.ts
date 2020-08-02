const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        url
        alternativeText
      }
    }
  }
`
export default GET_LANDING_PAGE
