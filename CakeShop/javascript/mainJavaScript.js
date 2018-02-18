//Create New User 
var createUser = function () {

    $("#registerForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: "required"
        },
        messages: {
            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>valid</em> email address'
            }
        }
    })

    $(function () {
        $("#inputPhone").keydown(function (er) {

            var key = er.keyCode;
            if (!((key == 8) || (key == 46) || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105))) {
                er.preventDefault();
            }
            if (er.ctrlKey || er.altKey || er.shiftKey) {
                er.preventDefault();
            }
        });
    });

    var _email = document.getElementById("inputEmail").value;
    var _username = document.getElementById("inputUsername").value;
    var _password = document.getElementById("inputPassword").value;
    var _name = document.getElementById("inputName").value;
    var _address = document.getElementById("inputAddress").value;
    var _phone = document.getElementById("inputPhone").value;

    if (_email == "" || _username == "" || _password == "" || _name == "" || _address == "" || _phone == "") {
        alert("Please fill all the fields");
    }
    else {
        if (validateName(_name) && validateEmail(_email)) {
            //Save it to local storage
            localStorage.setItem("clientEmail", _email);
            localStorage.setItem("clientUsername", _username);
            localStorage.setItem("clientPassword", _password);
            localStorage.setItem("clientName", _name);
            localStorage.setItem("clientAddress", _address);
            localStorage.setItem("clientPhone", _phone);

            //Go to place an order website
            window.location.href = "../html/FromOurOven.html";
        }
    }
}

//function placing order
var placeOrder = function () {

    var product1 = "Filled Brownie";
    var product2 = "Choco Almonds";
    var product3 = "Salty Scones";
    var product4 = "Rose Bread";
    var product5 = "Scones with raisins and maracuya";
    var product6 = "Banana bread";

    var _q1 = document.getElementById("quantityBrownie").value;
    var _q2 = document.getElementById("quantityChoco").value;
    var _q3 = document.getElementById("quantityEscones").value;
    var _q4 = document.getElementById("quantityCupCakes").value;
    var _q5 = document.getElementById("quantityMaracuya").value;
    var _q6 = document.getElementById("quantityBananaBread").value;

    localStorage.setItem("product1", product1);
    localStorage.setItem("product2", product2);
    localStorage.setItem("product3", product3);
    localStorage.setItem("product4", product4);
    localStorage.setItem("product5", product5);
    localStorage.setItem("product6", product6);

    var totalQ1 = 0;
    var totalQ2 = 0;
    var totalQ3 = 0;
    var totalQ4 = 0;
    var totalQ5 = 0;
    var totalQ6 = 0;
    var total = 0; 

    if (_q1 > 0) {
        totalQ1 = ((_q1 * 14) * 1.0099);
        var totalq1 = totalQ1.toFixed(2);
        localStorage.setItem("quantity1", _q1);
        localStorage.setItem("total1", totalq1);
    }
    else {
        localStorage.setItem("quantity1", 0);
        localStorage.setItem("total1", 0);
    }
    if (_q2 > 0) {
        totalQ2 = ((_q2 * 12) * 1.0099);      
        var totalq2 = totalQ2.toFixed(2);
        localStorage.setItem("quantity2", _q2);
        localStorage.setItem("total2", totalq2);
    }
    else {
        localStorage.setItem("quantity2", 0);
        localStorage.setItem("total2", 0);
    }
    if (_q3 > 0) {
        totalQ3 = ((_q3 * 12) * 1.0099);
        var totalq3 = totalQ3.toFixed(2);
        localStorage.setItem("quantity3", _q3);
        localStorage.setItem("total3", totalq3);
    }
    else {
        localStorage.setItem("quantity3", 0);
        localStorage.setItem("total3", 0);
    }
    if (_q4 > 0) {
        totalQ4 = ((_q4 * 12) * 1.0099); 
        var totalq4 = totalQ4.toFixed(2);
        localStorage.setItem("quantity4", _q4);
        localStorage.setItem("total4", totalq4);
    }
    else {
        localStorage.setItem("quantity4", 0);
        localStorage.setItem("total4", 0);
    }
    if (_q5 > 0) {
        totalQ5 = ((_q5 * 15) * 1.0099); 
        var totalq5 = totalQ5.toFixed(2);
        localStorage.setItem("quantity5", _q5);
        localStorage.setItem("total5", totalq5);
    }
    else {
        localStorage.setItem("quantity5", 0);
        localStorage.setItem("total5", 0);
    }
    if (_q6 > 0) {
        totalQ6 = ((_q6 * 15) * 1.0099);    
        var totalq6 = totalQ6.toFixed(2);
        localStorage.setItem("quantity6", _q6);
        localStorage.setItem("total6", totalq6);
    }
    else {
        localStorage.setItem("quantity6", 0);
        localStorage.setItem("total6", 0);
    }

    total = (totalQ1 + totalQ2 + totalQ3 + totalQ4 + totalQ5 + totalQ6);
    localStorage.setItem("Total", total);

    //if ((localStorage.getItem("clientUsername") == "") || (localStorage.getItem("clientPassword") == "")) {
    //    alert("You must create a user before ordering");
    //    window.location.href = "../html/signUp.html";
    //}
    //else {
    //    window.location.href = "../html/confirmationPage.html";
    //}
    window.location.href = "../html/confirmationPage.html";
}

//function login
var login = function () {
    var givenUsername = document.getElementById("usernameSignIn").value;
    var givenpassword = document.getElementById("passwordSignIn").value;

    if (givenUsername == localStorage.getItem("clientUsername") && localStorage.getItem("clientPassword")) {
        window.location.href = "../html/FromOurOven.html";
    }
    else {
        alert("Wrong username or password");
    }
}

var display = function () {
    document.getElementById("confirmation").innerHTML = 
    "<table border='1' id='tableConfirm'>" + 
    "<tr>" +
        "<td><strong>Product</strong></td>" + 
        "<td><strong>Amount</strong></td>" +
        "<td><strong>Total</strong></td>" +
    "</tr>" + 
    "<tr>" +
        "<td>" + localStorage.getItem('product1') + "</td>" +
        "<td>" + localStorage.getItem('quantity1') + "</td>" +
        "<td>" + localStorage.getItem('total1') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td>" + localStorage.getItem('product2') + "</td>" +
        "<td>" + localStorage.getItem('quantity2') + "</td>" +
        "<td>" + localStorage.getItem('total2') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td>" + localStorage.getItem('product3') + "</td>" +
        "<td>" + localStorage.getItem('quantity3') + "</td>" +
        "<td>" + localStorage.getItem('total3') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td>" + localStorage.getItem('product4') + "</td>" +
        "<td>" + localStorage.getItem('quantity4') + "</td>" +
        "<td>" + localStorage.getItem('total4') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td>" + localStorage.getItem('product5') + "</td>" +
        "<td>" + localStorage.getItem('quantity5') + "</td>" +
        "<td>" + localStorage.getItem('total5') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td>" + localStorage.getItem('product6') + "</td>" +
        "<td>" + localStorage.getItem('quantity6') + "</td>" +
        "<td>" + localStorage.getItem('total6') + "</td>" +
    "</tr>" +
    "<tr>" +
        "<td colspan='2'>Total</td>" +
        "<td>" + localStorage.getItem('Total') + "</td>"
    "</tr>" +
            "</table >"
}

var validateName = function (name) {
    if (/^[a-zA-Z]+[-]?[a-zA-Z]+[ [a-zA-Z]+[-]?[a-zA-Z]+]*$/.test(name)) { return true; }
    else { alert("Please enter a valid name using alphabetic letters"); return false; }
}

var validateEmail = function (email) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(email)) { return true; }
    else { alert("Please enter a valid email address"); return false; }
}

var sendMessage = function () {
    var _email = document.getElementById("emailMessage").value;
    var _message = document.getElementById("textarea").value;

    if (validateEmail(_email) && _message != "") {
        alert("Message submited, please wait and we will answer you shortly");
    }
    else {
        alert("Please enter a valid email address and a message");
    }
}