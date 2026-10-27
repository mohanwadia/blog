---
author: Mohan Wadia
pubDatetime: 2026-10-27
modDatetime: 2026-10-27
title: Which Melbourne bus stop is the hardest to walk to?
featured: false
draft: false
tags:
  - scats
  - gis
  - gtfs
description: Advocating for signalized crossings for the safety of bus passengers
---
Melbourne bus passengers expect to walk short distances. 

The most commonly walked distance is between 200 and 300 metres (VISTA), leaving coverage planning by DTP to be centred around a 400-metre radius, boasting 87% of households meet this criteria. 

I'd like to bring you to a reason why this metric inflates true access: it doesn't consider routes go in two directions. And if there's no safe crossing to make the return journey with PT, often neither journey will be made. 

# How do people feel about walking?

Crossing roads is an unavoidable part of taking the bus. There are generally positive connotations with walking, along with many individual and societal benefits. Yet the main reason people gave for not walking to the bus stop was that it was too far, traffic volume/speed, and lack of road crossings as the largest factors towards unpleasantness. 

Many of these issues are seen with arterials, as they are objectively dangerous places to walk. Higher speeds result in more serious injuries, and more lanes means it's less safe to cross. Signalized arterial intersections exist in many places in Melbourne, however gaps exist that leave pedestrians unsafe journeys to their nearest bus stop, as locations are prioritized by vehicular volume. 

> "The highest proportion of crashes occurring in 60 km/h speed zones, [hence] minor arterial roads represent a significant concern for pedestrian safety." [(Victoria Walks, 2020)](https://www.victoriawalks.org.au/Assets/Files/Understanding-Pedestrian-Crashes.pdf)

Arterials are also associated with unpleasant walking environments, as traffic noise stems from speed and volume of traffic (10x higher background levels), as well as present health concerns stemming from traffic pollution too. (link higher risk of...premature death', and 2600 Australians die from air pollution each year, with traffic pollution linked in with increased rates of asthma)

There are many positive reasons buses run on arterial roads, including directness, speed, and catchment areas because of intersecting side streets. This has left most residential arterial segments to contain route/s. However, locating bus routes on arterial roads can lead to longer walking distances because of limited places to cross the road, causing journeys to be difficult or dangerous. Route 703 mostly runs on arterials yet is fortunate to have a lot of places to cross.

![703.jpg](/blog/images/703-2.jpg)

Coverage within set increments are still limited by the geometry of the surrounding road network, and a coverage requirement in one direction (which the isochrones are developed from) doesn't guarantee access to the other direction. The detour associated with walking through secluded road networks also detracts from the viability of walking to a bus stop, however produces less safety concerns. 

# Which bus stops are the most isolated?

I set out to find which bus stops are most in need for crossings to be installed. 

Methodology: Scope was limited to arterials managed by DTP within 25km of Melbourne's CBD. [GTFS stop locations with patronage](https://public.tableau.com/app/profile/philipmallis#!/vizhome/2018-19BusStopPatronageMelbourne/Map) were loaded into ArcGIS Pro using 'XY Table to Point', and [signalized intersection locations](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) were imported using 'JSON to Feature', with freeways removed using 'Select by Attribute'. Then, 'Near' removed signalized intersections not within 20m of arterials. Finally, 'Select by Location' attributed each bus stop with the distance to it's closest signalized intersection.

![image.png](/blog/images/image-48.png)

The furthest distances from signalized crossings can be filtered for both greater than 10 boardings per day as well as more than 2 lanes, which produces some really meaningful results:


| Bus Stop | Number of Lanes | Patronage | Routes | ++Distance to Signals++ |
| ------------------------------------------------ | --------------- | --------- | ------------------ | ----------------------- |
| #1 Elmstead Dr/Ferntree Gully Rd (Wheelers Hill) | 6 | 11.2 | 693, 753 | 1172m |
| #2 1103 High Street Rd (Wantirna South) | 4 | 24.2 | 736, 737 | 954m |
| #3 Church Rd/Reynolds Rd (Templestowe) | 4 | 12.5 | 282, 309, 901 | 862m |
| #4 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #5 Noordenne Ave/Millers Rd (Altona) | 4 | 23.2 | 411, 412, 415, 903 | 722m |


**#1 Elmstead Dr (Wheelers Hill)** is very far from the nearest signalized crossing, however does have an underpass as part of Dandenong Creek Trail which is susceptible to flooding. As a result, the westbound stop has high patronage (11.2) compared to the stop opposite (1.4) with no residential coverage. 

![IMG_20261014_171851280_HDR.jpg](/blog/images/IMG_20261014_171851280_HDR.jpg)

This metric can't explain everything. I would argue the adjacent stop at Petronella Avenue has it worse; the options are a 1100m downhill detour through the underpass, an 800m detour up a 1:14 steep hill (note that DDA compliance requires such ramps to be a maximum of 9 metres), or crossing six lanes of 80km/h traffic while navigating side streets and service lanes with an angled median. Topographical catchments are another limitations of current coverage goals, for example in the hilly city of Coimbra recorded "decrease in accessibility of circa 10%" was recorded. [(Pais et al, 2025)](https://www.mdpi.com/2220-9964/14/5/205)

**#3 Church Rd (Templestowe)** has Route 901, the 8th highest performing bus route in Melbourne as well as the second most resource-intensive one. Partially resulting from being the longest bus route, it contains 20 bus stops with a greater crossing distance than 500m, the most of any bus route. When introduced in 2008, little attention was placed into improving the surrounding infrastructure to maximize the benefits. 

**#5 Noordenna Ave (Altona)** connects 100+ secluded houses to Altona train station, with 8.5 buses per hour on weekdays in both directions. An installation of signals at the Noordeena Ave / Millers Rd intersection would provide a direct and safe crossing as well as a safer intersection for vehicles.

# What if we prioritizing the amount of people served?

If we want to benefit the most amount of people rather than find those most isolated, we can filter for distances greater than 500m on roads with more than 2 lanes, and sorting by patronage, to get the following:


| Bus Stop | # Lanes | ++Patronage++ | Routes | Distance to Signals |
| -------------------------------------------------- | ------- | ------------- | ------------------ | ------------------- |
| #1 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #2 Robertswood Cl/Blackburn Rd (Doncaster East) | 4 | 53.9 | 901, 906, 908 | 607m |
| #3 Rogers St/Lorimer St (Port Melbourne) | 4 | 40.8 | 237 | 507m |
| #4 Sandringham Hospital/Bluff Rd (Black Rock) | 4 | 37.8 | 600, 825, 922, 923 | 638m |
| #5 Princes Hwy Reserve/Princes Hwy (Oakleigh East) | 6 | 35.4 | 800, 802, 804, 862 | 577m |


**#1 Franklyn St (Huntingdale)** shows up again with a huge 806 metre detour to the nearest signals. While there is a pedestrian overpass, with long ramps to navigate, I often observe people crossing at grade here. **#5 Princes Hwy Reserve (Huntingdale)** also shows up on this list as the adjacent stop. While it has less patronage and distance, it's descriptive of a systemic issue along this corridor.

![image.png](/blog/images/image-51.png)

The situation reminds me of the funded Doncaster underpass which ["recorded an increase in the number of pedestrians crossing at ground level" (Hutchinson, 2011)](https://apo.org.au/sites/default/files/resource-files/2011-12/apo-nid60033.pdf); unfortunately grade separated pedestrian crossings often prioritize vehicles over pedestrians. And when they would benefit high volumes of pedestrians immensely, such as when entering SRL stations, they are de-scoped for being too costly. 

**#2 Robertswood Cl (Doncaster East)** is one of two corridors that serves 3+ SmartBus routes (the other being Hoddle St) and correspondingly has high patronage. However, with four lanes and no median to cross, I'd recommend signalizing the Serpells Rd intersection and installing new stops within bus skip queue lanes.

While greater distances are typically found in middle- and outer-Melbourne, **#3 Rogers St (Port Melbourne)** is the exception at just 3km from the CBD. Attractive high-frequency services can be established relatively quickly and cheaply, such as when Route 237 received significant frequency improvements in 2022, however without the infrastructure to move people patronage within Fishermans Bend will suffer as a result. 

The **#4 Sandringham Hospital (Black Rock)** bus stop also serves a strip of shops and lots of residents on either side. There is potential for extended traffic calming, as 300m north and south of the location, the road narrows to two lanes with a crossing median. Near this stop, vehicular throughput is prioritized over safety. 

# Installing Signals Effectively

Signals need to be placed effectively to support the natural movement of pedestrians. Given people are already used to walking a short distance, it's unrealistic to make pedestrians walk too much further to signals. 

Signals are well used (76%), however they are only an option to use for the minority (45%). The bus stop access audits found signals were visible from 29% of stops, with 8% within 5 metres. No formal crossing from 64% of stops (bus audit). When there were crossings, 48% were more than 50 metres away. 

![IMG_20261006_144833169_HDR.jpg](/blog/images/IMG_20261006_144833169_HDR.jpg)

At signalized intersections, pedestrian provision almost always fits around vehicular requirements. SIgnals are designed to maximize vehicle throughput and minimse delay, providing a low quality service to pedestrians whose time is valued less. This neglects the fact that 81% of people walking to the bus stop are under time pressure to catch their service, and a short walk (around 300m) is increased by 10-15% due to one set of signals when crossing a busy road. 

There is also a location in Noble Park North where signals exist, yet pedestrians are unable to cross. This is an example where the majority of the funding for crossing facilities has been provided yet pedestrians are neglected for the benefit of vehicle traffic. 

![EPSG3857_Date20260709_Lat-37.958927_Lon145.185481_Mpp0.075_Vert.jpg](/blog/images/EPSG3857_Date20260709_Lat-37.958927_Lon145.185481_Mpp0.075_Vert.jpg)

There's a need for signal timing reform too. Walk times are set at a maximum of a 8 second green phase regardless of the parallel vehicle phase length, and are decided at 1.2m/s which does not reflect the wide range in walking speeds. Automatic green signals for pedestrians are also rarely used at intersections, increasing delay. "Increases to clearance times helped to make people feel safer crossing the intersections" while there is "a very strong positive relationship between pedestrian speed and crossing distance." [(Hutchinson, 2011)](https://apo.org.au/sites/default/files/resource-files/2011-12/apo-nid60033.pdf)

# The Equality Angle

Public bus users are more likely to be female, aged 10-29, be studying or in casual work, have no license, and low income. 

Walkable areas and quality of public transport service are not equally spatially distributed either. Cheaper locations with less opportunities often have fewer transport options too in Melbourne, and a lack of signals are more commonly found in middle- and outer- Melbourne as seen in the distribution below:

![image.png](/blog/images/image-52.png)

Signals make bus stops more accessible for nearly everyone. 35% of metropolitan bus stops are not wheelchair accessible, and for a person with disability, they need take on the significant mental load to ensure every component of the journey is accessible. 

People should feel safe crossing at all times of day, yet crossing arterials becomes significantly more dangerous at dark. This deters women disproportionally, as women are more likely to feel unsafe walking alone than men, particularly after dark. 

![IMG_20261013_144642162_HDR.jpg](/blog/images/IMG_20261013_144642162_HDR.jpg)

In terms of road safety, teenagers may struggle with making good judgements around risk, while adults over 60 generally have less physical capacity to cross roads or walk long distances and are more susceptible to injury in the event of a crash. There is no coded database for bus-related crashes in Victoria. Facilities are also not provided unless certain high requirements are met, which means that infrastructure is often reactive rather than proactive. 

# Conclusion

Due to a lack of federal funding, there's a current funding level of $3 million for bus stop upgrades within existing state and territory budgets. This excludes crossings, which fall under general road management. 

Other infrastructure decisions such as lack of signage (6.1%), grass/soil (13.8%), and lack of shelter (75.1%) all play their part in determining whether a trip is made by bus. Other factors picked up in surveys such as ________________ are understandably at play too. 

![IMG_20261024_090449644_HDR.jpg](/blog/images/IMG_20261024_090449644_HDR.jpg)

There's also a need to locate bus stops appropriately. An example of a useless bus stop is seen above at Lee Rd/Wellington Rd (Wheelers Hill), where barriers have been installed for all residents on the south side, and there is no access to any locations where this would be the closest bus stop, yet it has a shelter installed. It records a ten-fold decrease in patronage compared to the stop opposite, at 0.87 compared to 9.5 passengers per day. A wholistic approach needs to be taken in conjunction with the provided analysis on lack of crossings as one of the greatest deterrents. 

Interim measures to support crossing can also provide immediate benefits. Median refuge island aren't present at 60% of roads, and there's no ramp access at 36% of stops within 50 metres, which especially limits the mobility of people with wheeled devices or with limited mobility. An example of poor infrastructure is seen below at Springvale Crematorium in Mulgrave:

![IMG_20261015_111455548_HDR.jpg](/blog/images/IMG_20261015_111455548_HDR.jpg)

> "The construction or improvement of pedestrian crossing facilities often becomes the main alternative to mitigate the impacts of roads on pedestrians, when solutions such as reducing traffic levels or lowering speed limits met with social and political resistance." (Anciaes, 2017)

It's also worth mentioning bus passenger improvements are the tip of the iceberg of Introduced crossing infrastructure funding; communities benefit at the expense of minor vehicle delays. With an upcoming election, community advocacy can play a huge part in getting changes made to our network. For example, [Chelsea Station's desperately needed direct pedestrian crossing](https://www.parliament.vic.gov.au/parliamentary-activity/hansard/hansard-details/HANSARD-974425065-31182) has been an election issue in the seat of Mordialloc. 

# Archive [Delete]

![image.png](/blog/images/image-44.png)

![image.png](/blog/images/image-45.png)

