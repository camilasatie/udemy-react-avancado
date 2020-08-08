export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type ConceptsTitle = {
  concepts: {
    title: string
  }
}

export type ModulesItems = {
  title: string
  description: string
  text: string
}

export type SocialLink = {
  title: string
  url: string
}

export type Image = {
  url: string
  alternativeText: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Review = {
  Name: string
  text: string
  photo: Image
}

export type Question = {
  question: string
  answer: string
}

export type LogoProps = Image

export type HeroProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  media: Image
}

export type AboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type TechProps = {
  title: string
  techIcons: TechIcon[]
}

export type ConceptsProps = {
  title: string
  concepts: ConceptsTitle[]
}

export type ModulesProps = {
  title: string
  module: ModulesItems[]
}

export type AgendaProps = {
  title: string
  text: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type AboutUsProps = {
  title: string
  authors: Author[]
}

export type ReviewsProps = {
  title: string
  review: Review[]
}

export type FaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  sectionHero: HeroProps
  sectionAboutProject: AboutProjectProps
  sectionTech: TechProps
  sectionConcepts: ConceptsProps
  sectionModules: ModulesProps
  sectionAgenda: AgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: AboutUsProps
  sectionReviews: ReviewsProps
  sectionFaq: FaqProps
}
