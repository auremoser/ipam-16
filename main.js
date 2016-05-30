window.onload = function() {
    var vizjson_url = 'https://auremoser.cartodb.com/api/v2/viz/66fc4e20-2689-11e6-8b37-0ecfd53eb7d3/viz.json'; // <-- Paste viz.json URL between quotes

    var options = {
           sql: "SELECT * FROM ca_area",
           // cartocss: ""
       }

       var sublayers = [];

       // instantiate map object from Leaflet
       var mapObj = new L.Map(map, {  // <-- Replace map_id with your #id for rendering
           center: [36.052235, -118.243683], // ~ Los Angeles, California
           zoom: 6 // zoom projection to adjust starting point zoom
       });
       // add basemap tiles
       L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(mapObj);

       // add data tile layers here (if you have multiple layers, you can manipulate them in js here)
       cartodb.createLayer(mapObj,vizjson_url)
           .addTo(mapObj)
           .done(function(layer) {
               console.log("Map successfully created.");
               sublayers[0] = layer.getSubLayer(0);
               sublayers[0].set(options); // altering the SQL and CartoCSS; see above
           })
           .error(function(err) {
               console.log("Map not created: " + err);
           // });

          sublayer.setInteractivity('cartodb_id, name, sqft, sqm');
                           
          // tooltip definition for createLayer()
            var testTooltip = layer.leafletMap.viz.addOverlay({
              type: 'tooltip',
              layer: sublayer,
              template: $('#tooltip_template').html(), 
              width: 200,
              position: 'bottom|right',
              fields: [{ name: 'name', population: 'pop2005' }]
            });
            $('body').append(testTooltip.render().el);
                  
        });
    }

