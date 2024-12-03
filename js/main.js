jQuery(document).ready(function($) {
    // Focus on first input element in dropdown when expanded (e.g., search box)
    $(".dropdown").on("shown.bs.dropdown", function (event) {
        $(event.target).find(':input:enabled:visible:first').focus();
    });
});
