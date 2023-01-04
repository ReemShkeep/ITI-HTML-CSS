let body = document.querySelector("html,body");
let logo = document.querySelector(".logo");
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    // if scroll down 10px => shrink the navigation bar and logo-name
    if (body.scrollTop >= 10) {
        nav.style.padding = "0.5% 0";
        logo.style.fontSize = "1vw";
    }
    // else padding the navigation bar
    else {
        nav.style.padding = "1% 2%";
        logo.style.fontSize = "1.5vw";
    }
});


// validation of the namel

$(document).ready(function () {
    $("#name").on("blur", () => {
        $("#name").on("blur", () => {
            //    console.log(nameValue)
            if ($("#name").val() == "") {
                $("#name").css("border", "2px solid red");
                $("#name")
                    .parent()
                    .find(".error-msg")
                    .html("Your Name is required and MUST BE FULL");
                $("#name").parent().find(".err").css("display", "block");
            } else {
                $("#name").css("border", "2px solid white");
                $("#name").parent().find(".err-msg").html("display", "block");
                $("#name").parent().find(".err").css("display", "none");
            }
        });
    });

// validation of the email


    $("#email").on("blur", () => {
        //    console.log(nameValue)
        if ($("#email").val() == "") {
            $("#email").css("border", "2px solid red");
            $("#email").parent().find(".error-msg").html("the email is required");
            $("#email").parent().find(".err").css("display", "block");
        } else {
            $("#email").css("border", "2px solid white");
            $("#email").parent().find(".err-msg").html("display", "block");
            $("email").parent().find(".err").css("display", "none");
        }
    });
    

// validation of the password

    $("#password").on("blur", () => {
        //    console.log(nameValue)
    if ($("#password").val() == "") {
        $("#password").css("border", "2px solid red");
        $("#password").parent().find(".error-msg").html("Password is required");
        $("#password").parent().find(".err").css("display", "block");
    } else {
        $("#password").css("border", "2px solid white");
        $("#password").parent().find(".err-msg").html("display", "block");
        $("#password").parent().find(".err").css("display", "none");
    }
});



// validation of the msg


$("#msg").on("blur", () => {
    $("#msg").on("blur", () => {
        //    console.log(nameValue)
        if ($("#msg").val() == "") {
            $("#msg").css("border", "2px solid red");
            $("#msg").parent().find(".error-msg").html("Please leave a Message");
            $("#msg").parent().find(".err").css("display", "block");
        } else {
            $("#msg").css("border", "2px solid white");
            $("#msg").parent().find(".err-msg").html("display", "block");
            $("#msg").parent().find(".err").css("display", "none");
        }
    });
});

});