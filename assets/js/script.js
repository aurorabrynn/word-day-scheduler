var description = $('.description');
var nine = $('#nine');
var ten = $('#ten');
var eleven = $('#eleven');
var twelve = $('#twelve');
var thirteen = $('#thirteen');
var fourteen = $('#fourteen');
var fifteen = $('#fifteen');
var sixteen = $('#sixteen');
var seventeen = $('#seventeen');
var save = $('.saveBtn');

function timeColors() {
    if (moment().format("HH") > moment("09", "HH").format("HH")) {
        nine.addClass('past');
    } else if (moment().format("HH") < moment("09", "HH").format("HH")) {
        nine.addClass('future');
    } else {
        nine.addClass('present');
    }

    if (moment().format("HH") > moment("10", "HH").format("HH")) {
        ten.addClass('past');
    } else if (moment().format("HH") < moment("10", "HH").format("HH")) {
        ten.addClass('future');
    } else {
        ten.addClass('present');
    }

    if (moment().format("HH") > moment("11", "HH").format("HH")) {
        eleven.addClass('past');
    } else if (moment().format("HH") < moment("11", "HH").format("HH")) {
        eleven.addClass('future');
    } else {
        eleven.addClass('present');
    }

    if (moment().format("HH") > moment("12", "HH").format("HH")) {
        twelve.addClass('past');
    } else if (moment().format("HH") < moment("12", "HH").format("HH")) {
        twelve.addClass('future');
    } else {
        twelve.addClass('present');
    }

    if (moment().format("HH") > moment("13", "HH").format("HH")) {
        thirteen.addClass('past');
    } else if (moment().format("HH") < moment("13", "HH").format("HH")) {
        thirteen.addClass('future');
    } else {
        thirteen.addClass('present');
    }

    if (moment().format("HH") > moment("14", "HH").format("HH")) {
        fourteen.addClass('past');
    } else if (moment().format("HH") < moment("14", "HH").format("HH")) {
        fourteen.addClass('future');
    } else {
        fourteen.addClass('present');
    }

    if (moment().format("HH") > moment("15", "HH").format("HH")) {
        fifteen.addClass('past');
    } else if (moment().format("HH") < moment("15", "HH").format("HH")) {
        fifteen.addClass('future');
    } else {
        fifteen.addClass('present');
    }

    if (moment().format("HH") > moment("16", "HH").format("HH")) {
        sixteen.addClass('past');
    } else if (moment().format("HH") < moment("16", "HH").format("HH")) {
        sixteen.addClass('future');
    } else {
        sixteen.addClass('present');
    }

    if (moment().format("HH") > moment("17", "HH").format("HH")) {
        seventeen.addClass('past');
    } else if (moment().format("HH") < moment("17", "HH").format("HH")) {
        seventeen.addClass('future');
    } else {
        seventeen.addClass('present');
    }
}

nineBtn.addEventListener("click", function () {
    localStorage.setItem("taskNine", nine.val());
});

tenBtn.addEventListener("click", function () {
    localStorage.setItem("taskTen", ten.val());
});

elevenBtn.addEventListener("click", function () {
    localStorage.setItem("taskEleven", eleven.val());
});

twelveBtn.addEventListener("click", function () {
    localStorage.setItem("taskTwelve", twelve.val());
});

thirteenBtn.addEventListener("click", function () {
    localStorage.setItem("taskOne", thirteen.val());
});

fourteenBtn.addEventListener("click", function () {
    localStorage.setItem("taskTwo", fourteen.val());
});

fifteenBtn.addEventListener("click", function () {
    localStorage.setItem("taskThree", fifteen.val());
});

sixteenBtn.addEventListener("click", function () {
    localStorage.setItem("taskFour", sixteen.val());
});

seventeenBtn.addEventListener("click", function () {
    localStorage.setItem("taskFive", seventeen.val());
})


timeColors();