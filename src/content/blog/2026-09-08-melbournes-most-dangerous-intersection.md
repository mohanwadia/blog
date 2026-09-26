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

Previous reports such as RACV's annual survey and AAMI's recently published top 10 intersections fail to mention the relationship between traffic and crash data. Additionally, RACV fails to use crash data to influence their ranking, while AAMI uses their own motor insurance claims database creating irreplicable analysis. Meanwhile, Transport Victoria does not publish any intersection rankings. 

There is a need to find and update dangerous intersections. Since adopting the Safe System approach, attention has been placed on improving the safety of our existing roads. However, we still have a long way to go to Net Zero by 2050. There were ___ fatalities on our roads in 2025, and the annual economic cost of crashes in Victoria is ____. 

# Methodology

The methodology follows the approach from [Ng (2022)](https://flex.flinders.edu.au/file/b3e4c40f-f755-40c7-ad70-fdd6d84be852/1/Ng2022_LibraryCopy.pdf), adapted for Victoria. While Ng uses a 3-year time span and a selected amount of intersections, this post uses a 10-year timespan to increase the amount of crash data, as has ranked every signalized intersection with sufficient data in the state.

## How to rank intersections?

To calculate the true impact of each intersection over the past ten years, multiple approaches were shortlisted. A simpler approach ranking intersections by the number of accidents or number of accidents with casualties both ignore crash severity. 

Using a crash index metric does emphasize severity, for example the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/sites/default/files/report_090.pdf) report titled 'Evaluation of the Black Spot Program' weights fatalities and serious injuries at 9.5, minor injuries at 3.5, and property damage only at 1. (Page 59) However it only counts the most severe casualty in the crash, and provides subjective weightings which are dimensionless. 

A cost-based approach was chosen as expressing crash severity in a monetary value is objective. Additionally, it allows for benefit-cost ratios (BCR) to be calculated, which are important tools in advocating for, as BCR hurdles [often implement a baseline filter of 1.0](https://www.atap.gov.au/framework/prioritisation-program-development/appendix-a-ranking-by-benefit-cost-ratio) to not be rejected, and greater than 1.0 when funds are relatively scarce. For example, the [Australian Black Spot Program](https://investment.infrastructure.gov.au/resources-funding-recipients/nominating-black-spot/black-spot-site-eligibility#:~:text=Funding%20is%20available%20for%20the%20treatment%20of%20Black%20Spot%20sites%2C%20or%20road%20lengths%2C%20with%20a%20proven%20history%20of%20crashes.%20Project%20proposals%20should%20demonstrate%20a%20benefit%20to%20cost%20ratio%20of%20at%20least%202%20to%201%2C%20and%20meet%20the%20following%20crash%20criteria%3A) requires a BCR of 2+ as well as 2-3 casualty crushes and an average of 0.13-0.2 casualty crushes per km over a 5-year span. 

## Putting a price on a crash

It's uncomfortable to ask what the cost of accidents truly is. There aren't standards for evaluating the value of a statistical life, or even the social cost of accidents. Through surveys and economic research, we can estimate how much Australians collectively value avoiding a crash, which gives us a broad measure taking into account all of the individual costs from legal costs to medical related costs. 

Two cost-based approaches were shortlisted which vary in their approach to calculating the cost of an accident:

1. HHC (Hybrid Human Capital) using the [Bureau of Infrastructure and Transport Research Economics (BITRE)](https://www.bitre.gov.au/resource/road-safety/social-cost-road-crashes-0) 2022 report titled 'Social Cost of Road Crashes', which calculates the social cost of a fatality at $2.9 million, hospitalized injury at $241k, and non-hospitalized injury at $26k. (Page 4, $2022)
2. WTP (Willingness To Pay) using the [Australian Transport Assessment and Planning (ATAP)](https://www.atap.gov.au/sites/default/files/documents/atap-wtp-research-report-v1.7.pdf) 2024 report titled 'Willingness-to-pay...Research report', which calculates the cost of a fatality at $6.7 million, hospitalized injury at $650k, and non-hospitalized injury at $54k. (Table 6.13, $2024)

![image.png](/blog/images/image-37.png)



# Which intersection has cost us the most?


| Intersection | Persons Killed | Persons Hospitalized | Total Persons Injured | Social Cost |
| ------------ | -------------- | -------------------- | --------------------- | ----------- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |




## Normalizing Results

An intersection with more vehicle volume will generally lead to a higher number of crashes. Therefore, the approach was taken to normalize each intersection's metric by the number of entering vehicles using the Victorian [SCATS](https://discover.data.vic.gov.au/dataset/traffic-signal-volume-data) dataset which contains traffic volumes at most signalized intersections. The crashes labelled as intersections within 50m of a SCATS site were aggregated which allows for any metric to be normalized per million entering vehicles. 

[Table]

# Modelling

## Can we predict crash frequency?

An initial model was completed with dependent variables log_MEV, speed_zone, and categorically road_geometry as these were available in the crash dataset. log_MEV was the most statistically significant, followed by geometry 2.0, while speed_zone and geometry 4.0 were insignificant. The model was re-created with just log_MEV and geometry 2.0. 

```
import statsmodels.api as sm
X_fit = sm.add_constant(
    pd.concat([
        np.log(fit_df['MEV']).rename('log_MEV'),
        pd.get_dummies(fit_df['road_geometry'], prefix='geom')['geom_2.0']
    ], axis=1).astype(float)
)
y_fit = fit_df['total_crashes'].astype(int)
spf = sm.NegativeBinomial(y_fit, X_fit).fit(method='bfgs', maxiter=500, disp=False) 
spf.summary()
```

Fitting a negative binomial regression to the data produces a Safety Performance Function (SPF) of `log(E[crashes]) = −0.2040 + 0.4240 × log(MEV) + 0.2849 × geom_2.0` , which determines the expected accident frequency at similar intersections. The model returned a highly significant alpha of `α=0.3284` which suggests the model is more appropriate than a Poisson distribution because busy intersections will be trusted on their own records while smaller intersections are adjusted. Also of note: a coefficient of `0.4240` means that crash risk grows slower than vehicle volume.

## Empirical Bayes Method

Applying an Empirical Bayes (EB) method increases precision and corrects for the regression-to-mean bias.

By taking a weighted average of both the recorded number of accidents at an intersection and the accident frequency at similar intersections using the SPF, the Empirical Bayes method is able to increase accuracy. 

> This is because it removes 'regression-from-the-mean' bias, which is evident from practical reasons where society is often too interested in the safety of select intersections because they seem to have too many accidents and hence high counts. When estimating the mean and standard deviation of an average yearly accident frequency at an intersection, a low amount of accidents has a high coefficient of variance (CV) which indicates the estimate is too imprecise. The empirical Bayes method also removes a lot of the reason for not using older data, hence more accident counts can be used to increase precision. 

This model can then be applied to each of the intersections, with each of the stats per severity calculated individually such that each Empirical Bayes (EB) estimate can be corrected to calculate a more accurate value. The Potential for Safety Improvement (PSI) was also calculated as the difference between the EB estimate and the weighted estimate. 

# Which intersections do we need to fix?

[Table]

## Per Road User

Australia averages approximately 39 cyclist fatalities annually. At $2.9 million per fatality, this is $113million. Around 8100-8200 cyclists are admitted to hospital. At $241k per hostpotalized injury, hospital-level injuries contribute $2bil annually. Adding in non-hospitalized injuries, we get $2.1-2.2billion a year as the social cost. Australia spends $714 per person each year on roads, and 90cents per person on walking & cycling infrastructure.