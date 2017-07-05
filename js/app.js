
$(function () {
  var inputCiti=$("#citiInput");
  var btn=$(".btn");
  var ul=$(".weather");


  btn.on("click",function (event) {
    // span.text('');
    event.preventDefault();
    console.log(textInput);
    var textInput=inputCiti.val();
    var apiUrl='http://api.apixu.com/v1/current.json?key=6dcad8a6de714b7396a164032170507&q='+textInput;
    console.log(apiUrl);

    function ShowWeather(citis) {
      var li = $('<li>');
      var span = $('<span>').text(citis.name);
      var temp = $('<span>').text(citis.temp_c);
      li.append(span);
      li.append(temp);
      ul.append(li);
    }

    function LoadCiti() {
      $.ajax({
        url:apiUrl
      }).done(function (response) {
        ShowWeather(response.location);
        ShowWeather(response.current);
      }).fail(function (err) {
        console.log("errror");
      })
    }
    LoadCiti();
  })





});
