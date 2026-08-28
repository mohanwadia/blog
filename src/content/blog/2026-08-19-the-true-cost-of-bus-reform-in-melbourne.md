---
author: Mohan Wadia
pubDatetime: 2026-08-19
modDatetime: 2026-08-19
title: The True Cost of Bus Reform in Melbourne
slug: bus-reform
featured: false
draft: true
---
## The difficulties with full network reform.

This was my go at creating a network based on a suggestion by the Department of Transport and Planning in 2023. It cuts down the distance served from ___ km to ___ km, and achieves __% uniqueness compared to the current _ %. It will naturally be difficult for many communities to accept that their historic local routes that play a role in increasing local coverage doesn't necessarily deserve a route today. However, people do plan their lives around the available transport options, and it's important to understand their needs. 

Allow me to introduce you to your future bus network.

mohanwadia.com/srl/network

Shifting the standards from a bus within 400m to 800m of all residents is a huge shift that will leave many temporarily feeling isolated. On a trip by trip basis, it's impossible to please everyone when making any substantial changes, however within the same journey time (whilst may requiring walking further) bus reform has the potential to connect more people to more opportunities than ever before. You can have a look at how this proposed network will affect you at [mohanwadia.com/srl.](http://mohanwadia.com/srl)

[Image of journey planner]

The following parallels the former Infrastructure Victoria's weak definition of a high-quality bus as one which operates every 20 minutes or better, 6am-8pm, and runs on weekends.


|  | Existing Network | New Network |
| ---------------------------- | ---------------- | ----------------- |
| Any bus within 400m |  | 2,106,401 (57.8%) |
| High-quality bus within 400m |  | 2,106,401 (57.8%) |
| Any bus within 800m |  | 3,083,187 (84.5%) |
| High-quality bus within 800m |  | 3,083,187 (84.5%) |


So who wins and who loses? By mapping out the network in ArcGIS Pro, below are the coverage areas which used to have a bus route within 400m but do not have a bus route within 800m anymore. Assuming the new standard of coverage is 800m, very few people lose coverage. Small areas suggest the grid network has caused the closest high-quality bus route to be slightly further away than 800m, while bigger areas are commonly local infrequent routes which could be retained in a new network for an additional cost. 

![image.png](/blog/images/image-9.png)

However, bus reform will never work if we require a large portion of our population to be within 400 metres of a bus stop. The map below shows the change in coverage with 400 metre requirements upon implementation of a reformed network. Within the grid, red areas begin to emerge from lost local routes, while the inner north has a reduced east-west network supplemented by high-frequency tram and train north-south routes. Low-patronage connecting routes in the outer east are left in for comprehensiveness, and I believe should be retained as low-frequency routes. 

![image.png](/blog/images/image-8.png)

## The Dangers of Cost-Neutral Bus Reform

Which frequency would these routes be able to achieve by utilizing current resources? It's really up to the priorities of the state government. Compared to the current metropolitan bus network which has 373 routes and 2284411, my reformed network has **478 km of B1** and **2049 km of B2**. Assuming B1 corridors are to be twice as frequent as B2 corridors, there are a few ways to divide up resources:

1. Equal resources across days and hours
2. Equal resources across hours
3. Providing peak services on weekdays

Assuming the simplest -- a 6am-12am service which operates Monday to Sunday, we get B1 routes operating every **10 minutes**, and B2 routes operating every **20 minutes**. Unfortunately, these frequencies record as half of what Victoria's Bus Plan promises. Therefore, significantly greater investment is required in order to achieve these frequencies. This calculation proves our current network both inefficient and underserved. 

Part of the issue is that Victoria historically spends less per capita on running bus services [than any other state](https://www.abc.net.au/news/2025-09-17/victoria-bus-system-public-transport/105780926) at $112 per capita. While our tram network is excellent, a great proportion of the state budget provides tram services ([$606.3M](https://www.vic.gov.au/sites/default/files/2025-12/Department-of-Transport-and-Planning-Annual-Report-2024-2025.pdf)) serving 900,000 people within 800m while bus services ([$1008.2M](https://www.vic.gov.au/sites/default/files/2025-12/Department-of-Transport-and-Planning-Annual-Report-2024-2025.pdf)) serve a [much larger 82% of Melbourne.](https://www.infrastructurevictoria.com.au/news-events/international-lessons-to-make-melbourne-buses-fairer-and-easier-to-use#:~:text=Around%2082%25%20of%20Melburnians%20live%20within%20a%205%2Dminute%20walk%20of%20a%20bus%20stop) 

It is worth noting that a successful Bus Plan should be paired with other measures such as bus priority, and also will receive improvements in network efficiency when removing peak periods and local routes. For example, Auckland was able to achieve substantial improvements in km served when implementing their hugely successful recent bus network improvements. 

![image.png](/blog/images/image.png)

If we instead implement the inefficient operations that attempt to respond to peak demand and historical weekend demand, the frequency and span starts to look different. There's a universal sharp decline around 10pm, and drastically decreased service on weekends. The B1 peaks reach 9 buses per hour, however they are expensive to operate and come at the cost of a reduced frequency during the interpeak and doesn't allow for sustained service in the late evening. 

![image.png](/blog/images/image-1.png)

Let's convert the previous chart to frequency to find the average wait time of reformed B1 and B2 routes per time and day of the week. During 9am-5pm 7 days a week, no route falls below a 30 minute frequency, however the late starts on weekends reduce flexibility of passengers. Similarly, service stops between 10pm and 11pm as frequencies gradually reduce substantially.

![image.png](/blog/images/image-2.png)

This made me wonder, when does trip demand actually taper of, and is it un-met at non-commuting hours?

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


We see that the service distance dramatically decreases on Saturdays (-37.2%) and Sundays (-52.0%). In theory, this means that frequencies are around half, however in practice this greatly varies per route. However, when we compare this to the number of trips taken by passengers, the [Victorian Integrated Survey of Travel & Activity (VISTA)](https://discover.data.vic.gov.au/dataset/victorian-integrated-survey-of-travel-and-activity-vista) reports a 74% decline on buses on weekends, while [Patronage Data](https://discover.data.vic.gov.au/dataset/monthly-average-patronage-by-day-type-and-by-mode) records a 56% on buses on weekends. 

This could easily lead us to believe that services should in-fact be reduced because of low demand. However, It's a myth that travel demand reduces on weekends -- rather it translates from leading in work related trips (20.2%) to significantly recreational (38.3%) with in-fact more trips taken on the average weekend (17 million) than weekday (16 million). Comparing existing public transport supply to trip demand, we get the following: 

So how do we create a transport network that supports all types of trips and complements other transportation methods? It's simple: increase service hours at useable frequencies on our entire network. 