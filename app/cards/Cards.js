app.controller('CardsListCtrl', function($scope, Cards){
	$scope.cards = Cards.query();

	$scope.add = function(title){
		Cards.save({
			id:-1,
			title:title
		}, function ok(data){
			$scope.cards.push(data);
		});
	}
});