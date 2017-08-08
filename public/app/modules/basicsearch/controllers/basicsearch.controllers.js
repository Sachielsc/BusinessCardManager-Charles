'use strict';
angular.module('basicsearch').controller('basicsearchController', ['$log', '$scope', '$http', 'BusinessCardService', function($log, $scope, $http, BusinessCardService){

    $scope.hideResult = true;

    $scope.searchPerson = function () {
        $scope.hideResult = true;
        var searchIndex = 0;
        BusinessCardService.getSpecifyProduct().then(function(response){
            for (searchIndex = 0; searchIndex < response.data.length; searchIndex++) {
                if ( $scope.searchName.toLowerCase() == response.data[searchIndex].name.toLowerCase()) {
                    $scope.displayname = response.data[searchIndex].name;
                    $scope.displayphone = response.data[searchIndex].phone;
                    $scope.displayemail = response.data[searchIndex].email;
                    $scope.displayaddress = response.data[searchIndex].address.suite + ", " + response.data[searchIndex].address.street + ", " + response.data[searchIndex].address.city;
                    $scope.hideResult = false;
                    break;
                }
            }
        },function(error){
            $log.error(error);
        });
    }
}]
)