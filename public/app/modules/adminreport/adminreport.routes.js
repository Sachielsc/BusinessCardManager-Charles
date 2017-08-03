'use strict';

angular.module('adminreport').config(['$stateProvider', function($stateProvider) {
	console.log('adminreport routers loading complete...');

	$stateProvider
	.state('adminreport', {
		url:'/adminreport',
		controller:'adminreportController',
		templateUrl:'app/modules/adminreport/views/adminreport.view.html',
	});
	}
]);