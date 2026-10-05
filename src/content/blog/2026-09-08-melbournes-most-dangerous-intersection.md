---
author: Mohan Wadia
pubDatetime: 2026-10-05
modDatetime: 2026-10-05
title: We've been ranking dangerous intersections wrong
slug: intersections
featured: false
draft: false
tags:
  - scats
  - crash
description: Evaluating the cost-effectiveness of creating safer intersections in Melbourne
---
> ***Executive Summary***  
> I analysed ten years of crash and volume data of signalised intersections in Melbourne, pricing crashes using willingness-to-pay values and used an Empirical Bayes model to flag dangerous intersections. 

---

Victoria's road network has historically and continues to be built for maximising capacity. We have widened urban arterials that divide neighbourhoods and an expansive network of roads stretching into regional suburbs; all at a cost of [$714 per resident per year.](https://www.unsw.edu.au/newsroom/news/2025/02/australia-spends-714-per-person-on-roads-every-year-but-just-90-cents-goes-to-walking-wheeling-and-cycling)

There is a need to find and update dangerous intersections. Since adopting the Safe System approach (pictured below), attention has been placed on improving the safety of our existing roads. However, we still have a long way to go to Vision Zero by 2050. There were [1314 fatalities](https://www.aaa.asn.au/library/benchmarking-the-performance-of-the-national-road-safety-strategy-q4-2025/#:~:text=In%20the%2012%20months%20to%2031%20December%202025%2C%201%2C314%20people%20died%20on%20Australian%20roads.) on Australian roads in 2025, and the annual economic cost of crashes in Australia is [$27.6 billion per year.](https://datahub.roadsafety.gov.au/reporting/social-cost-road-crashes#:~:text=The%20total%20social%20cost%20of%20road%20crashes%20increases%20by%20%24600%20million%20or%202%25%20to%20%2427.6%20billion%20if%20the%20Willingness%20to%20Pay%20approach%20is%20used%20instead%20of%20the%20Hybrid%20Human%20Capital%20approach.) 

![image.png](/blog/images/image-40.png)

Previous reports such as RACV's annual survey and AAMI's recently published top 10 intersections look at data to find dangerous intersections, however I wanted to look at the relationship between crash volume and traffic volume. Additionally, RACV chooses not to use crash data to influence their ranking, while AAMI uses their own motor insurance claims database creating irreproducible analysis. Meanwhile, Transport Victoria does not publish any intersection rankings. 

## What makes an intersection dangerous?

To calculate the true impact of each signalised Melbourne intersection over the past ten years, I started with a simpler approach ranking intersections by crash frequency. However, this ranking ignored crash severity and traffic volume. For example, these top 3 intersections may have the most recorded crashes but they also all recorded zero casualties and #2 and #3 experience extremely high traffic.


| Intersection | Volume (Percentile) | ++Crashes (#)++ |
| ----------------------------- | ------------------- | --------------- |
| #1 CEMETERY / LYGON / PRINCES | 75th | 56 |
| #1 SYDNEY / MAHONEYS / CAMP | 97th | 56 |
| #1 CLYDE / GREAVES / O'SHEA | 93rd | 56 |


Similarly, ranking by number of serious injury crashes retains this bias. We can find the most deadly intersections, but these aren't necessarily the most dangerous. Fourteen sites have two fatalities however the number of crashes range from just 5 to 38 at these sites. 


| Intersection | Crashes (#) | ++Fatalities (#)++ |
| ---------------------------------- | ----------- | ------------------ |
| #1 FLEMINGTON / GATEHOUSE / HARKER | 35 | 3 |
| #2 KING / LATROBE | 38 | 2 |
| #2 SYDNEY RD / BAKERS | 26 | 2 |


Using a crash index metric does emphasize severity, for example the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/sites/default/files/report_090.pdf) report titled 'Evaluation of the Black Spot Program' weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. (Page 59) A key limitation is it only counts the most severe casualty in the crash, and provides subjective weightings which are dimensionless. Each of these intersections below have 50+ crashes with no fatalities: 


| Intersection | Volume (Percentile) | ++Weighted Score++ |
| -------------------------------- | ------------------- | ------------------ |
| #1 CLYDE / GREAVES / O'SHEA | 93rd | 111.0 |
| #2 PRINCES HWY / WARRIGAL | 98th | 110.0 |
| #3 SYDNEY RD / SOMERTON / COOPER | 96th | 106.0 |


A cost-based approach was chosen as expressing crash severity in a monetary value is consistent and comparable. Additionally, it allows for benefit-cost ratios (BCR) to be calculated, which are important tools in advocating for, as BCR hurdles [often implement a baseline filter of 1.0](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio) to not be rejected, and greater than 1.0 when funds are relatively scarce. For example, the [Australian Black Spot Program](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A) requires a BCR of 2+ as well as 2-3 casualty crashes and an average of 0.13-0.2 casualty crashes per km over a 5-year span. 

## Putting a price on a crash

It's uncomfortable to ask what the cost of a road crash truly is. There will never be standards for evaluating the value of a human life. However, it's also unfeasible to spend an infinite amount of money on one life. 

Through surveys and economic research, we can estimate how much Australians collectively value avoiding a crash, which gives us a broad measure taking into account all of the individual costs from legal costs to medical related costs. 

![image.png](/blog/images/image-37.png)

I looked at two cost-based approaches which vary in their approach to calculating the cost of a crash:

1. Hybrid Human Capital (HHC) using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $2.9 million, hospitalised injury at $241k, and non-hospitalised injury at $26k. (Page 4, $2022)
2. Willingness To Pay (WTP) using the [Australian Transport Assessment and Planning (ATAP)](https://www.atap.gov.au/sites/default/files/documents/atap-wtp-research-report-v1.7.pdf) 2024 report titled 'Willingness-to-pay...Research report', which calculates the cost of a fatality at $6.7 million, hospitalised injury at $650k, and non-hospitalised injury at $54k. (Table 6.13, $2024)

A WTP estimate was chosen as the favoured method as it provides a stronger estimate by including the massive intangible cost of pain and suffering. 

## So which intersection has cost us the most?

I used methodology developed from the approach [Ng (2022)](https://flex.flinders.edu.au/file/b3e4c40f-f755-40c7-ad70-fdd6d84be852/1/Ng2022_LibraryCopy.pdf) used to look at Adelaide. While Ng uses a 3-year time span and a selected amount of intersections, this post used a 10-year timespan to increase the amount of crash data and vehicle volume data, and has ranked every signalised intersection in a larger study area.

The below intersections have recorded the highest total social cost using the WTP estimate. Of note, each one has at least one fatality, and #2 (Springvale Junction) and #3 have extremely high traffic volume.


| Intersection | Volume (Percentile) | Fatalities (#) | ++Total Social Cost ($)++ |
| ---------------------------------- | ------------------- | -------------- | ------------------------- |
| #1 FLEMINGTON / GATEHOUSE / HARKER | 76th | 3 | 34 229 996 |
| #2 PRINCES HWY/ SPRINGVALE | 97th | 1 | 27 975 854 |
| #3 STH GIPPSLAND HWY / CAMMS RD | 98th | 2 | 27 532 105 |


Intersections with higher traffic volume are generally associated with an increased frequency of crashes (R²=0.32). Therefore, the approach was taken to normalise each intersection's metric by the number of entering vehicles using the Victorian [SCATS](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) dataset which contains traffic volumes at all signalised intersections. The crashes labelled as intersections within 50m of a SCATS site were aggregated which allows for any metric to be normalised per million entering vehicles. 

Without filtering out the quietest intersections, the top 3 only contains intersections in the first percentile of volume. Therefore, I removed the quietest 20% of intersections and ranked them by cost per million entering vehicles (MEV):


| Intersection | Volume (Percentile) | Total Social Cost ($) | ++Cost per MEV ($)++ |
| ---------------------------------- | ------------------- | --------------------- | -------------------- |
| #1 WHITEHALL / SOMERVILLE | 27th | 12 270 696 | 175 034 |
| #2 FLEMINGTON / GATEHOUSE / HARKER | 82nd | 34 229 996 | 174 749 |
| #3 PALMERS / THE STRAND | 39th | 15 226 280 | 169 687 |


#2 has experienced both high volumes and a high social cost from lots of crashes recorded. In comparison, #1 is relatively quiet in terms of volume, while the total cost exceeds twelve million dollars where the majority is derived from one fatality. This poses the question: are intersection like this truly dangerous or rather just unlucky?

## What if an intersection just had a bad run of luck?

There's value in estimating the crash frequency expected at similar intersections and comparing it to how many crashes were actually recorded. I adapted [Ezra Hauer's 2002 tutorial](https://journals.sagepub.com/doi/10.3141/1784-16) for Melbourne, but as a warning my methodology does get technical fast!

To do this, I fitted a negative binomial regression to the data to model a **Safety Performance Function (SPF)**. The dependent variables chosen were logarithmic MEV and geometry as they were both statistically significant. 

SPF Equation: `log(E[crashes]) = −0.2040 + 0.4240 × log(MEV) + 0.2849 × geometry`

I then wanted to weight the recorded data and the expected crash frequency using the SPF equation, which the **Empirical Bayes (EB)** method allows me to do. Each severity was calculated individually too such that each site's EB estimate can be corrected to calculate a more accurate value. 

This method reduces 'regression to the mean' bias which is derived from society often being too interested in the safety of select intersections because they seem to have too many crashes. The EB method also increases precision as it removes a lot of the reason for not using older data. 

I was then able to calculate the difference between the SPF and EB estimates to find a value called **Potential for Safety Improvement (PSI)**; which describes how many crashes above expected were recorded. These intersections have the highest PSI value, with each recording significantly more crashes as expected from similar intersections. 


| Intersection | Volume (Percentile) | Expected (SPF) | ++PSI++ |
| ----------------------------- | ------------------- | -------------- | ------- |
| #1 CEMETERY / LYGON / PRINCES | 75th | 17.41 | 32.47 |
| #2 CLYDE / GREAVES / O'SHEA | 93rd | 20.60 | 30.53 |
| #3 SYDNEY / MAHONEYS / CAMP | 99th | 25.03 | 27.38 |


On the other end, these sites recorded less crashes than expected. These intersections should be studied too to verify the success of any installed safety features. 


| Intersection | Volume (Percentile) | Expected (SPF) | ++PSI++ |
| -------------------------------------------- | ------------------- | -------------- | ------- |
| #1 EASTERN FWY OFF RAMP / HODDLE | 99th | 40.24 | -28.88 |
| #2 WARRIGAL / LINKS ESTATE ACCESS | 96th | 27.91 | -20.49 |
| #3 MORNINGTON PENINSULA FWY / DINGLEY BYPASS | 99th | 27.44 | -19.15 |


However, PSI values are quantified as a number of crashes, which we previously found don't account for crash severity. Additionally, both rankings are dominated by high volume intersections because high traffic amplifies PSI values. So let's convert them to WTP cost and normalise for traffic volume. 

## Which intersections do we need to fix?

We can now find the intersections with a higher social cost than expected. The following have the highest PSI WTP costs and should be flagged for potential investment in safety: 


| Intersection | Volume (Percentile) | PSI | ++PSI WTP ($)++ |
| ------------------------------------ | ------------------- | ----- | --------------- |
| #1 CLYDE / GREAVES / O'SHEA | 93rd | 30.53 | 10 783 150 |
| #2 PRINCES HWY / WARRIGAL | 99th | 26.62 | 9 975 144 |
| #3 WESTERN HWY / MCINTYRE / ANDERSON | 98th | 26.53 | 8 924 872 |


Again, to see if these intersections are a symptom of high traffic volume, the ranking can be normalised per million entering vehicles. As the ranking is once again dominated by sites in the first percentile of volume, the quietest 20% of intersections were filtered out to achieve more meaningful results. This approach isn't a neutral adjustment but rather a measure of where the largest absolute losses sit rather than the measure of risk to each vehicle passing through. 


| Intersection | Volume (Percentile) | PSI WTP ($) | ++PSI WTP MEV ($)++ |
| ---------------------------------- | ------------------- | ----------- | ------------------- |
| #1 ELIZABETH / LONSDALE | 29th | 3 475 447 | 47 296 |
| #2 ST KILDA / HIGH / LORNE | 55th | 5 416 589 | 46 438 |
| #3 PRINCES HWY / GLADSTONE / JONES | 74th | 7 329 623 | 44 676 |


As each signalised intersection in Melbourne was included in the analysis, it is possible to map all 2000+ intersections. I've included a close-up map of inner Melbourne colour-coding by PSI WTP and sized by volume. 

![intersections.jpg](/blog/images/intersections.jpg)

## But will changes be cost-effective?

Taking the highest PSI WTP per MEV intersection in SIDRA software guided by the SCATS diagram, it is possible to model changes to the intersections and complete a cost-benefit analysis. I've left this outside of this post's scope due to time constraints, however this is the next step to take the flagged intersections and model their changes to provide actionable items to the Transport Accident Commission (TAC). 

![image.png](/blog/images/image-39.png)

A limitation of this study is that SCATS only includes vehicle volumes. For example, the CBD intersection above has huge pedestrian volumes too which can be partially attributed to the high amount of crashes. 

Improving cycling and pedestrian infrastructure should fundamentally be a priority as they are the most vulnerable road users and hence will continue to be over-represented in crash statistics. However, they continue to be under-represented in funding. Australia records 39 fatalities and over $2 billion in social costs for cyclists alone each year. Yet just 90 cents per person are spent on walking and cycling infrastructure.

## Conclusion

Ranking intersections is harder than counting crashes. Raw crashes reward busy intersections, fatality counts reward bad luck, and subjective weightings can't be actioned. By using WTP, EB, and MEV approaches, we get a ranking that separates the truly underperforming intersections. However, the 'most dangerous intersection' label cannot be applied without understanding the priorities we have as a city. 

Interested in working with this data in a similar way? You can easily reach out to me on LinkedIn or by email :)