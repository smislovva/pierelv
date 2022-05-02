/* hidden menu */


var mq = window.matchMedia("(min-width: 1366px)");
$(window).resize(function() {
    if (mq.matches) {
        $(".nav-middle").css("opacity", "1");
        $(".select-lang").css("display", "flex");
        $(".nav-middle-list").css("display", "flex");
    } else {
        $(".nav-middle").css("opacity", "0");
        $(".nav-middle-list").css("display", "none");
        $(".select-lang").css("display", "none");
        $("#hide-content").css("display", "none");
        $("#add-morecontent").css("display", "flex");
    }
});



if ($(window).width() >= 1366) {
    $(".nav-middle").css("opacity", "1");
    $(".select-lang").css("display", "flex");
    $(".nav-middle-list").css("display", "flex");
}


if ($(window).width() < 1366) {
    $(".nav-middle").css("opacity", "0");
    $(".nav-middle-list").css("display", "none");
    $(".select-lang").css("display", "none");
    $("#hide-content").css("display", "none");
    $("#add-morecontent").css("display", "flex");
}





function add_morecontent() {
    $(".nav-middle").css("opacity", "1");
    $("#add-morecontent").css("display", "none");
    $("#hide-content").css("display", "flex");
    $(".nav-middle-list").css("display", "flex");
    $(".select-lang").css("display", "flex");
}

function hide_content() {
    $("#add-morecontent").css("display", "flex");
    $("#hide-content").css("display", "none");
    $(".nav-middle").css("opacity", "0");
    $(".nav-middle-list").css("display", "none");
    $(".select-lang").css("display", "none");
}






/* scroll button */
mybutton = document.getElementById("myBtn");


var scrollBtn = document.querySelector('#myBtn');
var footer = document.querySelector('.footer');
var footerHeight = footer.getBoundingClientRect().height;
window.onscroll = function() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scrollBtn.style.display = 'block' : scrollBtn.style.display = 'none';
    stopBeforeFooter();
};

function stopBeforeFooter() {
    function getTopDistance(el) {
        var btn = el.getBoundingClientRect();
        return btn.top;
    }

    if (getTopDistance(scrollBtn) + document.body.scrollTop + scrollBtn.offsetHeight >= getTopDistance(footer) + document.body.scrollTop - 10) {
        scrollBtn.style.position = 'absolute';
        scrollBtn.style.bottom = footerHeight + "px";
    }

    if (document.body.scrollTop + window.innerHeight < getTopDistance(footer) + document.body.scrollTop + 30) {
        scrollBtn.style.position = 'fixed';
        scrollBtn.style.bottom = "30px";
    }
}

/* form validation */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




function dateTransform(date) {
    date = date.split(".");
    return date;
}

function consistsOfLetters(word) {
    let result = 1;
    word = word.split("");
    for (let i = 0; i < word.length; i += 1) {
        if (!((word[i] >= 'a' && word[i] <= 'z') || (word[i] >= 'A' && word[i] <= 'Z'))) result = 0;
    }
    return result;
}

function consistsOfNumbers(number) {
    let result = 1;
    number = number.split("");
    for (let i = 0; i < number.length; i += 1) {
        if (!(number[i] >= '0' && number[i] <= '9')) result = 0;
    }
    return result;
}

function isEmpty(field) {
    if (field == "")
        return 1;
    else
        return 0;
}


/* Determines if the form is filled out correctly (Validation of mandatory fields –a warningshould be shown if some of the fields are not filled.)*/
/*In  case  of  validation  errors,  a  message  explaining  the  problemand  naming  the  field/fields with incorrect valueshas to be presented to the user. */
function filter() {
    let ok = 0;
    let enteredName = $("#name").val();
    let enteredEmail = $("#email").val();
    let enteredPhoneNumber = $("#pnumber").val();
    let enteredText = $("#contact-message").val()
    let variableIsEmpty = [isEmpty(enteredName), isEmpty(enteredEmail), isEmpty(enteredPhoneNumber), isEmpty(enteredText)];
    ok = variableIsEmpty.indexOf(1);
    let requiredFields = ["Name", "Email", "Your phone number", "Comment"];
    if (ok == -1) {
        if (consistsOfLetters(enteredName) && consistsOfNumbers(enteredPhoneNumber)) {
            return true;
        } else {
            var errorMessage = "The following errors were made in the form: \n\n";
            if (!consistsOfLetters(enteredName)) {
                errorMessage += "The \"Name\" field must contain only letters!\n";
            }
            if (!consistsOfNumbers(enteredPhoneNumber)) {
                errorMessage += "The \"Your phone number\" field should only contain numbers!\n";
            }
            alert(errorMessage);
            return false;
        }
    } else {
        var fields = "";
        for (let i in requiredFields) {
            if (variableIsEmpty[i]) {
                fields += requiredFields[i];
                fields += "\n";
            }
        }
        alert("Please fill in the following fields:\n\n" + fields);
        return false;
    }
}