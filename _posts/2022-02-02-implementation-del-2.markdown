---
layout: post
title:  "Implementation av eHälsolösningar del 2: egenskaper hos lösningen"
description: "Hur eHälsolösningars egenskaper kan påverka hur det går att implementera dem i vården"
date:   2022-02-02 08:00:00 +0200
tags: Forskning Företag Utbildning 
author:
  name: "Redaktionen"
  description: "Intern grupp som arbetar med webplatsen."
image:
  path: "/assets/images/post-head/500/circuit.jpg"
video: false
sitemap:
  lastmod: 2022-02-02
  priority: 0.7
  changefreq: 'weekly'
excerpt_separator: <!--more-->
karta: false
chart: false
cc: false
---

Den andra delen i serien om implementation av eHälsolösningar handlar om vilka egenskaper hos lösningen i sig som kan påverka dess införande i vården. Både som tillverkare och som kund kan det vara värt att tänka hur man kan optimera lösningen för att ge den så goda förutsättningar som möjligt att lyckas vid en implementation.

Rekommendationerna bygger på en [översiktsartikel](https://implementationscience.biomedcentral.com/articles/10.1186/s13012-016-0510-7) av Ross m.fl. För en översikt av ämnet, se [del 1](/2022/01/20/implementation-del-1.html) av artikelserien.

<!--more-->

{% include toc.md %}

# Lösningens ursprung
Vilken trovärdighet har leverantören? Betraktas lösningen som ett svar på faktiska behov inom sjukvården? Kommer den “inifrån” den egna organisationen eller “utifrån”? Har representanter för verksamheten varit delaktiga i att utveckla den?

# Kvalitet och styrka på bevis för lösningen
För att en verksamhet alls ska vara intresserade av att föra in en eHälsolösning lär de vilja se bevis för att lösningen faktiskt fungerar och skapar fördelar jämfört med hur verksamheten fungerar idag. Bevis för detta kan sträcka sig från andra användares utsago till rigorösa vetenskapliga prövningar. Ju större risk en lösning innebär, desto högre beviskrav ställs.

För mer handfast vägledning kring olika typer av bevis rekommenderas [NICE-riktlinjer för evidens för digitala hälsolösningar](/2022/01/06/nice-riktlinjer.html).

# Anpassningsbarhet och prövbarhet
Hur kan lösningen anpassas till det lokala sammanhanget? Om lösningar kan modifieras utifrån nya behov som uppkommer underlättar det upptaget. För att underlätta anpassningar kan man inkludera slutanvändare i produktens utveckling.

Ett begrepp som relaterar till anpassningsbarhet är _interoperabilitet_ med existerande datasystem. För att underlätta upptaget av en lösning hjälper det om lösningen kan utbyta information med de andra system som användarna behöver arbetar med.

Prövbarhet innebär att användaren eller kunden kan testa lösningen innan den börjar användas i större skala. Det ger användaren möjlighet att vänja sig vid och ge återkoppling på lösningen och samtidigt anpassa planerna för hur den ska införas i verksamheten.

# Komplexitet
Faktorer som bidrar till att lösningen upplevs mer komplex och därmed blir svårare att införa:

* Långsam prestanda
* Mjuk- eller hårdvara som är svår att använda
* Behov av att modifiera lösningen
* Behov av att föra över information mellan olika system
* Oförmåga att få tillgång till systemet i realtid
* Dålig tillgänglighet och driftstörningar

Utvecklaren bör försöka utforma produkten så att den minimerar ovanstående, gärna genom att involvera slutanvändare i utvecklingen.

# Kostnad
Kostnaden anses ofta vara det största hindret för implementation av eHälsolösningar. Faktorer som relaterar till kostnader är

* uppstartskostnader såsom inköp och installation
* kostnader för underhåll
* alternativkostnader
* besparingar som lösningen ger upphov till.

Att ha tydligt för sig vilka kostnader lösningen ger upphov till, i förhållande till vilka besparingar den bidrar till, är en förutsättning för att kunna fatta ett välgrundat beslut om lösningen bör införas över huvud taget.

Läs vidare i del [tre](/2022/02/17/implementation-del-3.html) om miljön som implementationen sker inom.


_Hittat något fel eller vill du dela några tankar? [Kontakta oss!](/index.html#form-message)_