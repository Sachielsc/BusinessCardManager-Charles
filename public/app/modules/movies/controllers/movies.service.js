angular.module('contactlist').service('ProductService', ['$log','$http', function($log,$http){

	this.getSpecifyProduct = function(pid){
		var specifyProductDetail = $http({
			method:'GET',
			url: 'http://jsonplaceholder.typicode.com/users',
		});
		return specifyProductDetail;
	}

	}
]);
