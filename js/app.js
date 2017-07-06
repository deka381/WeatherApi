
$(function () {
  var inputCiti=$("#citiInput");
  var btn=$(".btn");
  var table=$(".weather");
  var divMap = $(".maps");
  var tr;
  var cityName;
  var temp;
  var icon;
  var textC;
  var st;
    btn.on("click",function (event) {

    event.preventDefault();
    var textInput=inputCiti.val();
    var apiUrl='http://api.apixu.com/v1/current.json?key=6dcad8a6de714b7396a164032170507&q='+textInput;
    divMap.find('h3').removeClass("look");
      function ShowWeather(citis) {
      var iconUrl=citis.current.condition.icon;
      tr=$('<tr>');
      td=$('<td>');
      cityName = $('<td><span>').text(citis.location.name);
      st= $('<sup>').text("o");
      textC=$('<span>').text("C");
      temp = $('<td><span>').text(citis.current.temp_c).append(st).append(textC);
      cloud=$("<td><span>").text("zachmurzenie: " + citis.current.cloud + " %");
      icon=$('<img>').attr("src",'http://'+iconUrl.substr(2));
      temp.append(icon);
      tr.append(cityName);
      tr.append(temp);
      tr.append(cloud);
      // tr.append(td);
      table.append(tr);

      tr.prev().remove();
    }



    function initMap(place) {

    ;


      var uluru = {lat: place.location.lat, lng: place.location.lon};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }








    function LoadCiti() {
      $.ajax({
        url:apiUrl
      }).done(function (response) {
        ShowWeather(response);
        initMap(response);
      }).fail(function (err) {

      })
    }
    LoadCiti();
    initMap();

  })




});
