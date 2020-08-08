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

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      module {
        title
        description
        text
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...sectionHero
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
    }
  }
`
export default GET_LANDING_PAGE
