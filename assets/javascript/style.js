//prepare page for load
$( document ).ready(function(){

	var Random=Math.floor(Math.random()*101+19)
	
	$('#randomNumber').text(Random);
	
//random number generation for each crystal between 1/12
	var crystal1= Math.floor(Math.random()*11+1)
	var crystal2= Math.floor(Math.random()*11+1)
	var crystal3= Math.floor(Math.random()*11+1)
	var crystal4= Math.floor(Math.random()*11+1)
	
//html ids to be pushed to
	var userTotal= 0; 
	var wins= 0;
	var losses= 0;
	
	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

//adds the wins and losses
  function winner(){
  	alert("You win!");
		wins++; 
		$('#numberWins').text(wins);
		reset();
  }
	
  function loser(){
	  alert ("You lose!");
		losses++;
		$('#numberLosses').text(losses);
		reset()
	}

//sets crystal click function
	$('#one').on ('click', function(){
	  userTotal = userTotal + crystal1;
	  console.log("New userTotal= " + userTotal);
		$('#totalValue').text(userTotal); 
		if (userTotal == Random){
			winner();
		}
		else if (userTotal > Random){
			loser();
		}   
	})  

	$('#two').on ('click', function(){
	  userTotal = userTotal + crystal2;
	  console.log("New userTotal= " + userTotal);
		$('#totalValue').text(userTotal); 
		if (userTotal == Random){
			winner();
	  }
		else if (userTotal > Random){
			loser();
	  } 
	})  

	$('#three').on ('click', function(){
	  userTotal = userTotal + crystal3;
	  console.log("New userTotal= " + userTotal);
		$('#totalValue').text(userTotal);	
		if (userTotal == Random){
			winner();
		}
		else if (userTotal > Random){
			loser();
		} 
	})

	$('#four').on ('click', function(){
	  userTotal = userTotal + crystal4;
	  console.log("New value= " + userTotal);
	  $('#totalValue').text(userTotal); 
		if (userTotal == Random){
			winner();
		}
		else if (userTotal > Random){
			loser();
	  }
	})

	function reset(){
		Random=Math.floor(Math.random()*101+19);
		$('#randomNumber').text(Random);
		crystal1= Math.floor(Math.random()*11+1);
		crystal2= Math.floor(Math.random()*11+1);
		crystal3= Math.floor(Math.random()*11+1);
		crystal4= Math.floor(Math.random()*11+1);
		userTotal= 0;
		$('#totalValue').text(userTotal);
	} 

}); 
	
