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
