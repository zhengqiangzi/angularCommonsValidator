import app from '../module.js';
import $ from 'jquery';

app.directive('formattersT', function ($filter) {
	return {
		restrict: 'A',
		require:"?ngModel",
		 priority: 999,

		link: function (scope, iElement, iAttrs,ngModel) {
			
			var config=null
			try{
				
					config=JSON.parse(iAttrs.formattersT);
				
				}catch(e){

					config={
						size:2,//小数据点保留长度
						max:100000000//最大值(不进行保留二位小数)
					}

				}


			ngModel.$formatters.push((value)=>{

				return $filter('currency')(value,"",config.size);
			})

			function isNumber(v){
				if(v==''){
					return true;
				}
				var reg1=/^[0-9]*[1-9][0-9]*$/　//正整数 
				var reg2=/^\d+\.{1}\d{0,}$/       //正浮点数
				var reg3=/^0+\d{0,}/
				return reg1.test(v) || reg2.test(v) || reg3.test(v)
			}

			var can=false;

			$(iElement).on('input',function(){
				var v=$(this).val();

					v=v.replace(/[^\d|^\.]/gi,"")
					$(this).val(v)
					ngModel.$setViewValue(v)	


					if(isNumber(v)){

						can=true
					}else{

						can=false;
					}
			})


			$(iElement).blur(function(){

				if(can){
					var v=$(this).val();
					if(v!=""){

						if(v>config.max){

							$(this).val(v);
							ngModel.$setViewValue(v);

						}else{

							$(this).val(Number($(this).val()).toFixed(config.size));
							ngModel.$setViewValue(Number($(this).val()).toFixed(config.size));
						}

					}else{

						$(this).val("");
						ngModel.$setViewValue("");

					}
				}

			})

		/*	setTimeout(function(){

				$(iElement).trigger('input')	
				$(iElement).trigger('blur')	
			})*/


		}
	};
})