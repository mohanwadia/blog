---
author: Mohan Wadia
pubDatetime: 2026-08-19
modDatetime: 2026-08-19
title: The True Cost of Bus Reform in Melbourne
slug: bus-reform
featured: true
draft: true
---
Using `gtfs-kit` with the following condensed code snippet, we get the following GTFS network statistics:

```
import gtfs_kit as gk
feed = gk.read_feed("Desktop/google_transit.zip", dist_units="m")
trip_stats = feed.compute_trip_stats()
dates = ['20260824', '20260825', '20260826', '20260827', '20260828', '20260829', '20260830']
gk.miscellany.compute_network_stats(feed, dates, trip_stats)
```


| Week starting 24/08/2026 | Monday | Saturday | Sunday |
| ------------------------ | ------ | -------- | ------- |
| Number of Trips | 27398 | 16869 | 12668 |
| Number of Routes | 658 | 571 | 480 |
| Peak Time | 5:06pm | 12:30pm | 11:31pm |
| Service Distance (km) | 421457 | 264720 | 202101 |
| Speed | 23.8 | 25.3 | 25.8 |




The [Victorian Integrated Survey of Travel & Activity (VISTA)](https://discover.data.vic.gov.au/dataset/victorian-integrated-survey-of-travel-and-activity-vista) provides data on trip demand per time period as well as mode share. Comparing existing public transport supply to trip demand, we get the following:

