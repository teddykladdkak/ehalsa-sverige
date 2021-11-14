---
layout: post
title:  "Standarder inom eHälsa"
description: "Standarder som kan vara bra att följa inom eHälsa"
date:   2021-07-31 08:00:00 +0200
tags: Standarder Medicinteknik
author:
  name: "Redaktionen"
  description: "Intern grupp som arbetar med webplatsen."
image:
  path: "/assets/images/post-head/500/pil.jpg"
video:
  src: "644964363?h=c33925f383"
  title: "Standarder att ha koll p&amp;aring;"
sitemap:
  lastmod: 2021-07-31
  priority: 0.7
  changefreq: 'weekly'
excerpt_separator: <!--more-->
karta: false
chart: false
cc: false
---
Som utvecklare, inköpare eller användare av eHälsotjänster lönar det sig att ha koll på vilka standarder som används inom branschen. Här förklarar vi några av de vanligaste och viktigaste standarderna.
<!--more-->
{% include toc.md %}

## Anatomical Therapeutic Chemical Classification System (ATC) {#atc}
**Användning:** Koder för gruppering av läkemedel\
**Förvaltare:** Världshälsoorganisationen (WHO)

ATC-systemet ger varje läkemedel en alfanumerisk kod baserat på organsystemet som det verkar på, dess terapeutiska syfte och dess aktiva substans. Koderna är hierarkiskt organiserade inom 14 huvudgrupper, där varje kod har en enda överordnad kod. Exempel:

* C: hjärta och kretslopp
* C09: medel som påverkar renin-angiotensinsystemet
* C09A: ACE-hämmare
* C09AA: ACE-hämmare
* C09AA02: enalapril

## Fast Healthcare Interoperability Resources (FHIR) {#fhir}
**Användning:** Överföring av klinisk och administrativ data\
**Förvaltare:** Health Level Seven International (HL7)

FHIR (uttalas som engelska “fire”) är den av HL7:s åtskilliga standarder som har fått bäst fäste i Sverige. FHIR används för utbyte av hälsodata. Det utgör ett ramverk som innehåller definierade informationsobjekt i form av ca 150 resurser, möjlighet till anpassning (“profilering”), dokumentation och referensimplementationer. eHälsomyndigheten har valt FHIR som standard för Nationella läkemedelslistan.

## International Statistical Classification of Diseases and Related Health Problems (ICD) {#icd}
**Användning:** Diagnoskoder\
**Förvaltare:** Världshälsoorganisationen (WHO)

ICD är en förteckning av medicinska diagnoser. ICD är uppbyggt enligt en trädstruktur där mer specifika diagnoser får fler alfanumeriska tecken i sina koder. För närvarande används den tionde upplagan (ICD-10) i Sverige. Den svenska versionen heter ICD-10-SE.

ICD-11 antogs av WHO 2019 och Socialstyrelsen uppskattar att en svensk version kommer att finnas 2024. Det är dock inte fastställt när ICD-11 kommer att införas i Sverige. Nyheter i ICD-11 är bland annat kapitel om sömnproblem, sexuell hälsa och traditionell asiatisk medicin. ICD-11 är ett heldigitalt klassifikationssystem, till skillnad från tidigare versioner, som i grunden varit utformade för att publiceras och användas i bokform. ICD-11 innehåller länkar till ICF och ICHI.

En förkortad version av ICD-10 avsedd för primärvården är Klassifikation av sjukdomar och hälsoproblem 1997 (KSH97-P). Socialstyrelsen har dock minskat prioriteringen av att uppdatera KSH97-P, och den senaste versionen publicerades 2015.
## Internationell klassifikation av funktionstillstånd, funktionshinder och hälsa (ICF) {#icf}
**Användning:** Koder som beskriver individers funktionsförmåga\
**Förvaltare:** Världshälsoorganisationen (WHO)

ICF innefattar hierarkiska koder i två delar, som i sin tur är delade i två komponenter:

1. funktionstillstånd och funktionshinder, omfattande
	* kroppsfunktioner och kroppsstrukturer
	* aktiviteter och delaktighet
2. kontextuella faktorer, omfattande
	* omgivningsfaktorer
	* personfaktorer (för närvarande inte klassificerade i ICF).

ICF är tänkt att kunna användas både kliniskt för att beskriva funktionstillstånd och som ett statistiskt verktyg.
## IEC 62304 – Elektrisk utrustning för medicinskt bruk –  Livscykelprocesser för programvara {#iec-62304}
**Användning:** Utveckling och underhåll av medicinteknisk mjukvara\
**Förvaltare:** International Electrotechnical Commission (IEC)

Standarden beskriver krav för olika steg i livscykeln för medicinteknisk mjukvara:

* utveckling
* underhåll
* riskhantering
* konfigurering
* problemlösning.

## IEC 62366-1 – Medicintekniska produkter – Del 1: Tillämpning av metoder för att säkerställa medicintekniska produkters användarvänlighet {#iec-62366-1}
**Användning:** Medicintekniska produkter användarvänlighet\
**Förvaltare:** International Electrotechnical Commission (IEC)

Standarden beskriver en metod för att utveckla och utvärdera användarvänligheten för en medicinteknik produkts slutanvändare, vilket även kan appliceras på medicinteknisk mjukvara.
## ISO 9001 – Ledningssystem för kvalitet {#iso-9001}
**Användning:** Företagsledning och kvalitet\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO)

ISO 9001 är en allmän standard för kvalitetssystem, som används världen över i åtskilliga branscher. Standarden tar upp

* företagets kontext och omvärld
* ledarskap
* planering och målsättning
* operativ verksamhet
* mätning och utvärdering av prestanda
* förbättring av verksamheten.

Det är vanligt att upphandlingar ställer krav på certifiering eller dokumenterat arbete enligt ISO 9001.

**Läs mer:** [Vad är ISO 9001?](/2021/10/28/iso-9001.html)

## ISO 13485 – Medicintekniska produkter – Ledningssystem för kvalitet – Krav för regulatoriska ändamål {#iso-13485}
**Användning:** Företagsledning och kvalitet för medicinteknik\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO)

ISO 13485 bygger på ISO 9001 men är anpassad för medicinteknik. Viktiga skillnader mot ISO 9001:

* Vissa krav i ISO 9001 är oförenliga med regelverket för medicintekniska produkter och har därför utelämnats.
* ISO 13485 ställer högre krav på teknisk dokumentation.
* Hela kvalitetsledningssystemet är riskbaserat.
* Hantering av produktklagomål, incidenter och olycks- och tillbudsrapportering
* ISO 13485 ställer tydligare krav på validering, verifiering och design av produkter.

**Läs mer:** [Vad är ISO 13485?](/2021/11/11/iso-13485.html)

## ISO 14971 – Medicintekniska produkter – Tillämpning av ett system för riskhantering för medicintekniska produkter {#iso-14971}
**Användning:** Riskhantering för medicinteknik\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO)

ISO 14971 fastställer krav för och beskriver en process för hur tillverkare av medicintekniska produkter kan identifiera, hantera och övervaka risker. Standarden innefattar bl.a. följande:

* upprättande av riskhanteringsplan
* riskanalys
* utvärdering av risker
* kontroll av risker
* utvärdering av kvarvarande risker och risk-nyttaförhållande
* rapportering av riskhantering.

## ISO/IEC 27001 – Informationssäkerhet {#iso-iec-27001}
**Användning:** Informationssäkerhet, innefattande både digital och fysisk datasäkerhet\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO) och International Electrotechnical Commission (IEC)

ISO 27001 beskriver en riskbaserad metod för att strukturerat hantera informationssäkerhetsfrågor. ISO 27002 till ISO 27005 utgör stödstandarder för att underlätta tolkning och implementation av ISO 27001. Det är vanligt att verksamheter integrerar ISO 27001 med ISO 9001.

[Vad är ISO 27001?](/2021/11/04/iso-27001.html)

## ISO/IEC 27017 – Säkerhetstekniker – Riktlinjer för säkerhetsåtgärder för molntjänster baserade på SS-ISO/IEC 27002 {#iso-iec-27017}
**Användning:** Informationssäkerhet särskilt för molntjänster\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO) och International Electrotechnical Commission (IEC)

ISO 27017 utgår från ISO 27002, men lägger till ytterligare kontrollmekanismer för säkerhet för molntjänster.

## ISO/IEC 27018 Informationsteknik – Säkerhetstekniker – Riktlinjer för skydd av personuppgifter i publika molntjänster som hanterar personuppgifter {#iso-iec-27018}
**Användning:** Informationssäkerhet särskilt för hantering av personuppgifter i molntjänster\
**Förvaltare:** Internationella standardiseringsorganisationen (ISO) och International Electrotechnical Commission (IEC)

ISO 27018 utgår från ISO 27002, men lägger till ytterligare kontrollmekanismer för säkerhet för hantering av personuppgifter i molntjänster utifrån regulatoriska krav.
## Klassifikation av sjukdomar och hälsoproblem 1997, Primärvård (KSH97-P) {#ksh97-p}
Se International Statistical Classification of Diseases and Related Health Problems (ICD).

## Klassifikation av vårdåtgärder (KVÅ) {#kva}
**Användning:** Åtgärdskoder\
**Förvaltare:** Socialstyrelsen

KVÅ-koder rapporteras till Socialstyrelsens hälsodataregister. KVÅ-koder är hierarkiskt uppbyggda och beskriver patientinriktade utredande, behandlande eller förebyggande insatser.

## Medical Subject Headings (MeSH) {#mesh}
**Användning:** Synonymer för söktermer\
**Förvaltare:** National Library of Medicine (USA)

MeSH fungerar som en synonymordbok för att söka bland medicinska begrepp. 
Svenska versionen av MeSH förvaltas av Karolinska institutet.

## Nomenclature of Properties and Units (NPU) {#npu}
**Användning:** Laboratorievärden\
**Förvaltare:** International Federation of Clinical Chemistry and Laboratory Medicine (IFCC) och International Union of Pure and Applied Chemistry (IUPAC)

NPU-koder används för att identifiera labbvärden. Exempelvis har provet P-bilirubin koden NPU01370.
## openEHR {#openehr}
**Användning:** Informationsöverföring i elektroniska journalsystem\
**Förvaltare:** openEHR Foundation

openEHR är en öppen standard för hantering och utbyte av data i elektroniska journalsystem.

## Systematized Nomenclature of Medicine Clinical Terms (SNOMED-CT) {#snomed-ct}
**Användning:** Informationsöverföring i elektroniska journalsystem\
**Förvaltare:** SNOMED International

SNOMED-CT anses vara världens mest omfattande medicinska terminologi med koder, begrepp, synonymer och definitioner som används för klinisk dokumentation. Socialstyrelsen förvaltar den svenska versionen av SNOMED-CT.

*Hittat fel i artikeln eller har vi missat någon standard? [Kontakta oss!](/index.html#form-message)*