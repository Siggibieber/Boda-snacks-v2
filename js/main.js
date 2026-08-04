function showConfig(size){

const result=document.getElementById("configResult");

if(size==="small"){

result.innerHTML=`
<h3>1–20 Mitarbeiter</h3>
<p>Empfehlung: Kompakter Premium-Kaffeevollautomat.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="medium"){

result.innerHTML=`
<h3>20–50 Mitarbeiter</h3>
<p>Empfehlung: Kaffeevollautomat mit Milchsystem.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="large"){

result.innerHTML=`
<h3>50–100 Mitarbeiter</h3>
<p>Empfehlung: Hochleistungs-Kaffeeautomat mit zwei Bohnenbehältern.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="enterprise"){

result.innerHTML=`
<h3>100+ Mitarbeiter</h3>
<p>Empfehlung: Individuelle Premium-Kaffeelösung für hohe Auslastung.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

}
