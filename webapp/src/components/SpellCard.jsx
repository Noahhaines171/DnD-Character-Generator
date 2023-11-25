import React from "react";
import SpellModal from "./SpellModal";

export default function SpellCard({ spell }) {
  const isCantrip = spell.level === 0;

  const isConcentration = spell.concentration;

  const isRitual = spell.ritual;

  const hasAOE = !!spell.area_of_effect;

  // const aoeSize = spell.area_of_effect?.size;

  const hasDamage = !!spell.damage;

  const hasHeal = !!spell.heal_at_slot_level;

  // Set background of card based on spell school

  function spellAreaIcon(spell) {
    const areaIconMap = {
      cone: "caret-left",
      cube: "box",
      cylinder: "transparency",
      line: "arrow-right-short",
      sphere: "circle-half",
    };
    const biClass = `bi bi-${areaIconMap[spell?.area_of_effect?.type]}`;
    return <i className={biClass} />;
  }

  function spellLevelIcon(spellLevel) {
    const biClass = `bi-${spellLevel || "c"}-square`;
    return <i className={biClass} />;
  }

  function spellBaseDamage(spell) {
    if (isCantrip) {
      return spell?.damage?.damage_at_character_level["1"];
    } else {
      return spell?.damage?.damage_at_slot_level[spell.level];
    }
  }

  function spellBaseHeal(spell) {
    return spell?.heal_at_slot_level[spell.level];
  }

  return (
    <div className="card spell-card shadow">
      <div className="card-header d-flex justify-content-between">
        <div className="fs-5 row spell-info">
          <span className="spell-name">{spell.name}</span>
          <span className="spell-school">{spell.school.name}</span>
        </div>
        <div className="spell-level-icon fs-4 row text-end align-content-center">
          {spellLevelIcon(spell.level)}
        </div>
      </div>
      <div className="card-body spell-details">
        <img
          className="spell-card-bg"
          src={`spell-schools/${spell.school.name}.png`}
          // style={{
          //   "background-image": `url(spell-schools/${spell.school.name}.png)`,
          // }}
        />
        <div className="spell-timings row">
          <span>Casting Time: {spell.casting_time}</span>
          <span>Duration: {spell.duration}</span>
        </div>
        <div className="spell-space row">
          <span>Range: {spell.range}</span>
          {hasAOE && (
            <span>
              Area: {spell.area_of_effect?.size} ft. {spellAreaIcon(spell)}
            </span>
          )}
        </div>
        <div className="spell-effects row">
          {hasDamage && (
            <span>
              Damage: {spellBaseDamage(spell)}{" "}
              {spell?.damage?.damage_type?.name}
            </span>
          )}
          {hasHeal && <span>Heal: {spellBaseHeal(spell)}</span>}
        </div>
        <div className="spell-specials row">
          {isConcentration && <span>Concentration</span>}
          {isRitual && <span>Ritual</span>}
        </div>
        {/* <p className="card-text">{spell.desc}</p> */}
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
      <SpellModal spell={spell} />
    </div>
  );
  // return (
  //   <li className="spell-card">
  //     <hgroup>
  //       <h4>{spell.name}</h4>
  //       <small>
  //         {spell.level > 0 && `Level ${spell.level} `}
  //         {spell.school.name}
  //         {spell.level === 0 && " cantrip"}
  //       </small>
  //     </hgroup>
  //     <div className="stats">
  //       <p>
  //         <strong>Casting Time</strong>
  //         {spell.casting_time}
  //       </p>
  //       <p>
  //         <strong>Range</strong>
  //         {spell.range}
  //       </p>
  //       <p>
  //         <strong>Components</strong>
  //         {spell.components.join(", ")}
  //       </p>
  //       <p>
  //         <strong>Duration</strong>
  //         {spell.duration}
  //       </p>
  //     </div>
  //   </li>
  // );
}
