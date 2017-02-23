function init_map() {
        var var_location = new google.maps.LatLng(52.640072, 23.448347);
        var var_mapoptions = {
          gestureHandling: 'cooperative',
          center: var_location,
          zoom: 14
        };
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"W Dolinie U Luby"});
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
        var_marker.setMap(var_map); 
      }
google.maps.event.addDomListener(window, 'load', init_map);