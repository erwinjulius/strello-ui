app.directive('focusMe', function ($timeout) {    
	'use strict';
	return {
		link: function (scope, element, attrs, model) {                
			if (scope.$eval(attrs.focusMe)){
				$timeout(function () {
					element[0].focus();
				});
			}
		}
	};
});