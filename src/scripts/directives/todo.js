"use strict";

angular.module("capNetPressingApp")
.directive("todo", function(){
  return {
    templateUrl: "templates/todo.html",
    replace: true,
    controller: "todoCtrl"
  }
});
