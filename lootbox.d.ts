declare module "lootbox" {
  class LootBox {
    /**
     * Represents a LootBox.
     * @constructor
     * @param {object} lootTable - Available loot tables
     * @param {object} boxes - The available boxes
     * @param {number} buff - Buff a box so the odds are greater
     */
    constructor(lootTable: Record<string, any>, boxes: any[], buff?: number);

    /**
     * Choose a box
     * @method
     * @description Chooses a box based on the chance outlined in this.boxes
     * @returns {object} Loot box
     */
    chooseBox(): Record<string, any>;

    /**
     * Choose an item from box
     * @method
     * @description Chooses loot from a box of specified rarity
     * @param {string} rarity - loot box rarity id
     * @returns {object} Loot box item
     */
    chooseLoot(rarity: string): Record<string, any>;

    /**
     * Open a box
     * @method
     * @description Chooses a box, then loot from that box
     * @returns {object} Loot box item
     */
    open(): Record<string, any>;

    /**
     * Open a pack
     * @method
     * @description Open a set number of loot boxes
     * @param {number} size - Number of boxes to open
     * @returns {object} Loot box items
     */
    openPack(size: number): Record<string, any>;

    /**
     * Determine odds
     * @method
     * @description determines odds of loot boxes, and items within them
     * @returns {object} Collection of boxes, items, and chances
     */
    determineOdds(): Record<string, any>;
  }
  export default LootBox;
}
