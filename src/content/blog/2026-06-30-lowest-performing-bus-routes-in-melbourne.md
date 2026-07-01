---
author: Mohan Wadia
pubDatetime: 2026-06-30
modDatetime: 2026-06-30
title: Lowest Performing Bus Routes in Melbourne
featured: false
draft: true
---
Drivers hate to see empty buses, while regular bus commuters hate to be in overcrowded buses. 

The 6th objective of [Victoria's Bus Plan (2021)](https://www.vic.gov.au/sites/default/files/2023-09/victorias-bus-plan-bus-reform-roadmap.pdf) is to create a more resource-efficient network. 

> "
>
> 6. Deliver better value for money – ensuring value for money and continual service improvement under existing and new contracts with bus operators, manufacturers and infrastructure partners."

## Part I: Method

1. Service Hours: The number of hours in a normal week a service runs
2. Service Distance: The total distance covered by the route in a normal week.
3. Service Stops: The total non-unique number of stops visited by a route in a normal week.

For each of the metrics, I used a normal week in February 2026 without public holidays, and are inclusive of bidirectional travel to justly penalize routes that may only operate in one direction. 

The following is a simplification of loading the GTFS data using `gtfs-kit`, which was later used to calculate the three metrics. 

```
import gtfs-kit as gk
feed = gk.read_feed("C:/Users/Administrator/Desktop/PT/gtfs/4/google_transit.zip", dist_units="m")
dates = ["20260202", "20260203", "20260204", "20260205", "20260206", "20260207", "20260208"]
trip_stats = feed.compute_trip_stats()
route_stats = gk.routes.compute_route_stats(feed, dates, trip_stats
```

I then used `statsmodels.api` on the three metrics, deploying an Ordinar Least Squares Regression to find the R-squared and F-statistic values.

```
import statsmodels.api as sm
X = df['patronage']
y = df['service_hours']
X = sm.add_constant(X)
model = sm.OLS(y, X, missing='drop').fit()
print(model.summary())
```


| Independent Variable | **R-squared Value** | **F-statistic Value** |
| -------------------- | ------------------- | --------------------- |
| 1. Service Hours | 0.797 | 1314 |
| 2. Service Distance | 0.750 | 1005 |
| 3. Service Stops | 0.762 | 1086 |


As a result, it can be determined that the number of service hours of a route is most correlated to the patronage on said route.

## Part II: Findings

## Part III: So what?

