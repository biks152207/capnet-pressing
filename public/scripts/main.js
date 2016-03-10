"use strict";

angular.module("capNetPressingApp", []);

"use strict";

angular.module("capNetPressingApp")
.controller("mainCtrl", function($scope, dataService){

  dataService.getTodos(function(response){
    var todos = response.data;
    $scope.todos =  todos;
    });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };

})

"use strict";

angular.module("capNetPressingApp")
.controller("todoCtrl", function($scope, dataService) {
  $scope.deleteTodo = function(todo, index) {
    $scope.todos.splice(index, 1);
    dataService.deleteTodo(todo);
  };

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if(todo.edited) {
        return todo
      };
    })
    dataService.saveTodos(filteredTodos);
  };
});

"use strict";

angular.module("capNetPressingApp")
.service("dataService", function($http) {
  this.getTodos = function(cb) {
    $http.get("/mock/todos.json").then(cb);
  };

  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };

  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
  };

});

"use strict";

angular.module("capNetPressingApp")
.directive("todo", function(){
  return {
    templateUrl: "templates/todo.html",
    replace: true,
    controller: "todoCtrl"
  }
});
