const axios = require("axios");
let URL = "http://api.tvmaze.com/";

const TVService = (function(){
    let obj ={};
    obj.getData = async function(params,callBack){
        const search = params.search;
        const term = params.term;

        switch (search) {
            case "show":
                URL+="singlesearch/shows?q=";
                break;
            case "actor":
                URL+="search/people?q=";
                break;
        }

        URL+=encodeURI(term);
        let results = await axios["get"](URL).then(this.processResults).then(this.returnPromisedData);
        callBack(results);
    };

    obj.processResults = function (results){
        return results.data;
    };

    obj.returnPromisedData = function(data){
        return data;
    };


    return obj;
})();

module.exports = TVService;
