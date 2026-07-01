import gtfs-kit as gk
feed = gk.read_feed("C:/Users/Administrator/Desktop/PT/gtfs/4/google_transit.zip", dist_units="m")
dates = [str(d) for d in range(20260202, 20260202 + 7)]
trip_stats = feed.compute_trip_stats()
route_stats = gk.routes.compute_route_stats(feed, dates, trip_stats