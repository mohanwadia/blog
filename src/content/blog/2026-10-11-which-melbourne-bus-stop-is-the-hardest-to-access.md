---
author: Mohan Wadia
pubDatetime: 2026-10-11
modDatetime: 2026-10-11
title: Which Melbourne bus stop is the hardest to access?
featured: false
draft: true
tags:
  - scats
  - gis
  - gtfs
---
Transport Agencies often set coverage targets for their bus network. Melbourne sets any bus route within 400m as it's benchmark, prioritizing walk times while neglecting the quality of a service. Better coverage metrics have been completed by VAGO with just __% of people having access to high-quality public transport within 800m. 

![87 per cent of households in Melbourne are within 400 metres of a bus stop. Melbourne has 366 bus routes covering over 6,000 kilometres. In 2024–25 Victorians took 114.9 million bus trips, which was 24.5 per cent of all public transport trips.](https://www.audit.vic.gov.au/sites/default/files/2025-26/Improving%20Bus%20Services/34961_Bus-services_Key-background-info_FA.svg)

While shorter walk times are prioritized, there are still examples around our network where there has been a disregard for pedestrian safety. A limitation of calculating coverage like this is that it fails to consider that people want to travel in both directions from a bus stop. If there's no safe crossing to make the return journey with PT, neither journey will be made. 

I set out to see which bus stops 

Scope was limited to arterials managed by DTP within 25km of Melbourne's CBD. 

Spatial analysis was completed in ArcGIS Pro, with data provided from Philip Mallis for patronage, SCATS for signalized intersection locations, and OSM for roundabout locations. 



**Why is this topic important? How do people feel about walking to the bus stop?**

Almost all trips taken bus bus require walking, and those who walked made up 95% of all those who travelled to the bus stop. There are generally positive connotations with walking and are many individual and societal benefits. However, the main reason people gave for not walking to the bus stop was that it was too far/long to walk. 

Melbourne bus passengers expect to walk short distances; the most commonly walked distance is between 200 and 300 metres (VISTA). This would suggest that a 400m-radius is adequate for bus stop catchment planning, however other factors such as frequency interplay. - LOOK AT ARUNDEL ET AL 2017

People also walk longer 



Bus passengers 

**Equitable**

Walkable areas and quality of public transport service are not equally distributed. 35% of metropolitan bus stops are not wheelchair accessable, and for a person with disability, they need take on the significant mental load to ensure every component of the journey is accessable. 

Public bus users are more likely to be female, aged 10-29, be studying or in casual work, have no license, and low income. 

Teenagers may struggle with making good judgements around risk, while adults over 60 (who make up 11% of bus users generally have less physical capacity to cross roads or walk long distances and are more succeptable to injury in the event of a crash. 

**Other factors**

Lack of signage (6.1%), grass/soil (13.8%), and shelter (75.1%) all play their part. 

**Funding**

Due to a lack of federal funding, there's a current funding level of $3 million for bus stop upgrades within existing state and territory budgets. This excludes crossings, which fall under general road management. 



&nbsp;