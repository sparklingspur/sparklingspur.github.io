/**
 * Created by krishnan on 27/09/2019.
 */

 $(document).ready(function(){


	  $("#mymenumobOpen").click(function(){
	    $("#mymenu").css("display","block");
	    $("#mymenumobClose").css("display","inline-block");
	    $("#mymenumobOpen").css("display","none");
	  });

	  $("#mymenumobClose").click(function(){
	    $("#mymenu").css("display","none");
	    $("#mymenumobOpen").css("display","inline-block");
	    $("#mymenumobClose").css("display","none");
	  });

	  $( "#faqaccordion" ).accordion({
      	collapsible: true
      });

});