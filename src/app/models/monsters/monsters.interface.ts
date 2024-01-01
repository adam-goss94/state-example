export interface Boss {
    id: number;
    name: string;
    type: string;
    legendaryDrops: LegendaryDrop[];
  }
  
  export interface LegendaryDrop {
    id: number;
    name: string;
    family: string;
    type: string;
    weight: number;
    rank: number;
    capacity: number;
    value: number;
    requiredLevel: number;
    requiredStrength: number | null;
    requiredDexterity: number | null;
    requiredPower: number | null;
    requiredKnowledge: number | null;
    damage: number | null;
    damageType: string | null;
    strength: number | null;
    dexterity: number | null;
    power: number | null;
    knowledge: number | null;
    health: number | null;
    mana: number | null;
    stamina: number | null;
    armorSlashing: number | null;
    armorCrushing: number | null;
    armorPiercing: number | null;
    mentalResistance: number | null;
    fireResistance: number | null;
    energyResistance: number | null;
    coldResistance: number | null;
  }