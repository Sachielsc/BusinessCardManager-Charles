'use strict';
angular.module('contactlist').controller('contactlistController', ['$log', '$scope', '$http', 'BusinessCardService', function($log, $scope, $http, BusinessCardService){

	var toggleNumber = 1;
	$scope.listItems = [];
	$scope.chooseindex = 0;

    BusinessCardService.getSpecifyProduct().then(function(response){
        $scope.result = response.data;
        $log.debug($scope.result);
        $log.debug($scope.result[0].name);
        for (toggleNumber = 1; toggleNumber < response.data.length + 1; toggleNumber++) {
			// $log.debug(toggleNumber);
		    $scope.listItems.push($scope.result[toggleNumber - 1].name);
		}
    },function(error){
        $log.error(error);
    });

	$scope.chooseItemByIndex = function (index) {
		$scope.chooseindex = index + 1;
	    BusinessCardService.getSpecifyProduct().then(function(response){
        $scope.displayname = response.data[index].name;
        $scope.displayphone = response.data[index].phone;
        $scope.displayemail = response.data[index].email;
        $scope.displayaddress = response.data[index].address.suite + ", " + response.data[index].address.street + ", " + response.data[index].address.city;
	    },function(error){
	        $log.error(error);
	    });
	}

	$scope.chooseItemByName = function (itemname) {
        var searchIndex = 0;
        BusinessCardService.getSpecifyProduct().then(function(response){
            for (searchIndex = 0; searchIndex < response.data.length; searchIndex++) {
                if ( itemname == response.data[searchIndex].name) {
                    $scope.displayname = response.data[searchIndex].name;
                    $scope.displayphone = response.data[searchIndex].phone;
                    $scope.displayemail = response.data[searchIndex].email;
                    $scope.displayaddress = response.data[searchIndex].address.suite + ", " + response.data[searchIndex].address.street + ", " + response.data[searchIndex].address.city;
					$scope.chooseindex = searchIndex + 1;
                    break;
                }
            }
        },function(error){
            $log.error(error);
        });
	}
}]
)