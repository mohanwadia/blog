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

Walking time is experienced slower than ride time. 

The question 'what made your walk unpleasant' was asked, with traffic volume/speed and road crossings the largest factors. 

Noisy environments are not pleasant for walking, and traffic noise has key factors speed and volume of traffic. There are also health concerns, as 'those living next to noisy roads are at higher risk of...premature death', and 2600 Australians die from air pollution each year, with traffic pollution linkedinw tih increased rates of asthma. Noise levels at busy intersections are 10x higher than background levels measured at nearby official monitoring stations. Children are most at risk of traffic pollution because their bodies are more sensitive to air polltion.

Melbourne bus passengers expect to walk short distances; the most commonly walked distance is between 200 and 300 metres (VISTA). This would suggest that a 400m-radius is adequate for bus stop catchment planning, however other factors such as frequency interplay. - LOOK AT ARUNDEL ET AL 2017

People also walk longer distances to avoid changing modes - PARKER 2006

Crossing roads is an unavoidable part of using the bus. 

56% of the roads on which bus stops were located had intersecting roads within 50 metres of the stop.



**Signals**

People walking like to cross busy roads to the same side of the bus stop as early as possible due to unpredictable waiting times, minimising the risk fo delays in crossing later. 

Most people (81%) walking to the bus stop are under time pressure, compared to 31% who have alighted the bus and are walking away from the stop.

A short walk (around 300m) is increased by 10-15% due to one set of signals when crossing a busy road. 

Signals were an option to cross the road for less than half (45%0) of survey respondants, and most (76%) who had the option to cross using a green signal used it. Those that did not use it said there was a break in traffic or the lights were too far away or too slow to change. 

At signalized intersections, pedestrian provision almost always fits around vehicular requirements. SIgnals are designed to maximize vehicle throughput and minimse delay, providing a low quality service to pedestrians whose time is valued less. 

Walking times are also decided at 1.2m/s which does not reflect the wide range in walking speeds (42.6% of people over 65 walk at less than 0.8m/s). Currently maximim walk (green) time is eight second, irrespectable of the parallel vehicle phase. Providing automatic and longer green time for crossing decreases delay. There are a wide range of automatic green signals for pedestrians. 

Signals need to be placed effectively, as inconvenient located street crossings and staged crossings can add 20-25% trip time to the walk to the bus stop. Given people are used to walking a short distance, it's unrealistic to make pedestrians walk too much further to signals. 

The bus stop access audits found signals were visible from 29% of stops, with 8% within 5 metres. 

A bus stop located after the intersection is considered more efficient for operations (make up 60% per bus audit) however pedestrians are forced to backtrack to get to the signals so cross infront of the bus or after it's left. 

Pedestrian crossings are great for minimising delay however only 3% of stops had a zebra crossing within 50m. 

Most roads do not ahve medians (60%), while 33% had a raised median, and 7% had a flush painted median. 

55% of 391 responsants claimed there was no crossing infrastructure at the bus stop they used. Most commonly, people must wait for a suitable gap in traffic to cross. 

No formal crossing from 64% of stops (bus audit). When there were crossings, 48% were more than 50 metres away. 

Pedestrian refuge islands, narrowing the road so vehicles wait behind the bus, and raised platforms at signals are all solutions.

36% of stops did not have any ramp access (either kerb ramps or driveways) within 50m.

**Equitable**

Walkable areas and quality of public transport service are not equally distributed. 35% of metropolitan bus stops are not wheelchair accessable, and for a person with disability, they need take on the significant mental load to ensure every component of the journey is accessable. 

Public bus users are more likely to be female, aged 10-29, be studying or in casual work, have no license, and low income. 

Teenagers may struggle with making good judgements around risk, while adults over 60 (who make up 11% of bus users generally have less physical capacity to cross roads or walk long distances and are more succeptable to injury in the event of a crash. 

**Other factors**

Lack of signage (6.1%), grass/soil (13.8%), and lack of shelter (75.1%) all play their part in determining wether a trip is made by bus, however this article is concerned with lack of crossing as I believe this factor is the greatest deterrent. 

**Funding**

Due to a lack of federal funding, there's a current funding level of $3 million for bus stop upgrades within existing state and territory budgets. This excludes crossings, which fall under general road management. 

**Arterials**

An arterial database of roads managed by DTP was chosen as "people will accept 70% longer walking distances in pedestrian-oriented environments compared to car-dominated environments. He notes that this could theoretically triple the catchment size of a public transport stop."

