app.controller('CardsListCtrl', function($scope, Cards){
	'use strict';
	$scope.cards = Cards.query();

	$scope.create = function(title){
		var newCard = new Cards({id:-1, title:title});
		newCard.$save();
		$scope.cards.push(newCard);
	};

	$scope.remove = function(card){
		Cards.remove({}, card);
		$scope.cards = _.without($scope.cards, card);
	};
});