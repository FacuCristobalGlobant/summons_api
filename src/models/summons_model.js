const mongoose = require("mongoose");

const summonSchema = new mongoose.Schema({
  currentHealth: Number,
  damageBonus: Number,
  damageDice: Number,
  damageDiceMultiplier: Number,
  description: String,
  maxHp: Number,
  name: String,
  toDamageBonus: Number,
  toHitBonus: Number,
});

const Summon = mongoose.model("Summon", summonSchema);

let SummonModel = {
  async deleteSummon(id) {
    return await Summon.findByIdAndDelete(id);
  },

  async getSummons() {
    return await Summon.find();
  },

  async getSummonById(id) {
    let summon = await Summon.findById(id).exec();
    return summon;
  },

  async updateSummon(id, updateValues) {
    let summon = await Summon.findByIdAndUpdate(id, updateValues).exec();
    return summon;
  },

  async addSummon(
    currentHealth,
    damageBonus,
    damageDice,
    damageDiceMultiplier,
    description,
    maxHp,
    name,
    toDamageBonus,
    toHitBonus
  ) {
    let newSummon = new Summon({
      currentHealth,
      damageBonus,
      damageDice,
      damageDiceMultiplier,
      description,
      maxHp,
      name,
      toDamageBonus,
      toHitBonus,
    });

    await newSummon.save();

    return newSummon;
  },
};

module.exports = SummonModel;
