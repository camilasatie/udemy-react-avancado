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

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: HeroProps
}
