// Make sure we wait to attach our handlers until the DOM is fully loaded.
console.log("works");
$(function () {
  $(".change-devoured").on("click", function (event) {
    // alert("clicked");
    const id = $(this).data("id");
    let newDevoured = $(this).data("newdevoured");
    console.log("newdevoured status is changed to" + newDevoured);

    let newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function () {
      console.log("changed status to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
