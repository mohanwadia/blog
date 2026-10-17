---
author: Mohan Wadia
pubDatetime: 2026-10-13
modDatetime: 2026-10-13
title: Which Melbourne bus stop is the hardest to access?
featured: false
draft: true
tags:
  - scats
  - gis
  - gtfs
description: Advocating for signalized crossings for the safety of bus passengers
---
Melbourne bus passengers expect to walk short distances. 

The most commonly walked distance is between 200 and 300 metres (VISTA), and coverage planning by DTP is centred around a 400-metre radius. 

While this metric claims residents are served by a bus route if they are within a 400 metre walk of any stop on the route, it doesn't make any assumptions about the opposite direction. 

![87 per cent of households in Melbourne are within 400 metres of a bus stop. Melbourne has 366 bus routes covering over 6,000 kilometres. In 2024–25 Victorians took 114.9 million bus trips, which was 24.5 per cent of all public transport trips.](https://www.audit.vic.gov.au/sites/default/files/2025-26/Improving%20Bus%20Services/34961_Bus-services_Key-background-info_FA.svg)

# How do people feel about walking?

Almost all trips taken bus bus require walking, and those who walked made up 95% of all those who travelled to the bus stop. 

There are generally positive connotations with walking and are many individual and societal benefits. However, the main reason people gave for not walking to the bus stop was that it was too far/long to walk, with traffic volume/speed and lack of road crossings the largest factors towards unpleasantness. 

[People Jaywalking at Monash Uni]

Crossing roads is an unavoidable part of using the bus. 56% of the roads on which bus stops were located had intersecting roads within 50 metres of the stop. 55% of 391 responses claimed there was no crossing infrastructure at the bus stop they used. Most commonly, people must wait for a suitable gap in traffic to cross. 

If there's no safe crossing to make the return journey with PT, often neither journey will be made. Walking detours become unacceptable when they exceed around 40%. (Schmitz 1991b cited in Hillnhutter 2016).

# Our Arterial Network

Arterial roads are dangerous places to walk. Higher speeds result in more serious injuries, and more lanes mean it's less safe to cross. __% of bus stops in Melbourne are located on arterial roads. Nearly half (41%) of stops were located on roads where a person would have to cross at least 4 lanes of traffic. Below are the signalized arterial intersections, where the density of signalized intersections is often prioritized by vehicular volume.

![image.png](/blog/images/image-44.png)

"The construction or improvement of pedestrian crossing facilities often becomes the main alternative to mitigate the impacts of roads on pedestrians, when solutions such as reducing traffic levels or lowering speed limits met with social and political resistance." (Anciaes, 2017)

There are many positive reasons buses run on arterial roads, including directness, speed, and catchment areas because of intersecting side streets. This has left most residential arterial segments with many bus stops as seen below. However, locating bus routes on arterial roads can lead to longer walking distances because of limited places to cross the road, causing journeys to be difficult or dangerous. "Making 99% of a journey safe and convenient by foot or bike is futile if the remaining 1% contains a dangerous crossing" (Rod Tolley)

![image.png](/blog/images/image-45.png)

Arterials are also associated with unpleasant walking environments, as traffic noise stems from speed and volume of traffic (10x higher background levels), as well as present health concerns stemming from traffic pollution too. (link higher risk of...premature death', and 2600 Australians die from air pollution each year, with traffic pollution linked in with increased rates of asthma)

# Discussion

I set out to find which bus stops are most in need for crossings to be installed. 

Scope was limited to arterials managed by DTP within 25km of Melbourne's CBD. 

[GTFS stop locations with patronage](https://public.tableau.com/app/profile/philipmallis#!/vizhome/2018-19BusStopPatronageMelbourne/Map) were loaded into ArcGIS Pro using 'XY Table to Point', and [signalized intersection locations](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) were imported using 'JSON to Feature', with freeways removed using 'Select by Attribute'. Then, 'Near' removed signalized intersections not within 20m of arterials. Finally, 'Select by Location' attributed each bus stop with the distance to it's closest signalized intersection.

![image.png](/blog/images/image-48.png)

The furthest distances from signalized crossings can be filtered for both greater than 10 boardings per day as well as more than 2 lanes, which produces some really meaningful results:


| Bus Stop | Number of Lanes | Patronage | Routes | ++Distance from Crossing++ |
| ------------------------------------------------ | --------------- | --------- | ------------------ | -------------------------- |
| #1 Elmstead Dr/Ferntree Gully Rd (Wheelers Hill) | 6 | 11.2 | 693, 753 | 1172m |
| #2 1103 High Street Rd (Wantirna South) | 4 | 24.2 | 736, 737 | 954m |
| #3 Church Rd/Reynolds Rd (Templestowe) | 4 | 12.5 | 282, 309, 901 | 862m |
| #4 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #5 Noordenne Ave/Millers Rd (Altona) | 4 | 23.2 | 411, 412, 415, 903 | 722m |


**#1 Elmstead Dr (Wheelers Hill)** is very far from the nearest signalized crossing, however does have an underpass as part of Dandenong Creek Trail which is susceptible to flooding. As a result, the westbound stop has high patronage (11.2) compared to the stop opposite (1.4) with no residential coverage. 

[Elmstead Dr/Ferntree Gully Rd Image]

I would argue the adjacent stop to Elmstead Dr between the signalized intersection and the underpass has it worse as seen above; the options are a ___m downhill detour through the underpass, a ___m detour up a very steep hill, or crossing six lanes of 80km/h traffic while navigating side streets and service lanes with an angled median. Topographical catchments are another limitations of current coverage goals, for example in the hilly city of Coimbra recorded "decrease in accessibility of circa 10%" was recorded. [(Pais et al, 2025)](https://www.mdpi.com/2220-9964/14/5/205)

**#3 Church Rd (Templestowe)** has Route 901, the 8th highest performing bus route in Melbourne as well as the second most resource-intensive one. As the longest bus route, it contains 20 bus stops with a greater crossing distance than 500m, the most of any bus route. When introduced in 2008, little attention was placed into improving the surrounding infrastructure to maximize the benefits. 

**#5 Noordenna Ave (Altona)** connects 100+ secluded residents to Altona train station, with 8.5 buses per hour on weekdays in both directions. An installation of signals at the Noordeena Ave / Millers Rd intersection would provide a direct and safe crossing as well as a safer intersection for vehicles.

If we want to benefit the most amount of people rather than find those most isolated, we can filter for distances greater than 450m on roads with more than 2 lanes, and sorting by patronage, to get the following:


|  | # Lanes | ++Patronage++ | Routes | Distance from Crossing |
| ----------------------------------------------- | ------- | ------------- | ------------------ | ---------------------- |
| #1 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #2 Ormond Rd/Geelong Rd (West Footscray) | 6 | 55.2 | 411, 412 | 470m |
| #3 Robertswood Cl/Blackburn Rd (Doncaster East) | 4 | 53.9 | 901, 906, 908 | 607m |
| #4 Rogers St/Lorimer St (Port Melbourne) | 4 | 40.8 | 237 | 507m |
| #5 Sandringham Hospital/Bluff Rd (Black Rock) | 4 | 37.8 | 600, 825, 922, 923 | 638m |


**#1 Franklyn St (Huntingdale)** shows up again with a huge 806 metre detour to the nearest signals. While there is a pedestrian overpass, with long ramps to navigate, I often observe people crossing at grade here.

[Franklyn St with Overpass]

The situation reminds me of the funded Doncaster underpass which ["recorded an increase in the number of pedestrians crossing at ground level" (Hutchinson, 2011)](https://apo.org.au/sites/default/files/resource-files/2011-12/apo-nid60033.pdf); unfortunately grade separated pedestrian crossings often prioritize vehicles over pedestrians. And when they would benefit high volumes of pedestrians immensely, such as when entering SRL stations, they are de-scoped for being too costly. 

**#3 Robertswood Cl (Doncaster East)** is one of two corridors that serves 3+ SmartBus routes (the other being Hoddle St) and correspondingly has high patronage. However, with four lanes and no median to cross, I'd recommend signalizing the Serpells Rd intersection and installing new stops within bus skip queue lanes.

While greater distances are typically found in middle- and outer-Melbourne, **#4 Rogers St (Port Melbourne)** is the exception at just 3km from the CBD. Attractive high-frequency services can be established relatively quickly and cheaply, such as when Route 237 received significant frequency improvements in 2022, however without the infrastructure to move people patronage within Fishermans Bend will suffer as a result. 

The **#5 Sandringham Hospital (Black Rock)** bus stop also serves a strip of shops and lots of residents on either side. There is potential for extended traffic calming, as 300m north and south of the location, the road narrows to two lanes with a crossing median. 

# Installing Signals Effectively

Signals need to be placed effectively, as inconvenient located street crossings and staged crossings can add 20-25% trip time to the walk to the bus stop. Given people are already used to walking a short distance, it's unrealistic to make pedestrians walk too much further to signals. 

Signals are well used (76%), with those ignoring them claiming there was a break in traffic or the lights were too far away or too slow to change. However they are only an option to use for the minority (45%). The bus stop access audits found signals were visible from 29% of stops, with 8% within 5 metres. No formal crossing from 64% of stops (bus audit). When there were crossings, 48% were more than 50 metres away. 

[Oakleigh Intersection recently installed]

At signalized intersections, pedestrian provision almost always fits around vehicular requirements. SIgnals are designed to maximize vehicle throughput and minimse delay, providing a low quality service to pedestrians whose time is valued less. This neglects the fact that 81% of people walking to the bus stop are under time pressure to catch their service, and a short walk (around 300m) is increased by 10-15% due to one set of signals when crossing a busy road. 

Additionally, walk times are set at a maximum of a 8 second green phase regardless of the parallel vehicle phase length, and are decided at 1.2m/s which does not reflect the wide range in walking speeds. Automatic green signals for pedestrians are also rarely used at intersections, increasing delay. "Increases to clearance times helped to make people feel safer crossing the intersections" while there is "a very strong positive relationship between pedestrian speed and crossing distance." [(Hutchinson, 2011)](https://apo.org.au/sites/default/files/resource-files/2011-12/apo-nid60033.pdf)

# The Equality Angle

Public bus users are more likely to be female, aged 10-29, be studying or in casual work, have no license, and low income. 

Walkable areas and quality of public transport service are not equally spatially distributed either. Cheaper locations with less opportunities often have fewer transport options too in Melbourne. 

35% of metropolitan bus stops are not wheelchair accessible, and for a person with disability, they need take on the significant mental load to ensure every component of the journey is accessible. 

[Bus stop that is not wheelchair accessible - the one in Oakleigh]

People should feel safe crossing at all times of day. Women are more likely to feel unsafe walking alone than men, particularly after dark. In Australia, the gap between the sexes is greater than any other OECD country. One of the greatest factors of feeling safe is adequate lighting, however there is limited lightning at bus stops. Street lighting is designed for drivers, while people walking have to make do with whatever light reached them from distant fixtures through the tree canopy. 

[stat about women feeling more unsafe]

In terms of road safety, teenagers may struggle with making good judgements around risk, while adults over 60 (who make up 11% of bus users generally have less physical capacity to cross roads or walk long distances and are more susceptible to injury in the event of a crash. There is no database of bus-related crashes in Victoria. Facilities are also not provided unless certain high requirements are met, which means that infrastructure is often reactive rather than proactive. 

# Conclusion

Due to a lack of federal funding, there's a current funding level of $3 million for bus stop upgrades within existing state and territory budgets. This excludes crossings, which fall under general road management. 

Other infrastructure decisions such as lack of signage (6.1%), grass/soil (13.8%), and lack of shelter (75.1%) all play their part in determining whether a trip is made by bus. Other factors picked up in surveys such as ________________ are understandably at play too. 

[Lee Rd/Wellington Rd]

There's also a need to locate bus stops appropriately. Within 50m of a bus stop, 11% had a driveway to an indiustrial, retail or aged care facility, and 9% had entrances to car parks. While a wholistic approach should be taken, this article is concerned with lack of crossing as it is one of hte greatest deterrents. 

Interim measures can provide immediate benefits. Median refuge island aren't present at 60% of roads, while 33% have a raised median, and 7% have a flush painted median. There's no ramp access at 36% of stops within 50 metres. At 23% of stops where there were driveways but no kerb ramps, people using wheeled devices or with limited mobility would need to cross indirectly as driveways are built for property access. 

[Springvale Cemetary]

Arterials don't have to be at extremely high speeds to be dangerous. "The highest proportion of crashes occurring in 60 km/h speed zones, [hence] minor arterial roads represent a significant concern for pedestrian safety." [(Victoria Walks, 2020)](https://www.victoriawalks.org.au/Assets/Files/Understanding-Pedestrian-Crashes.pdf)

Further analysis could look at patronage, service frequency, and other factors in determining where bus users would most greatly benefit from signalized crossings. It's also worth mentioning bus passenger improvements are the tip of the iceberg of Introduced crossing infrastructure funding; communities benefit at the expense of minor vehicle delays. "In urban Lima, the presence of a bus stop was associated with a threefold increase in risk of a pedestrian collision." [(Quistberg et al, 2013)](https://injuryprevention.bmj.com/content/21/e1/e15) There's huge potential in this field. 