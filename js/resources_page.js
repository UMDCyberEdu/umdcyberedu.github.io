/*
    The purpose of this file is to provide functionality of the resource page.
    It allows the user to choose a category and the resource page will display the
    relevant resources relevant to the chosen category.
*/


//gets all potential categories
var category_links= document.getElementsByClassName("category-link");
//gets all resource cards
var resource_cards= document.getElementsByClassName("resource-card");

//set onclick for the "All" (also the first) category
$(category_links[0]).click(function(){

    //toggle is-active for category link
    for(var i = 0; i < category_links.length; i++){
        $(category_links[i]).removeClass(' is-active');
    }
    $(this).addClass(' is-active');

    //loop thru all resource cards, make each visible
    for(var j = 0; j < resource_cards.length; j++){
            $(resource_cards[j]).show();
    }
});

//loop through all possible categories (except for "All")
for(var i = 1; i < category_links.length ; i++){

    //set onclick for each category link
    $(category_links[i]).click(function(){

        //toggle is-active for category link
        for(var x = 0; x < category_links.length; x++){
            $(category_links[x]).removeClass(' is-active');
        }
        $(this).addClass(' is-active');

        //loop thru all resource cards
        for(var j = 0; j < resource_cards.length; j++){
            var resource_card_categories= resource_cards[j].querySelectorAll('.tag');

            //loop thru category tags of a resource card
            for(var k=0; k < resource_card_categories.length; k++){

                var categoryTagOfResourceCard= $(resource_card_categories[k]).html()
                var currentCategory= $(this).html();

                //check if the current category is found in a category tag on a resource card
                if(categoryTagOfResourceCard.indexOf(currentCategory) >= 0){
                    $(resource_cards[j]).show(); //found match
                    break;
                }else{
                    $(resource_cards[j]).hide(); //not a match
                }

            }
        }
    });
}
