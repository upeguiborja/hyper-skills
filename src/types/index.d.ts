export type Strength = {
  additionalInfo: string
  code: number
  created: string // should be ISO date regex
  id: string
  media: any[] // find out what types are on the array
  name: string
  proficiency: 'master' | 'expert' | 'proficient' | 'no-experience-interested'
  recommendations: number
  supra: boolean
  weight: number
}

export type PaginatedSearchResult<T> = {
  aggregators: any
  offset: number
  pagination: {
    next: string
    previous: any
  }
  results: T[]
  size: number
  total: number
}

export type PersonThirdParty = {
  compensation: Compensation
  context: {
    signaled: any
  }
  ggId: string
  locationName: string
  name: string
  openTo: any[]
  picture: string
  professionalHeadline: string
  remoter: boolean
  skills: Strength[]
  subjectId: string
  theme: string
  username: string
  verified: boolean
  weight: number
}

export type Compensations = {
  employee: Compensation
  intern: Compensation
}

export type Compensation = {
  amount: number
  currency: string
  minHourlyUSD: number
  periodicity: string
  privacy: string
}
