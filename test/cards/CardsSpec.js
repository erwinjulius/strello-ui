'use strict';

/* jasmine specs for controllers go here */

describe('Cards', function(){
	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

	beforeEach(module('app'));

	var ctrl, scope, httpBackend;

	var testData = [{id:1, title:'bla'}];

	beforeEach(inject(function($controller, $rootScope, $httpBackend){
		scope = $rootScope.$new();
		httpBackend = $httpBackend;
		httpBackend.expectGET('/api/cards').respond(testData);
		ctrl = $controller('CardsListCtrl', {$scope: scope});
	}));


	it('fetch cards on init', inject(function() {
		expect(scope.cards).toEqual([]);

		httpBackend.flush();
		
		expect(scope.cards).toEqualData(testData);
	}));
});
