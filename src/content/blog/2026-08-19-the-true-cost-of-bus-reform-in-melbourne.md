---
author: Mohan Wadia
pubDatetime: 2026-08-19
modDatetime: 2026-08-19
title: The True Cost of Bus Reform in Melbourne
slug: bus-reform
featured: false
draft: false
---
Allow me to introduce you to your future bus network.

mohanwadia.com/srl/network

This was my go at creating a network based on a suggestion by the Department of Transport and Planning in 2023. It cuts down the total route distance served from ____ km to 5231 km, with 941km of that having higher frequencies. It will naturally be difficult for many communities to accept that their historic local routes that play a role in increasing local coverage doesn't necessarily deserve a route today. However, people do plan their lives around the available transport options, and it's important to understand their needs before any state department can begin to decide what is best. 

[windy local infrequent network from ptmapmelb]

Shifting the standards from a bus within 400m to 800m of all residents is a huge change that will leave many temporarily fearing isolation. On a trip by trip basis, it's impossible to please everyone when making any substantial changes, however within the same journey time (whilst may requiring walking further) bus reform has the potential to connect more people to more opportunities than ever before. You can have a look at how this proposed network will affect you at [mohanwadia.com/srl.](http://mohanwadia.com/srl)

[Image of journey planner]

The corridors which are likely to be used by routes in the future were presented in 2023 through a FOI request, and this allowed me to construct each route with the following criteria: maximize coverage, create easy interchanges, include strong termini, and standardize route length. Out of scope for this post were B3 and B4 routes which may be implemented for an additional cost. However, a consistent limitation is

![image.png](/blog/images/image-11.png)

The following parallels the former Infrastructure Victoria's weak definition of a high-quality bus as one which operates every 20 minutes or better, 6am-8pm, and runs on weekends. Within 800m, the new network records a substantial 16 and 23 point improvement in high-quality service coverage within 400m and 800m respectively, noting that all new routes will be turn-up-and-go frequencies 7 days. 

```
routes = gpd.read_file("gis.geojson").to_crs("EPSG:7855")
sa1 = gpd.read_file("G01_VIC_GDA2020.gpkg", layer="G01_SA1_2021_VIC").to_crs("EPSG:7855")
check_scope = pd.read_csv('SA1.csv')
sa1["sa1_area_m2"] = sa1.geometry.area
buf = gpd.GeoDataFrame(geometry=[unary_union(routes.buffer(400))], crs=routes.crs)
c = gpd.overlay(sa1, buf, how="intersection")
c["pop_allocated"] = c["Tot_P_P"] * (c.geometry.area / c["sa1_area_m2"])
print(c["pop_allocated"].sum())
```


|  | Existing Network | New Network |
| ---------------------------- | ----------------- | ----------------- |
| Any bus within 400m | 3,024,287 (83.0%) | 2,106,401 (57.8%) |
| High-quality bus within 400m | 1,527,328 (41.9%) | 2,106,401 (57.8%) |
| Any bus within 800m | 3,462,648 (95.0%) | 3,083,187 (84.5%) |
| High-quality bus within 800m | 2,237,266 (61.4%) | 3,083,187 (84.5%) |


While there are 25 point reductions in local coverage to achieve the following, it should be noted that in this new case more people than ever before will be able to access a high-quality bus route within 800 metres then those that previously could access any bus route within 400 metres. However, my new network of B1 and B2 routes fails to provide coverage within 800m for just under 400 000 people in Melbourne that used to have a service, which is partly due to less CBD bus coverage and B3 and B4 routes which fall out of scope of my reformed network. 

![image.png](/blog/images/image-13.png)

# Which areas will benefit most?

By mapping out the network in ArcGIS Pro, below are the coverage areas which used to have a bus route within 400m but do not have a bus route within 800m anymore. Assuming the new standard of coverage is 800m, ++very few people lose coverage++. Small areas suggest the grid network has caused the closest high-quality bus route to be slightly further away than 800m, while bigger areas are commonly local infrequent routes which could be retained in a new network for an additional cost. 

![image.png](/blog/images/image-9.png)

However, bus reform will never work if we require a large portion of our population to be within 400 metres of a bus stop. The map below shows the change in coverage with 400 metre requirements upon implementation of a reformed network. Within the grid, red areas begin to emerge from lost local routes, while the inner north has a reduced east-west network supplemented by high-frequency tram and train north-south routes. Low-patronage connecting routes in the outer east are left in for comprehensiveness, and I believe should be retained as low-frequency routes. 

![image.png](/blog/images/image-8.png)



## What frequencies will these new routes run at?

Which frequency would these routes be able to achieve by utilizing current resources? It's really up to the priorities of the state government. Compared to the current metropolitan bus network spanning ____ km, my reformed network has less than half the routes with **478 km of B1** and **2049 km of B2**. Assuming B1 routes are to be twice as frequent as B2 routes as provided by Victoria's Bus Plan, there are a few ways to divide up resources:

1. Equal resources across days and hours
2. Equal resources across hours with reduced weekend frequencies on all routes
3. Providing peak services on weekdays at the cost of reduced span and/or off-peak frequencies.

Assuming the simplest frequency pattern of constant service between 6am to 12am on all routes 7 days, we get B1 routes operating every **10 minutes**, and B2 routes operating every **20 minutes**. Unfortunately, these frequencies record as half of what Victoria's Bus Plan promises. Therefore, significantly greater investment is required in order to achieve these frequencies. This calculation proves our current network both inefficient and underserved. 

Part of the issue is that Victoria historically spends less per capita on running bus services [than any other state](https://www.abc.net.au/news/2025-09-17/victoria-bus-system-public-transport/105780926) at $112 per capita. While our tram network is excellent, a great proportion of the state budget provides tram services ([$606.3M](https://www.vic.gov.au/sites/default/files/2025-12/Department-of-Transport-and-Planning-Annual-Report-2024-2025.pdf)) serving 900,000 people within 800m while bus services ([$1008.2M](https://www.vic.gov.au/sites/default/files/2025-12/Department-of-Transport-and-Planning-Annual-Report-2024-2025.pdf)) serve a [much larger 82% of Melbourne.](https://www.infrastructurevictoria.com.au/news-events/international-lessons-to-make-melbourne-buses-fairer-and-easier-to-use#:~:text=Around%2082%25%20of%20Melburnians%20live%20within%20a%205%2Dminute%20walk%20of%20a%20bus%20stop) This isn't to say spending on tram services isn't needed but rather buses are cheaper to provide yet continue to get neglected as the default public transport medium in most areas of Melbourne.

![image.png](/blog/images/image-10.png)

It is worth noting that a successful Bus Plan should be paired with other measures such as bus priority, and also will receive improvements in network efficiency when removing peak periods and local routes. For example, Auckland was able to achieve substantial improvements in km served when implementing their hugely successful recent bus network improvements. Direct and frequent routes are easier to run for bus companies and way easier to predict and hence use for passengers without the need for a journey planner or timetable.

![image.png](/blog/images/image.png)

However, for this to happen in Melbourne, the department and state government need to fund and provide new routes at a much greater pace then the progress currently made since the introduction of the Bus Plan in 2021. As tabled in 2023, there's currently [50 tasks that must be completed](https://www.parliament.vic.gov.au/parliamentary-activity/tabled-documents-database/tabled-document-details/9392) before a route can be implemented. 

> The Bus Plan sets an ambitious goal for Melbourne’s bus network to become a mass transit option from 2031. It aims to meet user needs by reforming the network so that it is simpler, faster and more reliable. Given the current network, and progress implementing the Bus Plan, on present indications **the department will not achieve the Bus Plan’s mass transit ambition**. [(Improving Bus Services - VAGO)](https://www.audit.vic.gov.au/sites/default/files/2026-06/20260617_Improving-Bus-Services.pdf?)

If we instead implement the inefficient operations that attempt to respond to peak demand and historical weekend demand, the frequency and span starts to look different. There's a universal sharp decline around 10pm, and drastically decreased service on weekends. 

```
df = gk.trips.locate_trips(feed, date, times)
counts = df.groupby('time')['trip_id'].nunique().reset_index()
counts['date'] = date
pivot_df = counts.pivot(index='time', columns='date', values='trip_id').fillna(0)
pivot_df.plot(kind='line', marker='o', ax=plt.gca())
plt.show()
```



However, what if we normalize these charts to the new case using current resources? The B1 routes peak at 9 buses per hour, however as peak services are generally more expensive to operate, this comes at the cost of a reduced frequency during the interpeak and crucially doesn't allow for sustained service in the late evening. 

![image.png](/blog/images/image-1.png)

Let's convert the previous chart to frequency to find the average time between services of reformed B1 and B2 routes per time and day of the week. During 9am-5pm 7 days a week, no route falls below a 30 minute frequency. The late starts on weekends can deter patronage however, and similarly service stops between 10pm and 11pm as frequencies gradually reduce substantially.

![image.png](/blog/images/image-2.png)

This made me wonder, when does trip demand actually taper of, and is it un-met at non-commuting hours?

## How should services be scheduled?

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
| Peak Time | 5:06pm | 12:30pm | 11:31am |
| Service Distance (km) | 421457 | 264720 | 202101 |
| Speed | 23.8 | 25.3 | 25.8 |


We see that the service distance dramatically decreases on Saturdays (-37.2%) and Sundays (-52.0%). In theory, this means that frequencies are around half, however in practice this greatly varies per route. However, when we compare this to the number of trips taken by passengers, the [Victorian Integrated Survey of Travel & Activity (VISTA)](https://discover.data.vic.gov.au/dataset/victorian-integrated-survey-of-travel-and-activity-vista) reports a 74% decline on buses on weekends, while [Patronage Data](https://discover.data.vic.gov.au/dataset/monthly-average-patronage-by-day-type-and-by-mode) records a 56% on buses on weekends. 

![image.png](/blog/images/image-14.png)

This could easily lead us to believe that services should in-fact be reduced because of lower demand than what is being supplied. However, It's a myth that travel demand reduces on weekends, rather it translates from leading in work related trips (20.2%) to significantly recreational (38.3%) with in-fact more trips taken on the average weekend (17 million) than weekday (16 million). Comparing existing public transport supply to total trip demand using a percentage-based graph to view data on a time basis, we get the following: 

![image.png](/blog/images/image-17.png)

Trip demand on weekdays during the commuting and school pickup times record extreme peaks that bus services attempt to but do not currently meet. While peak services are more expensive to provide then a consistent timetable, they often are created out of necessity, however uneven frequencies create a paradox where it's not viable to travel on PT at other times. On weekends, trip demand exceeds services during the day while services exceed demand in the late afternoon and early evening. 


| Scheduled Bus Trips | Mean | Standard Deviation | Coefficient of Variance |
| ------------------- | ------ | ------------------ | ----------------------- |
| Weekday (31/8/26) | 915.45 | 461.25 | 0.50 |
| Saturday (29/8/26) | 530.18 | 279.33 | 0.53 |
| Sunday (30/8/26) | 409.60 | 249.08 | 0.61 |


From the table, we can see the discrepancy of the amount of services between the two graphs, however Sundays timetables are the most consistent with a CV of 0.61. So how do we create a transport network that supports all types of trips and complements other transportation methods? Run bus services at all times of the week in order to create a network that can be trusted and induce future demand. 