const TVService = require("./services/TVService");
const View = require("./View");

const Actor = require("./models/Actor");
const Show = require("./models/Show");


const Controller = (function(){
    const obj = {};
    let url = "http://api.tvmaze.com/singlesearch/shows?q=";
    obj.search = "show";
    obj.term = "Andy Griffith";
    obj.results = {};
    obj.service = TVService;

    obj.init = function(argv){
        this.argv = argv;
    };

    obj.getData = function(){
        console.log('url = ', url);
    };

    obj.run = function(){
        let params = this.evaluateParams();
        let handleResults = function(results){
            try{
                View.viewResults(this.formatResults(results));
            } catch (e){
                throw e.message;
            }

        };
        TVService["getData"](params,handleResults.bind(this)); // returns a "promise"
    };

    obj.evaluateParams = function(){
        if (this.argv === null || this.argv === undefined){
            // tell view there is an error
            View.throwError("no arguments");
            return;
        }
        // short form for if...else
        let search = this.argv[2]==="show"?"show":"actor";
        let term = "";
        switch (search){
            case "show":
                term = this.argv[3]?this.argv.slice(3).join(" "):"Andy Griffith Show";
                break;
            case "actor":
                term = this.argv[3]?this.argv.slice(3).join(" "):"Andy Griffith";
                break;
        }
        return {search: search, term: term};

    };

    obj.formatResults = function(results){
        // console.log("***** INITIAL RESULTS *****\n", results);

        if(results[0] && results[0].hasOwnProperty("person")){
            // person object
            console.log("person");
            let formattedResults = new Actor(results);
            //console.log("formattedResults\n", formattedResults);
            return formattedResults;
        }else{
            console.log("show");
            let formattedResults = new Show(results);
            //console.log("formattedResults\n", formattedResults);
            return formattedResults;
        }

    };

    obj.print = function(o){
        console.log('value = ',o.toString());
    };

    return obj;

})();



module.exports = Controller;
