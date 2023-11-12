import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const spellIndexes = await axios
    .get(BASE_URL + "/api/spells")
    .then((response) => response.data);

  return Promise.all(
    spellIndexes.results.map((index) => {
      axios.get(BASE_URL + index.url).then((response) => response.data);
    })
  );
}
