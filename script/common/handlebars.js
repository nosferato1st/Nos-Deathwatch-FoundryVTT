export const initializeHandlebars = () => {
  registerHandlebarsHelpers();
  preloadHandlebarsTemplates();
};

function preloadHandlebarsTemplates() {
  const templatePaths = [
    "systems/nos-deathwatch/template/sheet/actor/acolyte.html",
    "systems/nos-deathwatch/template/sheet/actor/npc.html",
    "systems/nos-deathwatch/template/sheet/actor/limited-sheet.html",

    "systems/nos-deathwatch/template/sheet/actor/tab/abilities.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/combat.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/gear.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/notes.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/npc-notes.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/npc-stats.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/progression.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/psychic-powers.html",
    "systems/nos-deathwatch/template/sheet/actor/tab/stats.html",

    "systems/nos-deathwatch/template/sheet/mental-disorder.html",
    "systems/nos-deathwatch/template/sheet/aptitude.html",
    "systems/nos-deathwatch/template/sheet/malignancy.html",
    "systems/nos-deathwatch/template/sheet/mutation.html",
    "systems/nos-deathwatch/template/sheet/talent.html",
    "systems/nos-deathwatch/template/sheet/trait.html",
    "systems/nos-deathwatch/template/sheet/special-ability.html",
    "systems/nos-deathwatch/template/sheet/psychic-power.html",
    "systems/nos-deathwatch/template/sheet/critical-injury.html",
    "systems/nos-deathwatch/template/sheet/weapon.html",
    "systems/nos-deathwatch/template/sheet/armour.html",
    "systems/nos-deathwatch/template/sheet/gear.html",
    "systems/nos-deathwatch/template/sheet/drug.html",
    "systems/nos-deathwatch/template/sheet/tool.html",
    "systems/nos-deathwatch/template/sheet/cybernetic.html",
    "systems/nos-deathwatch/template/sheet/weapon-modification.html",
    "systems/nos-deathwatch/template/sheet/ammunition.html",
    "systems/nos-deathwatch/template/sheet/force-field.html",
    "systems/nos-deathwatch/template/sheet/characteristics/information.html",
    "systems/nos-deathwatch/template/sheet/characteristics/left.html",
    "systems/nos-deathwatch/template/sheet/characteristics/name.html",
    "systems/nos-deathwatch/template/sheet/characteristics/right.html",
    "systems/nos-deathwatch/template/sheet/characteristics/total.html",
    "systems/nos-deathwatch/template/chat/item.html",
    "systems/nos-deathwatch/template/chat/roll.html",
    "systems/nos-deathwatch/template/chat/critical.html",
    "systems/nos-deathwatch/template/dialog/common-roll.html",
    "systems/nos-deathwatch/template/dialog/combat-roll.html",
    "systems/nos-deathwatch/template/dialog/psychic-power-roll.html"
  ];
  return loadTemplates(templatePaths);
}

function registerHandlebarsHelpers() {
  Handlebars.registerHelper("removeMarkup", function (text) {
    const markup = /<(.*?)>/gi;
    return text.replace(markup, "");
  })


  Handlebars.registerHelper("damageTypeLong", function (damageType) {
    damageType = (damageType || "i").toLowerCase();
    switch (damageType) {
      case "e":
        return game.i18n.localize("DAMAGE_TYPE.ENERGY");
      case "i":
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
      case "r":
        return game.i18n.localize("DAMAGE_TYPE.RENDING");
      case "e":
        return game.i18n.localize("DAMAGE_TYPE.EXPLOSIVE");
      default:
        return game.i18n.localize("DAMAGE_TYPE.IMPACT");
    }
  });

}

