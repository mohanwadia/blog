---
author: Mohan Wadia
pubDatetime: 2026-07-12
modDatetime: 2026-07-12
title: Will SRL save you time?
slug: srl
featured: true
draft: true
description: Mapping Isochrones of an Improved Network
---
### Methodology

I created four treatments:

1. Current Network: Using current bus, train, and tram frequencies.
2. Better Buses: Using Bus Reform to create new routes running 5-10 minute frequencies as proposed by the Department of Transport in ___ and rejected by cabinet in __**.** The plan would have cost $ billion.
3. SRL: The opening of the Suburban Rail Loop in 2035 at a cost of $35 billion.
4. Combined: Opening SRL with the reformed Bus Network as proposed in Treatment 2.

I initially wanted to create this project by creating fictional GTFS feeds and using Open Trip Planner, however this would have required creating a backend. I decided on creating a Python pre-processing script that creates a network graph by merging in GTFS data, data from [FrequencyFinder](https://ptmapmelb.com/frequencyfinder/) on trams and existing buses by [Adam Bain](https://adambain1.substack.com/), and a GeoJSON file I created using ArcGisPro that illustrates my interpretation of a reformed network using the corridoors and frequencies by DTP. 

While SRL and existing routes keep their stop locations, the Reformed Bus Network places stops every 400m except where an interchange is nearby. When moving between unique routes, a combined applied for connecting between services, which includes walking time, a two minute interchange penalty, and halving the connection time of the subsequent service. Any two stops that are within 1km are eligible for a walking connection. 

This all means that the browser can load the graph and run Dijkstra's Algorithm which is used to calculate shortest paths, either between two points for the journey planner, or using a one-to-all approach for Isochrones. Since there's only one graph file and four treatments, all calculations are made four times with certain edges turned on or off. HTML, CSS, JS (including [Leaflet](https://leafletjs.com/) & [Nominatim](https://nominatim.org/)) were used for the frontend.

The following accuracy limitations are known: Doncaster Busway & DART network and Train Frequencies. A few constants were needed 

### Will SRL stations benefit more from a train line or better buses?

Using our current PT network as a baseline, we get the following increases in the amount of area coverage reachable within 60 minutes. It's important to note that while the quantity of destinations may increase, many commuters are looking for an increase in quality destinations, where SRL will deliver activity hubs.


| SRL Station | Better Buses | SRL | Combined |
| ------------- | ------------ | ---- | -------- |
| Cheltenham | +35% | +66% | +101% |
| Clayton | +37% | +41% | +66% |
| Monash | +36% | +95% | +131% |
| Glen Waverley | +37% | +44% | +65% |
| Burwood | +50% | +95% | +121% |
| Box Hill | +7% | +27% | +38% |
| Averages: | +34% | +61% | +87% |


**SRL Cheltenham** receives a higher combined 

**SRL Monash** will likely re-route some bus routes towards the station when it's closer to completion. For now, it serves Routes 693, 703, 737, and 742. As part of the Bus Map, only two routes serve the station however being 10-minute frequency routes there's a 36% increase recorded. While the east-west alignment of Route 693 remains unchanged, the Bus Map extends Route 703 to The Pines SC. As the northern location of the station currently has low patronage, it's lack of transport options means that it will receive the biggest boost out of all stations at +95%, and also has the most potential with a bus and rail investment at +131%.

**SRL Glen Waverley** currently has only has one frequent bus route (Route 902), which has the _____-highest patronage of all routes, despite it's large bus interchange. The rejected map would provide the precinct with 4 high-frequency buses: A Route 902 which continues to the City from Doncaster SC, a Route 734 extended to Knox City SC, an extended and straightened Route 623 along Waverley Rd to Caulfield RS, and a new route towards Dandenong via Wheelers Hill SC.

**SRL Burwood** currently is still poorly served by it's tram and bus network. The express Route 201 will be fully replaced by SRL, saving students 15 minutes each way. However, Route 75 slowly visits limited destinations along Burwood Hwy and Route 70 falls short of the new station. Two other bus routes (767 and 903) serve the university and connect it to Box Hill. To improve bus services, the Bus Map crucially upgrades the 903 to an all-day 5 minute frequency, straightening it via Station St. Replacing the 767, a more useful and extended north-south route connecting Doncaster to Clarinda will run every 10 minutes. Additionally a new route via Eley Rd to Mitcham RS connects residents east of the campus and station.

**SRL Box Hill:** Lowest improvement seen here out of the six stations. It's clear that Box Hill is very well served by bus routes already in all directions, as well as heavy rail east-west of the station. and as a terminus for SRL East it's waiting to be extended to Doncaster and beyond.

### How much faster will journeys be with SRL?

Big Build [published a document in June 2025](https://bigbuild.vic.gov.au/__data/assets/pdf_file/0019/944110/SRL-East-travel-time-estimates-report.pdf) with indicative travel time improvements between select destinations. Previous analysis by Peter Parker commented that most of the I decided to find the journeys from this report that are within the scope of my Journey Planner, and compare connecting these destinations between the two treatments.


| **Common Journey** | **Current (min)** | **Better Buses (min)** | **SRL (min)** |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | ---------------------- | ------------- |
| [Bayswater to Monash University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.841739%2C145.268121&dest=-37.902283%2C145.142012) | 61 | 54 (-7) | 43 (-18) |
| [Belgrave to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.909695%2C145.354858&dest=-37.850556%2C145.111134) | 67 | 62 (-5) | 53 (-14) |
| [Burwood to Box Hill](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.818674%2C145.122645&dest=-37.850556%2C145.111145) | 22 | 16 (-6) | 6 (-16) |
| [Carrum to Box Hill Hospital](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.077525%2C145.123062&dest=-37.813614%2C145.118405) | 91 | N/A | 65 (-26) |
| [Caulfield to Glen Waverley](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.877294%2C145.043079&dest=-37.880025%2C145.162885) | 43 | 34 (-9) | 29 (-14) |
| [Cheltenham to Box Hill](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.877294%2C145.043079&dest=-37.880025%2C145.162885) | 61 | 58 (-3) | 24 (-37) |
| [Cheltenham to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.956513%2C145.049572&dest=-37.850555%2C145.111150) | 63 | 47 (-16) | 21 (-42) |
| [Cheltenham to M City](https://mohanwadia.com/srl/?mode=journey&origin=-37.956513%2C145.049572&dest=-37.921227%2C145.140180) | 58 | 48 (-10) | 33 (-25) |
| [Cranbourne to Deakin University](https://mohanwadia.com/srl/?mode=journey&origin=-37.956513%2C145.049572&dest=-37.921227%2C145.140180) | 80 | 73 (-7) | 59 (-21) |
| [Dandenong to Box Hill](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.989684%2C145.209757&dest=-37.818766%2C145.122657) | 67 | 62 (-5) | 41 (-26) |
| [Doncaster to Clayton](https://mohanwadia.com/srl/?mode=journey&origin=-37.784601%2C145.126439&dest=-37.923692%2C145.119599) | 64 | 58 (-6) | 39 (-25) |
| [East Pakenham to Box Hill](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.084325%2C145.506738&dest=-37.818700%2C145.122635) | 110 | 105 (-5) | 84 (-26) |
| [Frankston to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.142499%2C145.126279&dest=-37.850517%2C145.111134) | 91 | 87 (-4) | 64 (-25) |
| [Frankston to Monash University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.142499%2C145.126279&dest=-37.902303%2C145.142012) | 87 | 82 (-5) | 55 (-22) |
| [Frankston to Monash Medical Centre](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.142499%2C145.126279&dest=-37.920848%2C145.120458) | 76 | 72 (-4) | 56 (-20) |
| [Glen Iris to Monash Medical Centre](https://mohanwadia.com/srl/?mode=journey&origin=-37.855814%2C145.064612&dest=-37.920848%2C145.120458) | 61 | 49 (-12) | 49 (-12) |
| [Glenferrie to Glen Waverley](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.821590%2C145.036795&dest=-37.880042%2C145.162901) | 42 | N/A | 31 (-11) |
| [Glen Waverley to Monash Uni](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.902354%2C145.141990&dest=-37.880043%2C145.162890) | 26 | 23 (-3) | 6 (-20) |
| [Kew to Monash Medical Centre](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.807535%2C145.028870&dest=-37.920848%2C145.120458) | 56 | N/A | 53 (-3) |
| [Kew to Monash University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.807535%2C145.028870&dest=-37.902223%2C145.142044) | 62 | 61 (-1) | 46 (-16) |
| [Mentone to Monash Medical Centre](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.982043%2C145.064896&dest=-37.920848%2C145.120458) | 43 | 42 (-1) | 27 (-16) |
| [Mordialloc to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.005913%2C145.087280&dest=-37.850556%2C145.111139) | 67 | 63 (-4) | 40 (-27) |
| [Narre Warren to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-38.026967%2C145.303191&dest=-37.850556%2C145.111139) | 73 | 67 (-6) | 52 (-21) |
| [Ringwood to Deakin University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.815823%2C145.228557&dest=-37.850554%2C145.111145) | 42 | 37 (-5) | 28 (-14) |
| [Ringwood to Monash University](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.815823%2C145.228557&dest=-37.850554%2C145.111145) | 54 | 48 (-6) | 36 (-18) |
| [Sandown Park to Box Hill](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.956660%2C145.163015&dest=-37.818671%2C145.122649) | 58 | 54 (-4) | 32 (-26) |
| [Sandringham to Glen Waverley](https://mohanwadia.com/srl/?mode=journey&origin=-37.950259%2C145.004387&dest=-37.880043%2C145.162879) | 64 | 61 (-3) | 46 (-18) |
| [Springvale to Cheltenham](https://mohanwadia.com/srl/?mode=journey&busReform=0&origin=-37.948674%2C145.152725&dest=-37.956411%2C145.049572) | 49 | 44 (-5) | 24 (-25) |
| [Waverley Gardens to Cheltenham](https://mohanwadia.com/srl/?mode=journey&origin=-37.935002%2C145.189331&dest=-37.956411%2C145.049572) | 78 | 55 (-23) | 50 (-28) |
| **Averages** | **63** | **56 (-6)** | **41 (-22)** |


### Will other major destinations benefit from SRL?


| **Major Destination** | **Better Buses** | **SRL** | **Combined** |
| --------------------- | ---------------- | ------- | ------------ |
| Caulfield RS | +19% | +3% | +20% |
| Chadstone SC | +47% | +1% | +48% |
| Dandenong RS | +46% | +9% | +53% |
| Knox City SC | +73% | +1% | +83% |
| Sandringham RS | +48% | +4% | +90% |
| Stud Park SC | +97% | +0% | +104% |


### Will you benefit from SRL?

If you live in the east or south-east, view your commute time and how far you can travel within 20, 40, and 60 minutes at [mohanwadia.com/srl.](https://mohanwadia.com/srl/)

