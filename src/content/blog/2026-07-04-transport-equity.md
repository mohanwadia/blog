---
author: Mohan Wadia
pubDatetime: 2026-07-04
modDatetime: 2026-07-04
title: Transport Equity
slug: transport-equity
featured: true
draft: false
tags:
  - Article
  - GTFS
description: Exploring how Melbourne's transport network drives socio-economic inequality.
---
> "Tell me how fast you go and I'll tell you who you are" - Ivan D Illich. 

The current distribution of transportation resources contributes to a systemic socioeconomic issue that can be solved through reforming our network. This inequality stems beyond transport; change is nessesary in order to meet equity goals, which are as much about access as it is about inclusiveness. 

Public Transport is a fundamental civil right and should be treated as a public service. However, Transport historically within Melbourne favors wealthier communities, while those purchased cheaper homes further from the CBD are given a 'Transport Tax'.

The SEIFA (Socio-Economic Indexes for Areas) decile is an excellent area-based metric for measuring relative socio-economic advantage and disadvantage across Australian communities. By overlaying SEIFA data on top of the high-quality network and including a dot density of dwellings, we can see the communities most in need of transport.

![Figure 1](/blog/images/transport-equity/seifa.png)

To better quantify this data, I calculated a Transport Disadvantage Index by taking the product of a SA2's normalized SEIFA score and the percentage of dwellings with high-quality public transport:


| **Rank** | **SA2** | **SEIFA Decile** | **% dwellings with 800m of a high quality public transport service** | **Disadvantage Index** |
| -------- | ------------------------- | ---------------- | -------------------------------------------------------------------- | ---------------------- |
| **1** | Melton | 1.0 | 0.0% | 0.978261 |
| **2** | Kings Park | 1.0 | 6.1% | 0.886543 |
| **3** | Melton South – Weir Views | 1.0 | 0.0% | 0.860248 |
| **4** | St Albans – North | 1.0 | 14.7% | 0.781250 |
| **5** | Lalor – East | 2.0 | 5.6% | 0.767775 |
| **6** | Noble Park – West | 1.0 | 8.7% | 0.765810 |
| **7** | Melton West | 2.0 | 0.0% | 0.739130 |
| **8** | Kurunjang – Toolern Vale | 2.0 | 0.0% | 0.736025 |
| **9** | Hampton Park – West | 2.0 | 9.5% | 0.730437 |
| **10** | Pakenham – South East | 2.0 | 1.2% | 0.717932 |


How can we reach as many people as possible with network resources? The following map shows a dot density of dwellings served by high-quality (green), low-quality (yellow), and no (red) public transit services at a scale of 1:500.

![Figure 3](/blog/images/transport-equity/dot-density.png)

Looking at places with the greatest difference between % with PT and % with high-quality PT, we get the 'Map of Transport Illusion'. Overlaying the previous map with a choropleth, red indicated regions of high access to low frequency options but low access to the useable network. 

![Figure 4](/blog/images/transport-equity/map-of-transport-illusion.png)

Multiple routes continue to exist on our bus network with worse than 60 minute frequencies. It's impossible to claim a bus route is useable when it runs at such a low frequency. Below are the routes on weekdays at midday that fit this criteria.

![Figure 5](/blog/images/transport-equity/infrequent.jpg)

There are multiple places on our network where there are a many of buses, yet no one corridoor has a frequent service. Going to the Dandenong Station Bus Interchange on a Sunday, you can get on a bus on average within 3 minutes.. but only if you don't care in which direction you're travelling.

![Figure 6](/blog/images/dandenong.png)

According to [2021-22 ABS Data](https://www.abs.gov.au/statistics/people/crime-and-justice/general-feelings-safety/latest-release), among those who do not use public transport after dark, women are six times more likely than men to avoid it specifically because they feel unsafe. Service gaps and extended wait times effect the perceived safety of a network, shifting the 'personal burden' of safety onto vulnerable group and forcing them into hypervigilant coping behaviours or total avoidance. The excerpt below is from a [Melbourne study by Sarker et al. (2026).](https://www.sciencedirect.com/science/article/pii/S1369847825003705?via%3Dihub)

> "Harassment of women on transit is widely recognized as a major factor influencing personal safety perceptions and places a ‘personal burden’ on women... One of the strategies of safety work is to adopt precautionary measures...also referred to as coping mechanisms, include planning strategies, surveillance, becoming invisible and relying on technology for separation and communications."

Poor wait times for public transportation at perceived unsafe locations disproportionally impacts women and other vulnerable groups. It should be noted that distance isn't the only metric of walkability; active transport infrastructure, pedestrian crossings, and street lights also contribute to the illusion of access. Moreover, I believe VAGO's classification of a [high-quality public transport service](https://www.audit.vic.gov.au/report/improving-bus-services#:~:text=in%20this%20report-,High%20quality%20public%20transport,-High%20quality%20public) is limited because of its absence of a frequency restriction after 8pm on weekdays and a lack of consideration for weekend frequency at all. 

Children and youth effectively using public transport use is crucial for forming positive sustainable habits, forming a major incentive to recently provide [free travel for under-18s.](https://transport.vic.gov.au/news-and-resources/campaigns/travel-freeeeeeeee) According to a [Melbourne study by Jafari et al. (2026)](https://australasiantransportresearchforum.org.au/raising-a-kid-is-like-sending-a-rocket-ship-to-the-moon-exploring-parents-role-in-childrens-independent-use-of-public-transport/) attitudes vary between teenagers focusing on navigation concerns, while parents focus on safety concerns. Both of these real issues can be mitigated by transit agencies through thought-out integrated systems.

> "By considering the perspectives of both parents and adolescents, and building on the strategies they already use to navigate transit challenges, policymakers can take further steps to design a public transport system that is more adolescent-friendly."

![Figure 6](/blog/images/transport-equity/vehicles-plus-dot-density.png)

Providing access for disabled and aging riders is also important. Most buses are low-floor with ramps and wheelchair spaces, and all train stations except Heyington do support wheelchair, strollers, and mobility aids. [Hailo Solutions](https://www.hailo.co/) is doing a superb job in Melbourne in making catching transport accessible and stress-free by allowing users to digitally hail supported buses.

However in 2023-24, [only 18% of tram services were accessible.](https://www.audit.vic.gov.au/report/accessibility-tram-services-follow?section=#key-facts:~:text=Key%20background%20information) When relying on a legacy network that runs high-floor trams on stops that do not provide level-access, both need to be upgraded through an accelerated rollout to meet the [Disability Standards for Accessible Public Transport](https://www.infrastructure.gov.au/infrastructure-transport-vehicles/transport-accessibility/transport-disability-standards) guidelines. Universal design benefits all riders, where platform stops separate passengers from traffic, and wheelchair spaces and level boarding providing space for prams, and support travellers with luggage, injured, elderly, etc.

Forcing vulnerable riders onto more expensive modes such as rideshare is not inclusive, and erases the benefits of subsidising public transit fares. Affordability concerns were partially alleviated in 2026, with [Cost of Living Relief](https://transport.vic.gov.au/news-and-resources/news/public-transport-now-half-price-for-everyone) through free and cheaper fares. Further subsidised concession fares are economic lifelines for attracting users that could otherwise not afford it. Flat-rate fares will always hit low-income riders much harder as a proportion of their income, however with low-income suburbs stretching away from the CBD, it also takes lower earners longer to take these journeys.

![Figure 7](/blog/images/transport-equity/income.png)

When cities invest heavily in dense, frequent, and reliable transit corridors, the financial and logistical burdens of maintaining multiple cars reduces, and shits away as a necessity for basic mobility. Comparing household car ownerships against the accessibility of both high-quality and any PT, there's a much stronger relationship with high-quality transit at a R² value of `0.577` compared to `0.248`. Low quality bus services are ignored by most, while high-quality transit corridors form positive household habits.

![Figure 8](/blog/images/transport-equity/car_vs_pt.png)

Increasing the usage of public transport comes down to expanding it's usefulness beyond a commuter based service. A [Sydney study by Jennifer Kent](https://link.springer.com/article/10.1007/s11116-024-10466-9) illuminates the cultural expectations of parents requiring cars. However most outer-suburban families which tend to be lower income aren't given a choice and are forced to buy and maintain cars they cannot comfortably afford, trapping them in transport poverty.

> "Scrutinising the strength of the link between parenting and automobility has become an alluring challenge to those seeking to puncture the private car system."

![Figure 9](/blog/images/transport-equity/car-ownership.png)

