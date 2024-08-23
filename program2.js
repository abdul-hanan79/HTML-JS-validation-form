// this function is used for validation of input it returns true if all inputs are valid otherwise return false
function validateForm() {

    var returnval = new Boolean(true);
    // this function if used when user enter valid input then this function remove the error
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fusername"].value;
    if (name.length < 5) {
        seterror("userNameDiv", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("userNameDiv", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = new String(document.forms['myForm']["femail"].value);
    // if (email.length > 15) {
    //     seterror("emailDiv", "*Email length is too long");
    //     returnval = false;
    // }
    var a = 0;
    var b = 0
    for (var i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            // this b++ is to see that contol enter in if state or not 
            b++
            if (email[0] != '@' && email[email.length - 1] != '@') {
                returnval = true

                // this a++ is to see that contol enter in if state or not 

                a++;
            }
            else {
                seterror("emailDiv", "*Email don't have symbol at start and end");
                returnval = false

            }
        }

    }
    // this if statement work when not write '@' symbol 
    if (a == 0 && b == 0) {
        seterror("emailDiv", "*Invalid Email");
        returnval = false
    }


    var password = document.forms['myForm']["fpassword"].value;
    if (password.length < 6) {


        seterror("passwordDiv", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fconfirmPassword"].value;
    if (cpassword != password) {
        seterror("cPasswordDiv", "*Password and Confirm password should match!");
        returnval = false;
    }
    var checkBox = document.forms['myForm']["fagreed"];

    if (checkBox.checked == false) {
        seterror('conditions', '*check this!')
        returnval = false
    }

    return returnval;
}

function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML = error;

}
function clearErrors() {

    errors = document.getElementsByClassName('formError');
    for (let item of errors) {
        item.innerHTML = "";
    }


}

// this function is used to show message in span element -- this function get id and error from validateForm()




