// JavaScript source code

var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var number = 0;

                    $scope.number = number;

                    $scope.incrementNumber = function(){
                        $scope.number++;           
                    }
                       
                    console.log(number);
                    $scope.message = "Change my text!";
                });