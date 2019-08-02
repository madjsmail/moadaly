/* global variables */

// files root url
var base_url = "http://localhost/taha/data/";

// form data, send data
var formData = new FormData();

// app configurations
var config;

// app lang
var lang;

// lang dictionary
var lang_keys;
/** */

/**
 * 
 * @param {*} data json obj that contains the request meta data
 * @returns json obj contains the response of the sent request
 */
function get_data(data) {
    var a = $.ajax(data["url"], {

        async: false,

        method: "POST",

        data: data["formData"],

        processData: false,

        contentType: false,

        xhrFields: {
            // 'Access-Control-Allow-Credentials: true'.
            withCredentials: false
        },
        headers: {
            "Access-Control-Allow-Origin": true
        },
        success: function(response) {
            data["success"]();
        },
        error: function(response) {
            data["fail"]();
        }
    });

    return JSON.parse(a.responseText);
}

/**
 * generate the two tables in the main page, then print them there.
 * 
 * @param {*} data contains the informations about the two tables, as well as the the units, modules, ext...
 */
function load_page(data) {

}

/**
 * generates an html table from a json obj that contains the required data
 * @param {*} data 
 * @param {int} num the number of the table (1 or 2)
 * @returns html string (table)
 */
function generate_table(data, num) {

}
/**
 * generate a row for the modules unites
 * @param {*} data 
 * @returns html string (a table row)
 */
function generate_unity_row(data) {

}
/**
 * generate a row for the modules informations
 * @param {*} data 
 * @returns html string (a table row)
 */
function generate_module_row(data) {

}
/**
 * load the global configurations
 */
function load_config() {
    config = get_data({
        "url": base_url + "init.json",
        "formData": formData,
        "success": function() {
            console.trace("success!");
        },
        "fail": function() {
            onsole.error("fail!");
        }
    });
}

/**
 * load the languages configurations
 */
function init_lang() {
    lang = config["languages"][config["default-lang-index"]];

    lang_keys = get_data({
        "url": base_url + lang["file"],
        "formData": formData,
        "success": function() {
            console.trace("success!");
        },
        "fail": function() {
            onsole.error("fail!");
        }
    });
}

/**
 * returns the equivalent of a giving in a language dictionary
 * @param {*} key 
 * @returns value
 */
function lang(key) {
    return
}
/*$(document).redy(function() {
    load_config();
    //document.title = "Hello World!";  
});*/