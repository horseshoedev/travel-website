var map;

function initMap() {

  
  
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#523735"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#c9b2a6"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#dcd2be"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#ae9e90"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#93817c"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#a5b076"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#447530"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fdfcf8"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f8c967"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#e9bc62"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e98d58"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#db8555"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#806b63"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8f7d77"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#b9d3c2"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#92998d"
        }]
      }
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  
  var map = new google.maps.Map(document.getElementById('map'), {
    
    center: {
      lat: 37.744919,  
      lng: -119.586342,
    },
    zoom: 5,
    
    
    mapTypeControlOptions: {

      scaleControl: true,
      // disables fullscreen
      fullscreenControl: false,
      // disables street view
      streetViewControl: false,
      // disables map controls
      mapTypeControl: false,
      // Zoom Controls
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map'
      ],

    }
    
  });

   // Info Windows
   var bounds = new google.maps.LatLngBounds();
   // Multiple markers location, latitude, and longitude
   var markers = [
    ['Yosemite, CA', 37.744919, -119.586342],
    ['Hollywood,CA', 34.092808, -118.328659],
    ['Santa Cruz,CA', 36.974117,-122.030792],
    ['Joshua Tree,CA',34.135, -116.3152],
    ['Death Valley,CA',36.5673146, -117.1395761],
    ['Redwood,CA',41.213181, -124.004631]
];
                    
// Info window content
var infoWindowContent = [
    ['<div class="info_content">' +
    '<h4>Yosemite National Park</h4>' +
    '<img src="./assets/images/yosemite.jpg" width="80" height="80" alt="Yosemite">' +
    '<p>First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.<a href="https://en.wikipedia.org/wiki/Yosemite_National_Park" target="_blank">More Info</a> </p>' + '</div>'],
    ['<div class="info_content">' +
    '<h4>Hollywood, California</h4>' +
    '<img src="./assets/images/hollywood.jpg" width="80" height="80" alt="Hollywood">' +
    '<p>Hollywood is a neighborhood in the central region of Los Angeles, California. Its name has come to be a shorthand reference for the industry and the people associated with it.<a href="https://en.wikipedia.org/wiki/Hollywood" target="_blank">More Info</a></p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h4>Santa Cruz, California</h4>' +
    '<img src="./assets/images/santacruz.jpg" width="80" height="80" alt="Santa Cruz">' +
    '<p>Santa Cruz is known for its moderate climate, natural environment, coastline, redwood forests, alternative community lifestyles, and socially liberal leanings as well as the Santa Cruz Beach Boardwalk, an oceanfront amusement park operating continuously since 1907.<a href="https://en.wikipedia.org/wiki/Santa_Cruz,_California" target="_blank">More Info</a></p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h4>Joshua Tree National Park</h4>' +
    '<img src="./assets/images/joshua-tree.jpg" width="80" height="80" alt="joshua tree">' +
    '<p>Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California.<a href="https://en.wikipedia.org/wiki/Joshua_Tree_National_Park" target="_blank">More Info</a></p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h4>Death Valley National Park</h4>' +
    '<img src="./assets/images/death-valley.jpg" width="80" height="80" alt="Death Valley">' +
    '<p>Death Valley National Park is an American national park that straddles the California—Nevada border, east of the Sierra Nevada. The park boundaries include Death Valley, the northern section of Panamint Valley, the southern section of Eureka Valley, and most of Saline Valley.<a href="https://en.wikipedia.org/wiki/Hollywood" target="_blank">More Info</a></p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h4>Redwood National Park</h4>' +
    '<img src="./assets/images/redwood.jpg" width="80" height="80" alt="Redwood">' +
    '<p>Most people know Redwood as home to the tallest trees on Earth. For thousands of years people have lived in this verdant landscape. The parks also protect vast prairies, oak woodlands, wild river-ways, and nearly 40-miles of rugged coastline.<a href="https://en.wikipedia.org/wiki/Redwood_National_and_State_Parks" target="_blank">More Info</a></p>' +
    '</div>']
];
    
// Add multiple markers to map
var infoWindow = new google.maps.InfoWindow(), marker, i;

// Place each marker on the map  
for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
    });
    
    // Add info window to marker    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker,);
        }
    })(marker, i));

  
  // Center the map to fit all markers on the screen
  map.fitBounds(bounds);
}

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  // Set Search to bottom
  
  // Autocomplete
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener('place_changed', function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);

  document.getElementById('use-strict-bounds')
    .addEventListener('click', function () {
      console.log('Checkbox clicked! New state=' + this.checked);
      autocomplete.setOptions({
        strictBounds: this.checked
      });
    });
}