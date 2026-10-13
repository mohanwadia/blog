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

Almost all trips taken bus bus require walking, and those who walked made up 95% of all those who travelled to the bus stop. There are generally positive connotations with walking and are many individual and societal benefits. However, the main reason people gave for not walking to the bus stop was that it was too far/long to walk, with traffic volume/speed and lack of road crossings the largest factors towards unpleasantness. 

Melbourne bus passengers expect to walk short distances; the most commonly walked distance is between 200 and 300 metres (VISTA). This would suggest that a 400m-radius is adequate for bus stop catchment planning, however other factors such as frequency interplay. - LOOK AT ARUNDEL ET AL 2017

Crossing roads is an unavoidable part of using the bus. 56% of the roads on which bus stops were located had intersecting roads within 50 metres of the stop.

# Installing Signals Effectively

81% of people walking to thebus stop are under time pressure. 

A short walk (around 300m) is increased by 10-15% due to one set of signals when crossing a busy road. 

Signals are well used (76%), with those ignoring them claiming there was a break in traffic or the lights were too far away or too slow to change. However they are only an option to use for the minority (45%). The bus stop access audits found signals were visible from 29% of stops, with 8% within 5 metres. No formal crossing from 64% of stops (bus audit). When there were crossings, 48% were more than 50 metres away. 

At signalized intersections, pedestrian provision almost always fits around vehicular requirements. SIgnals are designed to maximize vehicle throughput and minimse delay, providing a low quality service to pedestrians whose time is valued less. 

Additionally, walk times are set at a maximum of a 8 second green phase regardless of the parallel vehicle phase length, and are decided at 1.2m/s which does not reflect the wide range in walking speeds. Automatic green signals for pedestrians are also rarely used, increasing delay. 

Signals need to be placed effectively, as inconvenient located street crossings and staged crossings can add 20-25% trip time to the walk to the bus stop. Given people are used to walking a short distance, it's unrealistic to make pedestrians walk too much further to signals. 

**Medians**

Most roads do not ahve medians (60%), while 33% had a raised median, and 7% had a flush painted median. 

55% of 391 responsants claimed there was no crossing infrastructure at the bus stop they used. Most commonly, people must wait for a suitable gap in traffic to cross. 

Pedestrian refuge islands, narrowing the road so vehicles wait behind the bus, and raised platforms at signals are all solutions.

**Kerbs**

36% of stops did not have any ramp access (either kerb ramps or driveways) within 50m. At 23% of stops where there were driveways but no kerb ramps, people using wheeled devices or with limited mobility would need to cross indirectly as driveways are built for property access. 

Navigating side roads is complicated too as people need to navigate the main road and turning traffic for the side road. 

Within 50m of a bus stop, 11% had a driveway to an indiustrial, retail or aged care facility, and 9% had entrances to car parks. 

**Indirect Routes**

Barries such as train lines, arterials, and large buildings require detours. 

Walking detours become unacceptable when they exceed around 40%. (Schmitz 1991b cited in Hillnhutter 2016)

As such the catchment area varies between straightline and real walking distance.

# Equality

Public bus users are more likely to be female, aged 10-29, be studying or in casual work, have no license, and low income. 

Walkable areas and quality of public transport service are not equally distributed. 35% of metropolitan bus stops are not wheelchair accessable, and for a person with disability, they need take on the significant mental load to ensure every component of the journey is accessable. 

People should feel safe crossing at all times of day. Women are more likely to feel unsafe walking alone than men, particularly after dark. In Australia, the gap between the sexes is greater than any other OECD country. 

In terms of road safety, teenagers may struggle with making good judgements around risk, while adults over 60 (who make up 11% of bus users generally have less physical capacity to cross roads or walk long distances and are more succeptable to injury in the event of a crash. There is no database of bus-related crashes. Facilities are also not provided unless certain high requirements are met, which means that infrastructure is often reactive rather than proactive. 

**Other factors**

Infrastructure decisions such as Lack of signage (6.1%), grass/soil (13.8%), and lack of shelter (75.1%) all play their part in determining wether a trip is made by bus. Other factors picked up in surveys such as ________________ are understandably at play too. However this article is concerned with lack of crossing as I believe this factor is the greatest deterrent. 

**Funding**

Due to a lack of federal funding, there's a current funding level of $3 million for bus stop upgrades within existing state and territory budgets. This excludes crossings, which fall under general road management. 

**Arterials**

An arterial database of roads managed by DTP was chosen as "people will accept 70% longer walking distances in pedestrian-oriented environments compared to car-dominated environments. He notes that this could theoretically triple the catchment size of a public transport stop."

Busy roads create a barrier to walking that is both physical and psychological. They are associated with less walking, reduced health and wellbeing, etc. Many bus stops in Melbourne are located on arterials because routes can be direct, fast, and have large catchment areas because of intersecting side streets. However, locating bus routes on arterial roads can lead to longer walking distances because of limited places to cross the road, make crossing the road difficult or dangerous and create an unpleasant walking environment. 

Noisy environments are not pleasant for walking, and traffic noise has key factors speed and volume of traffic. There are also health concerns, as 'those living next to noisy roads are at higher risk of...premature death', and 2600 Australians die from air pollution each year, with traffic pollution linkedinw tih increased rates of asthma. Noise levels at busy intersections are 10x higher than background levels measured at nearby official monitoring stations. Children are most at risk of traffic pollution because their bodies are more sensitive to air polltion.

"Making 99% of a journey safe and convenient by foot or bike is futile if the remaining 1% contains a dangerous crossing" (Rod Tolley)

Arterial roads are dangerous places to walk. Higher speeds result in more serious injuries, more lanes mean it's less safe to cross.

Nearly half (41% of stops were located on roads where a person would have to cross at least 4 lanes of traffic. 

Most street lighting is designed for drivers, while people walking have to make do with whatever liught reached them from distant fixtures through the tree canopy. There is limited bus stop lighting. 