app.controller('CardsListCtrl', function($scope, Cards){
	'use strict';
	$scope.cards = Cards.query();

	$scope.add = function(){
		var newCard = new Cards({id:-1, title:''});
		newCard.$save();
		$scope.cards.push(newCard);
	};

	$scope.remove = function(card){
		Cards.remove({}, card);
		$scope.cards = _.without($scope.cards, card);
	};

	$scope.press = function(event){
		// escape or enter
		if (event.keyCode == 27 | event.keyCode == 13){
			_.defer(function(){
				$(event.target).blur();
			});
		}
	};
});