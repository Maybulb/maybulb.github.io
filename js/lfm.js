// Courtesy of http://www.samkitson.co.uk/using-json-to-access-last-fm-recently-played-tracks/
// ♫ JavaScript makes me want to swear like Plan B ♫ – JME

$(document).ready(function() {

  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=jshtrmml&api_key=67bc224ceb7cea73cf835a56d247d15a&limit=2&format=json&callback=?", function(data) {

      var html = '';
      var counter = 1;
      $.each(data.recenttracks.track, function(i, item) {
          if(counter == 1) {
              html += item.name + ' by ' + item.artist['#text'];
          }
          counter++
      });
      $('#np1').append(html);
  });

  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=ltrlly&api_key=67bc224ceb7cea73cf835a56d247d15a&limit=2&format=json&callback=?", function(data) {

      var html = '';
      var counter = 1;
      $.each(data.recenttracks.track, function(i, item) {
          if(counter == 1) {
              html += item.name + ' by ' + item.artist['#text'];
          }
          counter++
      });
      $('#np2').append(html);
  });

  $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=soodologica&api_key=67bc224ceb7cea73cf835a56d247d15a&limit=2&format=json&callback=?", function(data) {

      var html = '';
      var counter = 1;
      $.each(data.recenttracks.track, function(i, item) {
          if(counter == 1) {
              html += item.name + ' by ' + item.artist['#text'];
          }
          counter++
      });
      $('#np3').append(html);
  });

});
