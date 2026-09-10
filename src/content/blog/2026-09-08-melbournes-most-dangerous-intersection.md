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

The methodology follows the approach from [Ng (2022)](https://flex.flinders.edu.au/file/b3e4c40f-f755-40c7-ad70-fdd6d84be852/1/Ng2022_LibraryCopy.pdf), adapted for Victoria. While Ng uses a 3-year time span and a selected amount of intersections, this post uses a 10-year timespan to increase the amount of crash data, as has ranked every signalized intersection with sufficient data in the state. Additionally, 

To calculate the true impact of each intersection over the past ten years, multiple approaches were shortlisted:

- Treatment 1: Number of accidents.
- Treatment 2: Number of accidents with casualties.
- Treatment 3: Crash index using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/sites/default/files/report_090.pdf) report titled 'Evaluation of the Black Spot Program', which weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. (Page 59)
- Treatment 4: Cost of Accidents using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $2.9 million, hospitalized injury at $241k, and non-hospitalized injury at $26k. (Page 4, $2022)
- Treatment 5: Cost of Accidents using the [Australian Transport Assessment and Planning (ATAP)](https://www.atap.gov.au/sites/default/files/documents/atap-wtp-research-report-v1.7.pdf) 2024 report titled 'Willingness-to-pay...Research report', which calculates the cost of a fatality at $6.7 million, hospitalized injury at $650k, and non-hospitalized injury at $54k. (Table 6.13, $2024)

Treatment 1 and 2 are the simplest metrics, however each one ignores crash severity. While Treatment 3 does emphasize crash severity, it only counts the most severe casualty in the crash, and provides subjective weightings which are dimensionless. 

Treatments 4 and 5 are both cost-based approaches that vary in their approach to calculating costs. Treatment 4 uses a Hybrid-Human Capital (HHC) approach which , while Treatment 5 uses a Willingness-to-pay (WTP) approach which. 

Comparing the two approaches, we get a correlation of 0.37 and the following scatter plot normalized per million-entering vehicles. Both metrics are comparable at a GDP standpoint with a 1% variance in total cost, however the way they distribute costs is very different. 

[Table 7.79 BITRE or ATAP 2024 WTP costs]

A cost-based approach was chosen as expressing crash severity in a monetary value is objective. Additionally, it allows for benefit-cost ratios (BCR) to be calculated, which are important tools in advocating for, as BCR hurdles [often implement a baseline filter of 1.0](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio) to not be rejected, and greater than 1.0 when funds are relatively scarce. For example, the [Australian Black Spot Program](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A) requires a BCR of 2+ as well as 2-3 casualty crushes and an average of 0.13-0.2 casualty crushes per km over a 5-year span. 

However, cost of accidents doesn't have standards for evaluating the value of a statistical life, or even the social cost of accidents. 

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


# Applying RTM Correction / Empirical Bayes Method

When estimating the mean and standard deviation of an average yearly accident frequency at an intersection, a low amount of accidents has a high coefficient of variance which indicates the estimate is too imprecise. Additionally, the existence of 'regression-to-mean' bias is evident from practical reasons where society is often too interested in the safety of select intersections because they seem to have too many accidents and hence high counts. 

Applying an Empirical Bayes method increases precision and corrects for the regression-to-mean bias. By taking the accident record of an intersection alongside weighting the accident frequency at similar intersections, the Empirical Bayes method is able to increase accuracy. It also removes a lot of the reason for not using older data, hence more accident counts can be used to increase precision. 

Fitting a negative binomial regression to the data (which is preferred over a Poisson distribution) produces a SPF equation of `log(E[crashes]) = −1.4702 + 0.7277 × log(MEV)`. The mode returned a highly significant alpha of `α=0.5938` which suggests the model is appropriate, and moderate EB correction with `k=1.6841` which means that busy intersections will be trusted on their own records. 