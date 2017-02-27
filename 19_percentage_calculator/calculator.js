$(document).ready(function(){

	var errorMessage = 'Fill all the gaps with the number that you desire !'; 

		$('.firstCalculation').on('click', function(e){
			e.preventDefault();
			var $firstOperator = +$('.firstOperator-fstRes').val();
			var $secondOperator = +$('.secondOperator-fstRes').val();
			var $result = $('.firstResult');			

			function getPercentage (firstOp, secondOp){	
				firstOp = $firstOperator;
				secondOp = $secondOperator;

				return (firstOp / 100 * secondOp).toFixed(2);
			}

			if($result.hasClass('done')){
				$result.removeClass('done');
			}else if($result.hasClass('error')){
				$result.removeClass('error')
			}

			($firstOperator !== 0 && $secondOperator !== 0) ? $result.val(getPercentage).addClass('done') : $result.val(errorMessage).addClass('error');		
		});

});

