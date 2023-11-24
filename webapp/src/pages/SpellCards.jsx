import React from "react";
import { useEffect, useState } from "react";
import { getSpells } from "api/dnd";
import SpellCard from "components/SpellCard";
import { Spinner } from "components/Spinner";

function SpellCards() {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadSpells();
  }, []);

  const loadSpells = async () => {
    setIsLoading(true);
    console.log("Load Spells");
    const savedSpells = localStorage.getItem("spells");
    if (savedSpells) {
      console.log("Spells loaded from local storage");
      setSpells(JSON.parse(savedSpells));
      setIsLoading(false);
    }
    await getSpells().then((spells) => {
      setSpells(spells);
      localStorage.setItem("spells", JSON.stringify(spells));
      setIsLoading(false);
    });
  };

  return (
    <div className="spell-cards-wrapper">
      {isLoading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      <div className="spell-list">
        {spells.map((spell) => (
          // <li key={spell.index}>{spell.name}</li>
          <SpellCard key={spell.index} spell={spell} />
        ))}
      </div>
    </div>
  );
}

export default SpellCards;
