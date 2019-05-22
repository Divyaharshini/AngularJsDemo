let myapp = angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello world";
}

myapp.controller("MyController",mycontroller); //to bind app

let JSONController = function($scope){
    let Student={
        FirstName : "Harshini",
        LastName : "Bheemireddy",
        email : "divyaharshinireddy@gmail.com"

    }
    $scope.Student = Student;
}
myapp.controller("Student",JSONController);