
$(function () {
  let inputCiti=$("#citiInput");
  let btn=$(".btn");
  let table=$(".weather");
  let divMap = $(".maps");
  let tr;
  let cityName;
  let temp;
  let icon;
  let textC;
  let st;
    btn.on("click",function (event) {

    event.preventDefault();
    let textInput=inputCiti.val();
    let apiUrl='https://api.apixu.com/v1/current.json?key=6dcad8a6de714b7396a164032170507&q='+textInput;
    divMap.find('h3').removeClass("look");
      function ShowWeather(citis) {
      let iconUrl=citis.current.condition.icon;
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



    // function initMap(place) {
    //
    //   let uluru = {lat: place.location.lat, lng: place.location.lon};
    //   console.log(place.location.lat);
    //   let map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 6,
    //     center: uluru
    //   });
    //   let marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map
    //   });
    // }








    function LoadCiti() {
      $.ajax({
        url:apiUrl,
      }).done(function (response) {
        ShowWeather(response);
        // initMap(response);
      }).fail(function (err) {
          console.log("error from loadCity");
      })
    }
    LoadCiti();
    // initMap();

  })




});
