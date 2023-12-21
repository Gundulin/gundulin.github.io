import { Injectable } from '@angular/core';

export interface Army {
  name: string;
  abilities: Ability[];
  // detachments: [];
}

export interface CombatPatrol {
  name: string;
  armyName: string;
  units: Unit[];
  stratagems: Stratagem[];
  abilities: Ability[];
}

export interface Unit {
  name: string;
  modelProfiles: ModelProfile[];
  leader?: string[];
  keywords: string[];
  abilities?: Ability[];
  factionKeywords: string[];
  weapons: Weapon[];
}

export interface ModelProfile {
  name?: string; // <-- This is only necessary when there are multiple model profiles in a unit
  move: string;
  toughness: string;
  save: string;
  wounds: string;
  leadership: string;
  objectiveControl: string;
  invulnerableSave?: string;
}

export interface Stratagem {
  name: string;
  cost: string;

}

export interface Weapon {
  name: string;
  weaponProfiles: WeaponProfile[];
}

export interface WeaponProfile {
  profileName?: string;
  range: string;
  attacks: string;
  skill?: string;
  strength: string;
  armorPiercing: string;
  damage: string;
  abilities?: Ability[];
}

export interface Ability {
  type: AbilityType;
  name: string;
  description: string;
  phases?: PhaseType[];
}

export enum PhaseType {
  COMMAND_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  CHARGE_PHASE,
  FIGHT_PHASE,
  DECLARE_BATTLE_FORMATIONS,
  DEPLOYMENT,
  END_OF_TURN
}

export enum AbilityType {
  CORE,
  FACTION,
  DATASHEET,
  WARGEAR,
  WEAPON,
  ENHANCEMENT
}

export interface SecondaryObjective {
  name: string;
  description: string;
  score?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatrolService {
  /**
   * Eventually, this service will be accessing DynamoDb or another NoSQL database instead of the hardcoded values
   */

  private combatPatrolNames: string[];
  private combatPatrols: CombatPatrol[];

  constructor() {
    this.combatPatrolNames = [
      "Space Marines",
      "Death Guard"
    ];
    this.combatPatrols = [
      {
        name: "Strike Force Octavius",
        armyName: "Space Marines",
        units: [
          {
            name: "Captain Octavius",
            modelProfiles: [{
                move: "5\"",
                toughness: "5",
                save: "2+",
                invulnerableSave: "4+",
                wounds: "6",
                leadership: "6+",
                objectiveControl: "1",
              }
            ],
            weapons: [{
              name: "Relic weapon",
              weaponProfiles: [{
                  range: "Melee",
                  attacks: "6",
                  skill: "2+",
                  strength: "5",
                  armorPiercing: "-2",
                  damage: "2"
                }
              ]
              },
              {
                name: "Storm bolter",
                weaponProfiles: [
                {
                  range: "24\"",
                  attacks: "2",
                  skill: "2+",
                  strength: "4",
                  armorPiercing: "0",
                  damage: "1",
                  abilities: [{
                      type: AbilityType.WEAPON,
                      name: "RAPID FIRE 2",
                      description: "Weapons with [RAPID FIRE X] in their profile are known as Rapid Fire weapons. Each time such a weapon targets a unit within half of that weapon's range, the Attacks characteristic of that weapon is increased by the amount denoted by \'x\'."
                    }]
                }]
              }],
            leader: ["Terminator Squad"],
            keywords: ["INFANTRY", "CHARACTER", "IMPERIUM", "TERMINATOR", "CAPTAIN", "OCTAVIUS"],
            factionKeywords: ["ADEPTUS ASTARTES"],
            abilities: [
              {
                name: "Unstoppable Valour",
                description: "You can re-roll Charge rolls made for this model's unit.",
                phases: [PhaseType.CHARGE_PHASE],
                type: AbilityType.DATASHEET
              },
              {
                name: "Deep Strike",
                description: "",
                type: AbilityType.CORE,
                phases: [PhaseType.DECLARE_BATTLE_FORMATIONS, PhaseType.MOVEMENT_PHASE]
              },
              {
                name: "Leader",
                description: "",
                type: AbilityType.CORE,
                phases: [PhaseType.DECLARE_BATTLE_FORMATIONS]
              }
            ]
          },
          {
            name: "Librarian Tantus",
            modelProfiles: [
              {
                move: "5\"",
                toughness: "5",
                save: "2+",
                invulnerableSave: "4+",
                wounds: "6",
                leadership: "6+",
                objectiveControl: "1",
                
              }
            ],
            leader: ["Terminator Squad"],
            keywords: ["INFANTRY", "CHARACTER", "PSYKER", "IMPERIUM", "TERMINATOR", "LIBRARIAN TANTUS"],
            abilities: [
              {
                name: "Deep Strike",
                description: "",
                phases: [PhaseType.DECLARE_BATTLE_FORMATIONS, PhaseType.MOVEMENT_PHASE],
                type: AbilityType.CORE
              }, {
                name: "Leader",
                description: "",
                type: AbilityType.CORE,
                phases: [PhaseType.DECLARE_BATTLE_FORMATIONS]
              }, {
                name: "Oath of Moment",
                description: "",
                type: AbilityType.FACTION,
                phases: [PhaseType.SHOOTING_PHASE, PhaseType.FIGHT_PHASE]
              }, {
                name: "Viel of Time (Psychic)",
                description: "While this model is leading a unit, weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
                type: AbilityType.DATASHEET,
                phases: [PhaseType.SHOOTING_PHASE, PhaseType.FIGHT_PHASE]
              }
            ],
            factionKeywords: ["ADEPTUS ASTARTES"],
            weapons: [
              {
              name: "Smite",
              weaponProfiles: [{
                profileName: "witchfire",
                range: "24\"",
                attacks: "D6",
                skill: "3+",
                strength: "5",
                armorPiercing: "-1",
                damage: "D3",
                abilities: [{
                  name: "Psychic",
                  description: "",
                  type: AbilityType.WEAPON
                }]
              }, {
                profileName: "focused witchfire",
                range: "24\"",
                attacks: "D6",
                strength: "6",
                skill: "3+",
                armorPiercing: "-2",
                damage: "D3",
                abilities: [{
                  name: "Devastating Wounds",
                  description: "",
                  type: AbilityType.WEAPON
                }, {
                  name: "Hazardous",
                  description: "",
                  type: AbilityType.WEAPON
                }, {
                  name: "Psychic",
                  description: "",
                  type: AbilityType.WEAPON
                }]
              }
              ]
            },
            {
              name: "Storm bolter",
              weaponProfiles: [{
                range: "24\"",
                  attacks: "2",
                  skill: "2+",
                  strength: "4",
                  armorPiercing: "0",
                  damage: "1",
                  abilities: [{
                      type: AbilityType.WEAPON,
                      name: "RAPID FIRE 2",
                      description: "Weapons with [RAPID FIRE X] in their profile are known as Rapid Fire weapons. Each time such a weapon targets a unit within half of that weapon's range, the Attacks characteristic of that weapon is increased by the amount denoted by \'x\'."
                    }]
              }]
            },
            {
              name: "Force Weapon",
              weaponProfiles: [{
                range: "Melee",
                attacks: "4",
                skill: "3+",
                strength: "6",
                armorPiercing: "-1",
                damage: "D3",
                abilities: [{
                  name: "Psychic",
                  description: "",
                  type: AbilityType.WEAPON
                }]
              }]
            }
          ]
          },{
            name: "Infernus Squad",
            modelProfiles: [{
              move: "6\"",
              toughness: "4",
              save: "3+",
              wounds: "2",
              leadership: "6+",
              objectiveControl: "1"
            }],
            weapons: [],
            keywords: [],
            factionKeywords: []
          }
        ],
        stratagems: [],
        abilities: []
      }
    ];
   }

  public getCombatPatrolNames(): string[] {
    return this.combatPatrolNames;
  }

  public getCombatPatrol(combatPatrolName: string): CombatPatrol | undefined {
    return this.combatPatrols.find(patrol => patrol.name === combatPatrolName);
  }
}
