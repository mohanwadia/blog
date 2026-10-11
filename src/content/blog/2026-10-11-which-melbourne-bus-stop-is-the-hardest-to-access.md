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