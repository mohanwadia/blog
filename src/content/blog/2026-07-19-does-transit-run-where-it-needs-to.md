---
author: Mohan Wadia
pubDatetime: 2026-07-20
modDatetime: 2026-07-20
title: Does transit run where it needs to?
slug: traffic
featured: false
draft: true
description: Comparing arterial traffic to transit service levels
---
I collected the average daily traffic volume from [Transport Victoria](https://opendata.transport.vic.gov.au/dataset/historical-annual-average-daily-traffic-volume), using 2019 data as it was the last available.

![](</blog/images/traffic/traffic_volume (2) (1).png>)

Public Transport is very visible in Melbourne across each mode, however **36.25%** of road segments don't have buses or trams. Excluding freeways, I found the top three roads with the highest car traffic with zero public transportation choices. Kings Way and Queens Rd are an inner-city connection allowing cars heading into the CBD to bypass St Kilda Rd. They intersect very close to Anzac Station and the St Kilda tram corridor. Nepean Hwy is a major 80km/h arterial that runs parallel to the Frankston line to Moorabbin Station. There is potential to create a high-frequency route out of SRL Cheltenham along Nepean Hwy, as the busiest segment in Brighton East is poorly served by the infrequent Route 823 which runs a roughly hourly service with poor span.


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** |
| ---------- | ------------------------------------------ | ------------- | ------------------ |
| Kings Way | Albert Rd - Queens Rd heading South-East | Melbourne | 51468 |
| Queens Rd | Lakeside Drive - Lorne St heading South | Melbourne | 43184 |
| Nepean Hwy | Centre Rd - Hawthorn Rd heading North-West | Brighton East | 37361 |


While roads may have some public transport choices, only high-quality public transport is useable at scale. Plotting the number of trips along each arterial road, roads with trams provide constant high levels of daily trips with long spans and high frequencies that few bus routes currently compete with. SmartBus Routes 901 and 902 fail to provide a dark green colour for their unique segments, while Route 900's peak service increase and other routes which share the Wellington Rd corridor sets itself as a contender for continuous bus lanes. Doncaster's bus network goes strong with DART routes in all directions. The inner north has strong north-south tram routes however connecting east-west buses provide limited service. In the west, there are unfortunately very limited high-frequency routes that need to catch up with demand. 

![Figure](/blog/images/traffic/transit_trips.png)

Highest Traffic with some transit


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** | **Route Numbers** | **Transit Trips** | **Ratio** |
| ------------------- | ------------------------------------------ | --------------- | ------------------ | ---------------------------------------------------------- | ----------------- | --------- |
| Kings Way | Sturt St - York St heading North-West | South Melbourne | 50165 | 58 | 510 | 98:1 |
| Eastern Freeway | Hoddle St - Alexandra Pde heading West | Abbotsford | 45670 | 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 388 | 117:1 |
| Nepean Hwy | Dendy St - Patterson Rd heading South-East | Bentleigh | 42290 | 823 | 13 | 3020:1 |
| Hoddle St | Johnston St - Alexandra Pde heading North | Collingwood | 40823 | 246, 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 943 | 43:1 |
| Old Princes Highway | Offramp to Princes Hwy heading North | Beaconsfield | 39552 | 837, 926, 928 | 115 | 340:1 |


Highest transit trips per car ratio. These serve as good candidates for implementing bus lanes. 


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** | **Route Numbers** | **Transit Trips** |
| -------------------------- | -------------------------------------- | ------------ | ------------------ | -------------------------- | ----------------- |
| Swanston St | Latrobe St - Franklin St heading North | Melbourne | 2848 | 1, 3, 5, 6, 16, 64, 67, 72 | 2826 |
| Diggers Rest-Coimadai Road | Vineyard Rd - Calder Hwy heading East | Diggers Rest | 135 | 475, 483 | 118 |
| Wellington Pde | Flinders St - Jolimont Rd heading East | Melbourne | 703 | 35, 75 | 452 |
| Elizabeth St | Collins St - Flinders St heading South | Melbourne | 2941 | 19, 57, 59 | 1584 |
| Bourke St | King St - Spencer St heading West | Melbourne | 2178 | 86, 96 | 990 |


![Figure](</blog/images/traffic/cars_per_transit_trip (1).png>)

When completing a linear regression between traffic and transit service levels, removing roads where buses and trams cannot stop frequently including freeways, we get a poor R^2 value of 0.11.

![Figure](/blog/images/traffic/transit_services_vs_all_traffic.png)

Highest transit trips per car ratio per local government area


| **LGA** | **Total Traffic Volume** | **Total Transit Volume** | **Ratio** |
| ------- | ------------------------ | ------------------------ | --------- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


[insert LGA map]

Which routes run on the busiest stretches of road?


| **Route Number** | **Mean Traffic Volume per Segment** |
| ------------------------------ | ----------------------------------- |
| 232 Altona North - City | 10174 |
| 795 Warneet - Cranbourne | 7563 |
| 823 North Brighton - Southland | 20980 |
| 609 Hawthorn - Fairfield | 9438 |
| 745 Knox City - Bayswater | 12452 |


And which routes run on the quietest stretches of roads?


| **Route Number** | **Mean Traffic Volume per Segment** |  |  |
| ---------------- | ----------------------------------- | --- | --- |
| 192 | 10174 |  |  |
| 12 | 7563 |  |  |
| 96 | 20980 |  |  |
| 16 | 9438 |  |  |
| 1 | 12452 |  |  |


Car dependency vs distance from the CBD.

![Figure](/blog/images/traffic/dist_from_cbd_plot.png)


| **Distance from CBD (km)** | **Median Cars Per Transit Trip** |
| -------------------------- | -------------------------------- |
| (0, 5] | 43.20 |
| (5, 10] | 58.00 |
| (10, 15] | 85.55 |
| (15, 20] | 87.54 |
| (20, 25] | 112.06 |
| (25, 30] | 147.21 |
| (30, 40] | 139.67 |
| (40, 60] | 534.00 |


So we know that car dependency increases as you go away from the CBD, but is transit equally distributed radially? I think we all know the answer to this.

![Figure](/blog/blog/images/traffic/compass.png)

Which areas have the most simplified transit networks? 

It's natural for activity centres to have multiple routes running into their bus interchange. However, a purist planner. Routes 600, 922, and 923 along ___ all run along a similar path at poor frequencies, where a combined bus would provide a higher level of service to it's coverage areas. 

![Figure](/blog/images/traffic/simplified_corridors_map.png)

![Figure](/blog/images/traffic/route_multiplicity.png)

