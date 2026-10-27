---
author: Mohan Wadia
pubDatetime: 2026-10-28
modDatetime: 2026-10-28
title: Which Melbourne bus stop is the hardest to walk to?
featured: false
draft: false
tags:
  - scats
  - gis
  - gtfs
description: Advocating for signalised crossings for the safety and
  accessability of bus passengers
---
Melbourne bus passengers expect to walk short distances. 

The most commonly walked distance is between [200 and 300 metres (Victoria Walks, pg31)](https://www.busvic.asn.au/sites/default/files/uploaded-content/website-content/Resources/BIIF/BIIF_FINAL/16_getting_to_the_bus_stop.pdf), leaving coverage planning by DTP to be centred around a 400-metre radius, boasting [87% of households (VAGO, 2026)](https://www.audit.vic.gov.au/report/improving-bus-services#:~:text=Key%20background%20information) meet this criterion.

I'd like to bring you to a reason why this metric inflates true access: it doesn't consider routes go in two directions. And if there's no safe crossing to make the return journey with PT, often neither journey will be made. 

I found one of Melbourne's most inaccessible bus stops, a stop with an 800m 1:14 grade detour to avoid crossing six 80km/h lanes, and even a set of signals installed that completely ignores the existence of pedestrians. 

# How do people feel about walking?

Crossing roads is an unavoidable part of taking the bus. There are generally positive connotations with walking, along with many individual and societal benefits. Yet the main reason people gave for not walking to the bus stop was that it was too far, traffic volume/speed, and lack of road crossings as the largest factors towards unpleasantness. 

Many of these issues are seen with arterials, as they are dangerous places to walk. Higher speeds result in more serious injuries, and more lanes means it's less safe to cross. While signalised arterial intersections exist in many places in Melbourne, many gaps exist that leave pedestrians unsafe journeys to their nearest bus stop. People should feel safe crossing at all times of day, yet crossing arterials becomes [significantly more dangerous at dark too](https://aaafoundation.org/research/pedestrian-fatalities-on-urban-arterial-roads-at-night-an-in-depth-crash-analysis-and-three-case-studies/). 

> "The highest proportion of crashes occurring in 60 km/h speed zones, [hence] minor arterial roads represent a significant concern for pedestrian safety." [(Victoria Walks, 2020)](https://www.victoriawalks.org.au/Assets/Files/Understanding-Pedestrian-Crashes.pdf)

There are many positive reasons buses run on arterial roads, including directness, speed, and catchment areas because of intersecting side streets. As a result, most Melbourne residential arterial road segments have bus routes. However, locating bus routes on arterial roads can lead to longer walking distances because of limited places to cross the road, causing journeys to be difficult but also [unpleasant with traffic noise as well as present health concerns (Franěk et al., 2018).](https://pmc.ncbi.nlm.nih.gov/articles/PMC5923794/#:~:text=However%2C%20as%20previously%20demonstrated%2C%20a%20fast%20walking%20speed%20in%20the%20context%20of%20the%20overall%20fast%20pace%20of%20life%20as%20a%20response%20to%20stressful%20environmental%20stimuli%20may%20have%20negative%20health%20consequences.%20Moreover%2C%20it%20was%20also%20shown%20that%20exposure%20to%20noise%20may%20influence%20the%20perception%20of%20an%20environment.) For example, Route 703 mostly runs on arterials yet is fortunate to have a lot of places to cross as seen below:

![703.jpg](/blog/images/703-2.jpg)

Coverages will always be limited by the geometry of the surrounding road network, and a coverage requirement in one direction (which the isochrones are developed from) doesn't guarantee access to the other direction. The detour associated with walking through secluded road networks also detracts from the viability of walking to a bus stop, however produces less safety concerns. Hence, I was most interested in arterials. 

# Which bus stops are the most isolated?

I set out to find which bus stops are most in need for crossings to be installed, limiting scope to arterials managed by the Department of Transport and Planning (DTP) within 25km of Melbourne's CBD. 

Methodology: [GTFS stop locations with patronage (Mallis, 2019)](https://public.tableau.com/app/profile/philipmallis#!/vizhome/2018-19BusStopPatronageMelbourne/Map) were loaded into ArcGIS Pro using 'XY Table to Point', and [signalised intersection locations (Data VIC, 2026)](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) were imported using 'JSON to Feature', with freeways removed using 'Select by Attribute'. Then, 'Near' removed signalised intersections not within 20m of arterials. Finally, 'Select by Location' attributed each bus stop with the distance to its closest signalised intersection.

![mainmap.jpg](/blog/images/mainmap.jpg)

![image.png](/blog/images/image-48.png)

The furthest distances from signalised crossings can then be filtered for both greater than 10 boardings per day as well as more than 2 lanes to achieve the following ranking:


| Bus Stop | Number of Lanes | Patronage | Routes | ++Distance to Signals++ |
| ------------------------------------------------ | --------------- | --------- | ------------------ | ----------------------- |
| #1 Elmstead Dr/Ferntree Gully Rd (Wheelers Hill) | 6 | 11.2 | 693, 753 | 1172m |
| #2 1103 High Street Rd (Wantirna South) | 4 | 24.2 | 736, 737 | 954m |
| #3 Church Rd/Reynolds Rd (Templestowe) | 4 | 12.5 | 282, 309, 901 | 862m |
| #4 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #5 Noordenne Ave/Millers Rd (Altona) | 4 | 23.2 | 411, 412, 415, 903 | 722m |


**#1 Elmstead Dr (Wheelers Hill)** is very far from the nearest signalised crossing, however does have an underpass as part of Dandenong Creek Trail which is susceptible to flooding. As a result, the westbound stop has high patronage (11.2) compared to the stop opposite (1.4) with no residential coverage. 

![IMG_20261014_171851280_HDR.jpg](/blog/images/IMG_20261014_171851280_HDR.jpg)

This metric can't explain everything. I would argue the adjacent stop at Petronella Avenue has it worse; the options are a 1100m downhill detour through the underpass, an 800m detour up a 1:14 steep hill [(which is far beyond DDA compliance for a ramp)](https://australiandisabilitynetwork.org.au/DFD/dfd-06-10-ramps-landings-and-walkways.html), or crossing six lanes of 80km/h traffic while navigating side streets and service lanes with an angled median. Topographical catchments are a limitation of current coverage goals, for example in the hilly city of Coimbra recorded a "decrease in accessibility of circa 10%." [(Pais et al., 2025)](https://www.mdpi.com/2220-9964/14/5/205)

**#3 Church Rd (Templestowe)** has Route 901, the [8th highest performing bus route in Melbourne as well as the second most resource-intensive one. (Wadia, 2026)](https://mohanwadia.com/blog/posts/patronage-analysis/) Partially resulting from being the longest bus route, it contains 20 bus stops with a greater crossing distance than 500m, the most of any bus route. When introduced in 2008, little attention was placed into improving the surrounding infrastructure to maximise the benefits. 

**#5 Noordenne Ave (Altona)** connects 100+ secluded houses to Altona train station, with 8.5 buses per hour on weekdays in both directions. An installation of signals at the Noordenne Ave / Millers Rd intersection would provide a direct and safe crossing as well as a safer intersection for vehicles.

# What if we prioritise the amount of people served?

If we want to benefit the most amount of people rather than find those most isolated, we can filter for distances greater than 500m on roads with more than 2 lanes (manually), and sorting by the last publicly available patronage counts, to get the following:


| Bus Stop | # Lanes | ++Patronage++ | Routes | Distance to Signals |
| -------------------------------------------------- | ------- | ------------- | ------------------ | ------------------- |
| #1 Franklyn St/Princes Hwy (Huntingdale) | 6 | 63.0 | 800, 802, 804, 862 | 806m |
| #2 Robertswood Cl/Blackburn Rd (Doncaster East) | 4 | 53.9 | 901, 906, 908 | 607m |
| #3 Rogers St/Lorimer St (Port Melbourne) | 4 | 40.8 | 237 | 507m |
| #4 Sandringham Hospital/Bluff Rd (Black Rock) | 4 | 37.8 | 600, 825, 922, 923 | 638m |
| #5 View Mount Rd/Ferntree Gully Rd (Wheelers Hill) | 6 | 32.8 | 693, 753 | 524m |


**#1 Franklyn St (Huntingdale)** shows up again with a huge 806 metre detour to the nearest signals. While there is a pedestrian overpass, with long ramps to navigate, I often observe people crossing at grade here. Grade separating pedestrians should be done when it's most convenient for pedestrians (such as the de-scoped SRL crossings), however they often are created out of vehicular prioritisation. An example is the funded Doncaster underpass which ["recorded an increase in the number of pedestrians crossing at [grade]." (Hutchinson, 2011)](https://apo.org.au/sites/default/files/resource-files/2011-12/apo-nid60033.pdf).

![image.png](/blog/images/image-51.png)

Speaking of Doncaster, **#2 Robertswood Cl (Doncaster East)** is one of two corridors that serves 3+ SmartBus routes (the other being Hoddle St) and correspondingly has high patronage. However, with four lanes and no median to cross, my recommendation is to signalise the Serpells Rd intersection and install new stops within bus queue jump lanes as typically seen on such SmartBus routes. 

While greater distances are typically found in middle- and outer-Melbourne, **#3 Rogers St (Port Melbourne)** is the exception at just 3km from the CBD. Attractive high-frequency services can be established relatively quickly and cheaply, such as when Route 237 received significant frequency improvements in 2022, however without the infrastructure to move people patronage within Fishermans Bend will suffer as a result. 

The **#4 Sandringham Hospital (Black Rock)** bus stop also serves a strip of shops and lots of residents on either side. There is potential for extended traffic calming, as 300m north and south of the location, the road narrows to two lanes with a crossing median. At this stop, vehicular throughput is prioritised over safety. 

**#5 View Mount Rd (Wheelers Hill)** requires most of the unique residential coverage to cross at grade in the peak-heavy morning direction or walk two stops in either direction to the nearest signals. As people are more likely to be rushing in the morning, this decision becomes more crucial. 

# Installing Signals Effectively

Signals need to be placed effectively to support the natural movement of pedestrians. Given people are already used to walking a short distance, it's unrealistic to make pedestrians walk too much further to signals. 

Signals are well used (76%), however they are only an option to use for the minority of people (45%). [(Victoria Walks pg46-47, 2021)](https://www.victoriawalks.org.au/Assets/Files/Getting_to_the_bus_stop_FINAL_with_graphics.pdf) "Pedestrian provision almost always fits around vehicular requirements," leaving intersections such as the one below with existing infrastructure that has deliberately excluded the mobility of pedestrians, neglecting safety for the benefit of vehicle traffic. The road segment of Princes Hwy below serves Route 800, a high-quality service that recently got upgraded and recorded a massive [200% increase in patronage on saturdays](https://www.busnews.com.au/dandenong-route-bus-experiences-patronage-surge/#:~:text=200%20per%20cent%20rise%20in%20Saturday%20usage.). 

![EPSG3857_Date20260709_Lat-37.958927_Lon145.185481_Mpp0.075_Vert.jpg](/blog/images/EPSG3857_Date20260709_Lat-37.958927_Lon145.185481_Mpp0.075_Vert.jpg)

> "The construction or improvement of pedestrian crossing facilities often becomes the main alternative to mitigate the impacts of roads on pedestrians, when solutions such as reducing traffic levels or lowering speed limits met with social and political resistance." (Anciaes, 2017)

There's also a need to locate bus stops appropriately, including considering the locations of signals. An example of a useless bus stop is seen below at Lee Rd/Wellington Rd (Wheelers Hill), where barriers have been installed for all residents on the south side, and there is no access to any locations where this would be the closest bus stop, yet it has a shelter installed. It records a ten-fold decrease in patronage compared to the stop opposite, at 0.87 compared to 9.5 passengers per day. A holistic approach needs to be taken in conjunction with the provided analysis on lack of crossings as one of the greatest deterrents. 

![IMG_20261024_090449644_HDR.jpg](/blog/images/IMG_20261024_090449644_HDR.jpg)

# Feasibility

Proposed crossings on arterial roads fall under the general road management state budget, which is currently at $756 million for 2026-27. [(Department Performance Statement, pg129)](https://s3.ap-southeast-2.amazonaws.com/vicbudgetfiles2026.27vicbudget/2026-27+State+Budget+-+Department+Performance+Statement.pdf)

There is no coded database for bus-related crashes in Victoria. Facilities are also not provided unless certain high requirements are met, which means that infrastructure is often reactive rather than proactive. Therefore, the importance of advocacy at a community level can play a huge part in receiving funding. For example, [Chelsea Station's desperately needed direct pedestrian crossing](https://www.parliament.vic.gov.au/parliamentary-activity/hansard/hansard-details/HANSARD-974425065-31182) has been an election issue in the seat of Mordialloc, and has been the [subject of an election promise at the cost of $5 million](https://www.viclabor.org.au/news/delivering-a-new-pedestrian-crossing-for-chelsea). Bus passenger improvements are at the tip of the iceberg of introduced crossing infrastructure funding; communities benefit at the expense of minor vehicle delays.

In Oakleigh, signals have been installed recently at Princes Hwy/Ferntree Gully Rd, facilitating access to bus stops as well as the kindergarten who will directly benefit. [After bringing up the issue with council,](https://www.facebook.com/CrStuartJames/posts/pfbid0JBy1J6XReL1pVtQEg3gKvgbERs6rCdL31mF4w91vv3JcDGM8dNYn286CxwqxJrUjl) it took many years but the project will now benefit the community for years to come. 

![IMG_20261006_144833169_HDR.jpg](/blog/images/IMG_20261006_144833169_HDR.jpg)

Interim measures to support crossing can also provide immediate benefits. 35% of metropolitan bus stops are not wheelchair accessible [(Victoria Action Plan 2020-2024 pg14)](https://www.vic.gov.au/sites/default/files/2023-09/Accessible-PT-Action-Plan.pdf), and for a person with disability, they need to take on the significant mental load to ensure every component of the journey is accessible. Medians aren't present at 60% of roads, and there's no ramp access at 36% of stops with kerbs within 50 metres [(Victoria Walks, 2021)](https://www.victoriawalks.org.au/Assets/Files/Getting_to_the_bus_stop_FINAL_with_graphics.pdf), which especially limits the mobility of people with wheeled devices or with limited mobility. An example of poor infrastructure is seen below at Springvale Crematorium in Mulgrave:

![IMG_20261015_111455548_HDR.jpg](/blog/images/IMG_20261015_111455548_HDR.jpg)

# Conclusion

Walkable areas and quality of public transport service are not equally spatially distributed. Cheaper locations with less opportunities often have fewer transport options too in Melbourne, and this issue extends to the lack of opportunities for signalised crossings in middle- and outer- Melbourne as seen in the distribution below:

![image.png](/blog/images/image-55.png)

Limitations in this methodology stem from necessity of data availability: the exclusion of non-signalized crossings, using 2018-2019 patronage. 

# Archive [Delete]

Public bus users are more likely to be studying or in casual work, have no license, and low income. [(Victoria Walks pg20, 2021)](https://www.victoriawalks.org.au/Assets/Files/Getting_to_the_bus_stop_FINAL_with_graphics.pdf)  

The issue of feeling unsafe walking alone deters women disproportionally, particularly after dark. Additionally, teenagers may struggle with making good judgements around risk, while adults over 60 generally have less physical capacity to cross roads or walk long distances and are more susceptible to injury in the event of a crash. 

![image.png](/blog/images/image-44.png)

![image.png](/blog/images/image-45.png)

