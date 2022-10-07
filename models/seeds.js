module.exports = [
  {
    name: `Amber`,
    element: `Pyro`,
    image: `https://i.imgur.com/0LaRzRa.png`,
    talents: [
      {
        talentName: `Explosive Puppet`,
        talentDesc: `Continuously taunts the enemy, drawing their fire.<br>
        Baron Bunny's HP scales with Amber's Max HP. When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE Pyro DMG.`
      },
      {
        talentName: `Fiery Rain`,
        talentDesc: `Fires off a shower of arrows, dealing continuous AoE Pyro DMG. `
      },
      {
        talentName: `Gliding Champion`,
        talentDesc: `Decreases gliding Stamina consumption for your own party members by 20%. <br>
        Not stackable with Passive Talents that provide the exact same effects. `
      }
    ],
    maxLevelRequirement: {
      mora: 420000,
      materials: [
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
        },
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
  },
  {
    name: `Diluc`,
    element: `Pyro`,
    image: `https://i.imgur.com/tcrWu5g.png`,
    talents: [
      {
        talentName: `Searing Onslaught`,
        talentDesc: `Performs a forward slash that deals Pyro DMG.
        This skill can be consecutively used 3 times. Enters CD if not cast again within a short period. `
      },
      {
        talentName: `Dawn`,
        talentDesc: `Releases intense flames to knock back nearby opponents, dealing Pyro DMG.
        The flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive Pyro DMG to all opponents in its path. The Phoenix explodes upon reaching its destination, causing a large amount of AoE Pyro DMG.
        The searing flames that run down his blade cause it to be infused with Pyro. `
      },
      {
        talentName: `Tradition of the Dawn Knight`,
        talentDesc: `Refunds 15% of the ores used when Forging Claymore-type weapons.`
      }
    ],
    maxLevelRequirement: {
      mora: 420000,
      materials: [
        {
          name: `Small Lamp Grass`,
          amount:168 
        },
        {
          name: `Recruit's Insignia`,
          amount:18 
        },
        {
          name: `Sergeant's Insignia`,
          amount:30 
        },
        {
          name: `Lieutenant's Insignia`,
          amount:36 
        },
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
  },
  {
    name: `Jean`,
    element: `Anemo`,
    image: `https://i.imgur.com/8ccOGl0.png`,
    talents: [
      {
        talentName: `Gale Blade`,
        talentDesc: `Focusing the might of the formless wind around her blade, Jean releases a miniature storm, launching opponents in the direction she aims at, dealing massive Anemo DMG.<br>
        <br><strong>Hold</strong></br>
        </br>At the cost of continued stamina consumption, Jean can command the whirlwind to pull surrounding opponents and objects towards her front.</br>
        Direction can be adjusted.</br>
        Character is immobile during skill duration.`
      },
      {
        talentName: `Dandelion Breeze`,
        talentDesc: `Calling upon the wind's protection, Jean creates a swirling Dandelion Field, launching surrounding opponents and dealing Anemo DMG.<br>
        At the same time, she instantly regenerates a large amount of HP for all party members. The amount of HP restored scales off Jean's ATK.`
      },
      {
        talentName: `Guiding Breeze`,
        talentDesc: `When a Perfect Cooking is achieved on a dish with restorative effects, Jean has a 12% chance to obtain double the product. `
      }
    ],
    maxLevelRequirement: {
      mora: 420000,
      materials: [
        {
          name: `Dandelion Seed`,
          amount:168 
        },
        {
          name: `Damaged Mask`,
          amount:18 
        },
        {
          name: `Stained Mask`,
          amount:30 
        },
        {
          name: `Ominous Mask`,
          amount:36 
        },
        {
          name: `Hurricane Seed`,
          amount:46
        },
        {
          name: `Vayuda Turquoise Sliver`,
          amount:1
        },
        {
          name: `Vayuda Turquoise Fragment`,
          amount:9
        },
        {
          name: `Vayuda Turquoise Chunk`,
          amount:9
        },
        {
          name: `Vayuda Turquoise Gemstone`,
          amount:6 
        }
      ]
    }
  },
];