---
layout: post
title:  "Principer för maskininlärning och artificiell intelligens i medicinteknik"
description: "Vägledning kring hur maskininlärning och AI kan användas för medicinteknik, inklusive eHälsa"
date:   2022-04-14 08:00:00 +0200
tags: Forskning Lagar Medicinteknik
author:
  name: "Redaktionen"
  description: "Intern grupp som arbetar med webplatsen."
image:
  path: "/assets/images/post-head/500/network.jpg"
video: false
sitemap:
  lastmod: 2022-04-14
  priority: 0.7
  changefreq: 'weekly'
excerpt_separator: <!--more-->
karta: false
chart: false
cc: false
---

Maskininlärning och artificiell intelligens är kontroversiella ämnen inom medicin och vård. Det har varit otydligt för både utvecklare och myndigheter hur man ska förhålla sig till den här sortens teknik. Därför har en grupp internationella myndigheter tagit fram [riktlinjer](https://www.fda.gov/media/153486/download) för maskininlärning och artificiell intelligens inom medicinteknik som också kan ge svenska aktörer vägledning.

<!--more-->

{% include toc.md %}

## Inledning
Riktlinjerna har tagits fram av myndigheter som övervakar medicinteknik i USA, Kanada och Förenade kungadömet (UK). Dokumentet utgör vägledning snarare än lagstiftning och är således inte ens i dessa länder bindande. Vidare gäller riktlinjerna för _medicinteknik_, snarare än för alla typer av eHälsoprodukter.

**Läs mer:** [Är min eHälsoprodukt en medicinteknisk produkt?](/2021/08/20/medicinteknik.html)

Trots detta kan riktlinjerna vara värdefulla för dem som utvecklar, använder eller reglerar maskininlärning och artificiell intelligens i Sverige.

## Principerna

### 1. Multidisciplinär expertis genomsyrar hela produktcykeln
Detta innefattar att på djupet förstå modellens integration i det kliniska arbetsflödet, önskade effekter och möjliga risker.

### 2. God sed för mjukvaruutveckling och informationssäkerhet efterföljs
Grunderna i att utveckla den här sortens algoritmer förblir att följa god utvecklingssed, använda högkvalitativ data och ha god informationssäkerhet. Detta innefattar en metodiska processer för riskhantering och design.

### 3. Kliniska studiedeltagare och dataset motsvarar den avsedda patientgruppen
Datan som används i utveckling och testning av lösningen bör motsvara patienterna som produkten i slutändan ska användas för. Exempelvis gäller detta sjukdomstillstånd, kön, ålder och etnicitet. 

### 4. Dataset för träning och testning är oberoende av varandra
Eventuella orsaker till beroende kan vara patientfaktorer, hur datan insamlas och vilka källor som datan kommer ifrån.

### 5. Bästa metoder används för att skapa dataset
Detta inbegriper att förstå begränsningarna i de dataset man använder sig av.

### 6. Modeller anpassas till tillgängliga data och speglar lösningens avsedda användning
Lösningens kliniska fördelar och risker behöver förstås väl så att kliniskt betydelsefulla mål kan ställas upp.

### 7. Fokus på interaktionen mellan människa och AI
I de fall då människor interagerar med modellen behöver mänskliga faktorer beaktas, snarare än bara modellens prestanda i sig.

### 8. Testning under kliniskt relevanta förhållanden
Statistiskt sunda test bör genomföras oberoende av testdatan. Viktiga faktorer att beakta är den avsedda patientgruppen, viktiga undergrupper, den kliniska miljön och samarbetet mellan människa och AI.

### 9. Tydliga anvisningar till användare
Användarna behöver ha tillgång till tydlig, relevant information som är anpassat till mottagaren (exempelvis vårdpersonal eller patient).

### 10. Införda modeller prestanda bevakas och risk för förnyad träning hanteras
Modeller som har satts i kliniskt bruk behöver bevakas för att säkerställa att de fortsatt uppfyller krav på säkerhet och nytta. Modeller som periodiskt eller kontinuerligt tränas på nytt utifrån nya data behöver hanteras så att modellerna inte försämras.

## Slutsats
Principerna speglar hur regelverket försöker komma ikapp den tekniska utvecklingen. EU har tagit fram liknande riktlinjer med [sju krav på artificiell intelligens](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai) (som inte begränsar sig till medicinska ändamål). Innan ett mer omfattande regelverk antas kan dessa riktlinjer ge vägledning för hur eHälsosystem med maskininlärning och artificiell intelligens kan tas fram på ett säkert och ändamålsenligt sätt.

_Hittat något fel eller vill du dela några tankar? [Kontakta oss!](/index.html#form-message)_