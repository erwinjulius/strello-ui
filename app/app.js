'use strict';

var app = angular.module('app',['ngResource', 'ngRoute', 'monospaced.elastic']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/cards', {
			templateUrl: 'cards/Cards.html',
			controller: 'CardsListCtrl'
		});
		$routeProvider.otherwise({redirectTo: '/cards'});
	}]);