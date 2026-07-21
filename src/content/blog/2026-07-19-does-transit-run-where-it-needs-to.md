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
Can high-patronage public transport services and high-volume roads exist together? 

![](</blog/images/traffic/traffic_volume (2) (1).png>)

## The Busiest Roads in Melbourne

[Insert image of average daily traffic per road]

Public Transport is very visible in Melbourne across each mode, however one-third of arterial road segments within Melbourne don't have buses or trams. I collected the average daily traffic volume from [Transport Victoria](https://opendata.transport.vic.gov.au/dataset/historical-annual-average-daily-traffic-volume) of each arterial road, using 2019 data as it was the last available. This allowed me to find the top three roads with the highest car traffic but zero public transportation choices excluding freeways:


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** |
| ---------- | ------------------------------------------ | ------------- | ------------------ |
| Kings Way | Albert Rd - Queens Rd heading South-East | Melbourne | 51468 |
| Queens Rd | Lakeside Drive - Lorne St heading South | Melbourne | 43184 |
| Nepean Hwy | Centre Rd - Hawthorn Rd heading North-West | Brighton East | 37361 |


Kings Way and Queens Rd are an inner-city connection allowing cars heading into the CBD to bypass St Kilda Rd. They intersect very close to Anzac Station and the St Kilda tram corridor. Nepean Hwy is a major 80km/h arterial that runs parallel to the Frankston line to Moorabbin Station. There is potential to create a high-frequency route out of SRL Cheltenham along Nepean Hwy, as the busiest segment in Brighton East is poorly served by the infrequent Route 823 which runs a roughly hourly service with poor span.

While roads may have some public transport choices, only high-quality public transport is useable at scale. Plotting the number of trips along each arterial road, roads with trams provide constant high levels of daily trips with long spans and high frequencies that few bus routes currently compete with.

![Figure](/blog/images/traffic/transit_trips.png)

SmartBus Routes 901 and 902 fail to provide a dark green colour for their unique segments, while Route 900's peak service increase and other routes which share the Wellington Rd corridor sets itself as a contender for continuous bus lanes. Doncaster's bus network goes strong with DART routes in all directions. The inner north has strong north-south tram routes however connecting east-west buses provide limited service. In the west, there are unfortunately very limited high-frequency routes that need to catch up with demand. 

All streets can be designed to be inclusive of all user groups, however many aren't. I found the five busiest roads that have public transport running along them. 


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** | **Route Numbers** | **Transit Trips** | **Ratio** |
| ------------------- | ------------------------------------------ | --------------- | ------------------ | ---------------------------------------------------------- | ----------------- | --------- |
| Kings Way | Sturt St - York St heading North-West | South Melbourne | 50165 | 58 | 510 | 98:1 |
| Eastern Freeway | Hoddle St - Alexandra Pde heading West | Abbotsford | 45670 | 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 388 | 117:1 |
| Nepean Hwy | Dendy St - Patterson Rd heading South-East | Bentleigh | 42290 | 823 | 13 | 3020:1 |
| Hoddle St | Johnston St - Alexandra Pde heading North | Collingwood | 40823 | 246, 302, 303, 304, 305, 309, 318, 350, 905, 906, 907, 908 | 943 | 43:1 |
| Old Princes Highway | Offramp to Princes Hwy heading North | Beaconsfield | 39552 | 837, 926, 928 | 115 | 340:1 |


Kings Way is very wide with four car lanes and dedicated tram lanes for the Route 58, which allows an interpeak frequency of 10 minutes. The Eastern Fwy and Hoddle St should both receive all-day bus lanes for their duration which the 10+ routes clearly demand. Nepean Hwy shows up again at #3 with the Route 823, and in Beaconsfield three bus routes provide a poor service along the busy Old Princes Hwy. 

Creating a geospatial visualization of the ratio between the previously two daily calculated values, total vehicle volume and total number of public transit trips, we get the following. 

![Figure](</blog/images/traffic/cars_per_transit_trip (1).png>)

While the service level of particularly trams in the inner north and east provide a real incentive to rely on public transport, middle- and outer- suburbs force residents to find alternative travel options with inaccessible bus frequencies. While there are stretches of road that provide a decent level of service compared to car demand, it's not going to be enough to re-allocate resources as part of a Bus Reform plan because of the existing poor level of service when combining all routes running along arterials. 

On a positive note, I calculated the top 5 highest transit trips per car ratio segments of roads, and as expected multiple-route tram corridors serving the CBD dominate this list. This is a useful metric to see roads that should potentially separate buses and trams into their own right-of-way. 


| **Road** | **Busiest Segment** | **LGA** | **Traffic Volume** | **Route Numbers** | **Transit Trips** |
| -------------- | -------------------------------------- | --------- | ------------------ | -------------------------- | ----------------- |
| Swanston St | Latrobe St - Franklin St heading North | Melbourne | 2848 | 1, 3, 5, 6, 16, 64, 67, 72 | 2826 |
| Wellington Pde | Flinders St - Jolimont Rd heading East | Melbourne | 703 | 35, 75 | 452 |
| Elizabeth St | Collins St - Flinders St heading South | Melbourne | 2941 | 19, 57, 59 | 1584 |
| Bourke St | King St - Spencer St heading West | Melbourne | 2178 | 86, 96 | 990 |
| Collins St | Spencer St - King St heading East | Melbourne | 4308 | 11, 12, 48, 109, 232 | 1860 |


When completing a linear regression between traffic and transit service levels, removing roads where buses and trams cannot stop frequently including freeways, we get a poor R² value of 0.11. As visible in the below chart, there's not a clear relationship between demand for cars and public transport options when I believe there should be as fare-paying commuters don't fundamentally take different types of trips. 

![Figure](/blog/images/traffic/transit_services_vs_all_traffic.png)

## Which suburbs are the most served?

Local governments find themselves continuing to advocate for better public transport services within their municipalities because of historical transit inequality. These suburbs have the worst ratios (10 road segments and some PT to qualify):


| **Rank** | **Suburb** | **Distance from CBD (km)** | **Routes** | **Average Traffic Volume** | **Total Transit Volume** | **Cars Per Transit Trip** |
| -------- | ----------------- | -------------------------- | ---------------- | -------------------------- | ------------------------ | ------------------------- |
| **1** | Melbourne | 0 | Bus x29 Tram x22 | 1 907 108 | 200 778 | 9.5 |
| **2** | Albert Park | 4 | 12, 606 | 48 335 | 3 750 | 12.9 |
| **3** | Middle Park | 3 | 1, 12, 236, 606 | 38 635 | 2 934 | 13.2 |
| **...** |  |  |  |  |  |  |
| **239** | Melbourne Airport | 20 | 479, 901 | 233 174 | 415 | 561.9 |
| **240** | Moorooduc | 58 | 782, 783, 887 | 123 321 | 215 | 573.6 |
| **241** | Keilor | 21 | 421, 476, 483 | 245 164 | 409 | 599.4 |


 Melbourne unsurprisingly tops the list with 51 bus and tram routes either terminating or running through the CBD. Inner-city Albert Park and Middle Park have a couple high-frequent routes and minimal car demand, serving as ideal places to live without a car. Meanwhile, Moorooduc and Keilor have three low-quality bus routes with frequencies of _____ which does not come to close to meeting car demand. Melbourne Airport also has limited connections for people choosing to fly; while the Route 901 is somewhat frequent there's not much service outside of it, and provides potential for future heavy-rail with most people driving to the destination.

## Which routes experience the most traffic?

Which routes run on the busiest stretches of road? Variable traffic times can impact how late a bus is, so I found recently published data from VAGO and compared it to the 


| **Route** | **Mean Traffic Volume per Segment** | **On-Time Performance** |
| ------------------------------ | ----------------------------------- | ----------------------- |
| 232 Altona North - City | 10174 |  |
| 795 Warneet - Cranbourne | 7563 |  |
| 823 North Brighton - Southland | 20980 |  |
| 609 Hawthorn - Fairfield | 9438 |  |
| 745 Knox City - Bayswater | 12452 |  |


And which routes run on the quietest stretches of roads? 


| **Route** | **Mean Traffic Volume per Segment** | **On-Time Performance** |
| ------------------------------------- | ----------------------------------- | ----------------------- |
| 192 Wyndham Vale - Werribee | 10174 |  |
| 12 Victoria Gardens - St Kilda | 7563 |  |
| 96 East Brunswick - St Kilda Beach | 20980 |  |
| 16 Melbourne University - Kew | 9438 |  |
| 1 East Coburg - South Melbourne Beach | 12452 |  |


I expected to see a relationship between traffic along a route and on-time performance, however I found a R^2 value of ____. I think this speaks to how difficult of a job timetabling services in mixed traffic is, and how easy it is for services to bunch, so it's always useful to look into ditching a timetable for high-frequency services like the Route 246's Rapid Running trial. It also shows how important it is for real-time information to be available to passengers that doesn't require them to have their phone on a transit-related app constantly. 

## Car dependency vs distance from the CBD.

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

![Figure](/blog/images/traffic/compass.png)

## Simplifying our transit network

It's natural for activity centres to have multiple routes running into their bus interchange. However a simple memorable network is a useable network. For example, Routes 600, 922, and 923 along the coast from Sandringham to St Kilda all run along a similar path at poor frequencies, where a combined bus would provide a higher level of service to it's coverage areas. 

![](</blog/images/traffic/simplified_corridors_map (2).png>)

Aggregating the number of road segments with each number of routes running along it at some point, roads with one route sit at 31.6% which is slightly less frequent than 0 routes at 34.4%. Road segments with lots of routes are likely to be serving bus interchanges, for example Box Hill has 16 routes that at some point run along the segment of Station St outside Box Hill Central. 

[insert pie chart]

## Conclusion

Currently there's a disconnect between the level of car traffic on our roads with the public transit services we have today. High-demand transit services can co-exist in both the private and public spheres, and it's important to invest in both. However the current in-balance needs to be adjusted in order for both modes to be practical and useful. 