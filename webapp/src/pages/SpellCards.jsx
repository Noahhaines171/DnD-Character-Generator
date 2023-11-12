import React, { useEffect, useState } from "react";
import { getAllSpells } from "api/dnd";
import SpellCard from "components/SpellCard";

export default function SpellCards() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    getAllSpells().then(setSpells);
  }, []);

  return (
    <>
      <div className="spell-cards-wrapper">
        {spells.length === 0 && <span className="loading">Loading...</span>}
        <ul className="spell-list">
          {spells.map((spell) => (
            <SpellCard key={spell.index} spell={spell} />
          ))}
        </ul>
      </div>
    </>
  );
}
