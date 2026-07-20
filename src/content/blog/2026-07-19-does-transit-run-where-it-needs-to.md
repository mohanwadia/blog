---
author: Mohan Wadia
pubDatetime: 2026-07-20
modDatetime: 2026-07-20
title: Does transit run where it needs to?
slug: traffic
featured: false
draft: false
description: Comparing arterial traffic to transit service levels
---
Map with highest traffic volumes

![Figure](/blog/images/traffic/traffic_volume.png)

Highest Traffic with zero transit on non-freeways. 


| Road | Busiest Segment | LGA | Traffic Volume |
| ------------- | ------------------------------------------ | ------------- | -------------- |
| Kings Way | Albert Rd - Queens Rd heading South-East | Melbourne | 51468 |
| Queens Rd | Lakeside Drive - Lorne St heading South | Melbourne | 43184 |
| Nepean Hwy | Centre Rd - Hawthorn Rd heading North-West | Brighton East | 37361 |
| Alexandra Pde | Wellington St - Eastern Fwy heading East | Clifton Hill | 37317 |
| College Cres | Swanston St - Cemetary Rd heading West | Parkville | 32100 |


Where does transit run map

![Figure](/blog/images/traffic/transit_trips.png)

Highest Traffic with some transit


| Road | Busiest Segment | LGA | Traffic Volume | Route Numbers | Transit Trips | Ratio |
| ------------------- | ------------------------------------------ | --------------- | -------------- | ---------------------------------------------------------- | ------------- | ------ |
| Kings Way | Sturt St - York St heading North-West | South Melbourne | 50165 | 58 | 510 | 98:1 |
| Eastern Freeway | Hoddle St - Alexandra Pde heading West | Abbotsford | 45670 | 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 388 | 117:1 |
| Nepean Hwy | Dendy St - Patterson Rd heading South-East | Bentleigh | 42290 | 823 | 13 | 3020:1 |
| Hoddle St | Johnston St - Alexandra Pde heading North | Collingwood | 40823 | 246, 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 943 | 43:1 |
| Old Princes Highway | Offramp to Princes Hwy heading North | Beaconsfield | 39552 | 837, 926, 928 | 115 | 340:1 |


Highest transit trips per car ratio. These serve as good candidates for implementing bus lanes. 


| Road | Busiest Segment | LGA | Traffic Volume | Route Numbers | Transit Trips |
| -------------------------- | -------------------------------------- | ------------ | -------------- | -------------------------- | ------------- |
| Swanston St | Latrobe St - Franklin St heading North | Melbourne | 2848 | 1, 3, 5, 6, 16, 64, 67, 72 | 2826 |
| Diggers Rest-Coimadai Road | Vineyard Rd - Calder Hwy heading East | Diggers Rest | 135 | 475, 483 | 118 |
| Wellington Pde | Flinders St - Jolimont Rd heading East | Melbourne | 703 | 35, 75 | 452 |
| Elizabeth St | Collins St - Flinders St heading South | Melbourne | 2941 | 19, 57, 59 | 1584 |
| Bourke St | King St - Spencer St heading West | Melbourne | 2178 | 86, 96 | 990 |


![Figure](</blog/images/traffic/cars_per_transit_trip (1).png>)

When completing a linear regression between traffic and transit service levels, removing roads where buses and trams cannot stop frequently including freeways, we get a poor R^2 value of 0.11.

![Figure](/blog/images/traffic/transit_services_vs_all_traffic.png)

Highest transit trips per car ratio per local government area


| LGA | Total Traffic Volume | Total Transit Volume | Ratio |
| --- | -------------------- | -------------------- | ----- |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |


[insert LGA map]

Which routes run on the busiest stretches of road?


| Route Number | Mean Traffic Volume per Segment |  |  |
| ------------------------------ | ------------------------------- | --- | --- |
| 232 Altona North - City | 10174 |  |  |
| 795 Warneet - Cranbourne | 7563 |  |  |
| 823 North Brighton - Southland | 20980 |  |  |
| 609 Hawthorn - Fairfield | 9438 |  |  |
| 745 Knox City - Bayswater | 12452 |  |  |


And which routes run on the quietest stretches of roads?


| Route Number | Mean Traffic Volume per Segment |  |  |
| ------------ | ------------------------------- | --- | --- |
| 192 | 10174 |  |  |
| 12 | 7563 |  |  |
| 96 | 20980 |  |  |
| 16 | 9438 |  |  |
| 1 | 12452 |  |  |


Car dependency vs distance from the CBD.

![](/images/traffic/dist_from_cbd_plot.png)


| Distance from CBD (km) | **Median Cars Per Transit Trip** |
| ---------------------- | -------------------------------- |
| (0, 5] | 43.20 |
| (5, 10] | 58.00 |
| (10, 15] | 85.55 |
| (15, 20] | 87.54 |
| (20, 25] | 112.06 |
| (25, 30] | 147.21 |
| (30, 40] | 139.67 |
| (40, 60] | 534.00 |


