'use strict';

angular.module('contactlist').config(['$stateProvider', function($stateProvider) {
	console.log('movie routers loading complete...');

	$stateProvider
	.state('contactlist', {
		url:'/contactlist',
		controller:'contactlistController',
		templateUrl:'app/modules/contactlist/views/contactlist.view.html',
	});
	}
]);