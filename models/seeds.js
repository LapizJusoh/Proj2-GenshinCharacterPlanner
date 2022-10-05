module.exports = [
  {
    name: `Amber`,
    image: ``,
    talents: [
      {
        talentName: `Explosive Puppet`,
        talentDesc: `Continuously taunts the enemy, drawing their fire. Baron Bunny's HP scales with Amber's Max HP. When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE Pyro DMG.`
      },
      {
        talentName: `Fiery Rain`,
        talentDesc: `Fires off a shower of arrows, dealing continuous AoE Pyro DMG. `
      },
      {
        talentName: `Gliding Champion`,
        talentDesc: `Decreases gliding Stamina consumption for your own party members by 20%. Not stackable with Passive Talents that provide the exact same effects. `
      }
    ],
    maxLevelRequirement: [
      {
        mora: 420000,
        generalMaterials: [
          {
            name: `Small Lamp Grass`,
            amount:168 
          },
          {
            name: `Firm Arrowhead`,
            amount:18 
          },
          {
            name: `Sharp Arrowhead`,
            amount:30 
          },
          {
            name: `Weather Arrowhead`,
            amount:36 
          }
        ],
        charaMaterials: [
          {
            name: `Everflame Seed`,
            amount:46
          },
          {
            name: `Agnidus Agate Sliver`,
            amount:1
          },
          {
            name: `Agnidus Agate Fragment`,
            amount:9
          },
          {
            name: `Agnidus Agate Chunk`,
            amount:9
          },
          {
            name: `Agnidus Agate Gemstone`,
            amount:6 
          }
        ]
      }
    ]
  }
];