import React from "react";
import "../App.css";
import img from "../Knipsel.JPG";

function About() {
  return (
    <div className="main">
      <header className="App-header">
        <h2>how about me?</h2>
      </header>
      <div align="left">
        Ik woon in het (soms té) rustige Ede samen met mijn 2 puberdochters.
        <br />
        Na een re-org. (na 22 jaar, felt like family) besloten het over een
        andere boeg te gooien en hier ben ik dan: Als 55 jarige tussen de
        twintigers!
        <br />
        <br />
        Het valt niet altijd mee. Ik onthoud werkelijkwaar niets, maar gelukkig
        is het in dit vakgebied ook onmogelijk alles te onthouden en is Google
        je beste vriend. Mijn grootste worsteling was de functies in Javascript
        te doorzien en daarom een week in retraite met een JavaScript boek en
        sloten koffie.
        <br />
        En verder is het een kwestie van heel veel doen. En weten hoe te zoeken.
        <br />
        <br />
        Dit project is zo een beetje het eerste project waar ik de vraagbaak
        niet heb bekogeld met hulpvragen.
        <p>EN.DAT.VOELT.GOED</p>
        Ik ben een dag of twee bezig geweest een API aan te roepen om een
        component toe te voegen met wat Covid gegevens. Dat leek mij in deze
        tijd wel toepasselijk. Maar wat ik ook probeerde, mijn request bleef 403
        teruggeven. Dus de link maar uit mijn Nav gehaald. Ik heb de component
        wel in de files gelaten, omdat ik er nog eens mee wil stoeien. Vandaar
        dat jullie 'm nog zien.
        <br />
        <div>
          <img alt="mijn ergenis JPGtje" src={img} />
        </div>
      </div>
    </div>
  );
}

export default About;
