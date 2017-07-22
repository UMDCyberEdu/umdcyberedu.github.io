/***General functions***/
$(document).ready(function () {
    //The below will scroll the user to the exercises full-height hero
    $('html,body').animate(
        {
            scrollTop: $("#exercises").offset().top
        },
        'slow'
    );
    
    //Displays welcome message
    $('#welcome_container').show().delay(2000).fadeOut(function () {
        $('#welcome_container').hide(function () {
            $("#left_column").fadeIn();
            $("#phishing_learn").fadeIn();
        });
    });
    
    //notification
    $("#notification_delete1").click(function () {
        $("#notification_right").slideUp();
    });
    $("#notification_delete2").click(function () {
        $("#notification_wrong").slideUp();
    });
    
});

/***changing section***/
function changeSection(num, action) {
    var body, current, next, prev, delay;
    delay = 200;
    
    //scrolling top
    body = $("html, body");
    body.stop().animate({scrollTop: 75}, 500, 'swing', function () {
        //chaning content
        if (num === '1' && action === 'next') {
            $("#phishing_learn").fadeOut();
            $("#center_column").delay(delay).fadeIn();
            $("#right_column").delay(delay).fadeIn();
        }
        if (num === '2') {
            $("#center_column").fadeOut();
            $("#right_column").fadeOut();
            if (action === 'prev') {
                $("#phishing_learn").delay(delay).fadeIn();
            } else if (action === 'next') {
                $("#passwords_learn").delay(delay).fadeIn();
            }

        }
        if (num === '3') {
            $("#passwords_learn").fadeOut();
            if (action === 'prev') {
                $("#center_column").delay(delay).fadeIn();
                $("#right_column").delay(delay).fadeIn();
            } else if (action === 'next') {
                $("#passwords_exercise").delay(delay).fadeIn();
            }
        }

        if (num === '4') {
            $("#passwords_exercise").fadeOut();
            if (action === 'prev') {
                $("#passwords_learn").delay(delay).fadeIn();
            } else if (action === 'next') {
                $("#privacy_learn").delay(delay).fadeIn();
            }
        }

        if (num === '5') {
            $("#privacy_learn").fadeOut();
            if (action === 'prev') {
                $("#passwords_exercise").delay(delay).fadeIn();
            } else if (action === 'next') {
                $("#privacy_exercise").delay(delay).fadeIn();
            }
        }

        if (num === '6') {
            $("#privacy_exercise").fadeOut();
            if (action === 'prev') {
                $("#privacy_learn").delay(delay).fadeIn();
            }
        }

        //changing active menu
        if (num >= 1 && num <= 6) {
            current = parseInt(num);
            next = current + 1;
            prev = current - 1;
            $("#menu" + current).removeClass("is_active");
            if (action === 'next') {
                $("#menu" + next).addClass("is_active");
            } else {
                $("#menu" + prev).addClass("is_active");
            }
        }
    });
}

/*** phishing exercise ***/
//Checking if question is right//
function answer(answerIn) {
    var currentQuestion, rightAnswer;
    currentQuestion = parseInt($("#test_head_container span").text());
    rightAnswer = [
        "nothing",
        "phishing",
        "phishing",
        "phishing"
    ];
    if (answerIn === rightAnswer[currentQuestion]) {
        $("#notification_right").slideDown();
        $("#notification_wrong").hide();
        $("#correct" + currentQuestion).show();
        $("#incorrect" + currentQuestion).hide();

    } else {
        $("#notification_wrong").slideDown();
        $("#notification_right").hide();
        $("#incorrect" + currentQuestion).show();
        $("#correct" + currentQuestion).hide();
    }
    $("#learning_container" + currentQuestion).fadeIn();
}

/*Changing Question step 1: make sure action is valid*/
function validate(action) {
    //getting current question number
    var currentQuestion, validAction, nextQuestion, nextMenu, prevMenu;
    currentQuestion = parseInt($("#test_head_container span").text());
    validAction = (action === "prev" && currentQuestion > 1) || (action === "next" && currentQuestion < 3);
    prevMenu = (action === "prev" && currentQuestion === 1);
    nextMenu = (action === "next" && currentQuestion === 3);

    //if it's a valid action moving to the next or previous question, then several functions are called to changed the page content
    if (validAction) {
        //if next was clicked, nextQuestion increases. If prev was clicked, it decreases.
        nextQuestion = currentQuestion + 1;
        if (action === "prev") {
            nextQuestion = currentQuestion - 1;
        }
        //changing progress bar
        changeProgress(currentQuestion, nextQuestion, action);
        //slide to next or previous question
        slide(currentQuestion, nextQuestion, action);
    }
    
    //moving to next section
    if (nextMenu) {
        changeSection('2', 'next');
    }
    
    //moving to previous section
    if (prevMenu) {
        changeSection('2', 'prev');
    }
}

/*Changing Question step 2: changing the content in the page*/
//changing progress bar and title
function changeProgress(current, next, action) {
    //changing title
    $("#test_head_container span").text(next);
    var progress, width, id;
    progress = document.getElementById("progress");
    width = current * 34;
    if (action === "next") {
        //calling increase to change progress bar
        id = setInterval(increase, 20);
    } else {
        //calling decrease to change progress bar
        id = setInterval(decrease, 20);
    }
    //increasing progress bar
    function increase() {
        if (width >= next * 34) {
            clearInterval(id);
        } else {
            width += 1;
            progress.value = width;
        }
    }
    //decreasing progress bar
    function decrease() {
        if (width <= next * 34) {
            clearInterval(id);
        } else {
            width -= 1;
            progress.value = width;
        }
    }
}

//sliding to next or prev question, and changing content of card
function slide(current, next, action) {
    //assuming we are going forward
    var to, from, temp;
    from = "-100%";
    to = "100%";
    //if we are going backwards, switch the to, from variable values
    if (action === "prev") {
        temp = from;
        from = to;
        to = temp;
    }
    //Sliding right to next question or left to previous
    $('#test_card').stop().animate({
        "left": from
    }, 200, function () {
        //calling function to change the the content of the card
        changeCard();
    });
    //changing content of the card
    function changeCard() {
        $(".questions").hide();
        $("#question" + next).show();
        $(".learning_containers").fadeOut();
        $(".incorrect").hide();
        $(".correct").hide();
        $(".notification").fadeOut();
        $("#test_card").css({left: to}).animate({left: "0%"});
    }
}

jQuery(function ($) {
    "use strict";

    $("#password-1").hsimp({
        calculationsPerSecond: 10e9, // 10 billion
        good: 31557600e9, // 1 billion years
        ok: 31557600e2  // 100 years
    });
});

