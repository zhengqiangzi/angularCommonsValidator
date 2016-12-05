import app from '../module.js';

app.directive('chineseName',function(){
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
			
				//中文、下划线、英文字母
			  var reg =  /^[\u4E00-\u9FA5\w\d]+$/  
    	

    			ngModel.$parsers.push(function(viewValue){

    				if(viewValue==""){
    					ngModel.$setValidity('chineseName',true);

    					return ""
    				}
					var result=reg.test(viewValue)
					if(result){

    					ngModel.$setValidity('chineseName',result);

    					return viewValue
					}else{
    					ngModel.$setValidity('chineseName',false);


    					return undefined;
					}

    				return viewValue
    			})


		}
	};
});