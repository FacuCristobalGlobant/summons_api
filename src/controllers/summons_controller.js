let summonsModel = require("../models/summons_model");

const summonsController = {
  async createSummon({
    currentHealth,
    damageBonus,
    damageDice,
    damageDiceMultiplier,
    description,
    maxHp,
    name,
    toDamageBonus,
    toHitBonus,
  }) {
    let newSummon = await summonsModel.addSummon(
      currentHealth,
      damageBonus,
      damageDice,
      damageDiceMultiplier,
      description,
      maxHp,
      name,
      toDamageBonus,
      toHitBonus
    );

    return newSummon;
  },

  async getSummons() {
    return await summonsModel.getSummons();
  },

  async getSummonById(id) {
    return await summonsModel.getSummonById(id);
  },

  async updateSummon(id, updateValues) {
    return await summonsModel.updateSummon(id, updateValues);
  },

  async deleteSummon(id) {
    return await summonsModel.deleteSummon(id);
  }
};

module.exports = summonsController;
