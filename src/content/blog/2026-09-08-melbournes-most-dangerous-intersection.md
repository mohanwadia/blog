---
author: Mohan Wadia
pubDatetime: 2026-09-26
modDatetime: 2026-09-26
title: We've been ranking dangerous intersections wrong
slug: intersections
featured: false
draft: true
tags:
  - scats
  - crash
---
Victoria's road network has historically and continues to be built for maximizing capacity. Widen urban arterials divide neighbourhoods. An expansive network of roads stretch into regional suburbs. The cost to just maintain our network is _______ per resident per year.

There is a need to find and update dangerous intersections. Since adopting the Safe System approach, attention has been placed on improving the safety of our existing roads. However, we still have a long way to go to Vision Zero by 2050. There were ___ fatalities on our roads in 2025, and the annual economic cost of crashes in Victoria is ____. 

Previous reports such as RACV's annual survey and AAMI's recently published top 10 intersections look at data to find dangerous intersections, however I wanted to look at the relationship between crash volume and traffic volume. Additionally, RACV fails to use crash data to influence their ranking, while AAMI uses their own motor insurance claims database creating irreplicable analysis. Meanwhile, Transport Victoria does not publish any intersection rankings. 

# Methodology



## What makes an intersection dangerous?

To calculate the true impact of each intersection over the past ten years, multiple approaches were shortlisted. I started with a simpler approach ranking intersections by the number of accidents, however this ranking ignored crash severity. For example, these intersections all have the most recorded crashes at 56 each with no casualties. Similarly, ranking by number of serious accidents retains this bias. 


| Intersection | Number of Crashes | Total Persons |
| ------------------------- | ----------------- | ------------- |
| #1 CEMETERY/LYGON/PRINCES | 56 | 147 |
| #2 SYDNEY/MAHONEYS/CAMP | 56 | 153 |
| #3 CLYDE/GREAVES/O'SHEA | 56 | 167 |


Using a crash index metric does emphasize severity, for example the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/sites/default/files/report_090.pdf) report titled 'Evaluation of the Black Spot Program' weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. (Page 59) However it only counts the most severe casualty in the crash, and provides subjective weightings which are dimensionless. Each of these intersections below have 50+ crashes with no fatalities: 


| Intersection | Weighted Score | Total Persons |
| ---------------------------- | -------------- | ------------- |
| #1 CLYDE/GREAVES/O'SHEA | 111.0 | 167 |
| #2 PHE/WARRIGAL | 110.0 | 145 |
| #3 SYDNEY RD/SOMERTON/COOPER | 106.0 | 148 |


A cost-based approach was chosen as expressing crash severity in a monetary value is objective. Additionally, it allows for benefit-cost ratios (BCR) to be calculated, which are important tools in advocating for, as BCR hurdles [often implement a baseline filter of 1.0](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio) to not be rejected, and greater than 1.0 when funds are relatively scarce. For example, the [Australian Black Spot Program](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A) requires a BCR of 2+ as well as 2-3 casualty crushes and an average of 0.13-0.2 casualty crushes per km over a 5-year span. 

## Putting a price on a crash

It's uncomfortable to ask what the cost of accidents truly is. There will never be standards for evaluating the value of a human life. 

It's unfeasable to spend an infinite amount of money on one life. 

Through surveys and economic research, we can estimate how much Australians collectively value avoiding a crash, which gives us a broad measure taking into account all of the individual costs from legal costs to medical related costs. 

[Breakdown Table for WTP]

I looked at two cost-based approaches which vary in their approach to calculating the cost of an accident:

1. Hybrid Human Capital (HHC) using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $2.9 million, hospitalized injury at $241k, and non-hospitalized injury at $26k. (Page 4, $2022)
2. Willingness To Pay (WTP) using the [Australian Transport Assessment and Planning (ATAP)](https://www.atap.gov.au/sites/default/files/documents/atap-wtp-research-report-v1.7.pdf) 2024 report titled 'Willingness-to-pay...Research report', which calculates the cost of a fatality at $6.7 million, hospitalized injury at $650k, and non-hospitalized injury at $54k. (Table 6.13, $2024)

![image.png](/blog/images/image-37.png)

A WTP estimate was chosen as the favoured method as __________

## So which intersection has cost us the most?

I will use methodology developed from the approach [Wang Yin Ng (2022)](https://flex.flinders.edu.au/file/b3e4c40f-f755-40c7-ad70-fdd6d84be852/1/Ng2022_LibraryCopy.pdf) use to look at Adelaide. While Ng uses a 3-year time span and a selected amount of intersections, this post uses a 10-year timespan to increase the amount of crash data, as has ranked every signalized intersection with sufficient data in a larger study area.

The following intersections have recorded the highest total social cost using the WTP estimate: 


| Intersection | Total Crashes | Total Fatalities | Total Social Cost ($) |
| ------------------------------ | ------------- | ---------------- | --------------------- |
| #1 FLEMINGTON/GATEHOUSE/HARKER | 35 | 3 | 34 229 996 |
| #2 PHE/SPRINGVALE | 42 | 1 | 27 975 854 |
| #3 STH GIPPSLAND HWY/CAMMS RD | 20 | 2 | 27 532 105 |
| #4 HODDLE/JOHNSTON | 22 | 2 | 26 325 823 |
| #5 SYDNEY RD/SOMERTON/COOPER | 51 | 0 | 24 565 583 |


The majority of the intersections have multiple fatalities.

## Normalizing Results

[Correlation between Volume and Number of Crashes]

An intersection with more vehicle volume will generally lead to a higher number of crashes. Therefore, the approach was taken to normalize each intersection's metric by the number of entering vehicles using the Victorian [SCATS](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) dataset which contains traffic volumes at all signalized intersections. The crashes labelled as intersections within 50m of a SCATS site were aggregated which allows for any metric to be normalized per million entering vehicles. 


| Intersection | Volume | Total Social Cost ($) | Cost per MEV ($) |
| ----------------------------- | ------ | --------------------- | ---------------- |
| EXHIBITION/LITTLE LONSDALE | 1079 | 5 060 302 | 1 285 245 |
| ARDEN/LAURENS | 689 | 2 185 219 | 869 422 |
| Ballarto Road/Potts Road Skye | 1746 | 3 164 157 | 496 449 |


# Modelling

## Can we predict crash frequency?



An initial model was completed with independent variable number of crashes and dependent variables log MEV, speed limit, and categorically intersection geometry as these were available in the crash dataset. log_MEV was the most statistically significant, followed by geometry 2.0. Speed limit was insignificant, however when changing the independent variable to serious injuries it became significant. The model was re-created with just log_MEV and geometry.

Fitting a negative binomial regression to the data produces a Safety Performance Function (SPF) of `log(E[crashes]) = −0.2040 + 0.4240 × log(MEV) + 0.2849 × geom_2.0` , which determines the expected accident frequency at similar intersections. The model returned a highly significant alpha of `α=0.3284` which suggests the model is more appropriate than a Poisson distribution because busy intersections will be trusted on their own records while smaller intersections are adjusted. Also of note: a coefficient of `0.4240` means that crash risk grows slower than vehicle volume.

## Empirical Bayes Method

The empirical Bayes method also removes a lot of the reason for not using older data, hence more accident counts can be used to increase precision. When estimating the mean and standard deviation of an average yearly accident frequency at an intersection, a low amount of accidents has a high coefficient of variance (CV) which indicates the estimate is too imprecise. 

This model can then be applied to each of the intersections, with each of the stats per severity calculated individually such that each Empirical Bayes (EB) estimate can be corrected to calculate a more accurate value. 

## Where can we prevent the most crashes?

By taking a weighted average of both the recorded number of accidents at an intersection and the accident frequency at similar intersections using the SPF, the Empirical Bayes method is able to increase accuracy. This is because it removes 'regression-from-the-mean' bias, which is evident from practical reasons where society is often too interested in the safety of select intersections because they seem to have too many accidents and hence high counts. 

The Potential for Safety Improvement (PSI) is a value that describes how many accidents above expected were recorded, calculated as the difference between the model's estimate and the EB estimate. These are the intersections with the highest PSI:


| Intersection | PSI |  |
| ------------------------- | ----- | --- |
| #1 CLYDE/GREAVES/O'SHEA | 33.48 |  |
| #2 CEMETERY/LYGON/PRINCES | 33.47 |  |
| #3 SYDNEY/MAHONEYS/CAMP | 33.39 |  |


On the other end, these sites recorded less accidents than expected


| Intersection | Crashes | PSI |  |
| --------------------------------------------- | ------- | ------ | --- |
| KOROROIT/FERGUSON | 0 | -10.55 |  |
| WARRIGAL/LINKS ESTATE ACCESS | 0 | -10.42 |  |
| Mornington Peninsula Freeway / Dingley Bypass | 0 | -9.37 |  |


## Which intersections do we need to fix?

 The following have the highest PSI WTP costs - that is - these sites have experienced a higher social cost than expected, flagging it for potential investment. 


| Intersection | PSI | PSI WTP Cost |
| ------------------------- | ----- | ------------ |
| PHE/WARRIGAL | 32.65 | 1 086 659 |
| CLYDE/GREAVES/O'SHEA | 33.48 | 1 082 416 |
| SYDNEY RD/SOMERTON/COOPER | 29.74 | 1 061 189 |


Again, to see if these intersections are a symptom of high traffic volume, this can be normalized per million entering vehicles:

[Table of top 3 PSI WTP MEV]

## Per Road User

Australia averages approximately 39 cyclist fatalities annually. At $2.9 million per fatality, this is $113million. Around 8100-8200 cyclists are admitted to hospital. At $241k per hostpotalized injury, hospital-level injuries contribute $2bil annually. Adding in non-hospitalized injuries, we get $2.1-2.2billion a year as the social cost. Australia spends $714 per person each year on roads, and 90cents per person on walking & cycling infrastructure.