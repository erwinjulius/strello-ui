'use strict';
app.factory('Cards', function($resource){
	return $resource('/cards/:id');
});