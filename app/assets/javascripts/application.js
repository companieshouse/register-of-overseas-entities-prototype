/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})
// Start by hiding the conditional area. So put a div around the whole enter trust information with an ID of conditional or whatever you want to call it. We will call this variable a from now on.
var a = $("#conditional");
//Then hide the variable a by default
a.hide();
//Listen for a change to the checkbox, in this case the name of the checkbox is bo-noc-trust. So whenever you tick one of those boxes the following code will fire each time.
$("input[name='bo-noc-trust']").change(function() {
    //Create a new variable called A_is_checked with a value which checks to see if any of the checboxes is checked
    var A_is_checked = $("input[name='bo-noc-trust']").is(':checked');
    //If the user has checked (variable A_is_checked) then
    if (A_is_checked) {
      //Show A (or the conditional)
      a.show();
    } else {
      //Else we will assume that it hasn't been ticked so don't show the conditional
      a.hide();
    }
});

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Code snippet for the nationality page
  $('#second-nationality-link').click(function() {
    $('#second-nationality').show();
    $('#second-nationality-link').hide();
    return false;
  });
  $('#third-nationality-link').click(function() {
    $('#third-nationality').show();
    $('#third-nationality-link').hide();
    return false;
  });
})
