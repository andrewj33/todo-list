// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    // adds grayed strikethrough styling
    // to completed items
    $(this).toggleClass("completed");
    
});

// Clear specific item from list by clicking x
$("ul").on("click", "span", function(event){
    // fades out the list item (parent of the span),
    // then removes it from the list
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    // stops the remove list item from triggering
    // completed item styling class
    event.stopPropagation();
});

// add list item from input bar
$("input[type='text'").keypress(function(event){
    if(event.which === 13) {
        // grabbing new todo text from input
        let todoText = $(this).val();
        // clear input
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
})

// toggle the input using the plus button
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});