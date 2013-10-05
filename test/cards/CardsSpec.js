'use strict';

/* jasmine specs for controllers go here */

describe('Cards', function(){
	
	beforeEach(module('app'));

	var ctrl, scope, httpBackend;

	var testData = [{id:1, title:'bla'}];

	beforeEach(inject(function($controller, $rootScope, $httpBackend){
		scope = $rootScope.$new();
		httpBackend = $httpBackend;
		httpBackend.expectGET('/api/cards').respond(testData);
		ctrl = $controller('CardsListCtrl', {$scope: scope});
	}));


	it('fetch cards on init', function() {
		expect(scope.cards).toEqual([]);

		httpBackend.flush();
		
		expect(scope.cards).toEqualData(testData);
	});

	it('create', function(){
		httpBackend.expectPOST('/api/cards', {id:-1, title:'1'}).respond(200, {id:1, title:'1'});

		scope.create('1');

		httpBackend.flush();

		expect(scope.cards).toEqualData([{id:1, title:'bla'},{id:1,title:'1'}]);
	});

	it('delete', function(){
		httpBackend.expectDELETE('/api/cards/1').respond(200);

		scope.cards = testData;

		scope.remove(scope.cards[0]);

		httpBackend.flush();
		expect(scope.cards).toEqual([]);
	});

	it('saves', function(){
		

	});
});
