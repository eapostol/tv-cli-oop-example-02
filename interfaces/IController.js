// This is an example of an interface file.
// An interface file "sets the rules" and enforces an object to subs

const IController = function(){
    const obj = {};
    let url = "";
    obj.search = "";
    obj.term = "";
    obj.results = {};
    obj.service = null;

    obj.init = new Function();

    obj.getData = new Function();

    obj.run = function(){
        let params = this.evaluateParams();
        let handleResults = function(results){
            try{
                View.viewResults(this.formatResults(results));
            } catch (e){
                throw e.message;
            }

        };
        TVService.getData(params,handleResults.bind(this)); // returns a "promise"
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
        console.log("***** INITIAL RESULTS *****\n", results);

        var formattedResults;

        if(results[0].hasOwnProperty("person")){
            // person object
            console.log("person");
            formattedResults = new Actor(results);
            // return formattedResults;
        }else{
            console.log("show");
            formattedResults = new Show(results);
            // formattedResults = new Show(results);
        }

        console.log("formattedResults\n", formattedResults);

    };

    obj.print = function(o){
        console.log('value = ',o.toString());
    };

    return obj;

}
