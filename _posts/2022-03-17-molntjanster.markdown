---
layout: post
title: "Molntjänster inom eHälsa"
description: "Hur säkra är molntjänster för eHälsa?"
date: 2022-03-17 08:00:00 +0200
tags: Forskning Lagar
tags_extra: GDPR CLOUD_act
author:
  name: "Redaktionen"
  description: "Intern grupp som arbetar med webplatsen."
image:
  path: "/assets/images/post-head/500/moln.jpg"
video: false
sitemap:
  lastmod: 2022-03-17
  priority: 0.7
  changefreq: 'weekly'
excerpt_separator: <!--more-->
karta: false
chart: false
cc: false
---

Vad är molntjänster och varför har de blivit så omdebatterade? Här ger vi en överblick över vad molntjänster innebär och en bakgrund till att de har blivit så kontroversiella

<!--more-->

{% include toc.md %}

## Vad är en molntjänst?

En server är en dator som istället för att visa program på en skärm ger andra datorer information. Servern är igång alla timmar på dygnet och behöver uppdateras och underhållas som vilken annan dator som helst.

Till exempel finns journalsystem på en server. När vårdpersonal öppnar en patients journal begär journalsystemet information från servern. Servern svarar med patientens journal, och journalsystemet presenterar informationen på vårdpersonalens dator. Utan servrar skulle informationen behöva sparas lokalt på varje dator.

![](/assets/images/post-assets/server.svg "Server")

Innan molntjänster började användas hanterade offentliga verksamheter sina egna serverhallar, vilket krävde fysiskt underhåll av servrarna och deras mjukvara. Alternativt kunde verksamheterna köpa plats på en existerande serverhall, för att själva slippa underhållsarbetet. En nackdel var verksamheterna inte kunde få tillgång till information om serverhallen hade tekniska fel.

1. **Vad är molnet?** Ett flertal serverhallar som samverkar för att aldrig tappa data eller kopplingen till användaren.
2. **Varför är det bra?** Eliminerar behovet av att ha en egen infrastruktur för informationen.
3. **Varför görs det inte nationellt?** Kostnaden och att det inte blir lika storskaligt som internationella motsvarigheter. Flera försök har redan gjorts men har fått avbrytas då svensk juridik och organisation inte samspelar med den tekniska infrastrukturen.

## Vilka fördelar kan molntjänster ha?
Molntjänster kan ge dig tillgång till information var du än är och eliminerar behovet av serverunderhåll. När du skickar information till molnet skickas din information i verkligheten till flera serverhallar i världen. Informationen kan befinna sig på olika platser för att svara dig  från så nära din fysiska position som möjligt eller från den serverhall som har minst trafik och därmed snabbast svarstid.

All data backas upp automatiskt, så om en hårddisk går sönder kan dess innehåll snabbt återfås från en fungerande server. Kunden behöver inte vara rädd för att data ska försvinna, och datan är alltid tillgänglig, oberoende av att en viss serverhall är igång.

Om behovet att få tillgång till information från servrarna ökar, ökar belastningen på servrarna. Innan fick varje person vänta på sin tur, men molntjänster kan snabbt öka sin kapacitet utifrån behovet. Allt sker automatiskt och inkluderas i tjänsten.

![](/assets/images/post-assets/cloud.svg "Molntjänst")

Molntjänster gör att vi inte längre sparar filer eller data lokalt, utan istället skickar iväg dem till okända platser genom företag eller tjänster som vi litar på. Innan man bestämmer sig för om man litar helt på en molntjänstleverantör bör man således sätta sig in i hur data kan nå oönskade tredje parter.

Läs mer: [Lagar som påverkar eHälsa](/2021/07/29/lagar.html)

## Vilka problem kan uppstå med molntjänster?
Mycket av debatten kring molntjänsters säkerhet har kretsat kring amerikansk lagstiftning. **CLOUD Act** ger amerikanska myndigheter under vissa omständigheter möjlighet att få tillgång till data från amerikanska molntjänstleverantörers kunder. **FISA 702** och **EO 12333** ger amerikanska underrättelsetjänsten befogenheter att utan domstolsbeslut utkräva information av andra länder från företag som verkar på amerikansk mark. Även om informationen inte för tillfället befinner sig på amerikanska servrar, måste företaget hjälpa amerikanska myndigheterna att ta del av önskad information utan att informera personen eller organisationen som äger informationen. Det gör det omöjligt att avtala bort **CLOUD Act**.

**GDPR** i EU ska skydda medborgarnas integritet. Bland annat ska lagen hindra att data delas till tredje land. Enligt **GDPR** ska en personuppgiftsansvarig bedöma risker kring vilken information som sparas samt var och hur länge den sparas. **GDPR** tycks därmed stå i konflikt med den amerikanska lagstiftningen.

Molntjänster har varit omtalade och har sedan flera år tillbaka införts inom offentliga verksamheter. Initialt orsakade främst **CLOUD Act** oro,  men på många håll kunde man lösa det med tydliga avtal. Dock riskerar **FISA 702** och **EO 12333** att göra denna strategi verkningslös. Trots att molntjänster ursprungligen skulle fungera oavsett var man befinner sig i världen har den geografiska placeringen av servrarna som ingår i molntjänster alltså åter blivit viktig fråga.

Det finns svenska molntjänstleverantörer, men de saknar skalfördelarna i jämförelse med multinationella företagen, vilket bland annat kan resultera i högre kostnader. Hälso- och sjukvården behöver fråga sig vilka fördelar det ger att anlita en svensk molntjänstleverantör mot att anlita eller drifta en egen serverhall.

Läs mer från insatta personer:

* [Ingående analys av FISA 702 och dess konsekvenser](https://kryptera.se/molntjanster-och-fisa-702/)
* [SKR:s analys av CLOUD Acts påverkan på molntjänstleverantörer](https://skr.se/download/18.4d3d64e3177db55b1663107c/1615462780595/Molntj%C3%A4nster%20v%C3%A4gledning%20Cloud%20Act%20191025%20LI%20slutlig.pdf)
* [Offentlig verksamhets hantering av molntjänster]( https://marcusosterberg.se/cloud-act.html)
* [IT-chefer behöver ta sitt tjänstemannaansvar för molntjänsterna](https://fiaewald.se/blogg/digitalt-tjanstemannaansvar/)
* [Artikel från IDG som beskriver varför molntjänster inte ska ha grönt ljus]( https://computersweden.idg.se/2.2683/1.746169/debatt-amerikanska-molntjanster)
* [Microsofts svar till regeringen om sina molntjänster]( https://www.regeringen.se/48f9c0/contentassets/a415dda1610244df9e94d58148c012fe/159microsoftbilaga3.pdf)

_Hittat något fel eller vill du dela några tankar? [Kontakta oss!](/index.html#form-message)_