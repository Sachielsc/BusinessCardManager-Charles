'use strict';

angular.module('basicsearch').config(['$stateProvider', function($stateProvider) {
    console.log('basicsearch routers loading complete...');

    $stateProvider
    .state('basicsearch', {
        url:'/basicsearch',
        controller:'basicsearchController',
        templateUrl:'app/modules/basicsearch/views/basicsearch.view.html',
    });
    }
]);