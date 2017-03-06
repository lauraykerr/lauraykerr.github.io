var lonLat;
var lonLatList = [[40.762428, -73.973794], [40.389071, 49.864837], [41.068148, 28.991994], [25.923747, -80.121697], [41.032135, -73.764493], [41.888868, -87.626394], [21.279552, -157.832050], [40.769029, -73.981609], [43.649832, -79.380178], [49.286847, -123.124185], [36.129545, -115.172821], [38.894481, -77.027397], [40.719846, -74.035972], [40.912705, -73.781655], [40.719846, -74.035972], [40.720136, -74.035764], [40.752579, -73.967524], [40.706955, -74.009740], [8.975693, -79.506929], [40.725470, -74.005334], [40.765515, -73.976551], [40.763176, -73.969858], [26.665965, -80.098567], [25.813720, -80.339676], [40.654434, -74.697332], [40.277763, -74.178309], [26.887545, -80.088682], [33.729614, -118.349549], [39.787628, -75.004335], [39.052976, -77.347256], [41.146037, 73.833303], [41.571929, -73.760938], [35.531963, -80.918688], [40.812471, -73.834446], [25.011842, 55.291309], [25.087907, 55.157461], [57.278217, -2.052686], [52.745890, -9.502527], [55.314105, -4.828921]];
var placeList = ["New York City", "Azerbaijan", "Istanbul", "Sunny Isles Beach, Florida", "White Plains, New York", "Chicago", "Honolulu", "New York City", "Toronto", "Vancouver", "Las Vegas", "Washington, D.C.", "New York City", "New Rochelle, New York", "Jersey City", "Jersey City", "New York City", "New York City", "Panama City", "New York City", "New York City", "New York City", "West Palm Beach", "Miami", "Bedminster, New Jersey", "Colts Neck, New Jersey", "Jupiter, Florida", "Los Angeles", "Philadelphia", "Washington D.C.", "Westchester, New York", "Hudson Valley, New York", "Charlotte", "Ferry Point, New York", "Dubai", "Dubai", "Scotland", "Ireland", "Scotland"]

$(document).ready(function() { 

	for (i = 0; i < lonLatList.length; i++) {
		lonLat = lonLatList[i];
		var imgDiv;
		var img = $("<img class='sat-image' id=" + i + ">");
		img.attr('src', "https://maps.googleapis.com/maps/api/staticmap?center="+lonLat+"&zoom=17&size=600x600&maptype=satellite");
		img.appendTo("div.maps");
		
	}

	
});


//  Trump Tower, New York City
//  Trump Tower Baku, Azerbaijan
//  Trump Towers Istanbul, Turkey
// Trump Towers (Sunny Isles Beach), Sunny Isles Beach, Florida
//  Trump Tower (White Plains), White Plains, New York
//  Trump International Hotel and Tower (Chicago)
// Trump International Hotel and Tower (Honolulu)

//  Trump International Hotel and Tower (New York City)
//  Trump International Hotel and Tower (Toronto)
//  Trump International Hotel and Tower (Vancouver)
// Trump International Hotel Las Vegas

// Trump International Hotel Washington, D.C., also known as Old Post Office Pavilion
// Trump Plaza (New York City)
// Trump Plaza (New Rochelle)
// Trump Plaza (Jersey City)
// Trump Bay Street, in Jersey City, New Jersey
// Trump World Tower, in New York City
// The Trump Building, in New York City
// Trump Ocean Club International Hotel and Tower, in Panama City
// Trump SoHo, hotel condominium in New York City
// Trump Parc and Trump Parc East, Manhattan
// Trump Park Avenue, Manhattan
// Daewoo Trump World, in South Korea[1]
// Trump International Golf Club (West Palm Beach)
// Trump National Doral Miami
// Trump National Golf Club (Bedminster, New Jersey)
// Trump National Golf Club (Colts Neck, New Jersey)
// Trump National Golf Club (Jupiter, Florida)
// Trump National Golf Club (Los Angeles)
// Trump National Golf Club (Philadelphia)
// Trump National Golf Club (Washington, D.C.)
// Trump National Golf Club Westchester
// Trump National Golf Club (Hudson Valley, New York)
// Trump National Golf Club (Charlotte, North Carolina)
// Trump Golf Links (Ferry Point, New York)[2]
// Trump International Golf Club (Dubai)
// Trump World Golf Club (Dubai)
// Trump International Golf Links, Scotland
// Trump International Golf Links and Hotel Ireland
// Trump Turnberry (Scotland)