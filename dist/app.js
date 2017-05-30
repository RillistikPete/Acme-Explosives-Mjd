(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let object = {};

object.getProdData = () =>{
	return new Promise((resolve, reject) =>{
		$.ajax({
			url: "products.json",
			dataType: 'json',
		}).done(function(data){
			resolve(data);
			console.log("data", data);
		}).fail(function(xhr, status, error){
			reject(error);
	});
});
};

//object.getProdData();


object.getCategoriesData = () =>{
	return new Promise((resolve, reject) =>{
		$.ajax({
			url: "categories.json",
			dataType: 'json',
		}).done(function (data){
			resolve(data);
			console.log("data", data);
		}).fail(function(xhr, status, error){
			reject(error);
	});
});
};

//object.getCategoriesData();


object.getTypesData = () =>{
	return new Promise((resolve, reject) =>{
		$.ajax({
			url: "types.json",
			dataType: 'json',
		}).done(function (data){
			resolve(data);
			console.log("data", data);
		}).fail(function(xhr, status, error){
			reject(error);
	});
});
};

//object.getTypesData();


// function everything() {
// 	return Promise.all([getProdData, getCategoriesData, getTypesData]).done(resolve) => () {
// 		console.log("resolve", resolve);
// 		return resolve;
// 	};
// }








module.exports = object;
},{}],2:[function(require,module,exports){
"use strict";
console.log("main.js");

let data = require("./interface.js");

// function doSumn() {
// 	interface.getProdData().then(data) =>() {
// 	showProd(data);
// 	};
// };



function showCatalog() {

    let categDiv = $("#categ");
    let typeDiv = $("#type");
    let productsDiv = $("#prod");
    let sel = $("select option:selected").val();
    let showName = "";
    let showDesc = "";
    console.log("sel", sel);
    //Getting my data from each promise-- pass in and use 'prod' and 'categ' to be able to retreive data!

    data.getProdData()
        .then(prod => {
            data.getCategoriesData()
                .then(categ => {
                    data.getTypesData()
                        .then(type => {

                            console.log("prod.products", prod.products);
                            for (let i in prod.products) {
                                if (sel === "food") {
                                    if (prod.products[i].type === 1) {
                                        showName = `<td><h4>${prod.products[i].name}</h4></td>`;
                                        showDesc = `<td>${prod.products[i].description}</td>`;
                                        productsDiv.append(showName);
                                        typeDiv.append(showDesc);
                                    }
                                }
                                if (sel === "Demolition") {
                                    if (prod.products[i].type === 2) {
                                        showName = `<td><h4>${prod.products[i].name}</h4></td>`;
                                        showDesc = `<td>${prod.products[i].description}</td>`;
                                        productsDiv.append(showName);
                                        typeDiv.append(showDesc);
                                    }
                                }
                            }
                        });
                });
        });
}

showCatalog();


$("select").change(function() {
        showCatalog();

    })
    .trigger("change");

},{"./interface.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9qYXZhc2NyaXB0L2ludGVyZmFjZS5qcyIsIi4uL2phdmFzY3JpcHQvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxubGV0IG9iamVjdCA9IHt9O1xuXG5vYmplY3QuZ2V0UHJvZERhdGEgPSAoKSA9Pntcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IFwicHJvZHVjdHMuanNvblwiLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHR9KS5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcil7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn0pO1xufTtcblxuLy9vYmplY3QuZ2V0UHJvZERhdGEoKTtcblxuXG5vYmplY3QuZ2V0Q2F0ZWdvcmllc0RhdGEgPSAoKSA9Pntcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IFwiY2F0ZWdvcmllcy5qc29uXCIsXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxuXHRcdH0pLmRvbmUoZnVuY3Rpb24gKGRhdGEpe1xuXHRcdFx0cmVzb2x2ZShkYXRhKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcblx0XHR9KS5mYWlsKGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcil7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHR9KTtcbn0pO1xufTtcblxuLy9vYmplY3QuZ2V0Q2F0ZWdvcmllc0RhdGEoKTtcblxuXG5vYmplY3QuZ2V0VHlwZXNEYXRhID0gKCkgPT57XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9Pntcblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBcInR5cGVzLmpzb25cIixcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0fSkuZG9uZShmdW5jdGlvbiAoZGF0YSl7XG5cdFx0XHRyZXNvbHZlKGRhdGEpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXHRcdH0pLmZhaWwoZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKXtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdH0pO1xufSk7XG59O1xuXG4vL29iamVjdC5nZXRUeXBlc0RhdGEoKTtcblxuXG4vLyBmdW5jdGlvbiBldmVyeXRoaW5nKCkge1xuLy8gXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2dldFByb2REYXRhLCBnZXRDYXRlZ29yaWVzRGF0YSwgZ2V0VHlwZXNEYXRhXSkuZG9uZShyZXNvbHZlKSA9PiAoKSB7XG4vLyBcdFx0Y29uc29sZS5sb2coXCJyZXNvbHZlXCIsIHJlc29sdmUpO1xuLy8gXHRcdHJldHVybiByZXNvbHZlO1xuLy8gXHR9O1xuLy8gfVxuXG5cblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0OyIsIlwidXNlIHN0cmljdFwiO1xuY29uc29sZS5sb2coXCJtYWluLmpzXCIpO1xuXG5sZXQgZGF0YSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZS5qc1wiKTtcblxuLy8gZnVuY3Rpb24gZG9TdW1uKCkge1xuLy8gXHRpbnRlcmZhY2UuZ2V0UHJvZERhdGEoKS50aGVuKGRhdGEpID0+KCkge1xuLy8gXHRzaG93UHJvZChkYXRhKTtcbi8vIFx0fTtcbi8vIH07XG5cblxuXG5mdW5jdGlvbiBzaG93Q2F0YWxvZygpIHtcblxuICAgIGxldCBjYXRlZ0RpdiA9ICQoXCIjY2F0ZWdcIik7XG4gICAgbGV0IHR5cGVEaXYgPSAkKFwiI3R5cGVcIik7XG4gICAgbGV0IHByb2R1Y3RzRGl2ID0gJChcIiNwcm9kXCIpO1xuICAgIGxldCBzZWwgPSAkKFwic2VsZWN0IG9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICBsZXQgc2hvd05hbWUgPSBcIlwiO1xuICAgIGxldCBzaG93RGVzYyA9IFwiXCI7XG4gICAgY29uc29sZS5sb2coXCJzZWxcIiwgc2VsKTtcbiAgICAvL0dldHRpbmcgbXkgZGF0YSBmcm9tIGVhY2ggcHJvbWlzZS0tIHBhc3MgaW4gYW5kIHVzZSAncHJvZCcgYW5kICdjYXRlZycgdG8gYmUgYWJsZSB0byByZXRyZWl2ZSBkYXRhIVxuXG4gICAgZGF0YS5nZXRQcm9kRGF0YSgpXG4gICAgICAgIC50aGVuKHByb2QgPT4ge1xuICAgICAgICAgICAgZGF0YS5nZXRDYXRlZ29yaWVzRGF0YSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oY2F0ZWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmdldFR5cGVzRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbih0eXBlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvZC5wcm9kdWN0c1wiLCBwcm9kLnByb2R1Y3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHByb2QucHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbCA9PT0gXCJmb29kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kLnByb2R1Y3RzW2ldLnR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TmFtZSA9IGA8dGQ+PGg0PiR7cHJvZC5wcm9kdWN0c1tpXS5uYW1lfTwvaDQ+PC90ZD5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEZXNjID0gYDx0ZD4ke3Byb2QucHJvZHVjdHNbaV0uZGVzY3JpcHRpb259PC90ZD5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzRGl2LmFwcGVuZChzaG93TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZURpdi5hcHBlbmQoc2hvd0Rlc2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWwgPT09IFwiRGVtb2xpdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZC5wcm9kdWN0c1tpXS50eXBlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05hbWUgPSBgPHRkPjxoND4ke3Byb2QucHJvZHVjdHNbaV0ubmFtZX08L2g0PjwvdGQ+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVzYyA9IGA8dGQ+JHtwcm9kLnByb2R1Y3RzW2ldLmRlc2NyaXB0aW9ufTwvdGQ+YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0Rpdi5hcHBlbmQoc2hvd05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVEaXYuYXBwZW5kKHNob3dEZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cblxuc2hvd0NhdGFsb2coKTtcblxuXG4kKFwic2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgc2hvd0NhdGFsb2coKTtcblxuICAgIH0pXG4gICAgLnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4iXX0=
