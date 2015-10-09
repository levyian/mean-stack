'use strict';

angular.module('workspaceApp')
  .controller('NewpageCtrl', function ($scope, $http) {
    $scope.message = 'Enjoy the new car smell :)';
    $scope.newCar = {};
    
    $scope.awesomeCars = [];

    $http.get('/api/whatsits').success(function(awesomeCars) {
      $scope.awesomeCars = awesomeCars;
    });

    $scope.addCar = function() {
      if($scope.newCar.name === '' ||
         $scope.newCar.classType === "" ||
         $scope.newCar.wheels === '') {
        return;
      }
      //convert wheels to number
      $scope.newCar.wheels = parseInt($scope.newCar.wheels);
      //push to array
      $scope.awesomeCars.push($scope.newCar);
      $http.post('/api/whatsits', $scope.newCar).success(function(thatThingWeJustAdded) {
          $scope.awesomeCars.pop(); // let's lose that id-lacking newCar 
          $scope.awesomeCars.push(thatThingWeJustAdded); // and add the id-having newCar!
      });
    };

    $scope.deleteCar = function(car) {
      $http.delete('/api/whatsits/' + car._id);
    };
  });
