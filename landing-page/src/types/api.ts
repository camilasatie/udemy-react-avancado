export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type LogoProps = {
  url: string
  alternativeText: string
}

export type HeroProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  media: {
    alternativeText: string
    url: string
  }
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type TechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: HeroProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
}
