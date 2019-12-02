import map from './js/map';
import paint from './js/graph2';
// const paint = require('./js/graph2');

document.addEventListener('DOMContentLoaded', () => {
    map();
    let city;
    const sfo = document.querySelector("#sfo");
    const nyc = document.querySelector("#nyc");
    const aus = document.querySelector("#aus");
    const atl = document.querySelector("#atl");
    const mia = document.querySelector("#mia");
    const canvas = document.getElementById('canvas2');
    const title = d3.select('#city-title');

    sfo.addEventListener("click", e => {
        canvas.innerHTML = '';
        document.getElementById('city-title').innerHTML = '';
      city = "EXMrIeJ31m7m8M3klVPb";
      paint(city);
      title
        .append('h4')
        .attr('class', 'white-text center')
        .attr('id', 'title-text')
        .text('San Francisco');
    });

    nyc.addEventListener("click", e => {
        canvas.innerHTML = "";
        document.getElementById("city-title").innerHTML = "";
      city = "sjlu4Jl9vfR0UlkSurb4";
      paint(city);
      title
        .append("h4")
        .attr("class", "white-text center")
        .attr("id", "title-text")
        .text("New York");
    });

    aus.addEventListener("click", e => {
        canvas.innerHTML = "";
        document.getElementById("city-title").innerHTML = "";
      city = "a5BSMlROZWzptY4J7KOp";
      paint(city);
      title
        .append("h4")
        .attr("class", "white-text center")
        .attr("id", "title-text")
        .text("Austin");
    });

    atl.addEventListener("click", e => {
        canvas.innerHTML = "";
        document.getElementById("city-title").innerHTML = "";
      city = "LVC2svErstG9XVxvSw5R";
      paint(city);
      title
        .append("h4")
        .attr("class", "white-text center")
        .attr("id", "title-text")
        .text("Atlanta");
    });

    mia.addEventListener("click", e => {
      canvas.innerHTML = "";
      document.getElementById("city-title").innerHTML = "";
      city = "YooRLjf1UgSydWkiyNtF";
      paint(city);
      title
        .append("h4")
        .attr("class", "white-text center")
        .attr("id", "title-text")
        .text("Miami");
    });
})