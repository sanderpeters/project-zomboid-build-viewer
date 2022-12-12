import { Occupation, Skill, OccupationData } from '../types'

export const occupationData: Record<Occupation, OccupationData> = {
  [Occupation.FireOfficer]: {
    type: Occupation.FireOfficer,
    title: 'Fire Officer',
    description:
      'Fire Officers can carry more and run faster for longer periods of time.',
    startingPoints: 0,
    skills: [
      {
        type: Skill.Fitness,
        level: 1,
        multiplier: 1,
      },
    ],
  },
  [Occupation.PoliceOfficer]: {
    type: Occupation.PoliceOfficer,
    title: 'Police Officer',
    description:
      'Police Officers are very effective with firearms, as such this profession is great if you want to face the hordes of the undead Guns Blazin.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.ParkRanger]: {
    type: Occupation.ParkRanger,
    title: 'Park Ranger',
    description:
      'Park Rangers, thanks to their skill boost are great for players who are looking to survive away from any town, deep in the wilderness. Park Rangers can move at 75% speed while walking through forests. They also have a bonus to search mode, allowing them to find items easily while in search mode.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.ConstructionWorker]: {
    type: Occupation.ConstructionWorker,
    title: 'Construction Worker',
    description:
      'While Construction Worker is no longer the best choice for those who want to build their own base, this profession definitely is the one to go with if you like fighting zombies with Blunt weapons.',
    startingPoints: -2,
    skills: [],
  },
  [Occupation.SecurityGuard]: {
    type: Occupation.SecurityGuard,
    title: 'Security Guard',
    description:
      'Security Guard is a good choice for those who enjoy moving from place to place without clearing the entire area. Characters with this profession need less sleep (recover from tiredness quicker) and stay more alert when they do. They can also evacuate much faster should things go south.',
    startingPoints: -2,
    skills: [],
  },
  [Occupation.Carpenter]: {
    type: Occupation.Carpenter,
    title: 'Carpenter',
    description:
      'This occupation is great for those who are looking to build their own base. And nothing else.',
    startingPoints: 2,
    skills: [],
  },
  [Occupation.Burglar]: {
    type: Occupation.Burglar,
    title: 'Burglar',
    description:
      'Burglars are the best choice for those who prefer to sneak past zombies rather than fight them. They can, however, move quickly while in combat, making them very versatile. Burglars can also hotwire vehicles without the necessary character skills.',
    startingPoints: -6,
    skills: [],
  },
  [Occupation.Chef]: {
    type: Occupation.Chef,
    title: 'Chef',
    description:
      "Chefs are very good at handling various kitchenware and stabbing/cutting things with their kitchen knives. Choosing this profession ensures that you'll eat well even after the apocalypse and use the most out of ingredients.",
    startingPoints: -4,
    skills: [],
  },
  [Occupation.Repairman]: {
    type: Occupation.Repairman,
    title: 'Repairman',
    description:
      'Repairman is a profession for those who want to use their tools for a little longer without them breaking and even then be able to repair them easily if they have the right kind of glue or some duct tape.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.Farmer]: {
    type: Occupation.Farmer,
    title: 'Farmer',
    description:
      "Profession of choice for those who don't want to starve once the last can of tuna and pack of crisps are nothing but a memory.",
    startingPoints: 2,
    skills: [],
  },
  [Occupation.Fisherman]: {
    type: Occupation.Fisherman,
    title: 'Fisherman',
    description:
      'Good starting profession for those who choose to survive in the wilderness with a massive bonus to fishing and a slight bonus to foraging. They also have a bonus to search mode, allowing them to find items easily while in search mode.',
    startingPoints: -2,
    skills: [],
  },
  [Occupation.Doctor]: {
    type: Occupation.Doctor,
    title: 'Doctor',
    description:
      'Doctors are much better at treating injuries than other people but are not too useful in a world where a single scratch from a zombie can mean death.',
    startingPoints: 2,
    skills: [],
  },
  [Occupation.Veteran]: {
    type: Occupation.Veteran,
    title: 'Veteran',
    description:
      'Veterans never panic, no matter how bad it is they can stand their ground and deal out headshots to any zombies that made the mistake of trying to scare them.',
    startingPoints: -8,
    skills: [],
  },
  [Occupation.Nurse]: {
    type: Occupation.Nurse,
    title: 'Nurse',
    description: `Nurses treat wounds better than others except for Doctors. They also have a slight bonus to Lightfooted, allowing them to move a bit quieter, but that's about it.`,
    startingPoints: 2,
    skills: [],
  },
  [Occupation.Lumberjack]: {
    type: Occupation.Lumberjack,
    title: 'Lumberjack',
    description: `Lumberjacks are very effective with an axe. No matter if they're hacking away at a tree or a zombie. Lumberjacks swings their axe 25% faster (chopping trees and combat), they deal 50% bonus damage to trees and move at ~59% speed while walking through forests. They also have a bonus to search mode, allowing them to find items easily while in search mode.`,
    startingPoints: 0,
    skills: [],
  },
  [Occupation.FitnessInstructor]: {
    type: Occupation.FitnessInstructor,
    title: 'Fitness Instructor',
    description: `Fitness Instructors are very effective at running and have a high starting regularity for all exercises which means zombies and exercise fatigue usually aren't going to be a big problem for them.`,
    startingPoints: -6,
    skills: [],
  },
  [Occupation.BurgerFlipper]: {
    type: Occupation.BurgerFlipper,
    title: 'Burger Flipper',
    description:
      'Good for those who want to eat well and play with sharp objects.',
    startingPoints: 2,
    skills: [],
  },
  [Occupation.Electrician]: {
    type: Occupation.Electrician,
    title: 'Electrician',
    description:
      'This profession will allow the player to use generators and maintain them by default.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.Engineer]: {
    type: Occupation.Engineer,
    title: 'Engineer',
    description:
      'The Engineer is able to craft different kinds of traps and powerful explosives, even some that cannot be learnt through recipe magazines.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.MetalWorker]: {
    type: Occupation.MetalWorker,
    title: 'Metalworker',
    description:
      'The Metalworker is able to craft metal structures and furniture.',
    startingPoints: -6,
    skills: [],
  },
  [Occupation.Mechanic]: {
    type: Occupation.Mechanic,
    title: 'Mechanic',
    description:
      'Mechanics know how to fix all sorts of cars, if they have the right tools. They are also good with short blunt weapons.',
    startingPoints: -4,
    skills: [],
  },
  [Occupation.Unemployed]: {
    type: Occupation.Unemployed,
    title: 'Unemployed',
    description: '',
    startingPoints: 8,
    skills: [],
  },
}
