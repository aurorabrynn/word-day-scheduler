var description = $('.description');
var hour = $('.hour');
var hourArray = ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"];
var save = $('.saveBtn');

function timeColors() {
    hourArray.forEach(function (hourArray, i) {
        if (moment().isAfter(hourArray[i], "hour")) {
            description.addClass('past');
        } else if (moment().isBefore(hourArray[i], "hour")) {
            description.addClass('future');
        } else {
            description.addClass('present');
        }
    })
}

function saving() {
    localStorage.setItem("description", description.value);
}

timeColors();
save.addEventListener("click", saving());