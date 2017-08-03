'use strict';
angular.module('adminreport').controller('adminreportController', ['$log', '$scope', '$http', 'BusinessCardService', function($log, $scope, $http, BusinessCardService){

        BusinessCardService.getSpecifyProduct().then(function(response){
            for (var i = 65; i <= 90; i++) {
                var nameLetter = String.fromCharCode( i );
                var nameNumber = 0;
                for (var n = 0; n < response.data.length; n++) {
                    if (nameLetter == response.data[n].name.charAt(0)) {
                        nameNumber ++;
                    }
                }
                var addlist = document.createElement("li");
                var node = document.createTextNode("The number of contacts whose name start with " + nameLetter + " : " + nameNumber);
                addlist.appendChild(node);
                var element = document.getElementById("admin-name-list");
                if ( nameNumber != 0 ) {
                    element.appendChild(addlist);
                }
            }
        },function(error){
            $log.error(error);
        });
}]
)