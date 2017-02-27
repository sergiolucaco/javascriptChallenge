$(document).ready(function(){
	$('.firstCalculation').on('click', function(){

		var $firstOperator = +$('.firstOperator').val();
		var $secondOperator = +$('.secondOperator').val();
		var $result = $('.firstResult');
		var errorMessage = 'Fill all the gaps with a number that you desire !'; 

		function getPercentage (firstOp, secondOp){	
			firstOp = $firstOperator;
			secondOp = $secondOperator;

			return firstOp / 100 * secondOp;
		}

		if($result.hasClass('done')){
			$result.removeClass('done');
		}else if($result.hasClass('error')){
			$result.removeClass('error')
		}

		if($firstOperator !== 0 && $secondOperator !== 0){
			$result.val(getPercentage).addClass('done');
		}else{
			$result.val(errorMessage).addClass('error');		
		}
	});

});