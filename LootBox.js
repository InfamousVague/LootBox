/** Class representing a LootBox. */
class LootBox {
  /**
   * Represents a LootBox.
   * @constructor
   * @param {object} lootTable - Available loot tables
   * @param {object} boxes - The available boxes
   * @param {number} buff - Buff a box so the odds are greater
   */
  constructor (lootTable, boxes, buff = 0) {
    this.boxes = boxes          // List of boxes
    this.buff = buff            // Global Buff
    this.lootTable = lootTable  // List of loot for boxes
  }

  /**
   * Choose a box
   * @method
   * @description Chooses a box based on the chance outlined in this.boxes
   * @returns {object} Loot box
   */
  chooseBox () {
    const rarity = Math.random() + this.buff
    const box = this.boxes.filter(box => box.chance >= rarity)
    return box.reverse()[0]
  }

  /**
   * Choose an item from box
   * @method
   * @description Chooses loot from a box of specified rarity
   * @param {string} rarity - loot box rarity id
   * @returns {object} Loot box item
   */
  chooseLoot (rarity) {
    const items = this.lootTable[rarity]
    const item = items[Math.floor(Math.random() * items.length)]
    return item
  }

  /**
   * Open a box
   * @method
   * @description Chooses a box, then loot from that box
   * @returns {object} Loot box item
   */
  open (buff = 0) {
    const box = this.chooseBox()
    const item = this.chooseLoot(box.id)
    return {
      box,
      item
    }
  }

  /**
   * Open a pack
   * @method
   * @description Open a set number of loot boxes
   * @param {number} size - Number of boxes to open
   * @returns {object} Loot box items
   */
  openPack (size) {
    const loot = []
    for (let i = 0; i < size; i++) {
      const reward = this.open()
      loot.push(reward)
    }
    return loot
  }

  /**
   * Determine odds
   * @method
   * @description determines odds of loot boxes, and items within them
   * @returns {object} Collection of boxes, items, and chances
   */
  determineOdds () {
    const odds = this.boxes.map(box => {
      let total = 0

      this.boxes.map(b => {
        if (b.id !== box.id) total += b.chance
      })

      const chance = (box.chance > total) ? (box.chance - total) * 100 : box.chance * 100

      const items = this.lootTable[box.id].map(item => {
        return {
          item: item.id,
          internalChance: (1 / this.lootTable[box.id].length) * 100,
          globalChance: (1 / this.lootTable[box.id].length) * chance
        }
      })

      return {
        box: box.id,
        chance,
        items
      }
    })

    return odds
  }
}

module.exports = LootBox
