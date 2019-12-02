/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/js/graph2.js":
/*!***************************!*\
  !*** ./dist/js/graph2.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var paint = function paint(city) {
  var dims2 = {
    height: 300,
    width: 300,
    radius: 150
  };
  var cent2 = {
    x: dims2.width / 2 + 5,
    y: dims2.width / 2 + 5
  };
  var svg2 = d3.select(".canvas2").append("svg").attr("width", dims2.width + 150).attr("height", dims2.height + 150);
  var graph2 = svg2.append("g").attr("transform", "translate(".concat(cent2.x, ", ").concat(cent2.y, ")"));
  var pie2 = d3.pie() // .sort(null)
  .sort(function (a, b) {
    return d3.descending(a.rank, b.rank);
  }).value(function (d) {
    return 100;
  }); // const angles2 = pie2([
  //     { cityName: 'rent', destination: 500 },
  //     { cityName: 'bills', destination: 300 },
  //     { cityName: 'gaming', destination: 200 }
  // ]);

  var arcPath2 = d3.arc().outerRadius(dims2.radius).innerRadius(dims2.radius / 2);
  var color2 = d3.scaleOrdinal(d3["schemeSet3"]); // legend2 setup

  var legendGroup2 = svg2.append("g").attr("transform", "translate(".concat(dims2.width + 40, ", 10)"));
  var legend2 = d3.legendColor().shape("circle").shapePadding(10).scale(color2);
  var tip2 = d3.tip().attr("class", "tip2 card").html(function (d) {
    var content = "<div class=\"cityName rank\"># ".concat(d.data.rank, "</div>");
    content += "<div class=\"destination\">".concat(d.data.cityName, " (").concat(d.data.destination, ")</div>");
    content += "<div class=\"destination\">".concat(d.data.countryName, "</div>");
    return content;
  });
  graph2.call(tip2); // update2 function

  var update2 = function update2(data2) {
    color2.domain(data2.map(function (d) {
      return d.cityName;
    })); // update2 and call legend2

    legendGroup2.call(legend2);
    legendGroup2.selectAll("text").attr("fill", "white"); // join enhanced (pie2) data2 to path elements

    var paths2 = graph2.selectAll("path").data(pie2(data2));
    paths2.exit().transition().duration(750).attrTween("d", arcTweenExit2).remove(); // handles the current DOM path updates

    paths2.attr("d", arcPath2).transition().duration(750).attrTween("d", arcTweenUpdate);
    paths2.enter().append("path").attr("class", "arc") // .attr('d', arcPath2)
    .attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color2(d.data.cityName);
    }).each(function (d) {
      this._current = d;
    }).transition().duration(750).attrTween("d", arcTweenEnter2);
    graph2.selectAll("path").on("mouseover", function (d, i, n) {
      tip2.show(d, n[i]);
      handleMouseOver2(d, i, n);
    }).on("mouseout", function (d, i, n) {
      tip2.hide();
      handleMouseOut2(d, i, n);
    }); // .on("click", handleClick);
  }; // // add events
  // // data array and firestore


  var data2 = [];
  db.collection("cities").doc(city).collection("flights").onSnapshot(function (res) {
    res.docChanges().forEach(function (change) {
      var doc = _objectSpread({}, change.doc.data(), {
        id: change.doc.id
      });

      switch (change.type) {
        case "added":
          data2.push(doc);
          break;

        case "modified":
          var index = data.findIndex(function (item) {
            return item.id == doc.id;
          });
          data2[index] = doc;
          break;

        case "removed":
          data2 = data.filter(function (item) {
            return item.id !== doc.id;
          });
          break;

        default:
          break;
      }
    });
    update2(data2);
  }); // db.collection("cities")
  //   .doc("EXMrIeJ31m7m8M3klVPb")
  //   .collection("flights")
  //   .onSnapshot(res => {
  //     res.docChanges().forEach(change => {
  //       const doc = { ...change.doc.data(), id: change.doc.id };
  //       switch (change.type) {
  //         case "added":
  //           data2.push(doc);
  //           break;
  //         case "modified":
  //           const index = data.findIndex(item => item.id == doc.id);
  //           data2[index] = doc;
  //           break;
  //         case "removed":
  //           data2 = data.filter(item => item.id !== doc.id);
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //     update2(data2);
  //   });

  var arcTweenEnter2 = function arcTweenEnter2(d) {
    var i = d3.interpolate(d.endAngle, d.startAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath2(d);
    };
  };

  var arcTweenExit2 = function arcTweenExit2(d) {
    var i = d3.interpolate(d.startAngle, d.endAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath2(d);
    };
  }; // use function keyword to allow use of 'this'


  function arcTweenUpdate(d) {
    // interpolate between the two objects
    var i = d3.interpolate(this._current, d); // update2 the current prop with updated data

    this._current = i(1);
    return function (t) {
      return arcPath2(i(t));
    };
  }

  var handleMouseOver2 = function handleMouseOver2(d, i, n) {
    // console.log(n[i]);
    d3.select(n[i]).transition("changeSliceFill").duration(300).attr("fill", "#454545").attr("stroke", "#4C9AFF").attr("stroke-width", "5.5");
  };

  var handleMouseOut2 = function handleMouseOut2(d, i, n) {
    d3.select(n[i]).transition("changeSliceFill").duration(300).attr("fill", color2(d.data.cityName)).attr("stroke", "white").attr("stroke-width", "3");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (paint);

/***/ }),

/***/ "./dist/js/map.js":
/*!************************!*\
  !*** ./dist/js/map.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var map = function map() {
  var svg = d3.select("#map-svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");
  var unemployment = d3.map();
  var path = d3.geoPath();
  var x = d3.scaleLinear().domain([1, 10]).rangeRound([600, 860]);
  var color = d3.scaleThreshold().domain(d3.range(2, 10)).range(d3.schemeBlues[9]);
  var g = svg.append("g").attr("class", "key").attr("transform", "translate(0,40)");
  g.selectAll("rect").data(color.range().map(function (d) {
    d = color.invertExtent(d);
    if (d[0] == null) d[0] = x.domain()[0];
    if (d[1] == null) d[1] = x.domain()[1];
    return d;
  })).enter(); // .append("rect")
  // .attr("height", 8)
  // .attr("x", function (d) { return x(d[0]); })
  // .attr("width", function (d) { return x(d[1]) - x(d[0]); })
  // .attr("fill", function (d) { return color(d[0]); });
  // g.append("text")
  //     .attr("class", "caption")
  //     .attr("x", x.range()[0])
  //     .attr("y", -6)
  //     .attr("fill", "#000")
  //     .attr("text-anchor", "start")
  //     .attr("font-weight", "bold")
  //     .text("Unemployment rate");
  // g.call(d3.axisBottom(x)
  //     .tickSize(13)
  //     .tickFormat(function (x, i) { return i ? x : x + "%"; })
  //     .tickValues(color.domain()))
  //     .select(".domain")
  //     .remove();

  /*  
      Before V5
      d3.queue()
          .defer(d3.json, "https://d3js.org/us-10m.v1.json")
          .defer(d3.tsv, "data/map.tsv", function(d) { unemployment.set(d.id, +d.rate); })
          .await(ready);
  */

  var promises = [d3.json("https://d3js.org/us-10m.v1.json"), d3.tsv("data/map.tsv", function (d) {
    unemployment.set(d.id, +d.rate);
  })];
  Promise.all(promises).then(function (data) {
    ready(data[0]);
  })["catch"](function (error) {
    console.log(error);
  });

  function ready(us) {
    svg.append("g").attr("class", "counties").selectAll("path").data(topojson.feature(us, us.objects.counties).features).enter().append("path").attr("fill", function (d) {
      return color(d.rate = unemployment.get(d.id));
    }).attr('fill', 'gray').attr("d", path).attr('id', function (d) {
      return d.id;
    }).append("title").text(function (d) {
      return d.rate + "%";
    });
    svg.append("path").datum(topojson.mesh(us, us.objects.states, function (a, b) {
      return a !== b;
    })).attr("class", "states").attr("d", path);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (map);

/***/ }),

/***/ "./dist/main.js":
/*!**********************!*\
  !*** ./dist/main.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map */ "./dist/js/map.js");
/* harmony import */ var _js_graph2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/graph2 */ "./dist/js/graph2.js");

 // const paint = require('./js/graph2');

document.addEventListener('DOMContentLoaded', function () {
  Object(_js_map__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var city;
  var sfo = document.querySelector("#sfo");
  var nyc = document.querySelector("#nyc");
  var aus = document.querySelector("#aus");
  var atl = document.querySelector("#atl");
  var mia = document.querySelector("#mia");
  var canvas = document.getElementById('canvas2');
  var title = d3.select('#city-title');
  sfo.addEventListener("click", function (e) {
    canvas.innerHTML = '';
    document.getElementById('city-title').innerHTML = '';
    city = "EXMrIeJ31m7m8M3klVPb";
    Object(_js_graph2__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    title.append('h4').attr('class', 'white-text center').attr('id', 'title-text').text('San Francisco');
  });
  nyc.addEventListener("click", function (e) {
    canvas.innerHTML = "";
    document.getElementById("city-title").innerHTML = "";
    city = "sjlu4Jl9vfR0UlkSurb4";
    Object(_js_graph2__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    title.append("h4").attr("class", "white-text center").attr("id", "title-text").text("New York");
  });
  aus.addEventListener("click", function (e) {
    canvas.innerHTML = "";
    document.getElementById("city-title").innerHTML = "";
    city = "a5BSMlROZWzptY4J7KOp";
    Object(_js_graph2__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    title.append("h4").attr("class", "white-text center").attr("id", "title-text").text("Austin");
  });
  atl.addEventListener("click", function (e) {
    canvas.innerHTML = "";
    document.getElementById("city-title").innerHTML = "";
    city = "LVC2svErstG9XVxvSw5R";
    Object(_js_graph2__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    title.append("h4").attr("class", "white-text center").attr("id", "title-text").text("Atlanta");
  });
  mia.addEventListener("click", function (e) {
    canvas.innerHTML = "";
    document.getElementById("city-title").innerHTML = "";
    city = "YooRLjf1UgSydWkiyNtF";
    Object(_js_graph2__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    title.append("h4").attr("class", "white-text center").attr("id", "title-text").text("Miami");
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map