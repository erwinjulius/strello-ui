'use strict';
app.factory('Cards', function($resource){
	return $resource('/api/cards/:id', {id:'@id'});
});