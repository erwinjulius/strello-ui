app.controller('CardsListCtrl', function($scope, Cards){
	'use strict';
	$scope.cards = Cards.query();

	$scope.create = function(title){
		Cards.save({
			id:-1,
			title:title
		}, function ok(data){
			$scope.cards.push(data);
		});
	};

	$scope.remove = function(card){
		Cards.remove({}, card);
		$scope.cards = _.without($scope.cards, card);
	};
});