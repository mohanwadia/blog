---
author: Mohan Wadia
pubDatetime: 2026-09-08
modDatetime: 2026-09-08
title: We've been ranking dangerous intersections wrong
slug: dangerous-intersections
featured: false
draft: true
tags:
  - scats
  - crash
---
- Australia's network has been built for maximim capacity and mobility, however since Aus has adopted the Safe System approach, there has been a need to improve intersections and hence road safety. 
- The annual economic cost of crashes in Victoria is ___
- Currently Transport Victoria does not publish any intersection rankings. RACV publish survey results, and AAMI recently published a list of the top 10. 
- AAA estimated the cost of a fataility at $4.39 million in 2015 values.
- Calculating crash risk using a categorical metric approach uses subjective values and weighting, while a cost-based approach is objective.
- Exposure could be calculated using ogden (1994) formula of 2*sqrt((1/2)*(V1+V3)*(V2+V4))

## Methodology

To calculate the true impact of each intersection over the past ten years, multiple approaches may be taken:

Treatment 1: Number of accidents.

- Treatment 2: Number of accidents with casualties.
- Treatment 3: Crash index using the [Bureau of Transport and Communications Economics (BTCE)](https://www.bitre.gov.au/resource/road-safety/road-crash-costs-australia) report titled 'Road Crash Costs in Australia', which weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. 
- Treatment 4: Cost of Accidents using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $4.7 million, hospitalized injury at $258k, and non-hospitalized injury at $13k. 

However, cost of accidents doesn't have standards for evaluating the value of a statistical life, or even the social cost of accidents. 

- Treatment 5: 

In short, we can't. There are ways to 

**Normalizing Results**

An intersection with more vehicle volume will generally lead to a higher number of crashes. Therefore, the approach was taken to normalize each intersection's metric by the number of entering vehicles using the Victorian [SCATS](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) dataset which contains recorded traffic light signal volumes. 

However, previous reports such as RACV's annual survey and AAMI's recently published top 10 intersections fail to mention the relationship between traffic and crash data. Additionally, RACV fails to use crash data to influence their ranking, while AAMI uses their own motor insurance claims database creating irreplicable analysis. Meanwhile, Transport Victoria does not publish any intersection rankings. 

**Why a cost-based approach is effective**

[The Australian Black Spot Program requires that project proposals demonstrate a benefit to cost ratio of at least 2 to 1. In Urban areas, there must be 3 casualty crushes and an average of 0.2 casualty crashes per km per annum over the length in question (5yr period for both). In regional/rural areas, there must be 2 casualty crushes and average of 0.13 casualty crushes per km per annum over the length (5yr period for both).](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A)

[When BCR hurdles are used, a ratio of 1.0 implies that uneconomic initiatives (i.e. initiatives with negative net present value) should be rejected. When funds are scarce relative to the supply of initiatives with BCRs above 1.0, the hurdle ratio should be set well above 1.0 if it is to be an economically efficient rationing mechanism.](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio)

## Social Cost of Road Crashes

[https://www.bitre.gov.au/sites/default/files/documents/social-cost-of-road-crashes.pdf](https://www.bitre.gov.au/sites/default/files/documents/social-cost-of-road-crashes.pdf)

Table 7.79


| Cost Component | Cost per Crash ($) | Total Cost ($ million) |
| -------------- | ------------------ | ---------------------- |
|  |  |  |
|  |  |  |


Comparing the two approaches, we get a correlation of 0.37 and the following scatter plot normalized per million-entering vehicles. Both metrics are comparable at a GDP standpoint with a 1% variance in total cost, however the way they distribute costs is very different. 

[Table 8.83]



## Per Road User

**Check AI numbers**: Australia averages approximately 39 cyclist fatalities annually. At $2.9 million per fatality, this is $113million. Around 8100-8200 cyclists are admitted to hospital. At $241k per hostpotalized injury, hospital-level injuries contribute $2bil annually. Adding in non-hospitalized injuries, we get $2.1-2.2billion a year as the social cost. Australia spends $714 per person each year on roads, and 90cents per person on walking & cycling infrastructure.

## Highest Social Cost


| Intersection | Persons Killed | Persons Hospitalized | Persons Other Injuries | Social Cost |
| ------------ | -------------- | -------------------- | ---------------------- | ----------- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |


