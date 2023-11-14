import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

export async function getSpells() {
  // const spellIndexes = await axios
  //   .get(BASE_URL + "/api/spells")
  //   .then((response) => response.data);
  const spellIndexes = await getSpellIndexes();
  console.log("First Spell Index:", spellIndexes[0]);
  // const indexes = spellIndexes.results.slice(0, 5);
  // console.log("Spell Indexes after:", indexes);

  const spellCalls = spellIndexes.map((spellIndex) => {
    axios.get(BASE_URL + spellIndex.url).then((response) => response.data);
  });
  return Promise.all(spellCalls);

  // const allSpells = Promise.all(
  //   spellIndexes.map((index, count) => {
  //     if (count < 5) {
  //       axios.get(BASE_URL + index.url).then((response) => response.data);
  //     }
  //   })
  //   // indexes.map((index, count) => {
  //   //   if (count < 10)
  //   //     fetch(BASE_URL + index.url).then((response) => response.json());
  //   // })
  // );
  // console.log("All Spells:", allSpells);
  // return allSpells;
  // const spellResults = [];
  // indexes.forEach(async (index) => {
  //   await axios
  //     .get(BASE_URL + index.url)
  //     .then((response) => spellResults.push(response.data));
  // });
  // return spellResults;
  // return [
  //   await fetch(BASE_URL + indexes[0].url).then((response) => response.json()),
  // ];
}

export async function getSpellIndexes() {
  const spellIndexes = await axios.get(BASE_URL + "/api/spells");
  // const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
  //   response.json()
  // );
  console.log("First object:", spellIndexes.data.results[0]);
  console.log("Name:", spellIndexes.data.results[0].name);
  console.log("index:", spellIndexes.data.results[0].index);
  return spellIndexes.data.results;
}

// getSpellIndexes();
// getSpells();
