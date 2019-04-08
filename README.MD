#TV CLI OOP Example (version 2.1)

Edward J. Apostol - April 2019

** Changes

07 April 2019 - Published updates
06 April 2019 - Corrected Some syntax Issues made while demonstrating the code
05 April 2019 - Finalized current version


** Details

The model, view and controller subscribe to a form of _factory_ style pattern of development.

*** The Controller

In Controller.js a variable called Controller is an IIFE that returns an instance of a controller object.

see https://cl.ly/a8ccc9671f07


*** The View

In View.js a variable called View is an IIFE that returns an instance of a "view" object. Notice that it is strictly involved with receiving input from the user and sending output to the user.


*** The Models

In the models folder there are several models. They serve to "organize" data in a particular grouping (for example an "Actor" model is the organization of data that is concerned with an Actor. Physically it is similar in structure to the returned JSON object that comes from requesting actor information from the TVMaze service, but
