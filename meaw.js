function DisplayMe()
        {

            var firstname = "";

            firstname = document.getElementById("frame").value;
            document.getElementById("fName1").innerHTML = "Welcome " + firstname;
            alert("Welcome  " + firstname);


        }

        function addmo()
        {
            num1 = document.getElementById("num1").value;
            num2 = document.getElementById("num2").value;
            sum = parseInt(num1) + parseInt(num2);

            document.write("The sum is " + sum);
        }