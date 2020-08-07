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

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...sectionHero
      ...sectionAboutProject
    }
  }
`
export default GET_LANDING_PAGE
