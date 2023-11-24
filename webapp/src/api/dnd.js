import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

export async function getSpells() {
  const spellIndexes = await getSpellIndexes();
  // const spellIndexes = (await getSpellIndexes()).slice(0, 10);

  const spellCalls = spellIndexes.map(async (spellIndex) => {
    const getSpellCall = await axios.get(BASE_URL + spellIndex.url);
    return getSpellCall.data;
  });

  return Promise.all(spellCalls).then((allSpells) => {
    console.log(allSpells);
    return [].concat(...allSpells);
  });
}

export async function getSpellIndexes() {
  return (await axios.get(BASE_URL + "/api/spells")).data.results;
}
