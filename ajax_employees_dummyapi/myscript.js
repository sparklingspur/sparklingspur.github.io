/**
 * Created by Krishnan on 16-08-2019.
 */

var searchMe,myObj,myTable;

$(function() {

    $("#closeAdd").click(function() {
        $( "#addForm" ).dialog( "close" );
        $("#addForm").css("display","none");
    });

    $("#closeEdit").click(function() {
        $( "#editForm" ).dialog( "close" );
        $("#editForm").css("display","none");
    });

    $( "#addForm" ).dialog({
        autoOpen: false
    });

    $( "#editForm" ).dialog({
        autoOpen: false
    });

    $("form input").css('float','right'); //input text-fields inside dialog box

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.response);

            $("#showSearch,#addNewRow").css("display","inline-block");

            var table, search, mySearch, x;

            showingTable(); // Function that renders table from the local object

            function showingTable() {

                alert("Loading " + myObj.length + " rows...");

                table = document.createElement("table");
                search = document.createElement("input");
                mySearch = document.getElementById("showSearch");

                $("#showData").html("Loading...");

                var tr, th, tabCell, id;

                // Row 1 - Table Header
                tr = table.insertRow(-1);
                th = tr.insertCell(-1); th.innerHTML = "#";
                th = tr.insertCell(-1); th.innerHTML = "ID";
                th = tr.insertCell(-1); th.innerHTML = "EMPLOYEE NAME";
                th = tr.insertCell(-1); th.innerHTML = "EMPLOYEE SALARY";
                th = tr.insertCell(-1); th.innerHTML = "EMPLOYEE AGE";
                th = tr.insertCell(-1); th.innerHTML = "PROFILE IMAGE";
                th = tr.insertCell(-1); th.innerHTML = "EDIT ROW";
                th = tr.insertCell(-1); th.innerHTML = "DELETE ROW";

                x=0;
                while (x < myObj.length) {

                    tr = table.insertRow(-1);

                    tabCell = tr.insertCell(-1);
                    id = document.createTextNode(x+1); //Numbering Rows - (First Column)
                    tabCell.appendChild(id);

                    tabCell = tr.insertCell(-1);
                    id = document.createTextNode(myObj[x].id); //Column with Employee Id
                    tabCell.appendChild(id);

                    tabCell = tr.insertCell(-1);
                    var employee_name = document.createTextNode(myObj[x].employee_name); // Column with Employee Name
                    tabCell.appendChild(employee_name);

                    tabCell = tr.insertCell(-1);
                    employee_salary = document.createTextNode(myObj[x].employee_salary); // Column with Employee Salary
                    tabCell.appendChild(employee_salary);

                    tabCell = tr.insertCell(-1);
                    employee_age = document.createTextNode(myObj[x].employee_age); // Column with Employee Age
                    tabCell.appendChild(employee_age);

                    tabCell = tr.insertCell(-1);
                    profile_image = document.createTextNode(myObj[x].profile_image); // Column with Employee Profile Image
                    tabCell.appendChild(profile_image);


                    tabCell = tr.insertCell(-1);
                    var btn1 = document.createElement('input'); // Edit Row Button
                    btn1.type = "button";
                    btn1.className = "btn btn-primary";
                    btn1.value = "Edit";
                    btn1.onclick = editMe;
                    tabCell.appendChild(btn1);


                    tabCell = tr.insertCell(-1);
                    var btn2 = document.createElement('input'); // Delete Row Button
                    btn2.type = "button";
                    btn2.value = "Delete";
                    btn2.className = "btn btn-danger";
                    btn2.onclick = deleteMe;
                    tabCell.appendChild(btn2);

                    x++;
                }

                myTable = document.getElementById("showData");
                myTable.innerHTML = "";
                myTable.appendChild(table);

            }

            $("#addNewRow").click(function() {

                $("#addId").val("");
                $("#addName").val("");
                $("#addSal").val("");
                $("#addAge").val("");
                $("#addImage").val("");

                $("#addForm").dialog("open");

                var l = document.getElementById("adder");
                l.onclick = addMe;

                // $("#adder").on("click",addMe);
                // $("#adder").bind("click",addMe);
                // $("#adder").click(addMe);
                // $("#adder").mousedown(addMe);

                function addMe() {

                    var id = $("#addId").val();
                    var name = $("#addName").val();
                    var salary = $("#addSal").val();
                    var age = $("#addAge").val();
                    var image = $("#addImage").val();

                    var re = /^[A-Za-z]+$/;

                    if(id=="") {
                        alert("Invalid Id. Try again");
                    } else if(id%1!=0) {
                        alert("Invalid Id. Try again");
                    } else if(name=="") {
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

                        myObj.push({"id":id,"employee_name":name,"employee_salary":salary,"employee_age":age,"profile_image":image});

                        alert("Row added");

                        $("#addForm").dialog("close");
                        $("#addForm").css("display","none");

                        $("#showData").html("Loading...");
                        showingTable();
                        return false;
                    }
                }
            });

            function editMe() {
                var index = 0;
                index = this.parentNode.parentNode.rowIndex-1;
                $("#editId").attr('placeholder',myObj[index].id);
                $("#editId").attr('readonly',"true");
                $("#editName").val(myObj[index].employee_name);
                $("#editSal").val(myObj[index].employee_salary);
                $("#editAge").val(myObj[index].employee_age);
                $("#editImage").val(myObj[index].profile_image);

                $("#editForm").dialog("open");

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
            }

            function deleteMe() {

                var a = this.parentNode.parentNode.rowIndex-1;
                myObj.splice(a,1);
                alert('Row '+ (a+1) +' Deleted');

                $("#showData").html("Loading...");
                showingTable();

            }

            searchMe = function() {
                var input, filtervalue, table, tr, txtValue, x=0;

                table = document.getElementById("showData");
                tr = table.getElementsByTagName("tr");

                input = document.getElementById("showSearch");
                filtervalue = input.value.toUpperCase();

                for(x=0; x < myObj.length; x++) {
                    txtValue = myObj[x].employee_name.toUpperCase() + " " + myObj[x].employee_salary.toUpperCase();
                    //alert(txtValue);
                    if(txtValue.includes(filtervalue)==true){
                        //alert(tr[x+1].innerHTML);
                        tr[x+1].style.display="";
                    } else  {
                        tr[x+1].style.display="none";
                    }
                }
            }
        }
    };
    xmlhttp.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    xmlhttp.send();
    document.getElementById("showData").style.display = "block";
});
