import React from "react";
import { useEffect, useState } from "react";
import { getAllSpells } from "api/dnd";
// import SpellCard from "components/SpellCard";

function SpellCards() {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    loadSpells();
  }, []);

  const loadSpells = async () => {
    console.log("Load Spells");
    // const savedSpells = localStorage.getItem("spells");
    // if (savedSpells) {
    //   setSpells(JSON.parse(savedSpells));
    //   setIsLoading(false);
    // }
    await getAllSpells().then((spells) => {
      setSpells(spells);
      console.log("spells", spells);
      // localStorage.setItem("spells", JSON.stringify(spells));
      setIsLoading(false);
    });
  };

  // return (
  //   <div className="App">
  //     {isLoading ? (
  //       <span className="loading">Loading...</span>
  //     ) : (
  //       <ul className="spell-list">
  //         {spells.map((spell) => (
  //           <li key={spell.index}>{spell.name}</li>
  //           // <SpellCard key={spell.index} spell={spell} />
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
  return (
    <div className="App">
      {isLoading && spells.length < 5 ? (
        <span className="loading">Loading...</span>
      ) : (
        <ul className="spell-list">
          {console.log(spells)}
          {spells.forEach((spell) => (
            <li key={spell.index}>{spell.name}</li>
            // <SpellCard key={spell.index} spell={spell} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SpellCards;
