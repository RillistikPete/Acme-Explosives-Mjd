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
