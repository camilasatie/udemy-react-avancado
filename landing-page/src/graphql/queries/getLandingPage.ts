const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  fragment sectionHero on LandingPage {
    sectionHero {
      title
      description
      button {
        label
        url
      }
      media {
        url
        alternativeText
      }
    }
  }
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...sectionHero
    }
  }
`
export default GET_LANDING_PAGE
