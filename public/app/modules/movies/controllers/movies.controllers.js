'use strict';
angular.module('movies').controller('movieController', ['$log', '$scope', '$http', 'ProductService', function($log, $scope, $http, ProductService){

	var toggleNumber = 1;
	$scope.listItems = [];
	$scope.chooseindex = 0;

    ProductService.getSpecifyProduct().then(function(response){

    	var displayindex = $scope.chooseindex;
        $scope.result = response.data;
        $log.debug($scope.result);
        $log.debug($scope.result[0].name);
        for (toggleNumber = 1; toggleNumber < 11; toggleNumber++) {
			$log.debug(toggleNumber);
		    $scope.listItems.push($scope.result[toggleNumber - 1].name);
		}
    },function(error){
        $log.error(error);
    });

	$scope.chooseItem = function (index) {
		$scope.chooseindex = index + 1;
	    ProductService.getSpecifyProduct().then(function(response){
        $scope.displayname = response.data[index].name;
        $scope.displayphone = response.data[index].phone;
        $scope.displayemail = response.data[index].email;
        $scope.displayaddress = response.data[index].address.suite + ", " + response.data[index].address.street + ", " + response.data[index].address.city;
	    },function(error){
	        $log.error(error);
	    });
	}
}]
)