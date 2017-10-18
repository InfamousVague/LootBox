# LootBox
Generate loot boxes, with options for transparency

# Usage
Firstly install me `npm i --save lootbox`

Next include me in a file and get started
```js
const LootBox = require('lootbox')
const lootBox = new LootBox(
  lootTable,
  boxes,
  0.1 // Optional buff
)

/**
* Open a box
* @method
* @description Chooses a box, then loot from that box
* @returns {object} Loot box item
*/
lootBox.open()


/**
* Open a pack
* @method
* @description Open a set number of loot boxes
* @param {number} size - Number of boxes to open
* @returns {object} Loot box items
*/
lootBox.openPack()


/**
* Determine odds
* @method
* @description determines odds of loot boxes, and items within them
* @returns {object} Collection of boxes, items, and chances
*/
lootBox.determineOdds()
```

# Example Loot Table

```js
module.exports = {
  legendary: [
    {
      id: 'legendary_sword',
      label: 'Legendary Sword'
    }
  ],
  rare: [
    {
      id: 'rare_sword',
      label: 'Rare Sword'
    }
  ],
  uncommon: [
    {
      id: 'refined_sword',
      label: 'Solid Sword'
    }
  ],
  common: [
    {
      id: 'common_sword',
      label: 'Rusty Sword'
    }
  ]
}
```

# Example Box Config

```js
module.exports = {
  boxes: [
    {
      label: 'Common',
      id: 'common',
      color: '#ecf0f1',
      chance: 1
    },
    {
      label: 'Uncommon',
      id: 'uncommon',
      color: '#3498db',
      chance: 0.20
    },
    {
      label: 'Rare',
      id: 'rare',
      color: '#9b59b6',
      chance: 0.03
    },
    {
      label: 'Legendary',
      id: 'legendary',
      color: '#f1c40f',
      chance: 0.01
    }
  ]
}
```