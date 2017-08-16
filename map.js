function initMap() {
	var mapProp = {
		center: new google.maps.LatLng(51.508742, -0.12085), 
		zoom: 4,
	};
	var map = new google.maps.Map(document.getElementById("map"), mapProp);
}