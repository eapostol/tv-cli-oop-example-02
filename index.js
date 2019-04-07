// this represents the App.
// include the "model", "view", and "controller"
const controller = require("./Controller.js");
const View = require("./View");

// Algorithm
/*
 * 1. Controller asks View to read input from command line
 * 2. Controller checks if first input is show, actor, or blank
 * 3. Controller asks If first input is blank, set default search to actor
 * 4. Controller asks if second input is blank, set default type to "Andy Griffith"
 *
 * 5. Controller asks Service (a subset of controller) to get the data based on inputs
 * 6. Controller tells View to display no results if no data is returned from service
 * 7. Controller tells View to display error if an error occurs
 * 8. Controller formats results to be shown in the view if data is returned
 * 9. Controller asks View to displayed formatted results.
 * 10. end program
   * */

View.init(process.argv);
controller.init(View.argv);
controller.run();

//controller.run(argv);
//console.log(controller.service);
//controller.getData("http://www.microsoft.com");

