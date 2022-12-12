export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export type Theme = 'dark' | 'light'

export interface SkillData {
  type: Skill
  level: number
  multiplier: number
}

export enum Skill {
  Fitness,
  Strength,
  Nimble,
  Sneaking,
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

export enum Trait {
  AdrinalineJunkie,
  athletic,
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
