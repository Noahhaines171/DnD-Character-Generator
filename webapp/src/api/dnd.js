import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const spellIndexes = await axios
    .get(BASE_URL + "/api/spells")
    .then((response) => response.data);
  // const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
  //   response.json()
  // );
  console.log("Spell Indexes:", spellIndexes);
  const indexes = spellIndexes.results.slice(0, 5);
  console.log("Spell Indexes after:", indexes);

  // return await Promise.all(
  //   // spellIndexes.results.map((index, count) => {
  //   //   if (count < 5) {
  //   //     axios.get(BASE_URL + index.url).then((response) => response.data);
  //   //   }
  //   // })
  //   indexes.map((index, count) => {
  //     if (count < 10)
  //       fetch(BASE_URL + index.url).then((response) => response.json());
  //   })
  // );
  const spellResults = [];
  indexes.forEach(async (index) => {
    await axios
      .get(BASE_URL + index.url)
      .then((response) => spellResults.push(response.data));
  });
  return spellResults;
  // return [
  //   await fetch(BASE_URL + indexes[0].url).then((response) => response.json()),
  // ];
}
