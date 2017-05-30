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