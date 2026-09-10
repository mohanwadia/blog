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
Victoria's road network has historically been built for maximizing capacity. The state features wide urban arterials that divide neighbourhoods and an expansive network of roads stretching into regional suburbs. All of this comes at a cost of about $___ per resident. 

Since adopting the Safe System approach, attention has been placed on improving the safety of our existing roads. However, we still have a long way to go to Net Zero by 2050. There were ___ fatalities on our roads in 2025, and the annual economic cost of crashes in Victoria is ____. 

# Methodology

To calculate the true impact of each intersection over the past ten years, multiple approaches may be taken:

- Treatment 1: Number of accidents.
- Treatment 2: Number of accidents with casualties.
- Treatment 3: Crash index using the [Bureau of Transport and Communications Economics (BTCE)](https://www.bitre.gov.au/resource/road-safety/road-crash-costs-australia) report titled 'Road Crash Costs in Australia', which weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. 
- Treatment 4: Cost of Accidents using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $4.7 million, hospitalized injury at $258k, and non-hospitalized injury at $13k. 
- Treatment 5: Cost of Accidents using the [Australian Transport Assessment and Planning (ATAP)](https://www.atap.gov.au/sites/default/files/documents/atap-wtp-research-report-v1.7.pdf) 2024 report titled 'Willingness-to-pay...Research report', which calculates the cost of a fatality at $6.7 million, hospitalized injury at $650k, and non-hospitalized injury at $54k. 

Treatment 1 and 2 are the simplest metrics, however each one ignores crash severity. While Treatment 3 does emphasize crash severity, it only counts the most severe casualty in the crash, and provides subjective weightings which are dimensionless. 

Treatments 4 and 5 are both cost-based approaches that vary in their approach to calculating costs. Treatment 4 uses a Hybrid-Human Capital (HHC) approach which 

Comparing the two approaches, we get a correlation of 0.37 and the following scatter plot normalized per million-entering vehicles. Both metrics are comparable at a GDP standpoint with a 1% variance in total cost, however the way they distribute costs is very different. 

[Table 7.79 BITRE or ATAP 2024 WTP costs]

A cost-based approach was chosen as expressing crash severity in a monetary value is objective. Additionally, it allows for benefit-cost ratios (BCR) to be calculated, which are important tools in advocating for, as BCR hurdles [often implement a baseline filter of 1.0](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio) to not be rejected, and greater than 1.0 when funds are relatively scarce. For example, the [Australian Black Spot Program](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A) requires a BCR of 2+ as well as 2-3 casualty crushes and an average of 0.13-0.2 casualty crushes per km over a 5-year span. 

While this does emphasize crash severity 

However, cost of accidents doesn't have standards for evaluating the value of a statistical life, or even the social cost of accidents. 

In short, we can't. There are ways to 

**Normalizing Results**

Previous reports such as RACV's annual survey and AAMI's recently published top 10 intersections fail to mention the relationship between traffic and crash data. Additionally, RACV fails to use crash data to influence their ranking, while AAMI uses their own motor insurance claims database creating irreplicable analysis. Meanwhile, Transport Victoria does not publish any intersection rankings. 

An intersection with more vehicle volume will generally lead to a higher number of crashes. Therefore, the approach was taken to normalize each intersection's metric by the number of entering vehicles using the Victorian [SCATS](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) dataset which contains recorded traffic light signal volumes. The crashes labelled as intersections within 50m of a SCATS site were aggregated, with the number of people affected per result totalled. 

## Per Road User

**Check AI numbers**: Australia averages approximately 39 cyclist fatalities annually. At $2.9 million per fatality, this is $113million. Around 8100-8200 cyclists are admitted to hospital. At $241k per hostpotalized injury, hospital-level injuries contribute $2bil annually. Adding in non-hospitalized injuries, we get $2.1-2.2billion a year as the social cost. Australia spends $714 per person each year on roads, and 90cents per person on walking & cycling infrastructure.

## Highest Social Cost


| Intersection | Persons Killed | Persons Hospitalized | Persons Other Injuries | Social Cost |
| ------------ | -------------- | -------------------- | ---------------------- | ----------- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |


