'use strict';
app.factory('Cards', function($resource){
	return $resource('/api/cards/:id', {},{
		save:{method:'POST'},
		remove:{method:'DELETE', params:{id:'@id'}},
		update:{method:'PUT', params:{id:'@id'}}
	});
});