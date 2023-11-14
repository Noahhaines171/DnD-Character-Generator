import React from "react";
import { useEffect, useState } from "react";
import { getSpellIndexes } from "api/dnd";
// import SpellCard from "components/SpellCard";

function SpellCards() {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadSpells();
  }, []);

  const loadSpells = async () => {
    setIsLoading(true);
    console.log("Load Spells");
    // const savedSpells = localStorage.getItem("spells");
    // if (savedSpells) {
    //   setSpells(JSON.parse(savedSpells));
    //   setIsLoading(false);
    // }
    await getSpellIndexes().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
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
  // return (
  //   <>
  //     {isLoading ? (
  //       <span className="loading">Loading...</span>
  //     ) : (
  //       <ul className="spell-list">
  //         {console.log(spells)}
  //         {spells.forEach((spell) => (
  //           <li key={spell.index}>{spell.name}</li>
  //           // <SpellCard key={spell.index} spell={spell} />
  //         ))}
  //       </ul>
  //     )}
  //   </>
  // );
  return (
    <>
      {isLoading && (
        <>
          <span className="loading">Loading...</span>
        </>
      )}
      <>
        <ul className="spell-list">
          {console.log(spells)}
          {spells.map((spell) => (
            <li key={spell.index}>{spell.name}</li>
            // <SpellCard key={spell.index} spell={spell} />
          ))}
        </ul>
      </>
    </>
  );
}

export default SpellCards;
