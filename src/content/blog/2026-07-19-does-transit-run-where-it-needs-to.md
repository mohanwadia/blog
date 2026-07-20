---
author: Mohan Wadia
pubDatetime: 2026-07-19
modDatetime: 2026-07-19
title: Does transit run where it needs to?
slug: traffic
featured: false
draft: true
description: Comparing arterial traffic to transit service levels
---
![Figure](/blog/images/traffic/transit_trips.png)

![Figure](/blog/images/traffic/traffic_volume.png)

![Figure](</blog/images/traffic/cars_per_transit_trip (1).png>)

When completing a linear regression between traffic and transit service levels, removing roads where buses and trams cannot stop frequently including freeways, we get a poor R^2 value of 0.11.

![Figure](/blog/images/traffic/transit_services_vs_all_traffic.png)

Highest Traffic with zero transit on non-freeways. 


| Road | Busiest Segment | LGA | Average Annual Daily Traffic Volume |
| ------------- | ------------------------------------------ | ------------- | ----------------------------------- |
| Kings Way | Albert Rd - Queens Rd heading South-East | Melbourne | 51468 |
| Queens Rd | Lakeside Drive - Lorne St heading South | Melbourne | 43184 |
| Nepean Hwy | Centre Rd - Hawthorn Rd heading North-West | Brighton East | 37361 |
| Alexandra Pde | Wellington St - Eastern Fwy heading East | Clifton Hill | 37317 |
| College Cres | Swanston St - Cemetary Rd heading West | Parkville | 32100 |


Highest Traffic with some transit


| Road | Busiest Segment | LGA | Traffic | Routes | Daily Trips | Ratio |
| ------------------- | ------------------------------------------ | --------------- | ------- | ---------------------------------------------------------- | ----------- | ------ |
| Kings Way | Sturt St - York St heading North-West | South Melbourne | 50165 | 58 | 510 | 98:1 |
| Eastern Freeway | Hoddle St - Alexandra Pde heading West | Abbotsford | 45670 | 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 388 | 117:1 |
| Nepean Hwy | Dendy St - Patterson Rd heading South-East | Bentleigh | 42290 | 823 | 13 | 3020:1 |
| Hoddle St | Johnston St - Alexandra Pde heading North | Collingwood | 40823 | 246, 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 943 | 43:1 |
| Old Princes Highway | Offramp to Princes Hwy heading North | Beaconsfield | 39552 | 837, 926, 928 | 115 | 340:1 |


Highest transit trips per car ratio


| Road | Busiest Segment | LGA | Traffic | Routes | Daily Trips |
| -------------------------- | -------------------------------------- | ------------ | ------- | -------------------------- | ----------- |
| Swanston St | Latrobe St - Franklin St heading North | Melbourne | 2848 | 1, 3, 5, 6, 16, 64, 67, 72 | 2826 |
| Diggers Rest-Coimadai Road | Vineyard Rd - Calder Hwy heading East | Diggers Rest | 135 | 475, 483 | 118 |
| Wellington Pde | Flinders St - Jolimont Rd heading East | Melbourne | 703 | 35, 75 | 452 |
| Elizabeth St | Collins St - Flinders St heading South | Melbourne | 2941 | 19, 57, 59 | 1584 |
| Bourke St | King St - Spencer St heading West | Melbourne | 2178 | 86, 96 | 990 |


