function TodoController($scope){  
    /* passes scope into the todo controller */
    
    $scope.todos =[{text:'Short Hill Intervals x 6', done:false}, {text:'Long Hill Repeats x 5', done:false}, {text:'Black Hills KOM effort', done:false}, {text:'Project Defy SS', done:false}];  
    /* adds todos to scope, creates list of todos. done: false creats items not completed. */
    
    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoAdd, done:false});
    };
    /* push new taks to list and is bound to the add button */
    
    $scope.getNumberTodos = function () {
        return $scope.todos.length;
    };
    /* calculates the number of incomplete tasks */
    
    $scope.deleteFinishedTasks = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
    /* loops through the todos list and returns the tasks that are not done.*/
    
}