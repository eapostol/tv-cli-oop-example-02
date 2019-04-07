let Actor = require("./models/Actor");
let Show = require("./models/Show");


const View = (function () {
    let obj = {};
    obj.argv = {};
    obj.init = function (argv) {
        this.argv = argv;
    };

    obj.throwError = function (msg) {
        console.log("AN ERROR OCCURRED . MESSAGE IS  ", msg);
    };
    obj.viewResults = function (results) {
        console.log("RESULTS ARE RETURNED, and are shown below.\n ", obj.formatResultsForDisplay(results));
    };
    obj.formatResultsForDisplay = function (results) {

        let formattedResults = "";

        if (results.type === "Actor") {
            formattedResults += "The name of the actor is " + results.name + "\n";
            formattedResults += results.name + " was born " + results.birth + "\n";
            formattedResults += "A picture of this actor can be found here - " + results.image["medium"] + "\n";
        } else {
            formattedResults += "The name of the show found is '" + results.name + "'\n";
            formattedResults += "The show summary is \n" + results.summary + "\n\n";
            formattedResults += "More information can be found at " + results.url + "\n";
            formattedResults += "Last Updated - " + results.updated + "\n";
        }
        return formattedResults;
    };

    return obj;

})();


module.exports = View;
