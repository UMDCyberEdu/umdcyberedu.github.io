//General functions
$(document).ready(function () {
    //making the questions
    makeQuestions();
    
    //Displays welcome message
    $('#welcome_container').show().delay(2000).fadeOut(function () {
        $('#welcome_container').hide(function () {
            $("#mycolumns").fadeIn();
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

/*Creating the questions */
function makeQuestions() {
    var template = $("#question1").html();
    for (i = 2; i < 7; i++) {
        $("#question"+i).html(template);
    }
}
/*Checking if question is right*/
function answer(answer) {
    var currentQuestion = parseInt($("#test_head_container span").text());
    rightAnswer = [
        "nothing",
        "phishing",
        "phishing",
        "phishing",
        "phishing",
        "phishing",
        "phishing",
    ]
    if (answer === rightAnswer[currentQuestion]) {
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
    var currentQuestion = parseInt($("#test_head_container span").text());
    var validAction = (action === "prev" && currentQuestion > 1) || (action === "next" && currentQuestion < 6);
     
    //if it's a valid action moving to the next or previous question, then several functions are called to changed the page content
    if (validAction) {
        //if next was clicked, nextQuestion increases. If prev was clicked, it decreases. 
        var nextQuestion = currentQuestion + 1;
        if (action === "prev") {
            nextQuestion = currentQuestion - 1;
        }
        //call functions to change content
        activateMenu(currentQuestion, nextQuestion, action);
        //changing progress bar
        changeProgress(currentQuestion, nextQuestion, action);
        //slide to next or previous question
        slide(currentQuestion, nextQuestion, action);
    }
}

/*Changing Question step 2: changing the content in the page*/
//activating manue and changing title
function activateMenu(current, next, action) {
    //changing title
    $("#test_head_container span").text(next);
    //changing active menu
    $("#menu" + current).removeClass("is_active");
    $("#menu" + next).addClass("is_active");
}

//changing progress bar
function changeProgress(current, next, action) {
    var progress = document.getElementById("progress");
    var width = current * 17;
    var id;
    if (action === "next") {
        //calling increase to change progress bar
        id = setInterval(increase, 20);
    } else {
        //calling decrease to change progress bar
        id = setInterval(decrease, 20);
    }
    //increasing progress bar
    function increase() {
        if (width >= next * 17) {
            clearInterval(id);
        } else {
            width += 1;
            progress.value = width;
        }
    }
    //decreasing progress bar
    function decrease() {
        if (width <= next * 17) {
            clearInterval(id);
        } else {
            width -= 1;
            progress.value = width;
        }
    }
}

//sliding to next or prev question, and changing content of card
function slide(current, next,action) {
    //assuming we are going forward
    var from = "-100%"
    var to = "100%"
    //if we are going backwards, switch the to, from variable values
    if (action === "prev") {
        temp = from;
        from = to;
        to = temp;
    }    
    //Sliding right to next question or left to previous
    $('#test_card').stop().animate({
            "left": from
        }, 200, function() {
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