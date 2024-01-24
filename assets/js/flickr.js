const imagesApiKey = `1f4988b7218778a8ade4218c335534cd`;

function getImage(city) {
    const tagName = city + " city";
    const queryURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imagesApiKey}&tags=${tagName},buildings&tag_mode=all&format=json&nojsoncallback=1`;

    fetch(queryURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            if(data.photos && data.photos.photo.length > 0) {
            const imageServer = data.photos.photo[0].server;
            const imageId = data.photos.photo[0].id;
            const imageSecret = data.photos.photo[0].secret;

            const imageURL = `https://live.staticflickr.com/${imageServer}/${imageId}_${imageSecret}_w.jpg`
            
            const displayImage = $("<img>").attr("src", imageURL)
            $("#image-city").append(displayImage);
            } else {
                const alternateImage = $("<img>").attr({
                    src: "./assets/img/city_sunset.jpg",
                    width: `267px`,
                    height: `400px`
                });
                $("#image-city").append(alternateImage);
            }
        })
        .catch(function(error) {
            console.error("Error fetching data from Flickr server:", error);
            const alternateImage = $("<img>").attr({
                src: "./assets/img/city_sunset.jpg",
                width: `267px`,
                height: `400px`
            });
            $("#image-city").append(alternateImage);
        });
}


$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var city = params.get('city');
    getImage(city);
});
