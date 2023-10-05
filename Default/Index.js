var map = L.map("map").setView([51.3493, -0.2489], 15);
L.tileLayer(
	"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: "mapbox/streets-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			"pk.eyJ1IjoiamFtaWVib3kyMyIsImEiOiJjbDNsaDUzdWoxbWZpM2Zxd2VqbjdiYm9iIn0.XSlrvaNDSaRs0ty1cIarQg",
	}
).addTo(map);
var EwellEast = L.marker([51.34527091285811, -0.24156804782372004]).addTo(map);
EwellEast.bindPopup("<b>Ewell East Train Station</b>");

var EwellWest = L.marker([51.35011115039039, -0.2569896145599254]).addTo(map);
EwellWest.bindPopup("<b>Ewell West Train Station</b>");

var NonsuchPark = L.marker([51.35882290951588, -0.22790580410071906]).addTo(
	map
);
NonsuchPark.bindPopup("<b>Nonsuch Park</b>");

var BoruneHall = L.marker([51.350434345476835, -0.252266974162469]).addTo(map);
BoruneHall.bindPopup("<b>Bourne Hall</b>");

var EwellJail = L.marker([51.349601407220476, -0.24910053720738945]).addTo(map);
EwellJail.bindPopup("<b>Ewell Jail</b>");

var NESCOT = L.marker([51.34226608588958, -0.2447589336261623]).addTo(map);
NESCOT.bindPopup(
	"<b>NESCOT College</b><br>North East Surrey College Of Technology"
);

var Supermarket = L.marker([51.34164374790287, -0.25761038155681787]).addTo(
	map
);
Supermarket.bindPopup("<b>Supermarket</b><br>Sainsbury's");
