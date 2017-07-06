
$(function () {
  var inputCiti=$("#citiInput");
  var btn=$(".btn");
  var table=$(".weather");
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
    var sup1=$("<sup>");
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
      td.append(icon);
      tr.append(cityName);
      tr.append(cloud);
      // temp.append(st);
      tr.append(temp);
      tr.append(td);
      table.append(tr);

      tr.prev().remove();
    }

    function LoadCiti() {
      $.ajax({
        url:apiUrl
      }).done(function (response) {
        ShowWeather(response);
      }).fail(function (err) {

      })
    }
    LoadCiti();

  })




});
