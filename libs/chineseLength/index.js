$app.directive('chineseLength',function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, ngModel) {
			
			var reg=/[^\x00-\x80]/g
			var reg2=/\w/g
  			ngModel.$parsers.push(function(viewValue){

				if(viewValue==""){
					ngModel.$setValidity('chineseLength',true);

					return ""
				}

				var bjA=viewValue.match(reg2);
				var qjA=viewValue.match(reg);
				var banjiao=bjA!=null?bjA.length:0;
				var quanjiao=qjA!=null?qjA.length:0;
				var len=banjiao+quanjiao*2

				if(len<=parseInt(iAttrs.chineseLength,10)){

					ngModel.$setValidity('chineseLength',true);

					return viewValue
				}else{

					ngModel.$setValidity('chineseLength',false);

					return undefined;
				}

				

			})


		}
	};
});