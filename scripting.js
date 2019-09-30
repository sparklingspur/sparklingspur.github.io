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

	var l = document.getElementById("saver");
    l.onclick = saveMe;

    function saveMe() {

        var name = $("#editName").val();
        var salary = $("#editSal").val();
        var age = $("#editAge").val();
        var image = $("#editImage").val();

        var re = /^[A-Za-z]+$/;

        if(name=="") {
                        alert("Name cannot be empty. Try again");
                    } else if(/\d/.test(name)) {
                        alert("Invalid Name. Try again");
                    } else if(!re.test(name)) {
                        alert("Invalid Name. Try again");
                    } else if(salary=="") {
                        alert("Invalid salary. Try again");
                    } else if(age=="") {
                        alert("Invalid age. Try again");
                    } else if(age%1!=0) {
                        alert("Invalid age. Try again");
                    } else if(image=="") {
                        alert("Invalid image. Try again");
                    } else {
                        // alert(index);
                        myObj[index].employee_name = name;
                        myObj[index].employee_salary = salary;
                        myObj[index].employee_age = age;
                        myObj[index].profile_image = image;

                        $( "#editForm" ).dialog("close");
                        $("#editForm").css("display","none");

                        alert("Row " + (index + 1) + " saved");

                        $("#showData").html("Loading...");
                        showingTable();
                    }
                }



});