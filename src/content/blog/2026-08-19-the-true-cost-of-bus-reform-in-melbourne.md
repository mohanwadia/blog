---
author: Mohan Wadia
pubDatetime: 2026-08-19
modDatetime: 2026-08-19
title: The True Cost of Bus Reform in Melbourne
slug: bus-reform
featured: true
draft: true
---
```
import gtfs_kit as gk
feed = gk.read_feed("Desktop/google_transit.zip", dist_units="m")
trip_stats = feed.compute_trip_stats()
dates = ['20260824', '20260825', '20260826', '20260827', '20260828', '20260829', '20260830']
gk.miscellany.compute_network_stats(feed, dates, trip_stats)
```

Using gtfs-kit with the above condensed code snippet, we get the following GTFS network statistics:


| Week starting 24/08/2026 | Monday | Saturday | Sunday |
| ------------------------ | ------ | -------- | ------- |
| Number of Trips | 27398 | 16869 | 12668 |
| Number of Routes | 658 | 571 | 480 |
| Peak Time | 5:06pm | 12:30pm | 11:31pm |
| Service Distance (km) | 421457 | 264720 | 202101 |
| Speed | 23.8 | 25.3 | 25.8 |


We see that the number of trips dramatically decreases on Saturdays (-**%**) and Sundays (-%). In theory, this means that frequencies are around half, however in practice this greatly varies per route. 

The [Victorian Integrated Survey of Travel & Activity (VISTA)](https://discover.data.vic.gov.au/dataset/victorian-integrated-survey-of-travel-and-activity-vista) provides data on trip demand per time period as well as mode share. Comparing existing public transport supply to trip demand, we get the following:



It's a myth that travel demand reduces on weekends -- rather it translates from leading in work related trips (20.2%) to significantly recreational (38.3%) with in-fact more trips taken on the average weekend (17 million) than weekday (16 million). So how do we create a transport network that supports all types of trips and complements other transportation methods? 

## Creating a new bus network

This was my go at creating a network based on a suggestion by the Department of Transport and Planning in 2023.

mohanwadia.com/srl/network

Creating a new bus network from scratch isn't easy. There's a lot of local routes that do play a role in increasing coverage that wouldn't nessesarily deserve a route today. However, people do plan their lives around the available transport options. You can have a look at how this proposed network will affect you at [mohanwadia.com/srl.](http://mohanwadia.com/srl)

[Image of journey planner]

Which frequency would these routes be able to achieve by utilizing current resources? It's really up to the priorities of the state government. My reformed network has 478 km of B1 and 2049 km of B2. Assuming B1 corridors are to be twice as frequent as B2 corridors, there are a few ways to divide up resources:

1. Equal resources across days and hours
2. Equal resources across hours
3. Providing peak services on weekdays

Assuming the simplest -- a 6am-12am service which operates Monday to Sunday, we get B1 routes operating every **10 minutes**, and B2 routes operating every **20 minutes**. Unfortunately, these frequencies record as half the level of service that Victoria's Bus Plan suggested in ____. 

It is worth noting that a successful Bus Plan should be paired with other measures such as bus priority, and also will receive improvements in network efficiency when removing peak periods and local routes. For example, Auckland was able to achieve **% improvements when implementing their network wide improvements in ___.** 

If we instead implement the inefficient operations that attempt to respond to peak demand and historical weekend demand, frequency and span starts to look different. 

