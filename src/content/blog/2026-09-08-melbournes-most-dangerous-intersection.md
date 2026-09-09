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
<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=monash uni&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">google map embed html</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>
- Australia's network has been built for maximim capacity and mobility, however since Aus has adopted the Safe System approach, there has been a need to improve intersections and hence road safety. 
- The annual economic cost of crashes in Victoria is ___
- Currently Transport Victoria does not publish any intersection rankings. RACV publish survey results, and AAMI recently published a list of the top 10. 
- AAA estimated the cost of a fataility at $4.39 million in 2015 values.
- Calculating crash risk using a categorical metric approach uses subjective values and weighting, while a cost-based approach is objective.
- Exposure could be calculated using ogden (1994) formula of 2*sqrt((1/2)*(V1+V3)*(V2+V4))
- To create intersection rankings:
  - number of accidents
  - number of accidents with casualties
  - crash index: fatalities 9.5, serious injuries 9.5, minor injuries 3.5, property damage only 1 from BTCE report.
  - cost of accidents: Consumer Price Index rate on ATO website. Cost of property-damage only taken from ATAP guidelines. death=4.7mil, hospitalized=258k, non-hospitalized=13k
  - cost of accidents per 10 million vehicles

However, cost of accidents doesn't have standards for evaluating the value of a statistical life, or even the social cost of accidents. 

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


