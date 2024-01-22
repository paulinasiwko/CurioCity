const imagesApiKey = `1f4988b7218778a8ade4218c335534cd`;

function getImage(city) {
    const tagName = city + ' city';
    const queryURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imagesApiKey}&tags=${tagName}&format=json&nojsoncallback=1`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const imageServer = data.photos.photo[3].server;
            const imageId = data.photos.photo[3].id;
            const imageSecret = data.photos.photo[3].secret;

            const imageURL = `https://live.staticflickr.com/${imageServer}/${imageId}_${imageSecret}_w.jpg`
            
            const displayImage = $("<img>").attr("src", imageURL)
            $("#image-city").append(displayImage);

        })
}


$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    getImage(city);
});