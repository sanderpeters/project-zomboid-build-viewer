export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type Theme = 'dark' | 'light'

export enum Skill {
  Fitness = 'Fitness',
  Strength = 'Strength',
  Nimble = 'Nimble',
  Sneaking = 'Sneaking',
}

export interface SkillData {
  type: Skill
  level: number
  multiplier: number
}

export enum Occupation {
  FireOfficer,
  PoliceOfficer,
  ParkRanger,
  ConstructionWorker,
  SecurityGuard,
  Carpenter,
  Burglar,
  Chef,
  Repairman,
  Farmer,
  Fisherman,
  Doctor,
  Veteran,
  Nurse,
  Lumberjack,
  FitnessInstructor,
  BurgerFlipper,
  Electrician,
  Engineer,
  MetalWorker,
  Mechanic,
  Unemployed,
}

export interface OccupationData {
  type: Occupation
  title: string
  description: string
  startingPoints: number
  skills: SkillData[]
}

export enum Trait {
  AdrinalineJunkie,
  Athletic,
  Brave,
  CatsEyes,
  Dextrous,
  EagleEyed,
  FastHealer,
  FastLearner,
  FastReader,
  Fit,
  Graceful,
  Inconspicuous,
  IronGut,
  KeenHearing,
  LightEater,
  LowThrist,
  Lucky,
  Organized,
  Outdoorsman,
  Resilient,
  SpeedDemon,
  Stout,
  Strong,
  ThickSkinned,
  Wakeful,
}

export interface TraitData {
  type: Trait
  title: string
  description: string
  skills: SkillData[]
  startingPoints: number
  excludes: Trait[]
}
