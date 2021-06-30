import isEmpty from "is-empty-obj";

function validateStats(file) {
  if (isEmpty(file)) return false;
  if (typeof file.stats == "undefined") return false;
  let stats = file.stats;
  if (isEmpty(stats["Info"])) return false;
  if (isEmpty(stats["Names"])) return false;
  if (isEmpty(stats["Base Stats"])) return false;
  if (isEmpty(stats["Saving Throws"])) return false;
  if (isEmpty(stats["Passives"])) return false;
  if (isEmpty(stats["Hit Dice"])) return false;
  if (isEmpty(stats["Death Saves"])) return false;
  if (isEmpty(stats["Hp"])) return false;
  if (isEmpty(stats["Proficiencies"])) return false;
  return true;
}

const toExport = { validateStats };
export default toExport;
