'use strict';

var mainModule = angular.module('alienworld',['movies', 'games', 'community', 'about']);
	
mainModule.config(['$stateProvider', function($stateProvider) {
		$stateProvider
		// .state('manage',{
		// 	url:'/manage',
		// 	controller:function($state){
		// 	 	//Render child view
		// 		if($state.current.name==='manage'){
		// 			$state.go("manage.home");
		// 		}
		// 	},
		// 	templateUrl:'app/modules/manage/views/manage-side-nav.view.html',
		// 	data: {
		// 		authRequired: true
  //           }
		// })
		.state('page.home',{
			url:'/home',
			// controller:'homeController',
			templateUrl:'app/modules/home/views/alienworld-home.view.html',
		})
		.state('page.movies',{
			url:'/movies',
			// controller:'moviesController',
			templateUrl:'app/modules/movies/views/alienworld-movies.view.html',
		})
		.state('page.games',{
			url:'/games',
			// controller:'gamesController',
			templateUrl:'app/modules/games/views/alienworld-games.view.html',
		})
		.state('page.community',{
			url:'/community',
			// controller:'communityController',
			templateUrl:'app/modules/community/views/alienworld-community.view.html',
		})
		.state('page.about',{
			url:'/about',
			// controller:'aboutController',
			templateUrl:'app/modules/about/views/alienworld-about.view.html',
		})
	}
]);

mainModule.run([
	]);

mainModule.controller('MainController', ['$scope','$log', function($scope,$loge){
		$log.debug('mainController');
		console.log('Here our journey begins~');

		function init(){
			// put some initialization code here
		}

		init();
	}
]);