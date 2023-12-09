let form = document.getElementById("registration-form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let mob = document.getElementById("mob");
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password");
let registerbtn = document.getElementById("register");
let icon1 = document.getElementById("hide");
let icon2 = document.getElementById("hide1");
let success_msg = document.getElementById("success");
let spcl_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let alphanum = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
let userDetails = [];
console.log("usedetails==>", userDetails);

registerbtn.addEventListener("click", function (event) {
   event.preventDefault();

    validateFirstname(firstName);
    validateLastname(lastName);
    validateEmail(email);
    validateMob(mob);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    succ();

});
function validateFirstname() {

    //firstname
    
    if (firstName.value === '') {
        onError(firstName, "** firstname cant be empty **");
        return false;
    }else if(firstName.value.match(alphanum)){
        onError(firstName, "** Firstname is invalid  **");
        return false;
    }
     else if (!isNaN(firstName.value)) {
        onError(firstName, "** firstname cant a number **");
        return false;
    } else if ((firstName.value).length <= 2) {
        onError(firstName, "** firstname is too short **");
        return false;
    } else if (firstName.value.match(spcl_characters)) {
        onError(firstName, "** special charcaters are not allowed **");
        return false;
    }
    else {
        onSuccess(firstName);
        return true;
    }
}
function validateLastname() {
    //last name
    if (lastName.value === '') {
        onError(lastName, "** lastname cant be empty **");
        return false;
    } else if(lastName.value.match(alphanum)){
        onError(lastName, "** Firstname is invalid  **");
        return false;
    }else if (!isNaN(lastName.value)) {
        onError(lastName, "** lastname cant a number **");
        return false;
    } else if ((lastName.value).length <= 2) {
        onError(lastName, "** lastname is too short **");
        return false;
    } else if (firstName.value === lastName.value) {
        onError(lastName, "** Firstname and second name cant be same **");
        return false;
    }
    else if (lastName.value.match(spcl_characters)) {
        onError(lastName, "** special charcaters are not allowed **");
        return false;
    }
    else {
        onSuccess(lastName);
    return true;
    }
}
function validateMob() {
    //phone
    let us_phonepattern = /^(?:\+1\s?)?(\d{3}[-.\s]?)?(\d{3}[-.\s]?\d{4})$/;
    if (mob.value === '') {
        onError(mob, "** Mobile number cannot be empty **");
        return false;
    } else if ((mob.value).length > 10 || (mob.value).length <= 2 || mob.value.match(spcl_characters)) {
        onError(mob, "** Enter a valid phone number **");
        return false;
    } else if (mob.value.match(us_phonepattern)) {
        onSuccess(mob);
        return true;
    }
    else {
        onSuccess(mob);
        return true;

    }
}
function validateEmail() {
    //email
    let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailValue = email.value;
    if (emailValue === '') {
        onError(email, "** Email id cannot be empty **");
        return false;
    } else if (emailPattern.test(emailValue)) {
        onSuccess(email);
        return true;
    } else {
        onError(email, "** Enter a valid email id **");
        return false;
    }

}
function validatePassword() {
    //password
    if (password.value === '') {
        onError(password, "** Password cannot be empty **");
        return false;
    } else if ((password.value).length < 8) {
        onError(password, "** Be at least 8 characters long **");
        return false;
    } else if (!(/[A-Z]/.test(password.value))) {
        onError(password, "** contain atleast one uppercase letter **");
        return false;
    } else if ((!(/[a-z]/.test(password.value)))) {
        onError(password, "** contain atleast one lowercase letter **");
        return false;
    } else if (!(/[0-9]/.test(password.value))) {
        onError(password, "** contain atleast one number **");
        return false;
    } else {
        onSuccess(password);
        return true;
    }

}
function validateConfirmPassword() {
    //confirm 
    if (confirmPassword.value === '') {
        onError(confirmPassword, "** Password cannot be empty **");
        return false;
    } else if ((password.value !== confirmPassword.value)) {
        onError(confirmPassword, "Password doesn't match");
        return false;
    } else if ((confirmPassword.value).length < 8) {
        onError(password, "** Be at least 8 characters long **");
        return false;
    } else if (!(/[A-Z]/.test(confirmPassword.value))) {
        onError(confirmPassword, "** contain atleast one uppercase letter **");
        return false;
    } else if ((!(/[a-z]/.test(confirmPassword.value)))) {
        onError(confirmPassword, "** contain atleast one lowercase letter **");
        return false;
    } else if (!(/[0-9]/.test(password.value))) {
        onError(confirmPassword, "** contain atleast one number **");
        return false;
    } else {
        onSuccess(confirmPassword);
        return true;
    }


}
//eye buttion visible
icon1.onclick = function () {
    if ((password.value) !== '') {
        if (password.type === "password") {
            password.type = "text";
            icon1.src = "icons/view.png"
        } else {
            password.type = "password";
            icon1.src = "icons/hide.png"
        }
    }
}
// eye button strike
icon2.onclick = function () {
    if ((confirmPassword.value) !== '') {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            icon2.src = "icons/view.png"
        } else {
            confirmPassword.type = "password";
            icon2.src = "icons/hide.png"
        }
    }
}
function onSuccess(input) {
    let parent = input.parentElement;
    let msg = parent.querySelector("span");
    msg.style.visibility = "hidden";
    parent.classList.add("succ");
    parent.classList.remove("err");
}
function onError(input, errmsg) {
    let parent = input.parentElement;
    let msg = parent.querySelector("span");
    msg.style.visibility = "visible";
    msg.innerText = errmsg;
    msg.style.color = "red";
    parent.classList.add("err");
    parent.classList.remove("succ");
}
//when the user correct the errors the errmsg goes away
firstName.addEventListener("input", function () {
    validateFirstname(firstName);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});

lastName.addEventListener("input", function () {
    validateLastname(lastName);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});

email.addEventListener("input", function () {
    validateEmail(email);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});

mob.addEventListener("input", function () {
    validateMob(mob);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});

password.addEventListener("input", function () {
    validatePassword(password);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});

confirmPassword.addEventListener("input", function () {
    validateConfirmPassword(confirmPassword);
    let smsg = document.querySelector("#success");
    smsg.style.visibility = "hidden";
    smsg.innerText = " ";
});
//success message for registering successfully
function succ() {
    let smsg = document.querySelector("#success");

    if (validateFirstname(firstName) && validateLastname(lastName) && validateMob(mob) &&
        validateEmail(email) && validatePassword(password)
        && validateConfirmPassword(confirmPassword)) {

        smsg.style.visibility = "visible";
        smsg.innerText = "Registration Successful !!!"
        smsg.style.color ="navy";
        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            mob: mob.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
         userDetails.push(userData);
         console.log("usedetails==>[]", userDetails);
    }
    else {
            smsg.style.visibility = "hidden";
            smsg.innerText = " "

        }
    }







