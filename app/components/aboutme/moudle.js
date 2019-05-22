

let JSONController = function($scope){
    let Student={
        FirstName : "Harshini",
        LastName : "Bheemireddy",
        email : "divyaharshinireddy@gmail.com",
        message:"hello"

    }
    $scope.Student = Student;
}
angular.module("myApp").controller("Student",JSONController);