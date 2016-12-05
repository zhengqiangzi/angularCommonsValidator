import valid  from './libs/index.js';

import app from './libs/module.js';

app.controller('testCtrl',function ($scope) {
	

	//console.log($scope)
		$scope.vali=false;

	$scope.valids=function(){
		$scope.vali=true;

		console.log(123)

	}
})