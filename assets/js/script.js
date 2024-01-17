$(document).ready(function() {
    $('#searchButton').click(function() {
        var city = $('input[type="text"]').val();
        window.location.href = `landing.html?city=${encodeURIComponent(city)}`;
    });

    // Add functionality for 'I feel lucky!' button
});