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

	$("#submitting").click(function(){

		var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var dob = $("#dob").val();
        var mob = $("#mob").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var accept = $("#accept").val();


        var re = /^[A-Za-z]+$/;


		if(fname=="") {
                        alert("First Name cannot be empty. Try again");
                    } else if(lname=="") {
                        alert("Last Name cannot be empty. Try again");
                    } else if(email=="") {
                        alert("Email cannot be empty. Try again");
                    } else if(dob=="") {
                        alert("Date of Birth cannot be empty. Try again");
                    } else if(mob=="") {
                        alert("Mobile Number cannot be empty. Try again");
                    } else if(city=="") {
                        alert("City cannot be empty. Try again");
                    } else if(state=="") {
                        alert("State cannot be empty. Try again");
                    } else if(/\d/.test(fname)) {
                        alert("Invalid First Name. Try again");
                    } else if(/\d/.test(lname)) {
                        alert("Invalid Last Name. Try again");
                    } else if(/\d/.test(city)) {
                        alert("Invalid City. Try again");
                    } else if(/\d/.test(state)) {
                        alert("Invalid State. Try again");
                    } else if(!re.test(fname)) {
                        alert("Invalid First Name. Try again");
                    } else if(!re.test(lname)) {
                        alert("Invalid Last Name. Try again");
                    } else if(!re.test(city)) {
                        alert("Invalid City. Try again");
                    } else if(!re.test(state)) {
                        alert("Invalid State. Try again");
                    } else if(mob%1!=0) {
                        alert("Invalid Mobile Number. Try again");
                    } else if($("#accept").prop("checked") == false) {
						alert("Accept terms & conditions to continue.");
					} else {
						
                        alert("Details saved: " + fname + " " + lname + " " + email + " " + dob + " " + mob + " " + city + " " + state );

                    }

	});


});