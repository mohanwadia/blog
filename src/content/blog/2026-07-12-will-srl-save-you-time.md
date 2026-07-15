---
author: Mohan Wadia
pubDatetime: 2026-07-15
modDatetime: 2026-07-15
title: Will SRL save you time?
slug: srl
featured: true
draft: true
description: Mapping Isochrones & Calculating Journey Times of an Improved Network
---
The most polarizing topic in Melbourne has been the viability of the Suburban Rail Loop. It's swept other major infrastructure projects under the rug, and appeared to left no money for increasing service levels. I set to find out how useful the multi-billion dollar project will be, and how we can improve it's effectiveness to create a truly multi-modal network. 

If you live in the east or south-east, view your future commute time and how far you can travel within 20, 40, and 60 minutes at [mohanwadia.com/srl](https://mohanwadia.com/srl/).

### Methodology

I created four treatments:

1. Current Network: Using current bus, train, and tram frequencies.
2. Better Buses: Using Bus Reform to create new routes running 5-10 minute frequencies as proposed by the Department of Transport and rejected by Cabinet. The plan would have cost $ billion.
3. SRL: The opening of the Suburban Rail Loop in 2035 at a cost of $35 billion.
4. Combined: Opening SRL with the reformed Bus Network as proposed in Treatment 2.

![Figure 2](/blog/images/srl/draft-bus-network.png)

I initially wanted to create this project by creating fictional GTFS feeds and using Open Trip Planner, however this would have required creating a backend. I decided on creating a Python pre-processing script that creates a network graph by merging in GTFS data, data from [FrequencyFinder](https://ptmapmelb.com/frequencyfinder/) on trams and existing buses by [Adam Bain](https://adambain1.substack.com/), and a GeoJSON file I created using ArcGisPro that illustrates my interpretation of a reformed network using the corridoors and frequencies by DTP.

![Figure 3](/blog/images/srl/revised-network.png)

While SRL and existing routes keep their stop locations, the Reformed Bus Network places stops every 400m except where an interchange is nearby. When moving between unique routes, a combined penalty applied for connecting between services, which includes walking time, a two minute interchange penalty, and halving the connection time of the subsequent service. Any two stops that are within 1km are potentially eligible for a connection.

All of this pre-processing means that any browser can load the graph and run Dijkstra's Algorithm which is used to calculate shortest paths, either between two points for the journey planner, or using a one-to-all approach for Isochrones. Since there's only one graph file and four treatments, all calculations are made four times with certain edges turned on or off. HTML, CSS, JS (including [Leaflet](https://leafletjs.com/) & [Nominatim](https://nominatim.org/)) were used for the frontend.

As this is a post on SRL East, Bus Reform travel times have been scoped for suburbs south of the Yarra. The following accuracy limitations are known: Doncaster Busway & DART network, Train Frequencies, speeds are set by mode (excluding SRL), walking durations, and isochrone coverage along non-inhabitable areas.

### Will SRL stations benefit more from a new train line or better buses?

SRL have published isochrones for all six stations, however they are hidden inside this [800-page 2021 Traffic and Transport Impact Assessment.](https://srleastees.vic.gov.au/#/documents) Additionally, no modelling has yet been completed for understanding the benefits of Bus Reform along with SRL.

Using our current PT network as a baseline, we get the following increases in the amount of area coverage reachable within 60 minutes. 


| **SRL Station** | **Better Buses** | **SRL** | **Combined** |
| ----------------------------------------------------------------------------------------- | ---------------- | ------- | ------------ |
| [Cheltenham](https://mohanwadia.com/srl/?mode=isochrone&point=-37.956491%2C145.049600) | +35% | +66% | +100% |
| [Clayton](https://mohanwadia.com/srl/?mode=isochrone&point=-37.923676%2C145.119578) | +37% | +41% | +66% |
| [Monash](https://mohanwadia.com/srl/?mode=isochrone&point=-37.902237%2C145.142055) | +59% | +94% | +128% |
| [Glen Waverley](https://mohanwadia.com/srl/?mode=isochrone&point=-37.880029%2C145.162885) | +36% | +44% | +65% |
| [Burwood](https://mohanwadia.com/srl/?mode=isochrone&point=-37.850558%2C145.111145) | +50% | +95% | +121% |
| [Box Hill](https://mohanwadia.com/srl/?mode=isochrone&point=-37.818671%2C145.122646) | +7% | +27% | +38% |
| Averages | +34% | +61% | +87% |


It's important to note that while the quantity of destinations may increase, many commuters are looking for an increase in quality destinations as SRL will deliver activity hubs. However, bus coverage and cycling access around stations is still very important in deciding who can access them, while the [Victorian Integrated Transport Model as reported by Peter Parker](https://melbourneontransit.blogspot.com/2021/11/building-melbournes-useful-network-part_19.html#:~:text=What%27s%20SRL%27s%20impact%20on%20bus%20usage%3F) instead used 1600m walking catchments, does not account for cycling, and does not see buses as a major access mode to SRL stations.

![Figure 2](/blog/images/srl/boardings.png)

**[SRL Cheltenham](https://mohanwadia.com/srl/?mode=isochrone&point=-37.956491%2C145.049600)** currently has 11 routes visiting Southland SC providing lots of coverage, however no one route has a turn-up-and-go frequency. A revised network as seen in Treatment 2 (Better Buses) would provide a 5-minute frequent service between Sandringham, SRL Cheltenham, Chadstone, SRL Box Hill, Doncaster, and beyond. Other routes will connect it to Doncaster via Huntingdale RS and Deakin SRL, as well as another running along Nepean Hwy from Dandenong to the city. 

![Figure 3](/blog/images/srl/southland-interchange.png)

[SRL Clayton](https://mohanwadia.com/srl/?mode=isochrone&point=-37.923676%2C145.119578) interestingly has just a 4% difference between the Better Buses and SRL treatments, suggesting bus investments can deliver access improvements for the activity centre on an unprecidented scale. Treatment 2 will simplify it down to just three routes: an east-west along Centre Rd between Brighton and Dandenong, a north-south route along Clayton Rd between The Pines SC and Carrum RS, and the northern part of the existing 703 extended to The Pines SC too. 

![Figure 4](/blog/images/srl/clayton_isochrone_official.jpg)

**[SRL Monash](https://mohanwadia.com/srl/?mode=isochrone&point=-37.902237%2C145.142055)** will likely re-route some bus routes towards the station when it's closer to completion. For now, it serves Routes 693, 703, 737, and 742. As part of Treatment 2, only two routes serve the station however being 10-minute frequency routes there's a 36% increase recorded. While the east-west alignment of Route 693 remains unchanged, the Bus Map extends Route 703 to The Pines SC. As the northern location of the station currently has low patronage, it's lack of transport options means that it will receive the biggest boost out of all stations at +94%, and also has the most potential with a bus and rail investment at +128%.

![Figure 5](/blog/images/srl/monash-station-layout.png)

**[SRL Glen Waverley](https://mohanwadia.com/srl/?mode=isochrone&point=-37.880029%2C145.162885)** currently has only has one frequent bus route (Route 902), which has the _____-highest patronage of all routes, despite it's large bus interchange. The rejected map would provide the precinct with 4 high-frequency buses: A Route 902 which continues to the City from Doncaster SC, a Route 734 extended to Knox City SC, an extended and straightened Route 623 along Waverley Rd to Caulfield RS, and a new route towards Dandenong via Wheelers Hill SC.

**[SRL Burwood](https://mohanwadia.com/srl/?mode=isochrone&point=-37.850558%2C145.111145)** currently is still poorly served by it's tram and bus network. The express Route 201 will be fully replaced by SRL, saving students 15 minutes each way. However, Route 75 slowly visits limited destinations along Burwood Hwy and Route 70 falls short of the new station. Two other bus routes (767 and 903) serve the university and connect it to Box Hill. To improve bus services, Treatment 2 crucially upgrades the 903 to an all-day 5 minute frequency, straightening it via Station St. Replacing the 767, a more useful and extended north-south route connecting Doncaster to Clarinda will run every 10 minutes. Additionally a new route via Eley Rd to Mitcham RS connects residents east of the campus and station.

![Figure 6](/blog/images/srl/burwood-station-layout.png)

**[SRL Box Hill](https://mohanwadia.com/srl/?mode=isochrone&point=-37.818671%2C145.122646)** will see the lowest improvement out of the six stations, however is estimated to have the highest ridership numbers out of all six stations. It's clear that Box Hill is very well served by bus routes already in all directions, as well as heavy rail east-west of the station. As a terminus for SRL East it's waiting to be extended to Doncaster and beyond. The strength of pre-SRL transport in the activity centre is illustrated by [Adam Bain below.](https://adambain1.substack.com/p/the-activity-centres-need-good-non#:~:text=As%20an%20example%20of%20a%20centre%20that%20plausibly%20passes%20the%20test%2C%20I%20will%20use%20Box%20Hill%2C%20perhaps%20Melbourne%E2%80%99s%20most%20successful%20cluster%20of%20suburban%20density%2C%20with%20a%20notably%20low%20car%20ownership%20rate%2C%20where%2017%25%20of%20households%20are%20car%20free%2C%20in%20contrast%20to%207%25%20statewide.)

![Figure 7](/blog/images/srl/box-hill-star.png)

### How much faster will journeys be with SRL?

Big Build [published a document in June 2025](https://bigbuild.vic.gov.au/__data/assets/pdf_file/0019/944110/SRL-East-travel-time-estimates-report.pdf) with indicative travel time improvements between select destinations.  I decided to find the journeys from this report that are within the scope of my Journey Planner, and compare connecting these destinations between the two treatments using [my journey planner.](https://mohanwadia.com/srl/?mode=journey)


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


Out of the 29 journeys, the SRL treatment averaged a 22 minute improvement (which is in-line with the 23 minute average improvement from the document) while the Better Buses treatment averaged just a 6 minute improvement. However, my calculated SRL journey times were calculated to be 7 minutes longer, while current network times were found to be 2 minutes longer. Discrepancies may partly exist due to by Big Build starting journeys at irregular times by using existing timetable data of infrequent routes. 

### Will other major destinations benefit from SRL?

While SRL serves some of the biggest activity centres in the East and South-East, it won't serve them all. Some of the biggest destinations can be included by creating high-quality transport connections where they currently don't exist. You can view the effects of SRL on any location in the Eastern or South-Eastern suburbs at [mohanwadia.com/srl.](https://mohanwadia.com/srl/?mode=isochrone) Minor benefits of SRL within a 60-minute travel time are seen across nearby activity centres. Within a 60 minute journey, SRL needs Better Buses to amplify coverage for those travelling from further away. 


| **Major Destination** | **Better Buses** | **SRL** | **Combined** |
| ------------------------------------------------------------------------------------------ | ---------------- | ------- | ------------ |
| [Caulfield RS](https://mohanwadia.com/srl/?mode=isochrone&point=-37.877513%2C145.041881) | +19% | +3% | +20% |
| [Chadstone SC](https://mohanwadia.com/srl/?mode=isochrone&point=-37.887826%2C145.083668) | +47% | 0% | +49% |
| [Dandenong RS](https://mohanwadia.com/srl/?mode=isochrone&point=-37.989979%2C145.209859) | +46% | +10% | +53% |
| [Knox City SC](https://mohanwadia.com/srl/?mode=isochrone&point=-37.868857%2C145.238142) | +72% | +1% | +82% |
| [Sandringham RS](https://mohanwadia.com/srl/?mode=isochrone&point=-37.950259%2C145.004387) | +49% | +4% | +92% |
| [Stud Park SC](https://mohanwadia.com/srl/?mode=isochrone&point=-37.919417%2C145.236602) | +92% | 0% | +94% |


Sandringham desperately needs a high-frequency route via Bay Rd to supplement its exclusion from an additional heavy rail line. While Caulfield and Dandenong Station are both 6-7 stations away from Clayton SRL, users will be able to access all SRL stations but not travel much further within 60 minutes. [Previous analysis by Peter Parker](https://melbourneontransit.blogspot.com/2025/07/un-209-how-much-time-will-srl-east-save.html) commented that "the SRL's usefulness for people in outer eastern suburbs...will be heavily constrained by low Metro train frequencies and inefficient bus networks." This is evident by Knox City SC, Chadstone SC, and Stud Park SC currently lacking high-frequency connections to future SRL Stations. 

### Conclusion

Melbourne's eastern and south-eastern suburbs need better buses, regardless of the progress of the Suburban Rail Loop. How does this change your views on Bus Reform and SRL? [Let me know in the comments.](https://www.linkedin.com/in/mohanwadia/recent-activity/all/)